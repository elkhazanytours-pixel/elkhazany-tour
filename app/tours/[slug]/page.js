import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { getTourBySlug } from "../../../lib/tours";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found | El Khazany Tour",
      description: "The requested tour could not be found.",
    };
  }

  return {
    title: `${tour.title} | El Khazany Tour`,
    description: tour.shortDesc,
    openGraph: {
      title: `${tour.title} | El Khazany Tour`,
      description: tour.shortDesc,
      images: [{ url: tour.image }],
      type: "website",
    },
  };
}

export default async function TourDetailsPage({ params }) {
  const { slug } = await params; // ✅ ده اللي بيصلّح مشكلة undefined في Next 16
  const tour = getTourBySlug(slug);

  if (!tour) {
    return (
      <main className="min-h-screen bg-[#0B0B0F] text-white">
        <Navbar />
        <div className="pt-40 text-center px-6">
          <h1 className="text-3xl font-bold">Tour not found</h1>
          <p className="mt-4 text-gray-400">
            This tour does not exist in lib/tours.js
          </p>

          <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm text-gray-300">
              URL slug:{" "}
              <span className="text-yellow-300">{String(slug)}</span>
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

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/12 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <div className="relative h-[420px]">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0" />
            </div>

            <div className="p-10 md:p-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      👑 {tour.type}
                    </span>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <div className="text-3xl font-bold text-yellow-400">
                    ${tour.price}
                  </div>

                  <Link
                    href={`/booking?tour=${encodeURIComponent(tour.title)}`}
                    className="inline-block mt-4 px-10 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02] transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="md:col-span-1 bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-8">
              <h2 className="text-2xl font-[var(--font-playfair)] font-bold mb-5">
                Highlights
              </h2>

              <ul className="space-y-3 text-gray-300 font-[var(--font-inter)]">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-yellow-400">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-8">
              <h2 className="text-2xl font-[var(--font-playfair)] font-bold mb-6">
                Itinerary
              </h2>

              <div className="space-y-5">
                {tour.itinerary.map((d, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-black/30 border border-white/10 hover:border-yellow-500/40 transition"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-semibold text-yellow-300">
                        {d.day}
                      </div>
                      <div className="text-white font-semibold">{d.title}</div>
                    </div>
                    <p className="mt-3 text-gray-300 font-[var(--font-inter)]">
                      {d.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-block px-10 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
            >
              Back to Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}