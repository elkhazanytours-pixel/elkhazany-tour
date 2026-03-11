"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import QuickBookingModal from "./QuickBookingModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/luxor-private-tours", label: "Private Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // منع السكرول لما القائمة مفتوحة
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-[var(--font-playfair)] font-bold text-yellow-400 tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            El Khazany Tour
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-gray-200 font-[var(--font-inter)]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-yellow-400 transition">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Book Now */}
          <button
            onClick={() => setOpen(true)}
            className="hidden md:block px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02] transition"
          >
            Book Now
          </button>

          {/* Mobile: Book Now + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold hover:scale-[1.02] transition"
            >
              Book Now
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] group"
              aria-label="Toggle menu"
            >
              <span className={`block h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`} />
              <span className={`block h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-5"}`} />
              <span className={`block h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6"}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-[300px] bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
          <span className="text-yellow-400 font-[var(--font-playfair)] font-bold text-xl">
            El Khazany Tour
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-400 hover:text-white transition text-2xl leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col px-6 py-8 gap-2 flex-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-yellow-400 text-lg font-[var(--font-inter)] py-3 border-b border-white/5 transition"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="px-6 py-6 border-t border-white/10">
          <button
            onClick={() => { setMenuOpen(false); setOpen(true); }}
            className="w-full py-3 rounded-full bg-yellow-500 text-black font-semibold text-base hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] transition"
          >
            Book Now
          </button>
          <p className="text-center text-gray-500 text-xs mt-4">
            © 2026 El Khazany Tour
          </p>
        </div>
      </div>

      <QuickBookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}