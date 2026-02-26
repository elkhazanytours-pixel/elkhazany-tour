// app/api/bookings/status/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { bookingConfirmedEmail, bookingInternalEmail } from "@/lib/emailTemplates";

export const runtime = "nodejs";

function jsonError(message, status = 400, extra = {}) {
  return NextResponse.json({ ok: false, message, ...extra }, { status });
}

function getServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) return null;
  return createClient(url, service, { auth: { persistSession: false } });
}

function requireAdminKey(req) {
  const expected = (process.env.ADMIN_DASH_KEY || "").trim();
  const got = (req.headers.get("x-admin-key") || "").trim();
  if (!expected) return { ok: false, message: "Missing ADMIN_DASH_KEY on server." };
  if (!got || got !== expected) return { ok: false, message: "Unauthorized (bad admin key)." };
  return { ok: true };
}

export async function PATCH(req) {
  const guard = requireAdminKey(req);
  if (!guard.ok) return jsonError(guard.message, 401);

  const supabase = getServerSupabase();
  if (!supabase) return jsonError("Server missing Supabase env (URL or SERVICE_ROLE).", 500);

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.");
  }

  const { id, status } = body || {};
  if (!id) return jsonError("Missing id.");
  if (!status) return jsonError("Missing status.");

  // 1) Load current row
  const { data: before, error: e1 } = await supabase.from("bookings").select("*").eq("id", id).single();
  if (e1) return jsonError("Failed to load booking.", 500, { details: e1.message });

  // 2) Update
  const { data: updated, error: e2 } = await supabase
    .from("bookings")
    .update({ status })
    .eq("id", id)
    .select("*")
    .single();

  if (e2) return jsonError("Failed to update status.", 500, { details: e2.message });

  // 3) Auto Email when becomes Confirmed (only once)
  const becameConfirmed = before?.status !== "Confirmed" && status === "Confirmed";
  if (becameConfirmed) {
    const resendKey = (process.env.RESEND_API_KEY || "").trim();
    const fromEmail = (process.env.RESEND_FROM_EMAIL || "").trim();
    const teamEmail = (process.env.BOOKINGS_TO_EMAIL || "").trim();

    if (resendKey && fromEmail && teamEmail) {
      try {
        const brandName = process.env.BRAND_NAME || "El Khazany Tour";
        const waNumber = process.env.WA_NUMBER || "201021021296";
        const resend = new Resend(resendKey);

        // Customer Confirmed Email
        const customer = bookingConfirmedEmail({ brandName, waNumber, data: updated });
        if (updated?.email) {
          await resend.emails.send({
            from: fromEmail,
            to: updated.email,
            subject: customer.subject,
            html: customer.html,
            reply_to: teamEmail,
          });
        }

        // Internal ping
        const internal = bookingInternalEmail({ brandName, waNumber, data: updated });
        await resend.emails.send({
          from: fromEmail,
          to: teamEmail,
          subject: `CONFIRMED ✅ • ${internal.subject}`,
          html: internal.html,
          reply_to: updated?.email || teamEmail,
        });
      } catch (err) {
        console.error("Auto-confirm email failed:", err);
      }
    }
  }

  return NextResponse.json({ ok: true, data: updated });
}