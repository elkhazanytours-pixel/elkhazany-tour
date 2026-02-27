"use client";

import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import HeroParallax from "../components/HeroParallax";
import TrustBar from "../components/TrustBar";
import TestimonialsSwiper from "../components/TestimonialsSwiper";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0B0B0F] text-white">
      <Navbar />

      {/* Ultra Premium Hero */}
      <HeroParallax />

      {/* Trust Layer */}
      <TrustBar />

      {/* Featured Tours */}
      <section className="py-24 bg-[#0B0B0F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-5xl md:text-6xl font-[var(--font-playfair)] font-bold">
                Featured{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Tours
                </span>
              </h2>
              <p className="mt-4 text-gray-300 font-[var(--font-inter)]">
                Handpicked exclusive experiences designed for the discerning
                traveler
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Pyramids & Sphinx Exclusive",
                price: "$2,499",
                img: "/pyramids.jpg",
                desc: "Private guided tour of the Great Pyramids and Sphinx.",
              },
              {
                title: "Luxury Nile River Cruise",
                price: "$3,999",
                img: "/nile.jpg",
                desc: "5-star cruise along the Nile with temple stops.",
              },
              {
                title: "Abu Simbel Adventure",
                price: "$1,899",
                img: "/abu-simbel.jpg",
                desc: "Explore the magnificent temples of Ramesses II.",
              },
              {
                title: "Red Sea Paradise",
                price: "$2,299",
                img: "/red-sea.jpg",
                desc: "Luxury resort stay with diving & safari.",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:shadow-[0_0_45px_rgba(255,200,0,0.22)] transition">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
                    <div className="absolute top-4 right-4 bg-yellow-500/90 text-black font-semibold px-5 py-2 rounded-full">
                      {t.price}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">
                      {t.title}
                    </h3>

                    <p className="text-gray-300 font-[var(--font-inter)] text-sm leading-relaxed mb-6">
                      {t.desc}
                    </p>

                    <a
                      href="/tours"
                      className="block text-center px-6 py-3 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Swiper Ultra Premium) */}
      <section className="py-24 bg-[#07070A] text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="text-5xl md:text-6xl font-[var(--font-playfair)] font-bold">
                Client{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h2>
              <p className="mt-4 text-gray-300 font-[var(--font-inter)]">
                What our VIP travelers say about their Egyptian adventures
              </p>
            </div>
          </Reveal>

          <TestimonialsSwiper />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0B0B0F] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/12 blur-3xl rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

              <h3 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold">
                Ready for a{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  VIP Journey
                </span>
                ?
              </h3>

              <p className="mt-5 text-gray-300 font-[var(--font-inter)] max-w-2xl mx-auto">
                Tell us your dream itinerary — we’ll craft a luxury experience
                with private guiding, premium comfort, and unforgettable moments.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="px-10 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.45)] hover:scale-[1.02] transition"
                >
                  Book Now
                </a>
                <a
                  href="/contact"
                  className="px-10 py-4 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                >
                  Contact VIP Team
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}