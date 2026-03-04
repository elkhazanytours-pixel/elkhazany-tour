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
  excerpt: "Plan the perfect Luxor trip with the best months to visit, crowd levels, weather tips, and pricing seasons.",
  readingMinutes: 5,
  date: "Mar 01, 2026",
},

{
  slug: "is-luxor-safe",
  category: "Luxor",
  title: "Is Luxor Safe for Tourists? (2026 Safety Guide)",
  excerpt: "A practical safety guide for visiting Luxor — what to expect, common hassles, and VIP private tour tips for a smooth experience.",
  readingMinutes: 6,
  date: "Mar 01, 2026",
},

{
  slug: "luxor-vs-aswan",
  category: "Upper Egypt",
  title: "Luxor vs Aswan: Which One Should You Visit? (2026 Guide)",
  excerpt: "Compare Luxor and Aswan for your Egypt trip — temples vs calm Nile vibe, time needed, and the best VIP itinerary options.",
  readingMinutes: 7,
  date: "Mar 01, 2026",
},

{
  slug: "top-10-things-to-do-in-luxor",
  category: "Luxor",
  title: "Top 10 Things to Do in Luxor (VIP Edition – 2026 Guide)",
  excerpt: "The ultimate VIP Luxor guide — top experiences, best timing, crowd strategy, and premium private touring insights.",
  readingMinutes: 9,
  date: "Mar 01, 2026",
},

{
  title: "Best Sunset in Luxor (2026) — Time, Best Spots & Private Options",
  slug: "best-sunset-in-luxor",
  excerpt:
    "The ultimate Luxor sunset guide: best spots, ideal timing, West Bank vs East Bank, and private luxury options like a felucca sail.",
  tag: "Luxor Guide",
},

{
  slug: "luxor-travel-guide-2026",
  category: "Luxor",
  date: "Mar 04, 2026",
  readTime: "9 min read",
  title: "Luxor Travel Guide (2026): Temples, Itinerary, Tips & Best Tours",
  excerpt:
    "The ultimate Luxor travel guide — temples, a practical 2–3 day itinerary, safety tips, best time to visit, and VIP private tour options.",
},
  // 🔥 لما تعمل مقالات جديدة، زودهم هنا بنفس الشكل
  // {
  //   slug: "best-time-to-visit-luxor",
  //   category: "Luxor",
  //   title: "Best Time to Visit Luxor (Weather, Crowds & Prices)",
  //   excerpt: "Plan the perfect Luxor trip with the ideal season breakdown...",
  //   readingMinutes: 5,
  //   date: "Mar 02, 2026",
  // },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
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

        <h2 className="mt-14 text-3xl font-semibold">Latest Articles</h2>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-2 text-xs text-white/70">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  {p.category}
                </span>
                <span>•</span>
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readingMinutes} min read</span>
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