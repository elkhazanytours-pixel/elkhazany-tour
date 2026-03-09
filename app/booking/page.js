// app/booking/page.js
// ✅ Server component — Google وAhrefs يقدروا يشوفوا الـ H1 والـ metadata

import Navbar from "../../components/Navbar";
import BookingClient from "../../components/BookingClient";

export const metadata = {
  title: "Book Your Luxury Egypt Tour | El Khazany Tour",
  description:
    "Book your private luxury tour in Egypt — Luxor, Cairo, Aswan, and the Nile. Instant WhatsApp confirmation, no hidden fees, VIP service.",
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Book Your Luxury Egypt Tour | El Khazany Tour",
    description:
      "Secure your VIP Egypt experience — private guides, premium transport, and fast WhatsApp support.",
    url: "/booking",
    siteName: "El Khazany Tour",
    type: "website",
  },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      {/* ✅ H1 مرئي لـ Google وAhrefs */}
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-4">
        <h1 className="text-4xl font-[var(--font-playfair)] font-bold">
          Confirm <span className="text-yellow-400">Booking</span>
        </h1>
      </div>

      {/* ✅ باقي الصفحة client component */}
      <BookingClient />
    </main>
  );
}