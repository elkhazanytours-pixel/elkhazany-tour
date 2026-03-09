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

export async function POST(req) {
  const supabase = getAdminSupabase();
  if (!supabase) {
    return jsonError("Server missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_URL.", 500);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.");
  }

  // Basic validation
  const missing = [];
  if (!body.tour_name) missing.push("tour_name");
  if (!body.tour_slug) missing.push("tour_slug");
  if (!body.full_name) missing.push("full_name");
  if (!body.email) missing.push("email");
  if (!body.phone) missing.push("phone");
  if (!body.price_per_person) missing.push("price_per_person");

  if (missing.length) return jsonError("Missing required fields.", 400, { missing });

  const guests = Math.max(1, Number(body.guests || 1));
  const price = Number(body.price_per_person || 0);
  const total = Number(body.total_price ?? price * guests);

  // ✅ Children data
  const childrenDetails = Array.isArray(body.children_details) ? body.children_details : [];
  const totalChildren = Number(body.total_children || 0);

  const payload = {
    tour_name: String(body.tour_name),
    tour_slug: String(body.tour_slug),
    package_name: body.package_name ? String(body.package_name) : null,

    price_per_person: price,
    total_price: total,
    status: body.status ? String(body.status) : "Pending",
    currency: body.currency ? String(body.currency) : "USD",
    source: body.source ? String(body.source) : "website",

    full_name: String(body.full_name).trim(),
    email: String(body.email).trim(),
    phone: String(body.phone).trim(),
    guests,
    tour_date: body.tour_date || null,
    preferred_contact: body.preferred_contact || "WhatsApp",
    notes: body.notes || "",

    // ✅ Children fields
    total_children: totalChildren,
    children_details: childrenDetails.length > 0 ? childrenDetails : null,
  };

  const { data, error } = await supabase
    .from("bookings")
    .insert([payload])
    .select("*")
    .single();

  if (error) return jsonError("Supabase insert failed.", 500, { details: error.message });

  return NextResponse.json({ ok: true, data });
}