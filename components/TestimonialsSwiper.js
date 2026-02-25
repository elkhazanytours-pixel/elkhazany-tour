"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function TestimonialsSwiper() {
  const items = [
    {
      name: "Sarah Thompson",
      country: "London, UK",
      text: "El Khazany Tour exceeded all expectations. The private Nile cruise was magical — every detail felt VIP and effortless.",
      img: "/avatar1.jpg",
      stars: 5,
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      text: "Remarkable service and flawless logistics. We avoided crowds and experienced Egypt in the most elegant way possible.",
      img: "/avatar2.jpg",
      stars: 5,
    },
    {
      name: "Isabella Martinez",
      country: "Madrid, Spain",
      text: "A once-in-a-lifetime journey. Luxury hotels, private guides, and a perfectly curated itinerary from start to finish.",
      img: "/avatar3.jpg",
      stars: 5,
    },
    {
      name: "James Wilson",
      country: "Toronto, Canada",
      text: "Everything felt premium — timing, comfort, and knowledge. The experience was cinematic and deeply authentic.",
      img: "/avatar4.jpg",
      stars: 5,
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 160,
          modifier: 1.25,
          slideShadows: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-14"
      >
        {items.map((t, idx) => (
          <SwiperSlide key={t.name + idx}>
            <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:shadow-[0_0_45px_rgba(255,200,0,0.18)] transition">
              <div className="flex gap-1 text-yellow-400 mb-5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s}>★</span>
                ))}
              </div>

              <p className="text-gray-300 font-[var(--font-inter)] leading-relaxed">
                “{t.text}”
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-yellow-500/40">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-[var(--font-playfair)] text-xl font-bold">
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-sm font-[var(--font-inter)]">
                    {t.country}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Ultra premium dots + arrows */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 200, 0, 0.35);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: rgba(255, 200, 0, 0.95);
          box-shadow: 0 0 18px rgba(255, 200, 0, 0.35);
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: rgba(255, 200, 0, 0.95);
          text-shadow: 0 0 18px rgba(255, 200, 0, 0.22);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 18px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}