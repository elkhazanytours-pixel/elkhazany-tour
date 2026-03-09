import Script from "next/script";
import { TOURS } from "../../lib/tours";

// ✅ Same pattern as root layout — always uses real domain
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://elkhazanytour.com").replace(/\/+$/, "");

export const metadata = {
  title: "Tours",
  description:
    "Explore luxury private tours in Egypt — curated experiences in Luxor, Cairo, Aswan, and the Nile with premium service and transparent pricing.",
  alternates: { canonical: `${SITE_URL}/tours` },
};

export default function ToursLayout({ children }) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "El Khazany Tour — Tours",
    itemListElement: TOURS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/tours/${t.slug}`,
      name: t.title,
    })),
  };

  return (
    <>
      <Script
        id="tours-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      {children}
    </>
  );
}