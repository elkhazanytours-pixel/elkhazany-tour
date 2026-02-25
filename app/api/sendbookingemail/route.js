// app/api/sendbookingemail/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingInternalEmail, bookingCustomerEmail } from "@/lib/emailTemplates";

export const runtime = "nodejs"; // مهم للإيميل

const brandName = "El Khazany Tours";
const waNumber = "+201021021296";

const requiredEnv = ["RESEND_API_KEY", "RESEND_FROM_EMAIL", "BOOKINGS_TO_EMAIL"];

function missingEnvs() {
  return requiredEnv.filter((k) => !process.env[k] || String(process.env[k]).trim() === "");
}

function jsonError(message, status = 400, extra = {}) {
  return NextResponse.json({ ok: false, message, ...extra }, { status });
}

function normalizePayload(body) {
  // خليه مرن: سواء جالك tour أو tour_slug أو tourName
  return {
    booking_id: body.booking_id || body.id || null,
    created_at: body.created_at || new Date().toISOString(),
    tour_slug: body.tour_slug || body.tour || body.tourSlug || "",
    tour_name: body.tour_name || body.tourName || "",
    full_name: body.full_name || body.fullName || "",
    email: body.email || "",
    phone: body.phone || body.whatsapp || "",
    tour_date: body.tour_date || body.tourDate || body.date || "",
    guests: body.guests ?? body.people ?? "",
    preferred_contact: body.preferred_contact || body.preferredContact || "",
    notes: body.notes || "",
  };
}

export async function POST(req) {
  const envMiss = missingEnvs();
  if (envMiss.length) {
    return jsonError("Server is missing required environment variables.", 500, {
      missing: envMiss,
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.");
  }

  const data = normalizePayload(body);

  // Validation (الأساسيات)
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
    // 1) Internal email to you / team
    const internal = bookingInternalEmail({ brandName, waNumber, data });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL, // مثال: "El Khazany Tours <onboarding@resend.dev>"
      to: process.env.BOOKINGS_TO_EMAIL,   // مثال: elkhazanytours@gmail.com
      subject: internal.subject,
      html: internal.html,
      reply_to: data.email, // لما ترد، يروح للعميل مباشرة
    });

    // 2) Auto reply to customer
    const customer = bookingCustomerEmail({ brandName, waNumber, data });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: data.email,
      subject: customer.subject,
      html: customer.html,
      reply_to: process.env.BOOKINGS_TO_EMAIL, // العميل لو رد يروح لكم
    });

    return NextResponse.json({ ok: true, message: "Emails sent successfully." });
  } catch (err) {
    // يرجع رسالة مفهومة بدل [object Object]
    const msg =
      err?.message ||
      err?.toString?.() ||
      "Failed to send email. Check server logs.";

    return jsonError("Email sending failed.", 500, { details: msg });
  }
}