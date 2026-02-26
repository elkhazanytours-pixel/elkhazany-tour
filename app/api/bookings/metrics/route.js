// app/api/bookings/metrics/route.js
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

  const { data, error } = await supabase.from("bookings").select("status,total_price");
  if (error) return jsonError("Failed to load bookings.", 500, { details: error.message });

  const total = data?.length || 0;

  const counts = { Pending: 0, Confirmed: 0, Cancelled: 0, Other: 0 };
  let revenue = 0;

  for (const r of data || []) {
    const st = r.status || "Pending";
    if (counts[st] != null) counts[st] += 1;
    else counts.Other += 1;

    const t = Number(r.total_price ?? 0);
    if (!Number.isNaN(t)) revenue += t;
  }

  const conversion = total ? (counts.Confirmed / total) * 100 : 0;

  return NextResponse.json({
    ok: true,
    data: {
      total_bookings: total,
      total_revenue: revenue,
      counts,
      conversion_pct: conversion,
    },
  });
}