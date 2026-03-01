import Link from "next/link";

export const metadata = {
  title: "Top 10 Things to Do in Luxor (VIP Edition – 2026 Guide) | El Khazany Tour",
  description:
    "The ultimate VIP guide to the top 10 things to do in Luxor — Karnak, Valley of the Kings, Luxor Temple, balloons, museums, Nile experiences, and premium private-tour tips.",
  alternates: { canonical: "/blog/top-10-things-to-do-in-luxor" },
  openGraph: {
    title: "Top 10 Things to Do in Luxor (VIP Edition – 2026 Guide)",
    description:
      "A world-class Luxor guide with VIP tips, best timing, crowd strategy, and premium private touring insights.",
    url: "/blog/top-10-things-to-do-in-luxor",
    siteName: "El Khazany Tour",
    type: "article",
  },
};

const POST = {
  slug: "top-10-things-to-do-in-luxor",
  title: "Top 10 Things to Do in Luxor (VIP Edition – 2026 Guide)",
  description:
    "The ultimate VIP guide to the top 10 things to do in Luxor — including best timing, crowd strategy, and premium private touring insights.",
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
};

export default function Top10LuxorVIPPage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://elkhazanytour.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://elkhazanytour.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: POST.title,
        item: `https://elkhazanytour.com/blog/${POST.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: POST.title,
    description: POST.description,
    datePublished: POST.datePublished,
    dateModified: POST.dateModified,
    mainEntityOfPage: `https://elkhazanytour.com/blog/${POST.slug}`,
    author: { "@type": "Organization", name: "El Khazany Tour" },
    publisher: { "@type": "Organization", name: "El Khazany Tour" },
  };

  const faqs = [
    {
      q: "How many days do you need in Luxor?",
      a: "For most travelers, 2–3 days is ideal: one day for the East Bank (Karnak + Luxor Temple) and one day for the West Bank (Valley of the Kings + Hatshepsut + highlights). Add an extra day for balloon ride, museums, or a day trip.",
    },
    {
      q: "What is the best time of day to visit Luxor’s main sites?",
      a: "Early morning is best for comfort and fewer crowds. Sunset and evening are perfect for Luxor Temple’s cinematic lighting.",
    },
    {
      q: "What is the best time of year to visit Luxor?",
      a: "October through April is generally the most comfortable season. Peak crowds are often around December to February.",
    },
    {
      q: "Is a private guide worth it in Luxor?",
      a: "Yes—Luxor is layered with history. A licensed Egyptologist guide improves understanding, saves time, and makes the experience smoother and more premium.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const toc = [
    { id: "vip-planner", label: "VIP Planner (2–3 Days, Timing & Strategy)" },
    { id: "toc", label: "Table of Contents" },
    { id: "karnak", label: "1) Karnak Temple Complex" },
    { id: "valley-kings", label: "2) Valley of the Kings" },
    { id: "luxor-temple", label: "3) Luxor Temple (Sunset/Evening)" },
    { id: "hatshepsut", label: "4) Temple of Hatshepsut" },
    { id: "balloon", label: "5) Hot Air Balloon at Sunrise" },
    { id: "west-bank", label: "6) West Bank Highlights (Beyond the Basics)" },
    { id: "memnon", label: "7) Colossi of Memnon" },
    { id: "museum", label: "8) Luxor Museum" },
    { id: "nile", label: "9) Nile Experiences (Cruise / Felucca / Sunset)" },
    { id: "private-egyptologist", label: "10) Private Egyptologist Experience" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Sticky CTA (no JS, premium conversion) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,520px)]">
        <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-3 flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-white font-semibold">Want a VIP Luxor plan?</p>
            <p className="text-xs text-white/70">We reply in ~5 minutes via WhatsApp/phone.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:scale-[1.02] transition"
          >
            Get Quote →
          </Link>
        </div>
      </div>

      <section className="pt-28 pb-28 px-6 max-w-5xl mx-auto">
        {/* Breadcrumbs (visible UX + SEO) */}
        <nav className="text-xs text-white/60 mb-6">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-yellow-300 transition">
            Blog
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-white/80">Top 10 Things to Do in Luxor</span>
        </nav>

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_circle_at_20%_20%,rgba(234,179,8,0.18),transparent_60%)]" />
          <div className="relative">
            <p className="text-xs md:text-sm tracking-widest uppercase text-yellow-300/80">
              El Khazany Tour • Luxor • VIP Edition
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
              Top 10 Things to Do in Luxor
              <span className="block text-white/80 text-2xl md:text-3xl font-semibold mt-3">
                VIP Edition – 2026 Guide
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
              Luxor is the definition of legendary: colossal temples, royal tombs, and sunset
              scenes that feel cinematic in real life. This guide covers the top 10 experiences
              you shouldn’t miss — plus premium timing and crowd strategy to make Luxor feel calm,
              smooth, and unforgettable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Plan My Private Luxor Tour →
              </Link>
              <Link
                href="/tours"
                className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Explore Tours
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Best season: Oct–Apr
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                VIP strategy: early mornings
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Ideal stay: 2–3 days
              </span>
            </div>
          </div>
        </div>

        {/* VIP Planner */}
        <div
          id="vip-planner"
          className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">VIP Planner: How to Do Luxor the Smart Way</h2>
          <div className="mt-5 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-white font-semibold">Best 2–3 Day Structure</p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Day 1: East Bank (Karnak + Luxor Temple). Day 2: West Bank (Valley of the Kings +
                Hatshepsut + highlights). Day 3: Balloon + museum + sunset Nile (optional).
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-white font-semibold">Timing That Changes Everything</p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Start early for comfort and fewer crowds. Save Luxor Temple for sunset/evening
                when the lighting becomes cinematic.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-white font-semibold">Crowd Strategy</p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Peak season can be busy. Private touring lets you avoid rushed group schedules,
                move efficiently, and keep the experience premium.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-white font-semibold">Luxury Formula</p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Licensed Egyptologist guide + premium A/C vehicle + flexible timing = a calm,
                refined Luxor experience.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/best-time-to-visit-luxor"
              className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Best Time to Visit Luxor →
            </Link>
            <Link
              href="/blog/is-luxor-safe"
              className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Is Luxor Safe? →
            </Link>
          </div>
        </div>

        {/* TOC */}
        <div id="toc" className="mt-14 p-6 border border-white/10 rounded-2xl bg-white/5">
          <h2 className="text-xl font-semibold">Table of Contents</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-2">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Top 10 */}
        <div className="mt-16 space-y-14">
          <Section
            id="karnak"
            n="1"
            title="Karnak Temple Complex"
            vip="Go early for the best light and calmest walk through the Hypostyle Hall."
          >
            Karnak is one of the largest religious complexes ever built. The Hypostyle Hall alone
            contains 134 massive columns — it’s a “wow” moment even for seasoned travelers.
          </Section>

          <Section
            id="valley-kings"
            n="2"
            title="Valley of the Kings"
            vip="Choose your tombs strategically—quality over quantity. A guide helps you pick the best."
          >
            The Valley of the Kings is where ancient pharaohs were laid to rest, including the
            tomb of Tutankhamun. The paintings inside many tombs remain astonishingly vivid.
          </Section>

          <Section
            id="luxor-temple"
            n="3"
            title="Luxor Temple at Sunset / Evening"
            vip="This is Luxor’s most cinematic hour. Sunset into night lighting is pure magic."
          >
            Luxor Temple is unforgettable after sunset when lighting transforms the stones into
            warm gold and the atmosphere becomes dramatic and elegant.
          </Section>

          <Section
            id="hatshepsut"
            n="4"
            title="Temple of Hatshepsut"
            vip="Arrive before peak groups. The cliff backdrop is perfect for high-end photos."
          >
            Built dramatically against limestone cliffs, this temple honors Hatshepsut — one of
            Egypt’s most powerful rulers. Its architecture feels modern even today.
          </Section>

          <Section
            id="balloon"
            n="5"
            title="Hot Air Balloon at Sunrise"
            vip="Book the earliest flight. The first light over the Nile is unforgettable."
          >
            The sunrise balloon ride is one of Luxor’s signature luxury moments — temples,
            farmland, and the Nile stretching quietly beneath you.
          </Section>

          <Section
            id="west-bank"
            n="6"
            title="West Bank Highlights (Beyond the Basics)"
            vip="Ask for hidden gems beyond the main stops—Luxor rewards curiosity."
          >
            The West Bank is more than the Valley of the Kings. If you want deeper immersion,
            add specialized sites and quieter corners for a richer experience.
          </Section>

          <Section
            id="memnon"
            n="7"
            title="Colossi of Memnon"
            vip="Perfect quick stop on the West Bank route—great photos with minimal time."
          >
            Two massive statues that once guarded a grand mortuary temple. A classic Luxor
            landmark and an excellent short stop.
          </Section>

          <Section
            id="museum"
            n="8"
            title="Luxor Museum"
            vip="Ideal in the afternoon when you want a refined, air-conditioned break."
          >
            Luxor Museum is curated beautifully and feels premium—perfect for travelers who
            want quality presentation and context.
          </Section>

          <Section
            id="nile"
            n="9"
            title="Nile Experiences (Cruise / Felucca / Sunset)"
            vip="Sunset on the Nile is non-negotiable. Choose comfort: private boat or premium cruise."
          >
            Luxor isn’t complete without time on the Nile. Whether it’s a luxury cruise between
            Luxor and Aswan or a calm sunset sail, it’s the “breathing space” Luxor needs.
            <div className="mt-4">
              <Link href="/tours/luxury-nile-river-cruise" className="text-yellow-400 underline">
                Explore Luxury Nile Cruises →
              </Link>
            </div>
          </Section>

          <Section
            id="private-egyptologist"
            n="10"
            title="Explore with a Private Egyptologist"
            vip="This is the real upgrade: stories, meaning, and effortless logistics."
          >
            Luxor is powerful on its own—but understanding transforms it. A licensed Egyptologist
            turns monuments into stories and helps you move intelligently through the city.
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/luxury-private-tours-in-luxor" className="text-yellow-400 underline">
                Luxury Private Tours in Luxor →
              </Link>
              <Link href="/blog/luxor-vs-aswan" className="text-yellow-400 underline">
                Luxor vs Aswan Guide →
              </Link>
            </div>
          </Section>
        </div>

        {/* FAQs */}
        <div id="faqs" className="mt-16">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-white font-semibold">{f.q}</p>
                <p className="mt-2 text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 p-8 border border-yellow-500/30 rounded-3xl bg-gradient-to-br from-yellow-500/12 to-transparent">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to Experience the Best of Luxor?</h3>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Tell us your dates and interests — we’ll craft a premium private itinerary with the
            best timing, smooth logistics, and a guide who makes Luxor unforgettable.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
            >
              Contact & Get a Quote →
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Back to Guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({ id, n, title, vip, children }) {
  return (
    <div id={id} className="scroll-mt-28">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="w-10 h-10 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center">
            {n}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">{title}</h2>

          <div className="mt-4 rounded-2xl border border-yellow-500/25 bg-yellow-500/10 p-4">
            <p className="text-sm text-yellow-200">
              <span className="font-semibold">VIP Tip:</span> {vip}
            </p>
          </div>

          <p className="mt-4 text-gray-300 leading-relaxed">{children}</p>

          <div className="mt-5">
            <a
              href="#toc"
              className="text-xs text-white/60 hover:text-yellow-300 transition underline underline-offset-4"
            >
              Back to contents ↑
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}