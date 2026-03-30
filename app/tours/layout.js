import Script from "next/script";
import { TOURS } from "../../lib/tours";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://elkhazanytour.com").replace(/\/+$/, "");

export const metadata = {
  title: "Luxury Private Tours in Egypt | El Khazany Tour",
  description:
    "Explore luxury private tours in Egypt — curated experiences in Luxor, Cairo, Aswan, and the Nile with licensed Egyptologist guides, premium service, and transparent pricing.",
  alternates: { canonical: `${SITE_URL}/tours` },
  openGraph: {
    title: "Luxury Private Tours in Egypt | El Khazany Tour",
    description:
      "Browse our full range of exclusive Egypt tours — Pyramids, Luxor, Nile Cruises, and more. All private, all VIP.",
    url: `${SITE_URL}/tours`,
    siteName: "El Khazany Tour",
    type: "website",
    images: [{ url: `${SITE_URL}/hero.jpg`, width: 1200, height: 630, alt: "Luxury Egypt Tours — El Khazany Tour" }],
  },
};

export default function ToursLayout({ children }) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "El Khazany Tour — Luxury Egypt Tours",
    itemListElement: TOURS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/tours/${t.slug}`,
      name: t.title,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
    ],
  };

  return (
    <>
      <Script
        id="tours-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <Script
        id="tours-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}