import Link from "next/link";

export const metadata = {
  title: "Guides | El Khazany Tour",
  description:
    "Luxury travel guides and premium Egypt insights by El Khazany Tour.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "luxury-private-tours-in-luxor",
    category: "Luxor",
    title: "Luxury Private Tours in Luxor | VIP Egypt Experiences (2026)",
    excerpt:
      "Discover luxury private tours in Luxor with licensed Egyptologist guides, premium vehicles, VIP itineraries, and fast WhatsApp response.",
    readingMinutes: 6,
    date: "Mar 01, 2026",
  },

  {
    slug: "best-time-to-visit-luxor",
    category: "Luxor",
    title: "Best Time to Visit Luxor (Weather, Crowds & Prices)",
    excerpt:
      "Plan the perfect Luxor trip with the best months to visit, crowd levels, weather tips, and pricing seasons.",
    readingMinutes: 5,
    date: "Mar 01, 2026",
  },

  {
    slug: "is-luxor-safe",
    category: "Luxor",
    title: "Is Luxor Safe for Tourists? (2026 Safety Guide)",
    excerpt:
      "A practical safety guide for visiting Luxor — what to expect, common hassles, and VIP private tour tips for a smooth experience.",
    readingMinutes: 6,
    date: "Mar 01, 2026",
  },

  {
    slug: "luxor-vs-aswan",
    category: "Upper Egypt",
    title: "Luxor vs Aswan: Which One Should You Visit? (2026 Guide)",
    excerpt:
      "Compare Luxor and Aswan for your Egypt trip — temples vs calm Nile vibe, time needed, and the best VIP itinerary options.",
    readingMinutes: 7,
    date: "Mar 01, 2026",
  },

  {
    slug: "top-10-things-to-do-in-luxor",
    category: "Luxor",
    title: "Top 10 Things to Do in Luxor (VIP Edition – 2026 Guide)",
    excerpt:
      "The ultimate VIP Luxor guide — top experiences, best timing, crowd strategy, and premium private touring insights.",
    readingMinutes: 9,
    date: "Mar 01, 2026",
  },

  // ✅ Normalize fields (was: tag only)
  {
    slug: "best-sunset-in-luxor",
    category: "Luxor",
    title: "Best Sunset in Luxor (2026) — Time, Best Spots & Private Options",
    excerpt:
      "The ultimate Luxor sunset guide: best spots, ideal timing, West Bank vs East Bank, and private luxury options like a felucca sail.",
    readingMinutes: 6,
    date: "Mar 01, 2026",
  },

  // ✅ Normalize fields (was: readTime)
  {
    slug: "luxor-travel-guide-2026",
    category: "Luxor",
    title: "Luxor Travel Guide (2026): Temples, Itinerary, Tips & Best Tours",
    excerpt:
      "The ultimate Luxor travel guide — temples, a practical 2–3 day itinerary, safety tips, best time to visit, and VIP private tour options.",
    readingMinutes: 10,
    date: "Mar 04, 2026",
  },

  // 🔥 لما تعمل مقالات جديدة، زودهم هنا بنفس الشكل
];

function parseDate(dateStr) {
  // Handles "Mar 04, 2026" safely; fallback to 0 if invalid
  const t = Date.parse(dateStr || "");
  return Number.isFinite(t) ? t : 0;
}

export default function BlogIndexPage() {
  const FEATURED_SLUG = "luxor-travel-guide-2026";

  // Sort newest first
  const sorted = [...posts].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  // Pick featured (prefer featured slug; fallback to newest)
  const featured =
    sorted.find((p) => p.slug === FEATURED_SLUG) || sorted[0];

  // Remaining posts
  const rest = sorted.filter((p) => p.slug !== featured?.slug);

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_circle_at_20%_20%,rgba(234,179,8,0.16),transparent_60%)]" />
          <div className="relative">
            <p className="text-xs md:text-sm tracking-widest uppercase text-yellow-300/80">
              El Khazany Tour • Luxury Travel Insights
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
              Guides
            </h1>
            <p className="mt-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
              Premium travel knowledge, Luxor expertise, and private tour planning — curated with the same standard we deliver in every experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Explore Tours →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* ✅ FEATURED GUIDE */}
        {featured && (
          <div className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold">Featured Guide</h2>
              <span className="text-xs text-white/60">
                Our pillar guide (recommended starting point)
              </span>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="mt-6 group block relative overflow-hidden rounded-3xl border border-yellow-500/25 bg-gradient-to-br from-yellow-500/12 via-white/5 to-transparent p-8 md:p-10 hover:from-yellow-500/16 hover:via-white/8 transition"
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_circle_at_10%_20%,rgba(234,179,8,0.22),transparent_60%)]" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
                  <span className="px-3 py-1 rounded-full border border-yellow-500/25 bg-yellow-500/10 text-yellow-200">
                    Pillar Guide
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    {featured.category || "Guide"}
                  </span>
                  <span>•</span>
                  <span>{featured.date || "—"}</span>
                  <span>•</span>
                  <span>{featured.readingMinutes || 8} min read</span>
                </div>

                <h3 className="mt-4 text-2xl md:text-4xl font-semibold text-white group-hover:text-yellow-200 transition">
                  {featured.title}
                </h3>

                <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
                  {featured.excerpt}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-yellow-300 underline underline-offset-4">
                  Read the featured guide →
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* LATEST ARTICLES */}
        <h2 className="mt-14 text-3xl font-semibold">Latest Articles</h2>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-2 text-xs text-white/70">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  {p.category || "Guide"}
                </span>
                <span>•</span>
                <span>{p.date || "—"}</span>
                <span>•</span>
                <span>{p.readingMinutes || 8} min read</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-yellow-300 transition">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{p.excerpt}</p>

              <div className="mt-5 text-yellow-400 underline">Read →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}