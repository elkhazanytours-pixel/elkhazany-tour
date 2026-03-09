export const TOURS = [
  // ✅ 1 — Pyramids & Sphinx (unchanged)
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

  // ✅ 2 — Luxor Overday Tour (NEW)
  {
    slug: "luxor-overday-tour",
    title: "Luxor Overday Tour",
    shortDesc:
      "A full-day private journey through Luxor's greatest wonders — East & West Banks, temples and tombs, with a licensed Egyptologist guide.",
    image: "/luxor-overday.webp",
    duration: "Full Day",
    location: "Luxor",
    type: "Private",
    packages: [
      {
        name: "Classic",
        price: 79,
        recommended: false,
        features: [
          "Private Egyptologist Guide",
          "Luxury AC Transport",
          "East Bank: Karnak & Luxor Temples",
          "West Bank: Valley of the Kings",
        ],
      },
      {
        name: "Premium",
        price: 119,
        recommended: true,
        features: [
          "All Classic Features",
          "Entry Tickets Included",
          "Hatshepsut Temple & Colossi of Memnon",
          "Bottled Water & Snacks",
        ],
      },
      {
        name: "VIP Platinum",
        price: 169,
        recommended: false,
        features: [
          "All Premium Features",
          "Lunch at Nile-View Restaurant",
          "Professional Photographer",
          "Flexible Timing & Private Schedule",
        ],
      },
    ],
  },

  // ✅ 3 — Luxor 2-Day Tour (NEW)
  {
    slug: "luxor-2-day-tour",
    title: "Luxor 2-Day Experience",
    shortDesc:
      "Two unforgettable days exploring the ancient capital of Egypt — temples, tombs, and timeless Nile landscapes with VIP private service.",
    image: "/luxor-2day.jpg",
    duration: "2 Days",
    location: "Luxor",
    type: "Private",
    packages: [
      {
        name: "Classic",
        price: 149,
        recommended: false,
        features: [
          "2-Day Private Egyptologist Guide",
          "Luxury AC Transport",
          "East & West Banks",
          "Valley of the Kings & Karnak Temple",
        ],
      },
      {
        name: "Premium",
        price: 219,
        recommended: true,
        features: [
          "All Classic Features",
          "Entry Tickets Included",
          "Luxor Museum Visit",
          "Sunrise Hot Air Balloon (optional)",
          "Meals & Bottled Water",
        ],
      },
      {
        name: "VIP Platinum",
        price: 299,
        recommended: false,
        features: [
          "All Premium Features",
          "Hotel Pickup & Drop-off",
          "Professional Photography Session",
          "Felucca Nile Sunset Ride",
          "Full Flexible Itinerary",
        ],
      },
    ],
  },

  // ✅ 4 — Nile Cruise Aswan to Luxor 3 Nights (NEW)
  {
    slug: "nile-cruise-aswan-to-luxor",
    title: "Nile Cruise — Aswan to Luxor (3 Nights)",
    shortDesc:
      "Sail the legendary Nile from Aswan to Luxor aboard a luxury cruise ship — 3 nights of guided temple visits, stunning sunsets, and 5-star comfort.",
    image: "/nile-cruise.webp",
    duration: "3 Nights / 4 Days",
    location: "Aswan – Luxor",
    type: "Private",
    packages: [
      {
        name: "Classic Cruise",
        price: 499,
        recommended: false,
        features: [
          "3 Nights Aboard Cruise Ship",
          "Full Board Meals",
          "Guided Visits: Edfu & Kom Ombo Temples",
          "Aswan High Dam & Philae Temple",
        ],
      },
      {
        name: "Premium Cruise",
        price: 749,
        recommended: true,
        features: [
          "All Classic Features",
          "Private Egyptologist Guide",
          "Entry Tickets Included",
          "Luxor East & West Bank Finale",
          "Cabin Upgrade",
        ],
      },
      {
        name: "VIP Elite Cruise",
        price: 999,
        recommended: false,
        features: [
          "All Premium Features",
          "Private Airport & Hotel Transfers",
          "Abu Simbel Day Trip Add-on",
          "Sunset Felucca Ride",
          "Professional Photographer",
          "Luxury Suite Cabin",
        ],
      },
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