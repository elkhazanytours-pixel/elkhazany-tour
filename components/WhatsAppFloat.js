"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  // ✳️ حط رقمك بصيغة دولية بدون + ولا مسافات
  const phone = "201021021296"; // مثال: 2010xxxxxxx
  const text = encodeURIComponent("Hello El Khazany Tour! I want to book a luxury tour in Egypt.");
  const link = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-yellow-500 text-black flex items-center justify-center shadow-[0_18px_45px_rgba(255,200,0,0.35)] hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}