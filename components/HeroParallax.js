"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function HeroParallax() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic intro animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      });

      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 18,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Premium glow movement
      gsap.to(glowRef.current, {
        yPercent: -22,
        opacity: 0.65,
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
      {/* ✅ LCP Hero Image (priority + next/image) */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/hero.jpg"
          alt="Egypt Luxury"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover scale-105"
          fetchPriority="high"
        />
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />

      {/* Premium glow */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-yellow-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-48 -left-48 w-[560px] h-[560px] bg-yellow-500/15 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-4xl px-6">
        <Reveal>
          <h1 className="text-6xl md:text-7xl font-[var(--font-playfair)] font-bold leading-tight text-white tracking-wide">
            Discover Egypt
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,200,0,0.35)]">
              in Luxury
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-gray-300 font-[var(--font-inter)] tracking-wide">
            Private. Exclusive. Unforgettable.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10">
            <a
              href="/tours"
              className="group relative px-10 py-4 rounded-full border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-md text-yellow-400 overflow-hidden transition-all duration-500 hover:bg-yellow-500 hover:text-black"
            >
              <span className="relative z-10">Explore Tours</span>

              {/* subtle animated shimmer */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transform-gpu" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
