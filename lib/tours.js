export const TOURS = [
  {
    slug: "pyramids-sphinx-exclusive",
    title: "Pyramids & Sphinx Exclusive",
    shortDesc:
      "Private guided experience to the Great Pyramids, Sphinx & Egyptian Museum with premium service.",
    image: "/pyramids.jpg",
    duration: "Full Day",
    location: "Cairo & Giza",
    type: "Private",
    packages: [
      {
        name: "Classic",
        price: 149,
        recommended: false,
        features: ["Private Egyptologist Guide", "Luxury AC Transport"],
      },
      {
        name: "Premium",
        price: 199,
        recommended: true,
        features: ["Guide + Entry Tickets", "Camel Ride", "Bottled Water"],
      },
      {
        name: "VIP Platinum",
        price: 249,
        recommended: false,
        features: [
          "All Premium Features",
          "Lunch",
          "Professional Photographer",
          "Priority Access",
        ],
      },
    ],
  },
  {
    slug: "luxury-nile-river-cruise",
    title: "Luxury Nile River Cruise",
    shortDesc:
      "5-star Nile cruise between Luxor and Aswan with guided temple visits.",
    image: "/nile.jpg",
    duration: "3–5 Days",
    location: "Luxor – Aswan",
    type: "Private",
    packages: [
      { name: "Classic Cruise", price: 899, recommended: false, features: ["3 Nights Cruise", "Full Board Meals"] },
      { name: "Premium Cruise", price: 1199, recommended: true, features: ["4 Nights", "Private Guide", "Temple Tours"] },
      { name: "Elite VIP Cruise", price: 1499, recommended: false, features: ["5 Nights", "Private Transfers", "Abu Simbel Add-on", "Luxury Cabin Upgrade"] },
    ],
  },
  {
    slug: "abu-simbel-adventure",
    title: "Abu Simbel Adventure",
    shortDesc: "Discover the majestic temples of Ramses II in comfort.",
    image: "/abu-simbel.jpg",
    duration: "Full Day",
    location: "Abu Simbel",
    type: "Group / Private",
    packages: [
      { name: "Group Tour", price: 89, recommended: false, features: ["Shared Transport", "Professional Guide"] },
      { name: "Private Tour", price: 149, recommended: true, features: ["Private Vehicle", "Flexible Timing"] },
      { name: "VIP Sunrise", price: 199, recommended: false, features: ["Early Access", "Professional Photography", "Premium Transfer"] },
    ],
  },
  {
    slug: "red-sea-paradise",
    title: "Red Sea Paradise",
    shortDesc: "Snorkeling, island trips & optional luxury yacht experiences.",
    image: "/red-sea.jpg",
    duration: "Full Day",
    location: "Hurghada",
    type: "Private / Group",
    packages: [
      { name: "Snorkeling Trip", price: 59, recommended: false, features: ["Boat Trip", "Snorkeling Equipment", "Lunch"] },
      { name: "Luxury Yacht", price: 99, recommended: true, features: ["Private Yacht", "Premium Lunch", "Private Crew"] },
      { name: "VIP Private Charter", price: 249, recommended: false, features: ["Exclusive Boat", "Private Chef", "Custom Itinerary"] },
    ],
  },
];

// ✅ Single source of truth helpers
export function getTourBySlug(slug) {
  return TOURS.find((t) => t.slug === slug);
}

export function getTourPriceFrom(tour) {
  const prices =
    tour?.packages?.map((p) => Number(p.price)).filter((n) => Number.isFinite(n) && n > 0) || [];
  if (!prices.length) return null;
  return Math.min(...prices);
}

export function formatUSD(amount) {
  if (amount === null || amount === undefined) return "—";
  return new Intl.NumberFormat("en-US").format(Number(amount));
}