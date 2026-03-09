import Link from "next/link";
import Navbar from "../../components/Navbar";
import AboutPopup from "../../components/AboutPopup";

export const metadata = {
  title: "About El Khazany Tour | Luxury Private Tours Egypt",
  description:
    "Learn about El Khazany Tour — a licensed luxury private tour operator in Luxor, Egypt. VIP experiences, expert local guides, and premium service since day one.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About El Khazany Tour | Luxury Private Tours Egypt",
    description:
      "Licensed luxury tour operator in Luxor — private guides, premium vehicles, and unforgettable Egypt experiences.",
    url: "/about",
    siteName: "El Khazany Tour",
    type: "website",
    images: [{ url: "https://elkhazanytour.com/about.jpg", width: 1200, height: 630, alt: "El Khazany Tour" }],
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />

      <section className="pt-32 pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
            <h1 className="text-5xl font-bold mb-3">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                El Khazany Tour
              </span>
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              We craft premium Egypt experiences with private guides, elegant
              planning, and unforgettable moments — from the Pyramids to Luxor
              and the Nile.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <h2 className="text-3xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Promise
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-5">
              We believe a great journey is more than a tour — it's a carefully
              designed experience. Our team focuses on comfort, timing,
              hospitality, and the small details that make everything feel VIP.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you want a day trip in Luxor, a full Egypt itinerary, or a
              luxury Nile cruise, we tailor every plan around your style.
            </p>
            <div className="mt-7 flex gap-4">
              <Link
                href="/tours"
                className="px-7 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] hover:scale-105 transition"
              >
                View Tours
              </Link>
              <Link
                href="/booking"
                className="px-7 py-3 rounded-full bg-white/10 border border-yellow-500/30 backdrop-blur-md text-yellow-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] transition"
              >
                Book Now
              </Link>
            </div>
          </div>
          <AboutPopup />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Local Expertise", desc: "Professional local guides with deep knowledge and VIP service standards." },
              { title: "Premium Comfort", desc: "Carefully planned itineraries, smooth timing, and comfortable travel." },
              { title: "Tailored Experiences", desc: "Custom plans for couples, families, and VIP travelers — your style first." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/12 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,200,0,0.25)] transition">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
            <h2 className="text-3xl font-bold mb-3">
              Let's plan your{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                perfect Egypt trip
              </span>.
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl">
              Contact us and we'll suggest the best luxury plan based on your dates, interests, and travel style.
            </p>
            <Link href="/contact" className="inline-block px-7 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,200,0,0.5)] hover:scale-105 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}