"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const whatsappNumber = "201021021296"; // اكتب رقمك هنا بدون +

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
              src="/contact.jpg"
              alt="Contact El Khazany Tour"
              className="w-full max-h-[80vh] object-contain rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
            />
            <div className="mt-4 text-center text-gray-200">
              <span className="text-yellow-300 font-semibold">
                Contact • WhatsApp • Fast Reply
              </span>
              <span className="text-gray-400"> — Press ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <section className="pt-32 pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

            <h1 className="text-5xl font-bold mb-3">
              Contact{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                El Khazany Tour
              </span>
            </h1>

            <p className="text-gray-300 max-w-3xl leading-relaxed">
              Tell us what you want — day tours, Luxor experiences, Cairo trips,
              or a luxury Nile cruise — and we’ll get back to you quickly.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] hover:scale-105 transition"
              >
                WhatsApp Now
              </a>

              <Link
                href="/booking"
                className="px-7 py-3 rounded-full bg-white/10 border border-yellow-500/30 backdrop-blur-md text-yellow-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] transition"
              >
                Book a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">

          {/* FORM */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:shadow-[0_0_50px_rgba(255,200,0,0.12)] transition">
            <h2 className="text-3xl font-bold mb-2">
              Send us a{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Message
              </span>
            </h2>
            <p className="text-gray-300 mb-8">
              We typically reply quickly. Prefer WhatsApp? Use the button above.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-300">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-500 outline-none text-white placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-500 outline-none text-white placeholder:text-gray-500"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Phone / WhatsApp</label>
                <input
                  type="text"
                  className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-500 outline-none text-white placeholder:text-gray-500"
                  placeholder="+20 ..."
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-yellow-500 outline-none text-white placeholder:text-gray-500"
                  placeholder="Tell us what you need: dates, destination, number of guests, budget..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] hover:scale-[1.02] transition"
              >
                Send Message
              </button>

              {sent && (
                <div className="mt-6 bg-green-500/10 border border-green-400/30 rounded-2xl p-4 text-center shadow-[0_0_20px_rgba(0,255,150,0.15)]">
                  <p className="text-green-400 font-semibold">
                    ✅ Message sent! We will contact you shortly.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* INFO + IMAGE */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                Contact Details
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-white font-semibold">Location:</span>{" "}
                  Luxor, Egypt
                </p>
                <p>
                  <span className="text-white font-semibold">Email:</span>{" "}
                  elkhazanytours@gmail.com
                </p>
                <p>
                  <span className="text-white font-semibold">WhatsApp:</span>{" "}
                  +{whatsappNumber}
                </p>
              </div>

              <div className="mt-6 flex gap-3 flex-wrap">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-7 py-3 rounded-full bg-white/10 border border-yellow-500/30 backdrop-blur-md text-yellow-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] transition"
                >
                  Open WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setPopupOpen(true)}
                  className="inline-block px-7 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white hover:border-yellow-500/30 hover:shadow-[0_0_25px_rgba(255,200,0,0.2)] transition"
                >
                  View Photo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

              <button
                type="button"
                onClick={() => setPopupOpen(true)}
                className="w-full text-left focus:outline-none group"
                aria-label="Open Contact image popup"
              >
                <img
                  src="/contact.jpg"
                  alt="Contact Egypt"
                  className="relative rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] object-cover w-full h-[360px] transition group-hover:scale-[1.01] group-hover:shadow-[0_0_40px_rgba(255,200,0,0.25)]"
                />
              </button>

              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
                <p className="text-yellow-300 font-semibold">
                  Tap image to view fullscreen
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}