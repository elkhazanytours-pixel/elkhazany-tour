import Link from "next/link";

export const metadata = {
  title: "Best Time to Visit Luxor (Weather, Crowds & Prices) | El Khazany Tour",
  description:
    "Plan the perfect Luxor trip with the best months to visit, crowd levels, weather tips, and pricing seasons — curated by El Khazany Tour.",
  alternates: { canonical: "/blog/best-time-to-visit-luxor" },
  openGraph: {
    title: "Best Time to Visit Luxor (Weather, Crowds & Prices)",
    description:
      "The best months to visit Luxor, with weather, crowds, and price seasons — plus VIP private tour tips.",
    url: "/blog/best-time-to-visit-luxor",
    siteName: "El Khazany Tour",
    type: "article",
    images: [{ url: "https://elkhazanytour.com/luxor.jpg", width: 1200, height: 630, alt: "El Khazany Tour" }],
  },
};

export default function BestTimeLuxorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best month to visit Luxor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most travelers, November to March offers the best balance of mild weather and comfortable sightseeing conditions.",
        },
      },
      {
        "@type": "Question",
        name: "When is Luxor the most crowded?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Luxor is usually busiest from December through February, especially around holiday periods and peak cruise season.",
        },
      },
      {
        "@type": "Question",
        name: "Is Luxor too hot in summer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Summer (June–August) can be extremely hot. If you visit in summer, early-morning private tours and shaded pacing are highly recommended.",
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
              El Khazany Tour • Luxor • Travel Planning Guide
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
              Best Time to Visit Luxor
              <span className="block text-white/80 text-2xl md:text-3xl font-semibold mt-3">
                Weather, Crowds & Price Seasons (2026)
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
              Luxor is breathtaking year-round — but choosing the right season
              changes everything: comfort, crowds, photography, and overall pace.
              Here’s the premium guide to picking your perfect time to visit Luxor,
              plus VIP private-tour tips to avoid the busiest windows.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Get a Private Tour Plan →
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
                Best season: Oct–Apr
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Peak crowds: Dec–Feb
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                VIP tip: early mornings
              </span>
            </div>
          </div>
        </div>

        {/* Quick answer */}
        <h2 className="mt-14 text-3xl font-semibold">
          The Short Answer: Best Months to Visit Luxor
        </h2>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-300 leading-relaxed">
            For most travelers, the best time to visit Luxor is{" "}
            <span className="text-white font-semibold">October to April</span>.
            Expect milder temperatures, clearer skies, and more comfortable touring.
            The most popular (and busiest) months are{" "}
            <span className="text-white font-semibold">December to February</span>.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            If you want a calm, cinematic experience with fewer crowds, aim for{" "}
            <span className="text-white font-semibold">October–November</span> or{" "}
            <span className="text-white font-semibold">March–April</span>.
          </p>
        </div>

        {/* Season breakdown */}
        <h2 className="mt-14 text-3xl font-semibold">Season by Season Guide</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              title: "October–November (Best Balance)",
              desc: "Warm but comfortable. Great light for photography, fewer peak-season crowds, and a smooth pace for temples and tombs.",
            },
            {
              title: "December–February (Peak Season)",
              desc: "Cooler weather, high demand, and busy attractions. Private tours are ideal to avoid waiting and keep timing flexible.",
            },
            {
              title: "March–April (Excellent Shoulder Season)",
              desc: "Mild days, vibrant skies, and strong value. A top choice for travelers who want comfort without the heaviest crowds.",
            },
            {
              title: "May–September (Hot Season)",
              desc: "Very hot, especially June–August. If visiting, plan early morning touring, shaded breaks, and a premium A/C vehicle.",
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

        {/* Crowds */}
        <h2 className="mt-14 text-3xl font-semibold">How to Avoid Crowds in Luxor</h2>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Luxor’s most famous sites can get busy — especially in peak season.
            The VIP strategy is simple:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• Start early (best light + lowest crowds).</li>
            <li>• Prioritize must-see sites first, then flexible stops later.</li>
            <li>• Use a private guide to move efficiently and avoid rushed timing.</li>
            <li>• Choose shoulder seasons for a calmer, premium experience.</li>
          </ul>
        </div>

        {/* Price seasons */}
        <h2 className="mt-14 text-3xl font-semibold">Price Seasons: When Luxor Is Best Value</h2>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Prices generally rise during peak season (especially holidays).
            The best value often appears in shoulder months like{" "}
            <span className="text-white font-semibold">October–November</span> and{" "}
            <span className="text-white font-semibold">March–April</span>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you want a premium experience without peak-season pressure,
            those windows are usually the smartest.
          </p>
        </div>

        {/* Internal link to your flagship Luxor post */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7">
          <h3 className="text-2xl font-semibold">Want the Ultimate Luxor Experience?</h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Read our flagship guide for luxury private touring in Luxor — designed for
            travelers who value privacy, comfort, and authenticity.
          </p>
          <Link
            href="/blog/luxury-private-tours-in-luxor"
            className="inline-flex mt-4 text-yellow-400 underline"
          >
            Luxury Private Tours in Luxor →
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="mt-14 text-3xl font-semibold">Frequently Asked Questions</h2>

        <div className="mt-6 space-y-4">
          {[
            {
              q: "What is the best month to visit Luxor?",
              a: "November to March is ideal for mild weather and comfortable sightseeing for most travelers.",
            },
            {
              q: "When is Luxor the most crowded?",
              a: "Usually December through February, especially during holidays and peak cruise season.",
            },
            {
              q: "Is Luxor too hot in summer?",
              a: "Summer can be extremely hot. If you visit then, plan early-morning touring and use a premium A/C vehicle.",
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
            Plan a Private Luxor Tour (Perfect Timing, Zero Stress)
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Tell us your dates and your must-see sites — we’ll build a premium itinerary
            with the best timing for comfort, photos, and a smooth VIP experience.
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