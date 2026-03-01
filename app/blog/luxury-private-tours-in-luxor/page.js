import Link from "next/link";

export const metadata = {
  title: "Luxury Private Tours in Luxor | VIP Egypt Experiences (2026)",
  description:
    "Discover luxury private tours in Luxor with licensed Egyptologist guides, premium vehicles, VIP itineraries, and fast WhatsApp response in 5 minutes.",
  alternates: {
    canonical: "/luxury-private-tours-in-luxor",
  },
  openGraph: {
    title: "Luxury Private Tours in Luxor | VIP Egypt Experiences (2026)",
    description:
      "Exclusive private tours in Luxor with premium transportation, expert Egyptologist guides, and tailor-made itineraries.",
    url: "/luxury-private-tours-in-luxor",
    siteName: "El Khazany Tour",
    type: "article",
  },
};

export default function LuxuryLuxorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Luxor safe for private travelers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Luxor is considered one of Egypt’s safest tourist destinations. Booking with a licensed operator and a professional guide ensures a smooth, secure experience.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize my itinerary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our private tours are flexible and can be tailored to your interests, timing, and comfort level.",
        },
      },
      {
        "@type": "Question",
        name: "How fast do you respond?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We typically reply within 5 minutes via WhatsApp or phone.",
        },
      },
      {
        "@type": "Question",
        name: "What’s included in a luxury private tour in Luxor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most luxury private tours include a private air-conditioned vehicle, a licensed Egyptologist guide, flexible timing, and door-to-door hotel pickup and drop-off. Inclusions can vary based on your preferences.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* ✅ SEO: FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_circle_at_20%_20%,rgba(234,179,8,0.18),transparent_60%)]" />
          <div className="relative">
            <p className="text-xs md:text-sm tracking-widest uppercase text-yellow-300/80">
              El Khazany Tour • Luxor • VIP Private Experiences
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
              Luxury Private Tours in Luxor
              <span className="block text-white/80 text-2xl md:text-3xl font-semibold mt-3">
                Exclusive Egypt Experiences (2026)
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
              Luxor is one of the most extraordinary destinations in the world —
              home to the Valley of the Kings, Karnak Temple, and centuries of
              ancient Egyptian history. If you want a refined, stress-free
              journey, a luxury private tour lets you explore at your own pace
              with a dedicated licensed Egyptologist guide and premium
              transportation.
            </p>

            {/* Internal linking */}
            <p className="mt-5 text-gray-300">
              Explore our full collection of{" "}
              <Link href="/tours" className="text-yellow-400 underline">
                luxury tours in Egypt
              </Link>{" "}
              curated for travelers who value privacy, comfort, and authenticity.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Request Your Private Tour →
              </Link>

              <Link
                href="/tours"
                className="inline-flex items-center justify-center border border-white/15 bg-white/5 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Browse Luxury Tours
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Reply in ~5 minutes
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Private Egyptologist guide
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Premium A/C vehicle
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Hotel pickup & drop-off
              </span>
            </div>
          </div>
        </div>

        {/* Why choose */}
        <h2 className="mt-14 text-3xl font-semibold">
          Why Choose a Luxury Private Tour in Luxor?
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Licensed Egyptologist Guide",
              desc: "Expert storytelling, context, and depth that turns every temple into a living chapter of history.",
            },
            {
              title: "Premium Private Transportation",
              desc: "Luxury air-conditioned vehicle with a professional driver for a smooth, quiet, comfortable day.",
            },
            {
              title: "Flexible VIP Scheduling",
              desc: "Start early for golden light, avoid crowds, and shape the pace around your comfort.",
            },
            {
              title: "Zero Rush, Zero Groups",
              desc: "No waiting for buses — just you, your guide, and a refined experience from start to finish.",
            },
            {
              title: "Door-to-Door Convenience",
              desc: "Seamless pickup and drop-off from your hotel or Nile cruise, with clear planning.",
            },
            {
              title: "Cinematic Moments",
              desc: "We help you capture the best viewpoints and timing for unforgettable photos and memories.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400">✔</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Most requested tours */}
        <h2 className="mt-14 text-3xl font-semibold">
          Our Most Requested Private Tours
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white">
              Luxury Nile River Cruise
            </h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Experience the Nile in elegance with curated stops, expert guides,
              and unforgettable scenery between Luxor and Aswan.
            </p>
            <Link
              href="/tours/luxury-nile-river-cruise"
              className="inline-flex mt-4 text-yellow-400 underline"
            >
              View Tour →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white">
              Pyramids & Sphinx Exclusive Tour
            </h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              A premium guided journey to Cairo and Giza featuring private
              transportation and in-depth historical commentary.
            </p>
            <Link
              href="/tours/pyramids-sphinx-exclusive"
              className="inline-flex mt-4 text-yellow-400 underline"
            >
              View Tour →
            </Link>
          </div>
        </div>

        {/* Pricing */}
        <h2 className="mt-14 text-3xl font-semibold">
          How Much Do Private Tours in Luxor Cost?
        </h2>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-300 leading-relaxed">
            Private tours in Luxor typically range between{" "}
            <span className="text-white font-semibold">$120 and $350 per day</span>{" "}
            depending on inclusions (vehicle type, guide, entry tickets, and
            itinerary customization). At El Khazany Tour, we keep pricing
            transparent and tailor each experience to match your travel style.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Want a fast quote? Message us your{" "}
            <span className="text-white font-semibold">date</span>,{" "}
            <span className="text-white font-semibold">number of travelers</span>,
            and{" "}
            <span className="text-white font-semibold">preferred sites</span>{" "}
            (Karnak, Valley of the Kings, Hatshepsut, Luxor Temple), and we’ll
            reply quickly.
          </p>
        </div>

        {/* Best time */}
        <h2 className="mt-14 text-3xl font-semibold">
          Best Time to Book a Private Tour in Luxor
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed">
          The ideal months to visit Luxor are{" "}
          <span className="text-white font-semibold">October through April</span>{" "}
          when temperatures are milder. During peak season, luxury private tours
          are especially valuable to avoid crowds and enjoy personalized attention.
        </p>

        {/* FAQ */}
        <h2 className="mt-14 text-3xl font-semibold">Frequently Asked Questions</h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-semibold">Is Luxor safe for private travelers?</p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Yes. Luxor is considered one of Egypt’s safest tourist destinations,
              especially when booking with a licensed professional operator.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-semibold">Can I customize my itinerary?</p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Absolutely. All experiences are flexible — we tailor timing,
              sites, and pace to your interests and comfort.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-semibold">How fast do you respond?</p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              We reply within ~5 minutes via WhatsApp or phone (when available).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-semibold">What’s included in a luxury private tour?</p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Typically: private A/C vehicle, licensed Egyptologist guide, flexible
              schedule, and hotel pickup/drop-off. Add-ons can include tickets,
              upgrades, and special stops based on your request.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-14 p-8 border border-yellow-500/30 rounded-3xl bg-gradient-to-br from-yellow-500/12 to-transparent">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Book Your Private Luxury Tour in Luxor
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Message us on WhatsApp or call — we’ll craft a premium itinerary
            designed exclusively for you: smooth logistics, elegant vehicle, and
            a guide who brings Luxor to life.
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
              View All Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}