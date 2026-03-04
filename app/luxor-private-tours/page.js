export const metadata = {
  title: "Luxury Private Tours in Luxor (2026) | VIP Guides & Custom Itineraries",
  description:
    "Book a luxury private tour in Luxor with licensed Egyptologist guides, premium A/C vehicles, hotel pickup, and custom West Bank & East Bank itineraries. Fast WhatsApp support.",
  alternates: {
    canonical: "https://elkhazanytour.com/luxor-private-tours",
  },
  openGraph: {
    title: "Luxury Private Tours in Luxor (2026) | El Khazany Tour",
    description:
      "VIP private tours in Luxor with licensed Egyptologist guides, premium vehicles, and custom itineraries. Hotel pickup & fast WhatsApp support.",
    url: "https://elkhazanytour.com/luxor-private-tours",
    siteName: "El Khazany Tour",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Private Tours in Luxor (2026) | El Khazany Tour",
    description:
      "VIP private tours in Luxor with licensed Egyptologist guides, premium vehicles, and custom itineraries.",
  },
};

export default function LuxorPrivateToursPage() {
  const WHATSAPP_LINK = "https://wa.me/message/Q4WO7J4FMLEDK1?src=qr";
  const REVIEWS_LINK = "https://g.page/r/CV67RfEPBwA4EAE/review";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Luxury Private Tours in Luxor (2026)",
        url: "https://elkhazanytour.com/luxor-private-tours",
        description:
          "Luxury private tours in Luxor with licensed Egyptologist guides, premium A/C vehicles, hotel pickup, and custom itineraries.",
        isPartOf: {
          "@type": "WebSite",
          name: "El Khazany Tour",
          url: "https://elkhazanytour.com",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "El Khazany Tour",
        url: "https://elkhazanytour.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Luxor",
          addressCountry: "EG",
        },
        sameAs: [
          "https://www.instagram.com/elkhazanytours/",
          "https://www.tiktok.com/@elkhazanytours",
          "https://www.facebook.com/profile.php?id=61581448190774",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Are private tours in Luxor worth it?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes—private tours save time, avoid hassles, and deliver a smoother experience with door-to-door pickup, a licensed guide, and a custom itinerary.",
            },
          },
          {
            "@type": "Question",
            name: "How many days do I need in Luxor?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Most travelers need 2–3 days for the main highlights. A single full day can cover the essentials if planned well.",
            },
          },
          {
            "@type": "Question",
            name: "What’s included in your Luxor private tours?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Typically: licensed Egyptologist guide, premium A/C vehicle, flexible itinerary, and hotel pickup & drop-off. Exact inclusions depend on your chosen tour.",
            },
          },
          {
            "@type": "Question",
            name: "Can you customize West Bank and East Bank in one day?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. We can design a combined itinerary, but starting early is recommended to avoid crowds and heat.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="px-6 pt-28 pb-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] text-yellow-300/80 uppercase">
            El Khazany Tour • Luxor • VIP Private Experiences
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Luxury Private Tours in Luxor (2026)
          </h1>

          <p className="mt-5 text-white/75 leading-relaxed max-w-3xl">
            Explore Luxor with a licensed Egyptologist guide, premium A/C
            transportation, and a flexible itinerary built around your pace —
            from the West Bank to Karnak and Luxor Temple. Fast WhatsApp support,
            hotel pickup, and a smooth, stress-free experience.
          </p>

          {/* Trust + CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_24px_rgba(255,200,0,0.35)] transition"
            >
              Chat on WhatsApp →
            </a>

            <a
              href={REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 hover:border-yellow-500/40 hover:text-yellow-200 transition"
            >
              ★★★★★ Rated on Google
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Reply in ~5 minutes
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Premium A/C vehicle
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Hotel pickup & drop-off
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Licensed Egyptologist guide
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Main */}
          <article className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Why choose a private tour in Luxor?</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Luxor is one of the world’s greatest open-air museums — but it can
              feel overwhelming without a plan. A luxury private tour helps you
              avoid crowds, skip confusion, and experience the temples and tombs
              with context, comfort, and perfect timing.
            </p>

            <h3 className="mt-10 text-xl font-semibold">What you get with El Khazany Tour</h3>
            <ul className="mt-4 space-y-3 text-white/75 leading-relaxed list-disc pl-5">
              <li>
                <b className="text-white">Licensed Egyptologist guide</b> (clear storytelling, no unofficial guiding).
              </li>
              <li>
                <b className="text-white">Premium A/C vehicle</b> + door-to-door hotel pickup and drop-off.
              </li>
              <li>
                <b className="text-white">VIP crowd strategy</b> — smart timing to enjoy Karnak, Luxor Temple, and the tombs smoothly.
              </li>
              <li>
                <b className="text-white">Flexible itinerary</b> — you decide the pace, stops, and photo moments.
              </li>
              <li>
                <b className="text-white">Fast WhatsApp support</b> — quick answers before and during your tour.
              </li>
            </ul>

            <h3 className="mt-10 text-xl font-semibold">Most requested private tours</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "West Bank Tour",
                  desc: "Valley of the Kings + Hatshepsut Temple + Colossi of Memnon.",
                },
                {
                  title: "East Bank Tour",
                  desc: "Karnak Temple + Luxor Temple (best timing for photos).",
                },
                {
                  title: "Full-Day Luxor Highlights",
                  desc: "East + West Bank combo for a complete Luxor day.",
                },
                {
                  title: "Sunset Nile Experience",
                  desc: "Felucca-style moments + golden-hour photo stops.",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition"
                >
                  <p className="text-white font-semibold">{t.title}</p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-semibold">Best time to visit Luxor</h3>
            <p className="mt-4 text-white/75 leading-relaxed">
              For comfort, the best season is typically <b className="text-white">October to April</b>.
              Early mornings are ideal for temples and tombs — fewer crowds, cooler weather, better photos.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-black/40 border border-white/10">
              <p className="text-sm text-white/80">
                <b className="text-white">Quick Answer:</b> Luxor is generally safe for tourists,
                and most travelers need <b className="text-white">2–3 days</b>. The easiest experience is a{" "}
                <b className="text-white">private guided tour</b> with hotel pickup.
              </p>
            </div>

            <h3 className="mt-10 text-xl font-semibold">FAQ</h3>
            <div className="mt-4 space-y-4">
              {[
                {
                  q: "Is Luxor safe for tourists?",
                  a: "Luxor is considered one of the safer tourist cities in Egypt. Common issues are usually minor hassles (vendors, pricing confusion). A private tour helps keep everything smooth.",
                },
                {
                  q: "Can you customize the itinerary?",
                  a: "Yes. Tell us your hotel, dates, interests, and pace — we’ll build a VIP plan around it.",
                },
                {
                  q: "Do you offer airport transfers?",
                  a: "Yes. We can arrange premium private transfers and seamless pickup coordination.",
                },
              ].map((f) => (
                <div key={f.q} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-semibold text-white">{f.q}</p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/15 to-transparent border border-yellow-500/20">
              <h3 className="text-xl font-semibold">Ready to plan your Luxor private tour?</h3>
              <p className="mt-2 text-white/75 leading-relaxed">
                Message us on WhatsApp with your <b className="text-white">dates</b>, <b className="text-white">hotel</b>, and
                what you want to see — we’ll reply fast and design your itinerary.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_24px_rgba(255,200,0,0.35)] transition"
              >
                Request Your Private Tour →
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-28 space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white font-semibold">Top Guides</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a className="text-yellow-300 hover:text-yellow-200 transition underline underline-offset-4" href="/blog/luxor-travel-guide-2026">
                      Luxor Travel Guide (2026)
                    </a>
                  </li>
                  <li>
                    <a className="text-yellow-300 hover:text-yellow-200 transition underline underline-offset-4" href="/blog/best-time-to-visit-luxor">
                      Best Time to Visit Luxor
                    </a>
                  </li>
                  <li>
                    <a className="text-yellow-300 hover:text-yellow-200 transition underline underline-offset-4" href="/blog/top-10-things-to-do-in-luxor">
                      Top 10 Things to Do in Luxor
                    </a>
                  </li>
                  <li>
                    <a className="text-yellow-300 hover:text-yellow-200 transition underline underline-offset-4" href="/blog/is-luxor-safe">
                      Is Luxor Safe? (2026)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white font-semibold">Trust</p>
                <a
                  href={REVIEWS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-white/80 hover:text-yellow-200 transition"
                >
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm">Leave a Google Review</span>
                </a>
                <p className="mt-3 text-xs text-white/55">
                  Real traveler feedback helps others book with confidence.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white font-semibold">Fast Booking</p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Send: dates + hotel + number of guests + must-see places.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center px-5 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_24px_rgba(255,200,0,0.35)] transition"
                >
                  WhatsApp Now →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}