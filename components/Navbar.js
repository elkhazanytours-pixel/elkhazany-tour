"use client";

import Link from "next/link";
import { useState } from "react";
import QuickBookingModal from "./QuickBookingModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-[var(--font-playfair)] font-bold text-yellow-400 tracking-wide"
          >
            El Khazany Tour
          </Link>

          <div className="hidden md:flex items-center gap-10 text-gray-200 font-[var(--font-inter)]">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/tours" className="hover:text-yellow-400 transition">Tours</Link>
            <Link href="/blog" className="hover:text-yellow-400 transition">Blog</Link>
            <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02] transition"
          >
            Book Now
          </button>
        </div>
      </nav>

      <QuickBookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}