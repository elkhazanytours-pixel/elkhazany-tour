"use client";

import { useState } from "react";

export default function QuickBookingModal({ open, onClose }) {
  const [tour, setTour] = useState("");
  const [date, setDate] = useState("");

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();

    if (!tour) return;

    const msg = `
Quick Booking Request — El Khazany Tour

Tour: ${tour}
Preferred Date: ${date || "Flexible"}

Please contact me with more details.
`.trim();

    const phone = "201021021296"; // 🔴 حط رقمك هنا بدون +
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center px-6">
      <div className="bg-[#111118] border border-white/10 rounded-3xl w-full max-w-lg p-10 shadow-[0_20px_80px_rgba(0,0,0,0.7)] relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-[var(--font-playfair)] font-bold mb-6">
          Quick <span className="text-yellow-400">Booking</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">Select Tour</label>
            <select
              required
              value={tour}
              onChange={(e) => setTour(e.target.value)}
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-500 outline-none text-white"
            >
              <option value="" disabled>
                Choose a tour
              </option>
              <option>Pyramids & Sphinx Exclusive</option>
              <option>Luxury Nile River Cruise</option>
              <option>Abu Simbel Adventure</option>
              <option>Red Sea Paradise</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Preferred Date (optional)
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-500 outline-none text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] hover:scale-[1.02] transition"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}