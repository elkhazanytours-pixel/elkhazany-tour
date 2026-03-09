import Link from "next/link";

export const metadata = {
  title: "Luxor Travel Guide (2026): Temples, Itinerary & Tips",
  description:
    "The ultimate Luxor travel guide for 2026: best temples, a practical 2–3 day itinerary, safety tips, best time to visit, costs, and VIP private tour options in Luxor with El Khazany Tour.",
  alternates: { canonical: "/blog/luxor-travel-guide-2026" },
  openGraph: {
    title: "Luxor Travel Guide (2026): Temples, Itinerary, Tips & Best Tours",
    description:
      "A world-class Luxor guide with temples, itinerary, timing, safety & scam-avoidance tips, and premium private touring insights.",
    url: "/blog/luxor-travel-guide-2026",
    siteName: "El Khazany Tour",
    type: "article",
    images: [{ url: "https://elkhazanytour.com/luxor.jpg", width: 1200, height: 630, alt: "El Khazany Tour" }],
  },
};

const POST = {
  slug: "luxor-travel-guide-2026",
  title: "Luxor Travel Guide (2026): Temples, Itinerary, Tips & Best Tours",
  description:
    "The ultimate Luxor travel guide for 2026 — temples, a practical 2–3 day itinerary, safety tips, best time to visit, and VIP private touring insights.",
  datePublished: "2026-03-04",
  dateModified: "2026-03-04",
};

