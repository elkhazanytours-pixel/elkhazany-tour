import Link from "next/link";
import Script from "next/script";
import Navbar from "../../../components/Navbar";
import { getTourBySlug, getTourPriceFrom, formatUSD } from "../../../lib/tours";

/** ✅ Resolve absolute base URL safely (Vercel + Local + Future domain) */
function getBaseUrl() {
  // لو حبيت بعدين تربط دومينك الأساسي: حط NEXT_PUBLIC_SITE_URL في Vercel env
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "https://elkhazany-tour.vercel.app";
  return envUrl.replace(/\/$/, "");
}

function absoluteUrl(pathOrUrl) {
  const base = getBaseUrl();
  if (!pathOrUrl) return `${base}/og-default.jpg`;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return `${base}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

// ✅ Next 16: params ممكن تكون Promise
export async function generateMetadata({ params }) {
  const p = await params;
  const tour = getTourBySlug(p.slug);

  const base = getBaseUrl();

  if (!tour) {
    return {
      title: "Tour Not Found | El Khazany Tour",
      description: "This tour slug does not exist.",
      alternates: { canonical: `${base}/tours/${p.slug}` },
      robots: { index: false, follow: true },
    };
  }

  const title = `${tour.title} | Luxury Egypt Experience – El Khazany Tour`;
  const description =
    tour.shortDesc ||
    "Luxury private tours in Egypt — curated VIP experiences with licensed guides and premium service.";

  const canonical = `${base}/tours/${tour.slug}`;
  const ogImage = absoluteUrl(tour.image);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "El Khazany Tour",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function TourDetailsPage({ params }) {
  const p = await params;
  const tour = getTourBySlug(p.slug);

  if (!tour) {
    return (
      <main className="min-h-screen bg-[#0B0B0F] text-white">
        <Navbar />
        <div className="pt-40 text-center px-6">
          <h1 className="text-3xl font-bold">Tour not found</h1>
          <p className="mt-4 text-gray-400">This tour slug does not exist in lib/tours.js</p>
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

  const base = getBaseUrl();
  const canonical = `${base}/tours/${tour.slug}`;
  const ogImage = absoluteUrl(tour.image);

  const from = getTourPriceFrom(tour);

  // ✅ Schema (TouristTrip + Offer) — URLs + image absolute
  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.shortDesc,
    url: canonical,
    image: ogImage,
    itinerary: tour.location ? [{ "@type": "Place", name: tour.location }] : undefined,
    provider: {
      "@type": "TravelAgency",
      name: "El Khazany Tour",
      email: "elkhazanytours@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Luxor", addressCountry: "EG" },
    },
    offers: {
      "@type": "Offer",
      price: from ?? undefined,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: canonical,
    },
  };

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this tour private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most experiences are available as private or VIP options.",
        },
      },
      {
        "@type": "Question",
        name: "Are there hidden fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We keep pricing transparent and clarify inclusions before confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click Book Now, choose your package, and our team will confirm details instantly.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="tour-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#0B0B0F] text-white">
        <Navbar />

        <section className="pt-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="relative h-[380px]">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold">
                    {tour.title}
                  </h1>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                    <span className="px-3 py-2 rounded-full bg-black/35 border border-white/10">
                      ⌛ {tour.duration}
                    </span>
                    <span className="px-3 py-2 rounded-full bg-black/35 border border-white/10">
                      📍 {tour.location}
                    </span>
                    <span className="px-3 py-2 rounded-full bg-black/35 border border-yellow-500/20 text-yellow-200">
                      👑 {tour.type}
                    </span>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-yellow-500/95 text-black font-semibold px-5 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                  From ${formatUSD(from)}
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-300 font-[var(--font-inter)] max-w-3xl">
                  {tour.shortDesc}
                </p>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  {tour.packages?.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`rounded-3xl border p-6 bg-black/25 backdrop-blur ${
                        pkg.recommended
                          ? "border-yellow-500/35 shadow-[0_0_35px_rgba(255,200,0,0.18)]"
                          : "border-white/10"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-lg font-semibold">{pkg.name}</div>
                          <div className="mt-1 text-xs text-white/60">
                            {pkg.recommended ? "Recommended" : "Premium option"}
                          </div>
                        </div>

                        <div className="text-xl font-bold text-yellow-300">
                          ${formatUSD(pkg.price)}
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-white/75">
                        {pkg.features?.map((f) => (
                          <li key={f}>✓ {f}</li>
                        ))}
                      </ul>

                      <div className="mt-6 flex gap-3">
                        {/* ✅ Improved booking URL: pass slug + price for 100% consistency */}
                        <Link
                          href={`/booking?tour=${encodeURIComponent(
                            tour.title
                          )}&slug=${encodeURIComponent(tour.slug)}&package=${encodeURIComponent(
                            pkg.name
                          )}&price=${encodeURIComponent(pkg.price)}`}
                          className="flex-1 text-center px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02] transition"
                        >
                          Book Now
                        </Link>

                        <Link
                          href="/contact"
                          className="px-6 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                        >
                          Ask
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/tours"
                    className="inline-block px-8 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                  >
                    Back to Tours
                  </Link>
                </div>

                {/* (اختياري) Canonical visible debug — امسحه لو مش محتاجه */}
                {/* <p className="mt-6 text-xs text-white/30">Canonical: {canonical}</p> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}