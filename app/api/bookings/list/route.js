import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function jsonError(message, status = 400, extra = {}) {
  return NextResponse.json({ ok: false, message, ...extra }, { status });
}

function getAdminSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

function requireAdmin(req) {
  const got = (req.headers.get("x-admin-key") || "").trim();
  const expected = (process.env.ADMIN_DASH_KEY || "").trim();
  return Boolean(expected) && got === expected;
}

export async function GET(req) {
  if (!requireAdmin(req)) return jsonError("Unauthorized.", 401);

  const supabase = getAdminSupabase();
  if (!supabase) return jsonError("Server missing Supabase admin env.", 500);

  // اخترنا أعمدة أهم (أسرع) — ولو تحب خليه "*" عادي
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id,created_at,booking_code,tour_name,tour_slug,package_name,price_per_person,guests,total_price,status,full_name,email,phone,tour_date,notes,preferred_contact"
    )
    .order("created_at", { ascending: false })
    .limit(300);

  if (error) return jsonError("Failed to load bookings.", 500, { details: error.message });
  return NextResponse.json({ ok: true, data });
}