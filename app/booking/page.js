// app/booking/page.js
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
    images: [{ url: "https://elkhazanytour.com/hero.jpg", width: 1200, height: 630, alt: "El Khazany Tour" }],
  },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-4">
        <h1 className="text-4xl font-[var(--font-playfair)] font-bold">
          Confirm <span className="text-yellow-400">Booking</span>
        </h1>
      </div>
      <BookingClient />
    </main>
  );
}