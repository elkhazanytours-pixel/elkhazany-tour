"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Reveal from "../../components/Reveal";
import { TOURS, getTourPriceFrom, formatUSD } from "../../lib/tours";

export default function ToursPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [duration, setDuration] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);

  const types = useMemo(() => {
    const set = new Set(TOURS.map((t) => t.type));
    return ["All", ...Array.from(set)];
  }, []);

  const durations = useMemo(() => {
    const set = new Set(TOURS.map((t) => t.duration));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return TOURS.filter((t) => {
      const matchesQuery =
        !query ||
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.location.toLowerCase().includes(query.toLowerCase());

      const matchesType = type === "All" || t.type === type;
      const matchesDuration = duration === "All" || t.duration === duration;

      const basePrice = getTourPriceFrom(t) ?? 0;
      const matchesPrice = Number(basePrice) <= Number(maxPrice);

      return matchesQuery && matchesType && matchesDuration && matchesPrice;
    });
  }, [query, type, duration, maxPrice]);

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/12 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

              <h1 className="text-5xl md:text-6xl font-[var(--font-playfair)] font-bold">
                Our{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Luxury Tours
                </span>
              </h1>

              <p className="mt-4 text-gray-300 font-[var(--font-inter)] max-w-3xl">
                Discover exclusive experiences crafted for comfort, elegance, and unforgettable memories.
              </p>

              {/* Filters */}
              <div className="mt-8 grid md:grid-cols-4 gap-4">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search tours, locations..."
                  className="w-full p-4 rounded-2xl bg-black/35 border border-white/10 focus:border-yellow-500 outline-none text-white placeholder:text-gray-500 font-[var(--font-inter)]"
                />

                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-black/35 border border-white/10 focus:border-yellow-500 outline-none text-white font-[var(--font-inter)]"
                >
                  {types.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>

                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-black/35 border border-white/10 focus:border-yellow-500 outline-none text-white font-[var(--font-inter)]"
                >
                  {durations.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>

                <div className="w-full p-4 rounded-2xl bg-black/35 border border-white/10">
                  <div className="flex items-center justify-between text-sm font-[var(--font-inter)]">
                    <span className="text-gray-300">Max Price</span>
                    <span className="text-yellow-300 font-semibold">${maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full mt-3 accent-yellow-500"
                  />
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-400 font-[var(--font-inter)]">
                Showing{" "}
                <span className="text-yellow-300 font-semibold">{filtered.length}</span>{" "}
                tours
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {filtered.map((t, i) => {
              const from = getTourPriceFrom(t);
              return (
                <Reveal key={t.slug} delay={i * 0.06}>
                  <div className="group relative bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:shadow-[0_0_55px_rgba(255,200,0,0.22)] transition">
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/0" />

                      {/* Price pill */}
                      <div className="absolute top-4 right-4 bg-yellow-500/95 text-black font-semibold px-5 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                        From ${formatUSD(from)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">
                        {t.title}
                      </h3>

                      <p className="text-gray-300 font-[var(--font-inter)] text-sm leading-relaxed mb-6">
                        {t.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 text-xs font-[var(--font-inter)] mb-7">
                        <span className="px-3 py-2 rounded-full bg-black/35 border border-white/10">
                          ⌛ {t.duration}
                        </span>
                        <span className="px-3 py-2 rounded-full bg-black/35 border border-white/10">
                          📍 {t.location}
                        </span>
                        <span className="px-3 py-2 rounded-full bg-black/35 border border-yellow-500/20 text-yellow-200">
                          👑 {t.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/tours/${t.slug}`}
                          className="flex-1 text-center px-6 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                        >
                          View Details
                        </Link>

                        <Link
                          href={`/booking?tour=${encodeURIComponent(t.title)}`}
                          className="px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02] transition"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-14 text-center text-gray-400 font-[var(--font-inter)]">
              No tours match your filters. Try changing search or price.
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}