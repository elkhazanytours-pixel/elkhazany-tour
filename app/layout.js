import "./globals.css";
import Providers from "../components/Providers";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://elkhazany-tour.vercel.app"),
  title: {
    default: "El Khazany Tour | Luxury Private Tours in Egypt",
    template: "%s | El Khazany Tour",
  },
  description:
    "Luxury private tours in Egypt — curated VIP experiences in Luxor, Cairo, Aswan, and the Nile. Licensed guides, premium service, no hidden fees.",
  openGraph: {
    type: "website",
    siteName: "El Khazany Tour",
    url: "https://elkhazany-tour.vercel.app",
    title: "El Khazany Tour | Luxury Private Tours in Egypt",
    description:
      "Luxury private tours in Egypt — curated VIP experiences with licensed guides and premium service.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "El Khazany Tour — Luxury Egypt Travel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Khazany Tour | Luxury Private Tours in Egypt",
    description:
      "Luxury private tours in Egypt — curated VIP experiences with licensed guides and premium service.",
    images: ["/og-default.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "El Khazany Tour",
    url: "https://elkhazany-tour.vercel.app",
    email: "elkhazanytours@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Luxor",
      addressCountry: "EG",
    },
    areaServed: "Egypt",
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ✅ Preload hero image for LCP boost (make sure /public/hero.jpg exists) */}
        <link rel="preload" as="image" href="/hero.jpg" />
      </head>

      <body className="bg-[#0B0B0F] text-white">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <Providers>
          {children}
          <WhatsAppFloat />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}