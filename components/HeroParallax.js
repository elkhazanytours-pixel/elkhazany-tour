"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function HeroParallax() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // subtle glow move
      gsap.to(glowRef.current, {
        yPercent: -18,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <img
          src="/hero.jpg"
          className="w-full h-full object-cover"
          alt="Egypt Luxury"
        />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black/85" />

      {/* Premium glow */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-yellow-500/18 blur-3xl rounded-full" />
        <div className="absolute -bottom-48 -left-48 w-[560px] h-[560px] bg-yellow-500/14 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <Reveal>
          <h1 className="text-6xl md:text-7xl font-[var(--font-playfair)] font-bold leading-tight text-white">
            Discover Egypt
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              in Luxury
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-gray-300 font-[var(--font-inter)]">
            Private. Exclusive. Unforgettable.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10">
            <a
              href="/tours"
              className="px-10 py-4 rounded-full border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-md text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Explore Tours
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}