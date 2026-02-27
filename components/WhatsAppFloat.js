"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  // ✅ Put your WhatsApp number in international format without + or spaces
  const phone = "201021021296";
  const text = encodeURIComponent(
    "Hello El Khazany Tour! I want a VIP quote for a luxury Egypt tour."
  );
  const link = `https://wa.me/${phone}?text=${text}`;

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Auto-show label briefly after load (premium micro-nudge)
    const t1 = setTimeout(() => setExpanded(true), 900);
    const t2 = setTimeout(() => setExpanded(false), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={[
        "fixed bottom-6 right-6 z-[9999]",
        "group flex items-center gap-3",
        "rounded-2xl border border-white/15 bg-black/45 backdrop-blur-xl",
        "shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
        "transition-all duration-300 hover:bg-black/60 hover:scale-[1.02]",
        expanded ? "px-4 py-3" : "p-3",
      ].join(" ")}
      aria-label="Chat on WhatsApp"
      title="WhatsApp VIP Support"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-black shadow-[0_18px_45px_rgba(255,200,0,0.25)]">
        <MessageCircle size={22} />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.45)]" />
      </span>

      <span
        className={[
          "overflow-hidden whitespace-nowrap transition-all duration-300",
          expanded ? "max-w-[220px] opacity-100" : "max-w-0 opacity-0",
        ].join(" ")}
      >
        <span className="block text-sm font-semibold text-white leading-tight">
          WhatsApp VIP Support
        </span>
        <span className="block text-xs text-white/70 leading-tight">
          Instant quote • 24/7
        </span>
      </span>
    </a>
  );
}
