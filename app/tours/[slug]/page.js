import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Navbar from "../../../components/Navbar";
import { getTourBySlug, getTourPriceFrom, formatUSD } from "../../../lib/tours";

function getBaseUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "https://elkhazanytour.com";
  return envUrl.replace(/\/$/, "");
}

function absoluteUrl(pathOrUrl) {
  const base = getBaseUrl();
  if (!pathOrUrl) return `${base}/og-default.jpg`;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return `${base}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export async function generateMetadata({ params }) {
  const p = await params;
  const base = getBaseUrl();
  const tour = getTourBySlug(p.slug);

  if (!tour) {
    return {
      title: "Tour Not Found | El Khazany Tour",
      description: "This tour does not exist. Browse our full range of luxury Egypt experiences.",
      alternates: { canonical: `${base}/tours/${p.slug}` },
      robots: { index: false, follow: true },
    };
  }

  const title = `${tour.title} | Luxury Private Egypt Tour`;
  const description =
    tour.longDesc
      ? tour.longDesc.slice(0, 155).trimEnd() + "…"
      : tour.shortDesc;

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${tour.title} — El Khazany Tour Egypt` }],
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
          <p className="mt-4 text-gray-400">This tour does not exist in our current catalogue.</p>
          <Link
            href="/tours"
            className="inline-block mt-8 px-8 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
          >
            Browse All Tours
          </Link>
        </div>
      </main>
    );
  }

  const base = getBaseUrl();
  const canonical = `${base}/tours/${tour.slug}`;
  const ogImage = absoluteUrl(tour.image);
  const from = getTourPriceFrom(tour);

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.longDesc || tour.shortDesc,
    url: canonical,
    image: ogImage,
    touristType: "Luxury Traveller",
    itinerary: {
      "@type": "ItemList",
      itemListElement: (tour.highlights || []).map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h,
      })),
    },
    provider: {
      "@type": "TravelAgency",
      name: "El Khazany Tour",
      url: base,
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

  const faqItems = (tour.faqs || [
    { question: "Is this tour private?", answer: "Yes. All experiences are fully private — your group only, with a dedicated guide." },
    { question: "Are there hidden fees?", answer: "No. We keep pricing transparent and clarify all inclusions before confirmation." },
    { question: "How do I book?", answer: "Click Book Now, choose your package, and our team will confirm details instantly via WhatsApp." },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Tours", item: `${base}/tours` },
      { "@type": "ListItem", position: 3, name: tour.title, item: canonical },
    ],
  };

  return (
    <>
      <Script id="tour-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-[#0B0B0F] text-white">
        <Navbar />

        <section className="pt-28">
          <div className="max-w-6xl mx-auto px-6">

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-400 font-[var(--font-inter)]">
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
              <span>/</span>
              <Link href="/tours" className="hover:text-yellow-400 transition">Tours</Link>
              <span>/</span>
              <span className="text-yellow-300">{tour.title}</span>
            </nav>

            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Hero image */}
              <div className="relative h-[380px]">
                <Image
                  src={tour.image}
                  alt={`${tour.title} — Private Luxury Tour in Egypt`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  quality={80}
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold">{tour.title}</h1>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                    <span className="px-3 py-2 rounded-full bg-black/35 border border-white/10">⌛ {tour.duration}</span>
                    <span className="px-3 py-2 rounded-full bg-black/35 border border-white/10">📍 {tour.location}</span>
                    <span className="px-3 py-2 rounded-full bg-black/35 border border-yellow-500/20 text-yellow-200">👑 {tour.type}</span>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-yellow-500/95 text-black font-semibold px-5 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                  From ${formatUSD(from)}
                </div>
              </div>

              <div className="p-8">
                {/* Short description */}
                <p className="text-gray-300 font-[var(--font-inter)] max-w-3xl text-lg leading-relaxed">
                  {tour.shortDesc}
                </p>

                {/* Long description */}
                {tour.longDesc && (
                  <div className="mt-6 max-w-3xl">
                    <h2 className="text-2xl font-[var(--font-playfair)] font-bold mb-3 text-white">
                      About This Tour
                    </h2>
                    <p className="text-gray-300 font-[var(--font-inter)] leading-relaxed text-base">
                      {tour.longDesc}
                    </p>
                  </div>
                )}

                {/* Highlights */}
                {tour.highlights && tour.highlights.length > 0 && (
                  <div className="mt-8 max-w-3xl">
                    <h2 className="text-2xl font-[var(--font-playfair)] font-bold mb-4 text-white">
                      Tour Highlights
                    </h2>
                    <ul className="space-y-2">
                      {tour.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-gray-300 font-[var(--font-inter)] text-sm">
                          <span className="text-yellow-400 mt-0.5 flex-shrink-0">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Packages */}
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  {tour.packages?.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`rounded-3xl border p-6 bg-black/25 backdrop-blur ${
                        pkg.recommended ? "border-yellow-500/35 shadow-[0_0_35px_rgba(255,200,0,0.18)]" : "border-white/10"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-lg font-semibold">{pkg.name}</div>
                          <div className="mt-1 text-xs text-white/60">{pkg.recommended ? "Most Popular" : "Premium option"}</div>
                        </div>
                        <div className="text-xl font-bold text-yellow-300">${formatUSD(pkg.price)}</div>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-white/75">
                        {pkg.features?.map((f) => (
                          <li key={f}>✓ {f}</li>
                        ))}
                      </ul>

                      <div className="mt-6 flex gap-3">
                        <Link
                          href={`/booking?tour=${encodeURIComponent(tour.title)}&slug=${encodeURIComponent(tour.slug)}&package=${encodeURIComponent(pkg.name)}&price=${encodeURIComponent(pkg.price)}`}
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

                {/* FAQ section */}
                {faqItems.length > 0 && (
                  <div className="mt-12 max-w-3xl">
                    <h2 className="text-2xl font-[var(--font-playfair)] font-bold mb-6 text-white">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {faqItems.map((f) => (
                        <div key={f.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                          <h3 className="font-semibold text-white mb-2">{f.question}</h3>
                          <p className="text-gray-300 font-[var(--font-inter)] text-sm leading-relaxed">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10">
                  <Link
                    href="/tours"
                    className="inline-block px-8 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                  >
                    ← Back to All Tours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
