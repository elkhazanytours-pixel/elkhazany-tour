import Link from "next/link";

export const metadata = {
  title: "Best Sunset in Luxor (2026) — Time, Best Spots & Private Options",
  description:
    "Discover the best sunset spots in Luxor, the ideal time to go, West Bank vs East Bank views, and private luxury options like felucca sailing and VIP experiences.",
  alternates: { canonical: "/blog/best-sunset-in-luxor" },
  openGraph: {
    title: "Best Sunset in Luxor (2026) — Time, Best Spots & Private Options",
    description:
      "The most beautiful sunset views in Luxor: best spots, timing tips, and private luxury options.",
    url: "https://elkhazanytour.com/blog/best-sunset-in-luxor",
    siteName: "El Khazany Tour",
    type: "article",
    images: [{ url: "https://elkhazanytour.com/nile-cruise.jpg", width: 1200, height: 630, alt: "El Khazany Tour" }],
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Sunset in Luxor (2026) — Time, Best Spots & Private Options",
    description:
      "Discover the best sunset spots in Luxor, the ideal time to go, West Bank vs East Bank views, and private luxury options.",
    mainEntityOfPage: "https://elkhazanytour.com/blog/best-sunset-in-luxor",
    author: { "@type": "Organization", name: "El Khazany Tour" },
    publisher: { "@type": "Organization", name: "El Khazany Tour" },
  };
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#07070A] text-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-8">
          <p className="text-xs tracking-[0.22em] uppercase text-yellow-300/80">
            El Khazany Tour • Luxor • VIP Private Experiences
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-[var(--font-playfair)] font-bold leading-tight">
            Best Sunset in Luxor{" "}
            <span className="block text-white/80 text-2xl md:text-4xl font-[var(--font-inter)] font-semibold mt-2">
              Time, Best Spots & Private Luxury Options (2026)
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-white/75 leading-relaxed font-[var(--font-inter)]">
            Sunset in Luxor isn’t just “a nice view” — it’s often the moment
            travelers remember most. The secret is not only{" "}
            <span className="text-yellow-300">where</span> you watch it, but{" "}
            <span className="text-yellow-300">when</span> and{" "}
            <span className="text-yellow-300">how</span>.
            Below is a practical, VIP-friendly guide to the best sunset spots in
            Luxor, including West Bank vs East Bank, timing advice, and private
            options like felucca sailing.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/booking"
              className="px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.01] transition text-center"
            >
              Request a Private Sunset Experience →
            </Link>
            <Link
              href="/tours"
              className="px-8 py-4 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition text-center"
            >
              Browse Luxury Tours
            </Link>
          </div>

          {/* Trust Chips */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Reply in ~5 minutes
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Private guide
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Premium A/C vehicle
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Hotel pickup & drop-off
            </span>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold">
            1) What time is sunset in Luxor?
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed font-[var(--font-inter)]">
            Sunset time changes by season, but the real VIP tip is this:
            <span className="text-yellow-300">
              arrive 35–45 minutes before sunset
            </span>{" "}
            to enjoy the golden hour, then stay 15–20 minutes after for the
            softest sky colors. This avoids the “arrive late, rush, leave”
            mistake.
          </p>

          <div className="mt-8 h-px bg-white/10" />

          <h2 className="mt-8 text-2xl md:text-3xl font-[var(--font-playfair)] font-bold">
            2) West Bank vs East Bank — which is better for sunset?
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed font-[var(--font-inter)]">
            If you want the classic, cinematic Luxor sunset:{" "}
            <span className="text-yellow-300">West Bank wins.</span>  
            You get the Nile in the foreground and the Theban Mountains in the
            background — the view feels larger, calmer, and more dramatic.
          </p>
          <ul className="mt-4 space-y-2 text-white/75 font-[var(--font-inter)]">
            <li>• West Bank: more panoramic, more “quiet luxury” vibes.</li>
            <li>• East Bank: convenient, good rooftop views, more city energy.</li>
          </ul>

          <div className="mt-8 h-px bg-white/10" />

          <h2 className="mt-8 text-2xl md:text-3xl font-[var(--font-playfair)] font-bold">
            3) Best sunset spots in Luxor (top picks)
          </h2>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-[var(--font-playfair)] font-bold">
                A) West Bank Nile Viewpoints
              </h3>
              <p className="mt-2 text-white/75 font-[var(--font-inter)] leading-relaxed">
                Perfect for a calm, premium moment. Best after a Valley of the
                Kings day — you finish history and end with beauty.
              </p>
              <p className="mt-3 text-sm text-yellow-300/90">
                VIP tip: choose a quiet viewpoint away from the main boat docks.
              </p>
            </div>

            <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-[var(--font-playfair)] font-bold">
                B) Private Felucca Sailing (Golden Hour)
              </h3>
              <p className="mt-2 text-white/75 font-[var(--font-inter)] leading-relaxed">
                The most romantic option — gentle sailing, soft wind, and a view
                that changes every minute.
              </p>
              <p className="mt-3 text-sm text-yellow-300/90">
                VIP tip: book a private boat to avoid crowds and loud music.
              </p>
            </div>

            <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-[var(--font-playfair)] font-bold">
                C) Rooftop River Views (East Bank)
              </h3>
              <p className="mt-2 text-white/75 font-[var(--font-inter)] leading-relaxed">
                Ideal if you want sunset with comfort — drinks, seating, and a
                city glow after the sun goes down.
              </p>
              <p className="mt-3 text-sm text-yellow-300/90">
                VIP tip: ask for a table facing the river, not the street.
              </p>
            </div>

            <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <h3 className="text-xl font-[var(--font-playfair)] font-bold">
                D) Temple Timing (Sunset + Night Lighting)
              </h3>
              <p className="mt-2 text-white/75 font-[var(--font-inter)] leading-relaxed">
                Combine a sunset moment with a temple visit that feels almost
                theatrical under evening lighting.
              </p>
              <p className="mt-3 text-sm text-yellow-300/90">
                VIP tip: avoid peak entrance rush — arrive slightly earlier.
              </p>
            </div>
          </div>

          <div className="mt-8 h-px bg-white/10" />

          <h2 className="mt-8 text-2xl md:text-3xl font-[var(--font-playfair)] font-bold">
            4) The luxury way to do sunset in Luxor
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed font-[var(--font-inter)]">
            If you want a stress-free “VIP feel,” the best setup is simple:
          </p>
          <ol className="mt-4 space-y-2 text-white/75 font-[var(--font-inter)]">
            <li>1) Private pickup (no negotiating, no delays)</li>
            <li>2) Flexible timing (we avoid the crowd windows)</li>
            <li>3) A calm location choice (not the loudest tourist spot)</li>
            <li>4) Optional private felucca for golden hour</li>
          </ol>

          <div className="mt-8 h-px bg-white/10" />

          <h2 className="mt-8 text-2xl md:text-3xl font-[var(--font-playfair)] font-bold">
            FAQ — Sunset in Luxor
          </h2>

          <div className="mt-4 space-y-4 text-white/75 font-[var(--font-inter)]">
            <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <p className="font-semibold text-white">Is Luxor safe at night?</p>
              <p className="mt-2 leading-relaxed">
                Yes — Luxor is generally calm and tourism-focused. For a
                comfortable evening, move with a clear plan (hotel pickup,
                known spots, and trusted transport).
              </p>
            </div>

            <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <p className="font-semibold text-white">How long should I plan for sunset?</p>
              <p className="mt-2 leading-relaxed">
                About 1.5–2 hours total is perfect (golden hour + sunset + afterglow).
              </p>
            </div>

            <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <p className="font-semibold text-white">
                What’s the best option for couples / honeymoon?
              </p>
              <p className="mt-2 leading-relaxed">
                Private felucca at golden hour + a quiet dinner with river views.
                It’s simple, romantic, and unforgettable.
              </p>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-white/80 font-[var(--font-inter)]">
              Continue reading:
            </p>
            <ul className="mt-3 space-y-2 text-yellow-300">
              <li>
                <Link href="/blog/top-10-things-to-do-in-luxor" className="hover:underline">
                  Top 10 Things to Do in Luxor (VIP Edition)
                </Link>
              </li>
              <li>
                <Link href="/blog/is-luxor-safe" className="hover:underline">
                  Is Luxor Safe? (Real Travel Advice)
                </Link>
              </li>
              <li>
                <Link href="/blog/luxor-travel-guide-2026" className="hover:underline">
                  Luxor Travel Guide — Temples, Itinerary & Tips (2026)
                </Link>
              </li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/booking"
              className="inline-block px-10 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.01] transition"
            >
              Plan Your Luxor Sunset (Private & VIP) →
            </Link>
            <p className="mt-3 text-xs text-white/60 font-[var(--font-inter)]">
              Quick replies • Flexible itinerary • Premium comfort
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}