"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const TOUR_OPTIONS = [
  { label: "Pyramids & Sphinx Exclusive", value: "pyramids-and-sphinx-exclusive" },
  { label: "Luxor Day Tour", value: "luxor-day-tour" },
  { label: "Aswan Highlights", value: "aswan-highlights" },
  { label: "Nile Cruise Program", value: "nile-cruise-program" },
];

export default function Booking() {
  const searchParams = useSearchParams();

  const initialTourLabel = useMemo(() => {
    const t = searchParams.get("tour") || "";
    return decodeURIComponent(t || "").trim();
  }, [searchParams]);

  const inferTourValue = (label) => {
    const found = TOUR_OPTIONS.find((x) => x.label.toLowerCase() === label.toLowerCase());
    if (found) return found.value;
    // fallback: slugify-ish
    return label
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    tour_slug: "",
    tour_label: "",
    tour_date: "",
    guests: 2,
    preferred_contact: "WhatsApp",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // prefill from URL: ?tour=...
    if (initialTourLabel) {
      setForm((p) => ({
        ...p,
        tour_label: initialTourLabel,
        tour_slug: inferTourValue(initialTourLabel),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTourLabel]);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const requiredMissing = () => {
    const missing = [];
    if (!form.full_name.trim()) missing.push("full_name");
    if (!form.email.trim()) missing.push("email");
    if (!form.phone.trim()) missing.push("phone");
    return missing;
  };

  const saveToSupabaseIfAvailable = async () => {
    // لو supabase مش موجود مش هنكسر الصفحة
    if (!supabase) return { ok: true, skipped: true };

    const payload = {
      tour_slug: form.tour_slug || inferTourValue(form.tour_label || ""),
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      tour_date: form.tour_date || null,
      guests: Number(form.guests || 1),
      preferred_contact: form.preferred_contact || "WhatsApp",
      notes: form.notes || "",
    };

    const { error } = await supabase.from("bookings").insert([payload]);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  };

  // ✅ WhatsApp handler (الخطأ كان هنا لأنه مش موجود عندك)
  const handleSubmitWhatsApp = async (e) => {
    e.preventDefault();
    setStatus("");

    const missing = requiredMissing();
    if (missing.length) {
      setStatus(`Error: Missing required fields: ${missing.join(", ")}`);
      return;
    }

    setLoading(true);
    try {
      // احفظ في Supabase (لو موجود)
      const saved = await saveToSupabaseIfAvailable();
      if (!saved.ok) {
        setStatus(`Error: ${saved.error}`);
        setLoading(false);
        return;
      }

      const msg = `
New Booking Request — El Khazany Tour
Name: ${form.full_name}
Email: ${form.email}
Phone: ${form.phone}
Tour: ${form.tour_label || form.tour_slug || "-"}
Date: ${form.tour_date || "-"}
Guests: ${form.guests || "-"}
Notes: ${form.notes || "-"}
`.trim();

      // رقم الواتساب بتاعك (غيره لو عايز)
      const whatsappNumber = "201021021296";
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank", "noopener,noreferrer");

      setStatus("✅ WhatsApp opened. If it didn't open, please check popup blocker.");
    } catch (err) {
      setStatus(`Error: ${err?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Official Email handler
  const handleSendEmail = async () => {
    setStatus("");

    const missing = requiredMissing();
    if (missing.length) {
      setStatus(`Error: Missing required fields: ${missing.join(", ")}`);
      return;
    }

    setLoading(true);
    try {
      // احفظ في Supabase (لو موجود)
      const saved = await saveToSupabaseIfAvailable();
      if (!saved.ok) {
        setStatus(`Error: ${saved.error}`);
        setLoading(false);
        return;
      }

      const res = await fetch("/api/sendbookingemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          tour: form.tour_label || form.tour_slug,
          tour_date: form.tour_date,
          guests: form.guests,
          preferred_contact: form.preferred_contact,
          notes: form.notes,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus(`Error: ${data?.error || "Email API failed"}`);
        return;
      }

      setStatus("✅ Official Email sent successfully!");
    } catch (err) {
      setStatus(`Error: ${err?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6">Booking</h1>

        <form onSubmit={handleSubmitWhatsApp} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Full Name</label>
              <input
                value={form.full_name}
                onChange={(e) => update("full_name", e.target.value)}
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@email.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Phone / WhatsApp</label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+20 ..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Select Tour</label>
              <select
                value={form.tour_slug}
                onChange={(e) => {
                  const v = e.target.value;
                  const lbl = TOUR_OPTIONS.find((x) => x.value === v)?.label || v;
                  update("tour_slug", v);
                  update("tour_label", lbl);
                }}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
              >
                <option value="">-- Select --</option>
                {TOUR_OPTIONS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              {form.tour_label ? (
                <p className="mt-2 text-xs text-white/60">Selected: {form.tour_label}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm text-white/70">Tour Date</label>
              <input
                type="date"
                value={form.tour_date}
                onChange={(e) => update("tour_date", e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Guests</label>
              <input
                type="number"
                min="1"
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-white/70">Preferred Contact</label>
            <select
              value={form.preferred_contact}
              onChange={(e) => update("preferred_contact", e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            >
              <option>WhatsApp</option>
              <option>Email</option>
              <option>Phone Call</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-sm text-white/70">Notes (optional)</label>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Special requests, hotel pickup, language preference, etc."
              className="mt-2 w-full min-h-[110px] rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
          </div>

          <div className="mt-6 space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-yellow-500 text-black font-semibold py-4 disabled:opacity-60"
            >
              {loading ? "Working..." : "Confirm Booking (WhatsApp)"}
            </button>

            <button
              type="button"
              onClick={handleSendEmail}
              disabled={loading}
              className="w-full rounded-full border border-yellow-500/60 bg-yellow-500/10 text-yellow-200 font-semibold py-4 disabled:opacity-60"
            >
              {loading ? "Working..." : "Confirm Booking (Official Email)"}
            </button>
          </div>

          {status ? (
            <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/80">{status}</p>
              <p className="text-xs text-white/40 mt-1">
                If WhatsApp didn&apos;t open, please check your popup blocker.
              </p>
            </div>
          ) : null}

          <p className="mt-6 text-center text-xs text-white/40">
            By submitting, you agree we may contact you to confirm your booking.
          </p>
        </form>
      </div>
    </div>
  );
}