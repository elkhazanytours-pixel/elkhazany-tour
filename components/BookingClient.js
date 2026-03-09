"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TOURS } from "../../lib/tours";

export default function BookingClient() {
  return (
    <Suspense fallback={<div style={{ padding: 24, color: "white" }}>Loading booking…</div>}>
      <Booking />
    </Suspense>
  );
}

function normalizeText(s = "") {
  return String(s)
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function findTour(tourSlug, tourTitle) {
  if (tourSlug) {
    const bySlug = TOURS.find((t) => t.slug === tourSlug);
    if (bySlug) return bySlug;
  }
  if (tourTitle) {
    const n = normalizeText(tourTitle);
    const byTitle = TOURS.find((t) => normalizeText(t.title) === n);
    if (byTitle) return byTitle;
  }
  return null;
}

function findPackage(tour, pkgName) {
  if (!tour?.packages?.length) return null;
  if (!pkgName) return tour.packages[0];
  const n = normalizeText(pkgName);
  return tour.packages.find((p) => normalizeText(p.name) === n) || tour.packages[0];
}

// ✅ Children pricing rules
const CHILD_GROUPS = [
  { label: "Ages 2–6 (Free)", value: "2-6", discount: 1.0 },   // 100% off = free
  { label: "Ages 7–12 (50% off)", value: "7-12", discount: 0.5 }, // 50% off
];

function Booking() {
  const searchParams = useSearchParams();

  const initial = useMemo(() => {
    const tourTitle = decodeURIComponent((searchParams.get("tour") || "").trim());
    const tourSlugFromUrl = decodeURIComponent((searchParams.get("tour_slug") || searchParams.get("slug") || "").trim());
    const pkg = decodeURIComponent((searchParams.get("package") || "").trim());
    const priceFromUrl = Number(searchParams.get("price")) || 0;

    const tour = findTour(tourSlugFromUrl, tourTitle);
    const resolvedSlug = tour?.slug || tourSlugFromUrl || "";
    const selectedPackage = findPackage(tour, pkg);
    const priceFromData = Number(selectedPackage?.price) || 0;
    const resolvedPrice = priceFromUrl || priceFromData;

    return {
      tourTitle: tour?.title || tourTitle,
      tourSlug: resolvedSlug,
      pkg: selectedPackage?.name || pkg,
      price: resolvedPrice,
    };
  }, [searchParams]);

  const [form, setForm] = useState({
    tour_name: "",
    tour_slug: "",
    package_name: "",
    price_per_person: 0,
    guests: 2,
    full_name: "",
    email: "",
    phone: "",
    tour_date: "",
    preferred_contact: "WhatsApp",
    notes: "",
  });

  // ✅ Children state
  const [childGroups, setChildGroups] = useState([
    { ageGroup: "2-6", count: 0 },
  ]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setForm((p) => ({
      ...p,
      tour_name: initial.tourTitle || p.tour_name,
      tour_slug: initial.tourSlug || p.tour_slug,
      package_name: initial.pkg || p.package_name,
      price_per_person: initial.price || p.price_per_person,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial.tourTitle, initial.tourSlug, initial.pkg, initial.price]);

  const price = Number(form.price_per_person || 0);
  const guests = Math.max(1, Number(form.guests || 1));

  // ✅ Calculate children cost
  const childrenCost = childGroups.reduce((sum, g) => {
    const group = CHILD_GROUPS.find((c) => c.value === g.ageGroup);
    const discount = group?.discount ?? 0;
    const childPrice = price * (1 - discount); // e.g. 2-6 → price*0 = free, 7-12 → price*0.5
    return sum + childPrice * Math.max(0, Number(g.count || 0));
  }, 0);

  const totalChildren = childGroups.reduce((s, g) => s + Math.max(0, Number(g.count || 0)), 0);
  const adultTotal = price * guests;
  const total = adultTotal + childrenCost;

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const updateChild = (idx, field, val) => {
    setChildGroups((prev) => prev.map((g, i) => i === idx ? { ...g, [field]: val } : g));
  };

  const addChildGroup = () => {
    if (childGroups.length < 2) {
      // Add the other group not yet added
      const existing = childGroups.map((g) => g.ageGroup);
      const other = CHILD_GROUPS.find((c) => !existing.includes(c.value));
      if (other) setChildGroups((prev) => [...prev, { ageGroup: other.value, count: 0 }]);
    }
  };

  const removeChildGroup = (idx) => {
    setChildGroups((prev) => prev.filter((_, i) => i !== idx));
  };

  const validate = () => {
    const missing = [];
    if (!form.tour_name?.trim()) missing.push("tour");
    if (!form.tour_slug?.trim()) missing.push("tour_slug");
    if (!price) missing.push("price");
    if (!form.full_name?.trim()) missing.push("full_name");
    if (!form.email?.trim()) missing.push("email");
    if (!form.phone?.trim()) missing.push("phone");
    return missing;
  };

  const childrenSummary = childGroups
    .filter((g) => Number(g.count) > 0)
    .map((g) => {
      const label = CHILD_GROUPS.find((c) => c.value === g.ageGroup)?.label || g.ageGroup;
      return `${g.count} child(ren) ${label}`;
    })
    .join(", ");

  const buildWA = (bookingCode = "—") => {
    const waNumber =
      (process.env.NEXT_PUBLIC_WA_NUMBER || "").replace(/[^\d]/g, "") || "201021021296";

    const msg = `
Hello El Khazany Tour 👋

New Booking Request
Booking Code: ${bookingCode}

Tour: ${form.tour_name}
Package: ${form.package_name || "-"}
Price/Person: $${price}
Adults: ${guests}
${totalChildren > 0 ? `Children: ${childrenSummary}` : "Children: None"}
Total: $${total.toFixed(2)}

Name: ${form.full_name}
Email: ${form.email}
Phone: ${form.phone}
Date: ${form.tour_date || "-"}
Notes: ${form.notes || "-"}
`.trim();

    return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  };

  const createBooking = async () => {
    const payload = {
      tour_name: form.tour_name,
      tour_slug: form.tour_slug,
      package_name: form.package_name || null,
      price_per_person: Number(price),
      guests,
      children_details: childGroups.filter((g) => Number(g.count) > 0),
      total_children: totalChildren,
      total_price: Number(total.toFixed(2)),
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      tour_date: form.tour_date || null,
      preferred_contact: form.preferred_contact || "WhatsApp",
      notes: form.notes || "",
      source: "website",
      currency: "USD",
    };

    const res = await fetch("/api/bookings/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.message || data?.error || "Booking API failed");
    return data?.data;
  };

  const sendOfficialEmail = async (bookingRow) => {
    const payload = {
      booking_id: bookingRow?.id || null,
      booking_code: bookingRow?.booking_code || null,
      created_at: bookingRow?.created_at || null,
      tour_name: form.tour_name,
      tour_slug: form.tour_slug,
      package_name: form.package_name,
      price_per_person: Number(price),
      guests,
      children_details: childGroups.filter((g) => Number(g.count) > 0),
      total_children: totalChildren,
      total_price: Number(total.toFixed(2)),
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      tour_date: form.tour_date,
      preferred_contact: form.preferred_contact,
      notes: form.notes,
    };

    const res = await fetch("/api/sendbookingemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.message || data?.error || "Email API failed");
    return true;
  };

  const handleWhatsApp = async (e) => {
    e.preventDefault();
    setStatus("");
    const missing = validate();
    if (missing.length) {
      setStatus(`❌ Missing required fields: ${missing.join(", ")}`);
      return;
    }
    setLoading(true);
    try {
      const bookingRow = await createBooking();
      const code = bookingRow?.booking_code || bookingRow?.id || "—";
      window.open(buildWA(code), "_blank", "noopener,noreferrer");
      setStatus(`✅ Booking saved securely. Code: ${code} — WhatsApp opened.`);
    } catch (err) {
      setStatus(`❌ Error: ${err?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEmail = async () => {
    setStatus("");
    const missing = validate();
    if (missing.length) {
      setStatus(`❌ Missing required fields: ${missing.join(", ")}`);
      return;
    }
    setLoading(true);
    try {
      const bookingRow = await createBooking();
      const code = bookingRow?.booking_code || bookingRow?.id || "—";
      await sendOfficialEmail(bookingRow);
      setStatus(`✅ Booking saved securely. Code: ${code} — Official email sent!`);
    } catch (err) {
      setStatus(`❌ Error: ${err?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pb-24">

        {/* Summary */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="space-y-2 text-white/90">
            <p><strong>Tour:</strong> {form.tour_name || "—"}</p>
            <p><strong>Package:</strong> {form.package_name || "—"}</p>
            <p><strong>Price per adult:</strong> {price ? `$${price}` : "—"}</p>
            <p className="text-xs text-white/40"><strong>Slug:</strong> {form.tour_slug || "—"}</p>
          </div>

          {/* Adults */}
          <div className="mt-5">
            <label className="text-sm text-white/70">Number of Adults</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => update("guests", Number(e.target.value))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-yellow-500 transition"
            />
          </div>

          {/* ✅ Children Section */}
          <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-yellow-300">🧒 Children</p>
                <p className="text-xs text-white/40 mt-0.5">Ages 2–6 free · Ages 7–12 pay 50%</p>
              </div>
              {childGroups.length < 2 && (
                <button
                  type="button"
                  onClick={addChildGroup}
                  className="text-xs px-3 py-1.5 rounded-full border border-yellow-500/40 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                >
                  + Add age group
                </button>
              )}
            </div>

            <div className="space-y-3">
              {childGroups.map((g, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {/* Age group select */}
                  <select
                    value={g.ageGroup}
                    onChange={(e) => updateChild(idx, "ageGroup", e.target.value)}
                    className="flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-yellow-500 transition"
                  >
                    {CHILD_GROUPS.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>

                  {/* Count input */}
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={g.count}
                    onChange={(e) => updateChild(idx, "count", Number(e.target.value))}
                    placeholder="0"
                    className="w-24 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none text-center focus:border-yellow-500 transition"
                  />

                  {/* Remove button (only if more than 1 group) */}
                  {childGroups.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeChildGroup(idx)}
                      className="text-white/30 hover:text-red-400 transition text-lg leading-none px-1"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Children cost preview */}
            {totalChildren > 0 && (
              <div className="mt-4 pt-4 border-t border-white/10 space-y-1 text-sm text-white/60">
                <div className="flex justify-between">
                  <span>Adults ({guests} × ${price})</span>
                  <span>${adultTotal.toFixed(2)}</span>
                </div>
                {childGroups.filter((g) => Number(g.count) > 0).map((g, idx) => {
                  const group = CHILD_GROUPS.find((c) => c.value === g.ageGroup);
                  const childPrice = price * (1 - (group?.discount ?? 0));
                  return (
                    <div key={idx} className="flex justify-between">
                      <span>{g.count} child(ren) {group?.label}</span>
                      <span className="text-yellow-300">
                        {childPrice === 0 ? "Free 🎁" : `$${(childPrice * g.count).toFixed(2)}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Total */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-2xl font-bold text-yellow-400">
              Total: ${total.toFixed(2)}
            </p>
            {totalChildren > 0 && (
              <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                🎉 Children discount applied
              </span>
            )}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleWhatsApp}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-white/70">Full Name *</label>
              <input
                value={form.full_name}
                onChange={(e) => update("full_name", e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-yellow-500 transition"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-yellow-500 transition"
                placeholder="you@email.com"
                required
              />
            </div>

            <div>
              <label className="text-sm text-white/70">WhatsApp / Phone *</label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-yellow-500 transition"
                placeholder="+20 10xxxxxxx"
                required
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Tour Date</label>
              <input
                type="date"
                value={form.tour_date}
                onChange={(e) => update("tour_date", e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-yellow-500 transition"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm text-white/70">Preferred Contact</label>
            <select
              value={form.preferred_contact}
              onChange={(e) => update("preferred_contact", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-yellow-500 transition"
            >
              <option>WhatsApp</option>
              <option>Email</option>
              <option>Phone Call</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="text-sm text-white/70">Notes (optional)</label>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Hotel pickup, language preference, special requests…"
              className="mt-2 w-full min-h-[120px] rounded-2xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-yellow-500 transition"
            />
          </div>

          <div className="mt-7 space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-yellow-500 text-black font-semibold py-4 disabled:opacity-60 hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.01] transition"
            >
              {loading ? "Working…" : "Confirm Booking (WhatsApp)"}
            </button>

            <button
              type="button"
              onClick={handleEmail}
              disabled={loading}
              className="w-full rounded-full border border-yellow-500/60 bg-yellow-500/10 text-yellow-200 font-semibold py-4 disabled:opacity-60 hover:bg-yellow-500 hover:text-black transition"
            >
              {loading ? "Working…" : "Confirm Booking (Official Email)"}
            </button>
          </div>

          {status ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/85">{status}</p>
            </div>
          ) : null}

          <p className="mt-6 text-center text-xs text-white/40">
            By submitting, you agree we may contact you to confirm your booking.
          </p>
        </form>
      </div>
  );
}