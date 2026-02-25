"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function About() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setPopupOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [popupOpen]);

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      {/* POPUP */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="absolute -top-12 right-0 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-yellow-500 hover:text-black transition"
            >
              Close ✕
            </button>

            <img
              src="/about.jpg"
              alt="About El Khazany Tour"
              className="w-full max-h-[80vh] object-contain rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
            />

            <div className="mt-4 text-center text-gray-200">
              <span className="text-yellow-300 font-semibold">
                Local Experts • VIP Service
              </span>
              <span className="text-gray-400"> — Press ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="pt-32 pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

            <h1 className="text-5xl font-bold mb-3">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                El Khazany Tour
              </span>
            </h1>

            <p className="text-gray-300 max-w-3xl leading-relaxed">
              We craft premium Egypt experiences with private guides, elegant
              planning, and unforgettable moments — from the Pyramids to Luxor
              and the Nile.
            </p>
          </div>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <h2 className="text-3xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Promise
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              We believe a great journey is more than a tour — it’s a carefully
              designed experience. Our team focuses on comfort, timing,
              hospitality, and the small details that make everything feel VIP.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Whether you want a day trip in Luxor, a full Egypt itinerary, or a
              luxury Nile cruise, we tailor every plan around your style.
            </p>

            <div className="mt-7 flex gap-4">
              <Link
                href="/tours"
                className="px-7 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] hover:scale-105 transition"
              >
                View Tours
              </Link>

              <Link
                href="/booking"
                className="px-7 py-3 rounded-full bg-white/10 border border-yellow-500/30 backdrop-blur-md text-yellow-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] transition"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* ABOUT IMAGE (CLICK -> POPUP) */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

            <button
              type="button"
              onClick={() => setPopupOpen(true)}
              className="w-full text-left focus:outline-none group"
              aria-label="Open About image popup"
            >
              <img
                src="/about.jpg"
                alt="Egypt about"
                className="relative rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] object-cover w-full h-[420px] transition group-hover:scale-[1.01] group-hover:shadow-[0_0_40px_rgba(255,200,0,0.25)]"
              />
            </button>

            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
              <p className="text-yellow-300 font-semibold">
                Tap image to view fullscreen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise",
                desc: "Professional local guides with deep knowledge and VIP service standards.",
              },
              {
                title: "Premium Comfort",
                desc: "Carefully planned itineraries, smooth timing, and comfortable travel.",
              },
              {
                title: "Tailored Experiences",
                desc: "Custom plans for couples, families, and VIP travelers — your style first.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,200,0,0.25)] transition"
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

            <h2 className="text-3xl font-bold mb-3">
              Let’s plan your{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                perfect Egypt trip
              </span>
              .
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl">
              Contact us and we’ll suggest the best luxury plan based on your
              dates, interests, and travel style.
            </p>

            <Link
              href="/contact"
              className="inline-block px-7 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}