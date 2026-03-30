import Script from "next/script";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://elkhazanytour.com").replace(/\/+$/, "");

export const metadata = {
  title: "Contact Us | El Khazany Tour",
  description:
    "Contact El Khazany Tour in Luxor, Egypt. Reach us by WhatsApp, email, or our contact form for private tour bookings, custom itineraries, and VIP travel inquiries.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact El Khazany Tour — Luxury Egypt Travel",
    description:
      "Get in touch with our team in Luxor. Fast WhatsApp replies, custom tour planning, and VIP support for all Egypt destinations.",
    url: `${SITE_URL}/contact`,
    siteName: "El Khazany Tour",
    type: "website",
    images: [{ url: `${SITE_URL}/og-default.jpg`, width: 1200, height: 630, alt: "Contact El Khazany Tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact El Khazany Tour — Luxury Egypt Travel",
    description: "Reach us by WhatsApp or email for private tours, Nile cruises, and VIP Egypt experiences.",
    images: [`${SITE_URL}/og-default.jpg`],
  },
};

export default function ContactLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "El Khazany Tour",
    description:
      "Luxury private tour operator based in Luxor, Egypt. Specialising in VIP private tours to the Pyramids, Luxor temples, Nile cruises, and custom Egypt itineraries.",
    url: SITE_URL,
    email: "elkhazanytours@gmail.com",
    telephone: "+20-102-102-1296",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Luxor City",
      addressLocality: "Luxor",
      addressRegion: "Luxor Governorate",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.6872,
      longitude: 32.6396,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
    priceRange: "$$",
    areaServed: ["Luxor", "Cairo", "Aswan", "Egypt"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Egypt Private Tours",
      url: `${SITE_URL}/tours`,
    },
    sameAs: [],
  };

  return (
    <>
      <Script
        id="contact-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
