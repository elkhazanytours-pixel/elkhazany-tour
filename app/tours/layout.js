import Script from "next/script";
import { TOURS } from "../../lib/tours";

export const metadata = {
  title: "Tours",
  description:
    "Explore luxury private tours in Egypt — curated experiences in Luxor, Cairo, Aswan, and the Nile with premium service and transparent pricing.",
  alternates: { canonical: "https://elkhazany-tour.vercel.app/tours" },
};

export default function ToursLayout({ children }) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "El Khazany Tour — Tours",
    itemListElement: TOURS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://elkhazany-tour.vercel.app/tours/${t.slug}`,
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
