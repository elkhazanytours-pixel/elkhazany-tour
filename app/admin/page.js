"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";

function badgeClass(status) {
  if (status === "Confirmed") return "bg-emerald-500/15 text-emerald-200 border-emerald-500/25";
  if (status === "Cancelled") return "bg-red-500/15 text-red-200 border-red-500/25";
  return "bg-yellow-500/15 text-yellow-200 border-yellow-500/25";
}

function money(n) {
  const v = Number(n || 0);
  if (Number.isNaN(v)) return "$0";
  return `$${v.toFixed(0)}`;
}

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [q, setQ] = useState("");
  const [msg, setMsg] = useState("");
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("admin_key") || "";
    if (saved) {
      setKey(saved);
      setReady(true);
    }
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((r) =>
      [
        r.booking_code,
        r.tour_name,
        r.tour_slug,
        r.full_name,
        r.email,
        r.phone,
        r.status,
      ]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(s))
    );
  }, [rows, q]);

  const loadMetrics = async () => {
    try {
      const res = await fetch("/api/bookings/metrics", {
        headers: { "x-admin-key": key },
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) setMetrics(data.data || null);
    } catch {
      // ignore
    }
  };

  const load = async () => {
    setMsg("");
    setLoading(true);
    try {
      const res = await fetch("/api/bookings/list", {
        headers: { "x-admin-key": key },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Failed");
      setRows(data.data || []);
      await loadMetrics();
    } catch (e) {
      setMsg(`❌ ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    setMsg("");
    try {
      const res = await fetch("/api/bookings/status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-key": key },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Failed");

      setRows((prev) => prev.map((r) => (r.id === id ? data.data : r)));
      setMsg(status === "Confirmed" ? "✅ Confirmed + Auto Email sent (if configured)." : "✅ Status updated.");

      // refresh analytics
      await loadMetrics();
    } catch (e) {
      setMsg(`❌ ${e.message}`);
    }
  };

  const submitKey = () => {
    const cleaned = key.trim();
    if (!cleaned) return;
    localStorage.setItem("admin_key", cleaned);
    setKey(cleaned);
    setReady(true);
  };

  useEffect(() => {
    if (ready) load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-[var(--font-playfair)] font-bold">
              Admin <span className="text-yellow-400">Bookings</span>
            </h1>
            <p className="text-white/60 mt-2">Secure dashboard • Change status • Search bookings</p>
          </div>

          {!ready ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full sm:w-[420px]">
              <label className="text-sm text-white/70">Admin Key</label>
              <div className="flex gap-2 mt-2">
                <input
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="flex-1 rounded-xl border border-white/10 bg-black/30 px-3 py-3 outline-none"
                  placeholder="Paste ADMIN_DASH_KEY"
                  suppressHydrationWarning
                />
                <button
                  onClick={submitKey}
                  className="rounded-xl bg-yellow-500 text-black font-semibold px-4"
                >
                  Enter
                </button>
              </div>
              <p className="text-xs text-white/45 mt-2">This key is stored locally in your browser only.</p>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={load}
                disabled={loading}
                className="rounded-full bg-yellow-500 text-black font-semibold px-5 py-3 disabled:opacity-60"
              >
                {loading ? "Loading…" : "Refresh"}
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("admin_key");
                  setReady(false);
                  setRows([]);
                  setMetrics(null);
                  setMsg("");
                  setKey("");
                }}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/85"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {ready ? (
          <>
            {/* Analytics */}
            {metrics ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-white/55 text-xs">Total Bookings</div>
                  <div className="text-2xl font-bold mt-2">{metrics.total_bookings}</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-white/55 text-xs">Total Revenue</div>
                  <div className="text-2xl font-bold mt-2">{money(metrics.total_revenue)}</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-white/55 text-xs">Confirmed</div>
                  <div className="text-2xl font-bold mt-2">{metrics.counts?.Confirmed ?? 0}</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="text-white/55 text-xs">Conversion</div>
                  <div className="text-2xl font-bold mt-2">
                    {Number(metrics.conversion_pct || 0).toFixed(1)}%
                  </div>
                </div>
              </div>
            ) : null}

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
                placeholder="Search: booking code, name, phone, tour, status…"
                suppressHydrationWarning
              />
            </div>

            <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl">
              <table className="w-full text-sm">
                <thead className="text-white/70">
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4">Code</th>
                    <th className="text-left p-4">Tour</th>
                    <th className="text-left p-4">Customer</th>
                    <th className="text-left p-4">Guests</th>
                    <th className="text-left p-4">Total</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((r) => (
                    <tr key={r.id} className="border-b border-white/5">
                      <td className="p-4 font-semibold text-yellow-200">{r.booking_code || r.id}</td>

                      <td className="p-4">
                        <div className="font-semibold">{r.tour_name}</div>
                        <div className="text-xs text-white/45">{r.tour_slug}</div>
                      </td>

                      <td className="p-4">
                        <div className="font-semibold">{r.full_name}</div>
                        <div className="text-xs text-white/45">{r.email}</div>
                        <div className="text-xs text-white/45">{r.phone}</div>
                      </td>

                      <td className="p-4">{r.guests ?? "—"}</td>

                      <td className="p-4">
                        {r.total_price != null ? `$${Number(r.total_price)}` : "—"}
                      </td>

                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full border ${badgeClass(
                            r.status
                          )}`}
                        >
                          {r.status || "Pending"}
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => updateStatus(r.id, "Pending")}
                            className="px-3 py-2 rounded-xl border border-white/10 bg-black/30"
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => updateStatus(r.id, "Confirmed")}
                            className="px-3 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-200"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => updateStatus(r.id, "Cancelled")}
                            className="px-3 py-2 rounded-xl bg-red-500/15 border border-red-500/25 text-red-200"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {!filtered.length ? (
                    <tr>
                      <td className="p-6 text-white/55" colSpan={7}>
                        No bookings found.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>

            {msg ? (
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/85">
                {msg}
              </div>
            ) : null}
          </>
        ) : (
          <div className="text-white/60">Enter your Admin Key to view bookings.</div>
        )}
      </div>
    </main>
  );
}