"use client";

import { useEffect, useState } from "react";

export default function AboutPopup() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setPopupOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [popupOpen]);

  return (
    <>
      {/* POPUP */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="absolute -top-12 right-0 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-yellow-500 hover:text-black transition"
            >
              Close ✕
            </button>

            <img
              src="/about.webp"
              alt="About El Khazany Tour"
              className="w-full max-h-[80vh] object-contain rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
            />

            <div className="mt-4 text-center text-gray-200">
              <span className="text-yellow-300 font-semibold">
                Local Experts • VIP Service
              </span>
              <span className="text-gray-400"> — Press ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE BUTTON */}
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
        <button
          type="button"
          onClick={() => setPopupOpen(true)}
          className="w-full text-left focus:outline-none group"
          aria-label="Open About image popup"
        >
          <img
            src="/about.webp"
            alt="Egypt about"
            className="relative rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] object-cover w-full h-[420px] transition group-hover:scale-[1.01] group-hover:shadow-[0_0_40px_rgba(255,200,0,0.25)]"
          />
        </button>

        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
          <p className="text-yellow-300 font-semibold">
            Tap image to view fullscreen
          </p>
        </div>
      </div>
    </>
  );
}