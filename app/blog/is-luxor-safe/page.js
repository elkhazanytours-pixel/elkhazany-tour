import Link from "next/link";

export const metadata = {
  title: "Is Luxor Safe for Tourists? (2026 Safety Guide)",
  description:
    "Is Luxor safe to visit? A practical 2026 safety guide for tourists, including local tips, scams to avoid, best areas, and VIP private tour advice.",
  alternates: { canonical: "/blog/is-luxor-safe" },
  openGraph: {
    title: "Is Luxor Safe for Tourists? (2026 Safety Guide)",
    description:
      "A practical safety guide for visiting Luxor — plus VIP private tour tips for a smooth, stress-free experience.",
    url: "/blog/is-luxor-safe",
    siteName: "El Khazany Tour",
    type: "article",
    images: [{ url: "https://elkhazanytour.com/vip.jpg", width: 1200, height: 630, alt: "El Khazany Tour" }],
  },
};

export default function IsLuxorSafePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Luxor safe for tourists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Luxor is generally considered one of Egypt’s safest and most tourist-focused destinations. Most visits are smooth and trouble-free, especially with reputable local operators.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to visit Luxor as a solo traveler?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many solo travelers visit Luxor safely. Use common sense: stick to reputable tours, avoid isolated areas late at night, and keep valuables secured.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most common tourist issues in Luxor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common issues are minor: persistent sellers, occasional overpricing, and unofficial guides. A licensed guide and private transport help avoid these hassles.",
        },
      },
      {
        "@type": "Question",
        name: "How fast do you respond to booking requests?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We typically reply within ~5 minutes via WhatsApp or phone (when available).",
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
              El Khazany Tour • Luxor • Safety & Travel Guide
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
              Is Luxor Safe for Tourists?
              <span className="block text-white/80 text-2xl md:text-3xl font-semibold mt-3">
                The 2026 Safety Guide (Practical + VIP Tips)
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
              Luxor is one of Egypt’s most iconic destinations — and also one of its most
              tourist-focused. For most visitors, Luxor is safe and welcoming, especially
              when you travel with clear planning and reputable operators. This guide gives you
              practical safety advice, what to watch for, and how to enjoy a calm, premium experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Plan a Private Tour →
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
                Tourist-focused city
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Licensed guides recommended
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Best tip: early & private
              </span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <h2 className="mt-14 text-3xl font-semibold">Quick Answer</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">Yes — Luxor is generally safe for tourists.</span>{" "}
            Most visitors experience a smooth trip. The most common “issues” are minor:
            persistent sellers, occasional overpricing, and unofficial guides at busy areas.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            The simplest way to keep your experience calm and premium is to book a{" "}
            <span className="text-white font-semibold">licensed Egyptologist guide</span>{" "}
            with <span className="text-white font-semibold">private A/C transportation</span>{" "}
            and a flexible schedule.
          </p>
        </div>

        {/* What to expect */}
        <h2 className="mt-14 text-3xl font-semibold">What Safety Really Means in Luxor</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Tourist Infrastructure",
              desc: "Luxor is built around tourism: hotels, Nile cruises, organized attractions, and transport routes are well-established.",
            },
            {
              title: "Common Sense Works",
              desc: "Basic travel habits are enough: keep valuables secured, confirm prices, and avoid isolated areas late at night.",
            },
            {
              title: "Crowds vs Comfort",
              desc: "Crowds can feel overwhelming in peak season. Private touring helps you control timing and avoid pressure.",
            },
            {
              title: "Licensed Help = Zero Stress",
              desc: "A licensed guide handles details, routes, and interactions — you enjoy the experience, not the logistics.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400">✔</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scams / hassles */}
        <h2 className="mt-14 text-3xl font-semibold">Common Tourist Hassles & How to Avoid Them</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Luxor’s “risk” is usually not about danger — it’s about{" "}
            <span className="text-white font-semibold">hassle</span>. Here are the most common situations and how to avoid them:
          </p>
          <ul className="text-gray-300 space-y-2 leading-relaxed">
            <li>• <span className="text-white font-semibold">Persistent sellers:</span> polite “No, thank you” + keep walking.</li>
            <li>• <span className="text-white font-semibold">Overpricing:</span> confirm prices before agreeing (carriages, small services).</li>
            <li>• <span className="text-white font-semibold">Unofficial guides:</span> use a licensed guide from a reputable operator.</li>
            <li>• <span className="text-white font-semibold">Taxi confusion:</span> pre-arranged transport or agree on a price first.</li>
          </ul>
        </div>

        {/* VIP approach */}
        <h2 className="mt-14 text-3xl font-semibold">The VIP Way to Experience Luxor Safely</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            If you want Luxor to feel calm, elegant, and smooth, the formula is simple:
          </p>
          <ul className="text-gray-300 space-y-2 leading-relaxed">
            <li>• Start early (best light + fewer crowds).</li>
            <li>• Private A/C vehicle with a professional driver.</li>
            <li>• Licensed Egyptologist guide (clear explanations + confident routing).</li>
            <li>• Flexible timing (no rush, no pressure, no group schedule).</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            This approach is especially valuable during peak season when attractions can feel busy.
          </p>
        </div>

        {/* Related reading */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7">
          <h3 className="text-2xl font-semibold">Related Guides</h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            For the complete premium experience, read:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/blog/luxury-private-tours-in-luxor" className="text-yellow-400 underline">
              Luxury Private Tours in Luxor →
            </Link>
            <Link href="/blog/best-time-to-visit-luxor" className="text-yellow-400 underline">
              Best Time to Visit Luxor →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="mt-14 text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              q: "Is Luxor safe for tourists?",
              a: "Yes. Luxor is generally considered one of Egypt’s safest and most tourist-focused destinations. Most visits are smooth and trouble-free, especially with reputable operators.",
            },
            {
              q: "Is it safe to visit Luxor as a solo traveler?",
              a: "Many solo travelers visit Luxor safely. Use common sense, stick to reputable tours, and avoid isolated areas late at night.",
            },
            {
              q: "What are the most common tourist issues in Luxor?",
              a: "Usually minor: persistent sellers, occasional overpricing, and unofficial guides. A licensed guide and private transport help avoid these hassles.",
            },
            {
              q: "How fast do you respond to booking requests?",
              a: "We typically reply within ~5 minutes via WhatsApp or phone (when available).",
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
            Want a Calm, Safe, Premium Luxor Experience?
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Tell us your dates and your must-see sites — we’ll plan a private itinerary with
            smooth logistics, premium transport, and a licensed guide.
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