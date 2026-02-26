"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { getTourBySlug } from "../../../lib/tours";

export default function TourDetailsPage() {
  const params = useParams();
  const slug = params?.slug ? String(params.slug) : "";
  const tour = getTourBySlug(slug);

  if (!slug) {
    return (
      <main className="min-h-screen bg-[#0B0B0F] text-white">
        <Navbar />
        <div className="pt-40 text-center px-6">
          <h1 className="text-3xl font-bold">Loading...</h1>
          <p className="mt-4 text-gray-400">Reading tour URL…</p>
          <Link
            href="/tours"
            className="inline-block mt-8 px-8 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
          >
            Back to Tours
          </Link>
        </div>
      </main>
    );
  }

  if (!tour) {
    return (
      <main className="min-h-screen bg-[#0B0B0F] text-white">
        <Navbar />
        <div className="pt-40 text-center px-6">
          <h1 className="text-3xl font-bold">Tour not found</h1>
          <p className="mt-4 text-gray-400">
            This tour slug does not exist in lib/tours.js
          </p>

          <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm text-gray-300">
              URL slug: <span className="text-yellow-300">{slug}</span>
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-block mt-8 px-8 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
          >
            Back to Tours
          </Link>
        </div>
      </main>
    );
  }

  const basePrice = tour.packages?.[0]?.price ?? null;

  // ✅ Helper: booking link always includes tour_slug
  const bookingLink = ({ packageName, price }) => {
    const q = new URLSearchParams({
      tour: tour.title,
      tour_slug: tour.slug, // ✅ مهم جدًا
    });

    if (packageName) q.set("package", packageName);
    if (price != null) q.set("price", String(price));

    return `/booking?${q.toString()}`;
  };

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/12 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <div className="relative h-[420px]">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0" />
            </div>

            <div className="p-10 md:p-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold">
                    {tour.title}
                  </h1>

                  <p className="mt-4 text-gray-300 font-[var(--font-inter)] max-w-2xl">
                    {tour.shortDesc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-[var(--font-inter)]">
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      ⌛ {tour.duration}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      📍 {tour.location}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-yellow-500/20 text-yellow-200">
                      👑 {tour.type}
                    </span>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <div className="text-sm text-gray-400 font-[var(--font-inter)]">
                    Starting from
                  </div>
                  <div className="text-4xl font-bold text-yellow-400">
                    {basePrice != null ? `$${basePrice}` : "—"}
                  </div>

                  {/* ✅ include tour_slug */}
                  <Link
                    href={bookingLink({})}
                    className="inline-block mt-5 px-10 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02] transition"
                  >
                    Book Now
                  </Link>

                  <div className="mt-3">
                    <Link
                      href="/tours"
                      className="text-sm text-yellow-300/90 hover:text-yellow-200 underline underline-offset-4"
                    >
                      Back to all tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Packages */}
          <section className="mt-12">
            <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold">
              Choose your{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Package
              </span>
            </h2>
            <p className="mt-3 text-gray-300 font-[var(--font-inter)] max-w-2xl">
              Transparent pricing, premium inclusions, and a luxury experience tailored to your style.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {(tour.packages || []).map((p, idx) => {
                const isRec = Boolean(p.recommended);

                const whatsappUrl = `https://wa.me/201021021296?text=${encodeURIComponent(
                  `Hello El Khazany Tour 👋\n\nI want to book:\n• Tour: ${tour.title}\n• Package: ${p.name}\n• Price: $${p.price}\n\nPlease confirm availability and next steps.`
                )}`;

                return (
                  <div
                    key={`${p.name}-${idx}`}
                    className={`relative rounded-3xl border ${
                      isRec
                        ? "border-yellow-500/40 bg-yellow-500/10"
                        : "border-white/12 bg-white/5"
                    } backdrop-blur-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]`}
                  >
                    {isRec ? (
                      <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-yellow-500 text-black text-xs font-bold">
                        Recommended
                      </div>
                    ) : null}

                    <div className="text-sm text-gray-300 font-[var(--font-inter)]">
                      Package
                    </div>
                    <div className="mt-1 text-2xl font-[var(--font-playfair)] font-bold">
                      {p.name}
                    </div>

                    <div className="mt-5 flex items-end gap-2">
                      <div className="text-4xl font-bold text-yellow-400">
                        ${p.price}
                      </div>
                      <div className="text-sm text-gray-400 mb-1">per booking</div>
                    </div>

                    <ul className="mt-6 space-y-3 text-gray-200 font-[var(--font-inter)] text-sm">
                      {(p.features || []).map((f, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-yellow-400">✓</span>
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3">
                      {/* ✅ include tour_slug + package + price */}
                      <Link
                        href={bookingLink({ packageName: p.name, price: p.price })}
                        className={`text-center px-8 py-3 rounded-full font-semibold transition ${
                          isRec
                            ? "bg-yellow-500 text-black hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02]"
                            : "border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black"
                        }`}
                      >
                        Book {p.name}
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-8 py-3 rounded-full border border-white/12 bg-white/5 text-white/90 hover:bg-white/10 transition"
                      >
                        WhatsApp Quick Quote
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {!tour.packages || tour.packages.length === 0 ? (
              <div className="mt-10 text-gray-400 font-[var(--font-inter)]">
                No packages available for this tour yet.
              </div>
            ) : null}
          </section>
        </div>
      </section>
    </main>
  );
}