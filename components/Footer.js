"use client";

import Link from "next/link";
import { Facebook, Instagram, Music2, Mail, Phone, MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("2026"); // ثابت لتجنب mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setYear(String(new Date().getFullYear()));
  }, []);

  function handleSubscribe(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const subject = encodeURIComponent("Newsletter Subscription - El Khazany Tour");
    const body = encodeURIComponent(
      `Hello El Khazany Tour,\n\nPlease add this email to the newsletter:\n${trimmed}\n\nThanks!`
    );

    window.location.href = `mailto:elkhazanytours@gmail.com?subject=${subject}&body=${body}`;
    setEmail("");
  }

  // ✅ WhatsApp direct link
  const WHATSAPP_LINK = "https://wa.me/message/Q4WO7J4FMLEDK1?src=qr";

  // ✅ Google Reviews link (منك)
  const GOOGLE_REVIEWS_LINK = "https://g.page/r/CV67RfEPBwA4EAE/review";

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* ✅ 5 Columns */}
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-yellow-400">
              El Khazany Tour
            </h3>

            <p className="mt-4 text-gray-300 font-[var(--font-inter)] leading-relaxed">
              Luxury private tours in Egypt — crafted with elegance, comfort, and VIP service.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581448190774"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-yellow-500/35 bg-white/5 backdrop-blur-md flex items-center justify-center text-yellow-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/elkhazanytours/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-yellow-500/35 bg-white/5 backdrop-blur-md flex items-center justify-center text-yellow-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.tiktok.com/@elkhazanytours"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-yellow-500/35 bg-white/5 backdrop-blur-md flex items-center justify-center text-yellow-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] transition"
                aria-label="TikTok"
              >
                <Music2 size={18} />
              </a>
            </div>

            {/* ✅ Reviews CTA */}
            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-yellow-300/90 hover:text-yellow-200 transition underline underline-offset-4"
              aria-label="Leave a Google Review"
            >
              <Star size={16} className="text-yellow-400" />
              Leave a Google Review
            </a>

            {/* Trust line */}
            <p className="mt-3 text-xs text-white/55">
              ⭐ Trusted VIP experiences — fast WhatsApp support & premium itineraries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-[var(--font-playfair)] font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 font-[var(--font-inter)]">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/tours" className="hover:text-yellow-400 transition">Tours</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
              <li><Link href="/booking" className="hover:text-yellow-400 transition">Booking</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Popular Guides (SEO) */}
          <div>
            <h4 className="text-xl font-[var(--font-playfair)] font-bold mb-5">Popular Guides</h4>
            <ul className="space-y-3 text-gray-300 font-[var(--font-inter)]">
              <li>
                <Link href="/blog/luxor-travel-guide-2026" className="hover:text-yellow-400 transition">
                  Luxor Travel Guide (2026)
                </Link>
              </li>
              <li>
                <Link href="/blog/best-time-to-visit-luxor" className="hover:text-yellow-400 transition">
                  Best Time to Visit Luxor
                </Link>
              </li>
              <li>
                <Link href="/blog/top-10-things-to-do-in-luxor" className="hover:text-yellow-400 transition">
                  Top 10 Things to Do in Luxor
                </Link>
              </li>
              <li>
                <Link href="/blog/is-luxor-safe" className="hover:text-yellow-400 transition">
                  Is Luxor Safe? (2026)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-[var(--font-playfair)] font-bold mb-5">Contact</h4>

            <div className="space-y-4 text-gray-300 font-[var(--font-inter)]">
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-yellow-400" /> Luxor, Egypt
              </p>

              <a
                href="mailto:elkhazanytours@gmail.com"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <Mail size={16} className="text-yellow-400" /> elkhazanytours@gmail.com
              </a>

              {/* ✅ WhatsApp CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_20px_rgba(255,200,0,0.45)] transition"
                aria-label="Chat on WhatsApp"
              >
                <Phone size={16} />
                Chat on WhatsApp →
              </a>

              <p className="text-xs text-white/55">
                Reply in ~5 minutes (VIP support).
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-[var(--font-playfair)] font-bold mb-5">Stay Updated</h4>
            <p className="text-gray-300 font-[var(--font-inter)] mb-5">
              Get exclusive offers, luxury itineraries, and travel inspiration.
            </p>

            {mounted ? (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 p-3 rounded-2xl bg-white/5 border border-white/10 focus:border-yellow-500 outline-none text-white placeholder:text-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-yellow-500 text-black font-semibold hover:shadow-[0_0_20px_rgba(255,200,0,0.45)] transition"
                >
                  Join
                </button>
              </form>
            ) : (
              <div className="flex gap-3">
                <div className="flex-1 h-[48px] rounded-2xl bg-white/5 border border-white/10" />
                <div className="w-[76px] h-[48px] rounded-2xl bg-yellow-500/30" />
              </div>
            )}

            <p className="mt-3 text-xs text-white/55">
              No spam. Only premium Luxor + Egypt travel tips.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {year} El Khazany Tour. All rights reserved.</p>

          <div className="flex gap-6 text-gray-400 text-sm">
            {/* لو عندك صفحات فعلية هنربطها لاحقًا */}
            <a href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-400 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}