export default function LuxorTravelGuide2026Page() {
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
      q: "Is Luxor safe for tourists in 2026?",
      a: "Luxor is generally considered one of the safer tourist destinations in Egypt, especially around major attractions and hotels. Most issues travelers report are common travel hassles (persistent vendors, pricing confusion) rather than serious safety risks. Using a licensed guide and pre-booked transport makes the experience smoother and more premium.",
    },
    {
      q: "How many days do you need in Luxor?",
      a: "For most travelers, 2–3 days is ideal: one day for the East Bank (Karnak + Luxor Temple) and one day for the West Bank (Valley of the Kings + Hatshepsut + highlights). Add a third day for balloon ride, museums, and a Nile sunset experience.",
    },
    {
      q: "What is the best time to visit Luxor?",
      a: "October through April is generally the most comfortable season. Peak crowds often happen around December to February. If you visit in summer, start very early and plan indoor breaks.",
    },
    {
      q: "Do I need a private guide in Luxor?",
      a: "A private licensed Egyptologist guide is the biggest upgrade in Luxor. It improves understanding, saves time, helps avoid hassles, and creates a calmer, more refined itinerary.",
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
    { id: "why-luxor", label: "Why Visit Luxor in 2026?" },
    { id: "safety", label: "Is Luxor Safe? (Real Answers + Tips)" },
    { id: "best-time", label: "Best Time to Visit Luxor (Weather, Crowds & Prices)" },
    { id: "days", label: "How Many Days in Luxor?" },
    { id: "must-see", label: "Must-See Temples & Sites" },
    { id: "itinerary-2", label: "Perfect 2-Day Luxor Itinerary" },
    { id: "itinerary-3", label: "3-Day VIP Itinerary Upgrade" },
    { id: "costs", label: "Costs, Tickets & Budget Tips" },
    { id: "tours", label: "Best Tours in Luxor (Private & VIP)" },
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

      {/* Sticky CTA */}
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
        {/* Breadcrumbs */}
        <nav className="text-xs text-white/60 mb-6">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-yellow-300 transition">
            Blog
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-white/80">Luxor Travel Guide</span>
        </nav>

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_circle_at_20%_20%,rgba(234,179,8,0.18),transparent_60%)]" />
          <div className="relative">
            <p className="text-xs md:text-sm tracking-widest uppercase text-yellow-300/80">
              El Khazany Tour • Luxor • VIP Guide
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
              Luxor Travel Guide
              <span className="block text-white/80 text-2xl md:text-3xl font-semibold mt-3">
                (2026): Temples, Itinerary, Tips & Best Tours
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
              Planning Luxor the premium way? This guide gives you the must-see temples, a clean
              2–3 day itinerary, safety + scam-avoidance tips, the best time to visit, and the
              most comfortable way to explore Luxor: a VIP private tour with a licensed guide and
              premium A/C vehicle.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Plan My Luxor Trip →{" "}
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
                Ideal stay: 2–3 days
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Best season: Oct–Apr
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                VIP timing: early mornings
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Sunset: Luxor Temple + Nile
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
                Start early for comfort and fewer crowds. Save Luxor Temple for sunset/evening when
                the lighting becomes cinematic.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-white font-semibold">Crowd Strategy</p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Private touring means no rushed group schedules, better routes, and calm transitions
                between sites — Luxor feels premium, not chaotic.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-white font-semibold">Luxury Formula</p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Licensed Egyptologist guide + premium A/C vehicle + flexible timing = refined Luxor
                experience with zero stress.
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

        {/* Content Sections */}
        <div className="mt-16 space-y-14">
          <Section
            id="why-luxor"
            n="1"
            title="Why Visit Luxor in 2026?"
            vip="Luxor rewards smart planning: early starts, smooth transport, and sunset strategy."
          >
            Luxor is often called the world’s greatest open-air museum — and for good reason. In a short drive,
            you can explore colossal temples, royal tombs, and the Nile’s timeless landscape. In 2026, Luxor remains
            one of the best cultural trips on Earth — especially if you plan your timing and avoid peak crowd hours.
          </Section>

          <Section
            id="safety"
            n="2"
            title="Is Luxor Safe? Real Answers + VIP Tips"
            vip="Most ‘problems’ are not danger — they’re hassles. A private guide removes 90% of friction."
          >
            Luxor is generally considered one of the safer tourist cities in Egypt, with security around major sites,
            hotels, and tourism routes. Most issues travelers talk about are common travel hassles such as persistent
            vendors, pricing confusion, or unofficial guiding attempts. The VIP approach is simple: pre-book transport,
            use licensed guides, and keep your itinerary clean.
            <div className="mt-4">
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>
                  <strong className="text-white">Overpricing:</strong> agree on price before any service.
                </li>
                <li>
                  <strong className="text-white">Unofficial guides:</strong> use licensed Egyptologists.
                </li>
                <li>
                  <strong className="text-white">Taxi confusion:</strong> private driver = calm + premium.
                </li>
                <li>
                  <strong className="text-white">Heat:</strong> early mornings, then rest mid-day.
                </li>
              </ul>
            </div>
          </Section>

          <Section
            id="best-time"
            n="3"
            title="Best Time to Visit Luxor (Weather, Crowds & Prices)"
            vip="Oct–Apr is comfort season. Dec–Feb is peak demand. Shoulder months give best value."
          >
            October through April is generally the most comfortable season. Peak crowds often appear from December to
            February. March and April can be warm but still excellent. Summer can be very hot — if you visit then, start
            extremely early, plan indoor breaks, and keep the schedule light.
          </Section>

          <Section
            id="days"
            n="4"
            title="How Many Days in Luxor?"
            vip="2 days = highlights. 3 days = luxury pace (balloon + Nile sunset + museum)."
          >
            Most travelers need 2–3 days. Two days is the classic plan: East Bank (Karnak + Luxor Temple) and West Bank
            (Valley of the Kings + Hatshepsut + highlights). Add a third day for a sunrise balloon, museum time, and a
            calm Nile sunset experience.
          </Section>

          <Section
            id="must-see"
            n="5"
            title="Must-See Temples & Sites"
            vip="Karnak early. Valley of the Kings early. Luxor Temple at sunset. That’s the cinematic triangle."
          >
            Luxor’s must-see list is powerful even if you only have two days. The key is sequencing:
            mornings for big sites (cooler + fewer crowds), and sunset for Luxor Temple + the Nile.
            <div className="mt-4">
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li><strong className="text-white">Karnak Temple:</strong> Hypostyle Hall + sacred lake.</li>
                <li><strong className="text-white">Luxor Temple:</strong> sunset/evening lighting is unreal.</li>
                <li><strong className="text-white">Valley of the Kings:</strong> choose tombs strategically.</li>
                <li><strong className="text-white">Hatshepsut Temple:</strong> dramatic architecture + cliff backdrop.</li>
                <li><strong className="text-white">Colossi of Memnon:</strong> iconic quick photo stop.</li>
              </ul>
            </div>
          </Section>

          <Section
            id="itinerary-2"
            n="6"
            title="Perfect 2-Day Luxor Itinerary"
            vip="Day 1: East Bank + sunset. Day 2: West Bank early. Keep it clean and premium."
          >
            <div className="mt-2 space-y-4 text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white font-semibold">Day 1 — East Bank + Sunset</p>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>08:00 Pickup (hotel/cruise dock)</li>
                  <li>08:30 Karnak Temple (guided)</li>
                  <li>12:00 Lunch + rest</li>
                  <li>16:30 Luxor Temple (golden hour → evening)</li>
                  <li>19:00 Optional: Nile walk + dinner recommendations</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-white font-semibold">Day 2 — West Bank Highlights</p>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>07:00 Valley of the Kings (best timing)</li>
                  <li>10:30 Hatshepsut Temple</li>
                  <li>12:00 Colossi of Memnon (quick stop)</li>
                  <li>13:00 Lunch + rest</li>
                  <li>15:30 Optional: curated artisan stops (only trusted places)</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section
            id="itinerary-3"
            n="7"
            title="3-Day VIP Itinerary Upgrade"
            vip="Day 3 is where Luxor becomes luxury: balloon + museum + Nile sunset experience."
          >
            With 3 days, Luxor becomes calmer and more premium. Add a sunrise balloon, include the Luxor Museum for
            context and comfort, and end with a Nile sunset experience (felucca or private boat).
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/blog/top-10-things-to-do-in-luxor" className="text-yellow-400 underline">
                Top 10 Things to Do in Luxor (VIP) →
              </Link>
              <Link href="/blog/best-sunset-in-luxor" className="text-yellow-400 underline">
                Best Sunset in Luxor →
              </Link>
            </div>
          </Section>

          <Section
            id="costs"
            n="8"
            title="Costs, Tickets & Budget Tips"
            vip="Biggest hidden cost is time + friction. Premium planning saves hours and energy."
          >
            Luxor costs vary by season and what you choose: private transport vs taxis, guide vs solo, and how many sites
            you pack into a day. The VIP mindset: don’t overload. Start early, move efficiently, and avoid low-quality
            stops that waste your time.
            <div className="mt-4 rounded-2xl border border-yellow-500/25 bg-yellow-500/10 p-4">
              <p className="text-sm text-yellow-200">
                <span className="font-semibold">VIP Tip:</span> If you want the smoothest experience, pre-book a private
                itinerary (guide + premium A/C vehicle). It reduces stress and improves quality across the entire trip.
              </p>
            </div>
          </Section>

          <Section
            id="tours"
            n="9"
            title="Best Tours in Luxor (Private & VIP)"
            vip="Licensed Egyptologist + premium vehicle + flexible timing = the best Luxor tour."
          >
            The best Luxor tour is not the fastest tour — it’s the tour that feels effortless. A licensed Egyptologist
            transforms temples into stories, and a premium vehicle turns transfers into comfort. That’s how we run
            experiences at <strong className="text-white">El Khazany Tour</strong>.
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="text-yellow-400 underline">
                Contact & Get a Quote →
              </Link>
              <Link href="/tours" className="text-yellow-400 underline">
                Browse Tours →
              </Link>
              <Link href="/blog/luxury-private-tours-in-luxor" className="text-yellow-400 underline">
                Luxury Private Tours in Luxor →
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
            Tell us your dates and interests — we’ll craft a premium private itinerary with the best timing,
            smooth logistics, and a guide who makes Luxor unforgettable.
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

          <div className="mt-4 text-gray-300 leading-relaxed">{children}</div>

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