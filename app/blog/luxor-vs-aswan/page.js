import Link from "next/link";

export const metadata = {
  title: "Luxor vs Aswan: Which One Should You Visit? (2026 Guide) | El Khazany Tour",
  description:
    "Luxor vs Aswan — which is better for your Egypt trip? Compare temples, vibe, cruises, time needed, and ideal itineraries in this 2026 guide by El Khazany Tour.",
  alternates: { canonical: "/blog/luxor-vs-aswan" },
  openGraph: {
    title: "Luxor vs Aswan: Which One Should You Visit? (2026 Guide)",
    description:
      "Compare Luxor and Aswan for your Egypt trip — sights, vibe, cruises, time needed, and VIP itinerary tips.",
    url: "/blog/luxor-vs-aswan",
    siteName: "El Khazany Tour",
    type: "article",
    images: [{ url: "https://elkhazanytour.com/nile-cruise.jpg", width: 1200, height: 630, alt: "El Khazany Tour" }],
  },
};

export default function LuxorVsAswanPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Luxor or Aswan better for first-time visitors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most first-time visitors prioritize Luxor for its iconic temples and the Valley of the Kings. Aswan is calmer and scenic, often best as a relaxing second stop.",
        },
      },
      {
        "@type": "Question",
        name: "How many days do you need in Luxor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2 to 3 days is ideal for Luxor if you want a comfortable pace: East Bank + West Bank + optional extras.",
        },
      },
      {
        "@type": "Question",
        name: "How many days do you need in Aswan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1 to 2 days works well for Aswan: Philae Temple, the Nile islands, and a relaxing vibe — plus Abu Simbel as a day trip.",
        },
      },
      {
        "@type": "Question",
        name: "Can you visit both Luxor and Aswan in one trip?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many travelers combine both, often connected by a Nile cruise or private transfer, for a complete Upper Egypt experience.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* SEO: FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_circle_at_20%_20%,rgba(234,179,8,0.18),transparent_60%)]" />
          <div className="relative">
            <p className="text-xs md:text-sm tracking-widest uppercase text-yellow-300/80">
              El Khazany Tour • Upper Egypt • Travel Planning Guide
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
              Luxor vs Aswan
              <span className="block text-white/80 text-2xl md:text-3xl font-semibold mt-3">
                Which One Should You Visit? (2026)
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
              Luxor and Aswan are both extraordinary — but they feel very different.
              Luxor is intense, iconic, and history-heavy. Aswan is calm, scenic, and elegant.
              This guide compares them clearly so you can choose the best fit — or plan the perfect itinerary that includes both.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Build My VIP Itinerary →
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Back to Guides
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Luxor: temples & tombs
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Aswan: calm Nile vibe
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Best plan: combine both
              </span>
            </div>
          </div>
        </div>

        {/* Quick recommendation */}
        <h2 className="mt-14 text-3xl font-semibold">Quick Recommendation</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            If you’re choosing only one:{" "}
            <span className="text-white font-semibold">Luxor</span> is usually the top pick for
            first-time visitors because it holds Egypt’s most iconic ancient sites.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you want a calmer, more scenic experience:{" "}
            <span className="text-white font-semibold">Aswan</span> is perfect for relaxation,
            Nile views, and a refined slower pace.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For the ultimate Upper Egypt journey:{" "}
            <span className="text-white font-semibold">combine Luxor + Aswan</span> (often with a Nile cruise or private transfer).
          </p>
        </div>

        {/* Comparison grid */}
        <h2 className="mt-14 text-3xl font-semibold">Luxor vs Aswan: Key Differences</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Vibe",
              luxor: "Historic, powerful, iconic — big temples, intense sightseeing.",
              aswan: "Calm, elegant, scenic — relaxed river mood and soft pace.",
            },
            {
              title: "Top Experiences",
              luxor: "Karnak, Luxor Temple, Valley of the Kings, Hatshepsut, Colossi.",
              aswan: "Philae Temple, Nile islands, Nubian village, sunsets, Abu Simbel trip.",
            },
            {
              title: "Best For",
              luxor: "First-time Egypt travelers, history lovers, photographers.",
              aswan: "Relaxation, scenic Nile time, laid-back cultural feel.",
            },
            {
              title: "Time Needed",
              luxor: "2–3 days for a premium pace (East + West + extras).",
              aswan: "1–2 days (plus Abu Simbel day trip if desired).",
            },
          ].map((row) => (
            <div key={row.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{row.title}</h3>
              <div className="mt-4 space-y-3 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Luxor:</span> {row.luxor}
                </p>
                <p>
                  <span className="text-white font-semibold">Aswan:</span> {row.aswan}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested itineraries */}
        <h2 className="mt-14 text-3xl font-semibold">Suggested Itineraries</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white">Option A: Luxor Only (2–3 Days)</h3>
            <ul className="mt-3 text-gray-300 space-y-2 leading-relaxed">
              <li>• Day 1: Karnak + Luxor Temple (sunset)</li>
              <li>• Day 2: Valley of the Kings + Hatshepsut + Colossi</li>
              <li>• Day 3 (optional): Hot air balloon + extra sites</li>
            </ul>
            <Link href="/blog/luxury-private-tours-in-luxor" className="inline-flex mt-4 text-yellow-400 underline">
              Luxury Luxor Guide →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white">Option B: Luxor + Aswan (4–6 Days)</h3>
            <ul className="mt-3 text-gray-300 space-y-2 leading-relaxed">
              <li>• 2–3 days in Luxor (east + west banks)</li>
              <li>• Transfer / Nile cruise to Aswan</li>
              <li>• 1–2 days in Aswan + optional Abu Simbel</li>
            </ul>
            <Link href="/tours/luxury-nile-river-cruise" className="inline-flex mt-4 text-yellow-400 underline">
              Luxury Nile Cruise →
            </Link>
          </div>
        </div>

        {/* VIP advice */}
        <h2 className="mt-14 text-3xl font-semibold">VIP Advice: How to Make Both Feel Premium</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            The difference between an “okay” trip and an unforgettable luxury trip is timing and comfort:
          </p>
          <ul className="text-gray-300 space-y-2 leading-relaxed">
            <li>• Start early in Luxor to avoid crowds and heat.</li>
            <li>• Use private A/C transportation for smooth transfers.</li>
            <li>• Choose a licensed Egyptologist guide for deeper storytelling.</li>
            <li>• Add calm experiences in Aswan (Nile sunsets, islands) to balance the intensity of Luxor.</li>
          </ul>
        </div>

        {/* Related guides */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7">
          <h3 className="text-2xl font-semibold">Related Guides</h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Continue planning with our premium guides:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/blog/best-time-to-visit-luxor" className="text-yellow-400 underline">
              Best Time to Visit Luxor →
            </Link>
            <Link href="/blog/is-luxor-safe" className="text-yellow-400 underline">
              Is Luxor Safe for Tourists? →
            </Link>
            <Link href="/blog/luxury-private-tours-in-luxor" className="text-yellow-400 underline">
              Luxury Private Tours in Luxor →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="mt-14 text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              q: "Is Luxor or Aswan better for first-time visitors?",
              a: "Most first-time visitors prioritize Luxor for its iconic temples and the Valley of the Kings. Aswan is calmer and scenic, often best as a relaxing second stop.",
            },
            {
              q: "How many days do you need in Luxor?",
              a: "2 to 3 days is ideal for Luxor if you want a comfortable pace: East Bank + West Bank + optional extras.",
            },
            {
              q: "How many days do you need in Aswan?",
              a: "1 to 2 days works well for Aswan: Philae Temple, the Nile islands, and a relaxing vibe — plus Abu Simbel as a day trip.",
            },
            {
              q: "Can you visit both Luxor and Aswan in one trip?",
              a: "Yes. Many travelers combine both, often connected by a Nile cruise or private transfer, for a complete Upper Egypt experience.",
            },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white font-semibold">{f.q}</p>
              <p className="mt-2 text-gray-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 border border-yellow-500/30 rounded-3xl bg-gradient-to-br from-yellow-500/12 to-transparent">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Want the Perfect Luxor + Aswan VIP Plan?
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Tell us your travel dates and preferences — we’ll design a premium itinerary
            with the best timing, private transportation, and unforgettable experiences.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
            >
              Contact & Get a Quote →
            </Link>

            <Link
              href="/tours"
              className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              View Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}