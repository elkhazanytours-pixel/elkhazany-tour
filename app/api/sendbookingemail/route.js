// app/api/sendbookingemail/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  bookingInternalEmail,
  bookingCustomerEmail,
  bookingStatusInternalEmail,
  bookingStatusCustomerEmail,
} from "@/lib/emailTemplates";

export const runtime = "nodejs";

const requiredEnv = ["RESEND_API_KEY", "RESEND_FROM_EMAIL", "BOOKINGS_TO_EMAIL"];

function missingEnvs() {
  return requiredEnv.filter((k) => !process.env[k] || String(process.env[k]).trim() === "");
}

function jsonError(message, status = 400, extra = {}) {
  return NextResponse.json({ ok: false, message, ...extra }, { status });
}

function normalizePayload(body) {
  return {
    // codes
    booking_id: body.booking_id || body.id || null,
    booking_code: body.booking_code || body.bookingCode || body.code || null,

    created_at: body.created_at || new Date().toISOString(),

    // tour
    tour_slug: body.tour_slug || body.tour || body.tourSlug || "",
    tour_name: body.tour_name || body.tourName || "",

    // package/pricing
    package_name: body.package_name || body.package || body.packageName || "",
    price_per_person: body.price_per_person ?? body.pricePerPerson ?? body.price ?? "",
    total_price: body.total_price ?? body.totalPrice ?? body.total ?? "",

    currency: body.currency || "USD",
    status: body.status || body.new_status || body.newStatus || "Pending",

    // customer
    full_name: body.full_name || body.fullName || "",
    email: body.email || "",
    phone: body.phone || body.whatsapp || "",

    // booking
    tour_date: body.tour_date || body.tourDate || body.date || "",
    guests: body.guests ?? body.people ?? "",
    preferred_contact: body.preferred_contact || body.preferredContact || "",
    notes: body.notes || "",
  };
}

export async function POST(req) {
  const envMiss = missingEnvs();
  if (envMiss.length) {
    return jsonError("Server is missing required environment variables.", 500, { missing: envMiss });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.");
  }

  // kind:
  // - "booking" (default): send booking request emails
  // - "status": send status update emails (confirmed/cancelled/pending)
  const kind = (body?.kind || body?.type || "booking").toString().toLowerCase();

  const brandName = process.env.BRAND_NAME || "El Khazany Tour";
  const waNumber = process.env.WA_NUMBER || "+201021021296";

  const data = normalizePayload(body);

  // basic validation
  const missingFields = [];
  if (!data.full_name) missingFields.push("full_name");
  if (!data.email) missingFields.push("email");
  if (!data.phone) missingFields.push("phone");
  if (!data.tour_slug && !data.tour_name) missingFields.push("tour");

  if (missingFields.length) {
    return jsonError("Missing required fields.", 400, { missing: missingFields });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    if (kind === "status") {
      const status = String(body?.status || body?.new_status || data.status || "Pending");

      // 1) Internal notify
      const internal = bookingStatusInternalEmail({ brandName, waNumber, data, status });

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.BOOKINGS_TO_EMAIL,
        subject: internal.subject,
        html: internal.html,
        reply_to: data.email,
      });

      // 2) Customer notify
      const customer = bookingStatusCustomerEmail({ brandName, waNumber, data, status });

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: data.email,
        subject: customer.subject,
        html: customer.html,
        reply_to: process.env.BOOKINGS_TO_EMAIL,
      });

      return NextResponse.json({ ok: true, message: "Status emails sent." });
    }

    // default = booking request emails
    const internal = bookingInternalEmail({ brandName, waNumber, data });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.BOOKINGS_TO_EMAIL,
      subject: internal.subject,
      html: internal.html,
      reply_to: data.email,
    });

    const customer = bookingCustomerEmail({ brandName, waNumber, data });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: data.email,
      subject: customer.subject,
      html: customer.html,
      reply_to: process.env.BOOKINGS_TO_EMAIL,
    });

    return NextResponse.json({ ok: true, message: "Booking emails sent successfully." });
  } catch (err) {
    const msg = err?.message || err?.toString?.() || "Failed to send email. Check server logs.";
    return jsonError("Email sending failed.", 500, { details: msg });
  }
}