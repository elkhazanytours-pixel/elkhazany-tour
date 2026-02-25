// lib/tours.js

export const TOURS = [
  {
    slug: "pyramids-sphinx-exclusive",
    title: "Pyramids & Sphinx Exclusive",
    shortDesc:
      "Private guided tour of the Great Pyramids, Sphinx, and Egyptian Museum with VIP access.",
    image: "/pyramids.jpg",
    price: 2499,
    duration: "5 Days",
    location: "Cairo & Giza",
    type: "Private",
    highlights: [
      "VIP access & private guide",
      "Great Pyramids & Sphinx",
      "Egyptian Museum highlights",
      "Luxury private transportation",
      "Hotel pickup & drop-off",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & VIP Welcome",
        details:
          "Private pickup, hotel check-in assistance, and briefing about your exclusive itinerary.",
      },
      {
        day: "Day 2",
        title: "Great Pyramids & Sphinx",
        details:
          "Private guided visit to Giza Plateau, best viewpoints, and VIP experience away from crowds.",
      },
      {
        day: "Day 3",
        title: "Egyptian Museum",
        details:
          "Curated museum highlights with expert guide, including the most iconic artifacts.",
      },
      {
        day: "Day 4",
        title: "Cairo Private Experiences",
        details:
          "Tailor-made day: Old Cairo, Khan El Khalili, Nile dinner cruise (optional).",
      },
      {
        day: "Day 5",
        title: "Departure",
        details:
          "Private transfer and assistance for a smooth departure. Optional add-ons available.",
      },
    ],
  },

  {
    slug: "luxury-nile-river-cruise",
    title: "Luxury Nile River Cruise",
    shortDesc:
      "5-star cruise along the Nile with stops at ancient temples and landmarks.",
    image: "/nile.jpg",
    price: 3999,
    duration: "7 Days",
    location: "Luxor to Aswan",
    type: "Private",
    highlights: [
      "5-star luxury cruise",
      "Private guided temple tours",
      "Sunset sailing moments",
      "Premium cabins & dining",
      "All transfers arranged",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Luxor Arrival & Check-in",
        details:
          "Private transfer to cruise, welcome drink, and evening on board in Luxor.",
      },
      {
        day: "Day 2",
        title: "Karnak & Luxor Temples",
        details:
          "Guided tour of Karnak and Luxor temples with exclusive insights and timing.",
      },
      {
        day: "Day 3",
        title: "Sailing & Relaxation",
        details:
          "Scenic Nile sailing, onboard luxury experience, spa time and premium dining.",
      },
      {
        day: "Day 4",
        title: "Edfu & Kom Ombo",
        details:
          "Visit Edfu and Kom Ombo temples with expert guide and curated stops.",
      },
      {
        day: "Day 5",
        title: "Aswan Highlights",
        details:
          "Aswan tour: Philae Temple, High Dam, and local experiences.",
      },
      {
        day: "Day 6",
        title: "Optional Abu Simbel",
        details:
          "Optional sunrise trip to Abu Simbel with private transport and guide.",
      },
      {
        day: "Day 7",
        title: "Departure",
        details:
          "Check-out and private transfer. Extend your trip with Red Sea add-on.",
      },
    ],
  },

  {
    slug: "abu-simbel-adventure",
    title: "Abu Simbel Adventure",
    shortDesc:
      "Explore the magnificent temples of Ramesses II with expert Egyptologists.",
    image: "/abu-simbel.jpg",
    price: 1899,
    duration: "3 Days",
    location: "Abu Simbel",
    type: "Small Group",
    highlights: [
      "Abu Simbel temples guided tour",
      "Expert storytelling & history",
      "Comfortable transfers",
      "Best photo timing",
      "Optional Nubian experience",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Preparation",
        details:
          "Meet your guide, briefing, and smooth transfer to your hotel/route plan.",
      },
      {
        day: "Day 2",
        title: "Abu Simbel Temples",
        details:
          "Full guided visit to the Great Temple and the Temple of Nefertari.",
      },
      {
        day: "Day 3",
        title: "Return & Departure",
        details:
          "Return transfer with optional stops depending on timing and preferences.",
      },
    ],
  },

  {
    slug: "red-sea-paradise",
    title: "Red Sea Paradise",
    shortDesc:
      "Luxury resort stay with diving, snorkeling, and desert safari experiences.",
    image: "/red-sea.jpg",
    price: 2299,
    duration: "6 Days",
    location: "Hurghada",
    type: "Private",
    highlights: [
      "Luxury resort stay",
      "Snorkeling & island day",
      "Desert safari experience",
      "Private transfers",
      "Relaxation + premium service",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Resort Check-in",
        details:
          "Private transfer, check-in, and sunset relaxation by the Red Sea.",
      },
      {
        day: "Day 2",
        title: "Snorkeling Day",
        details:
          "Crystal-clear waters, coral reefs, and curated stops with comfort included.",
      },
      {
        day: "Day 3",
        title: "Luxury Leisure Day",
        details:
          "Pool, spa, beach time — optional private boat tour available.",
      },
      {
        day: "Day 4",
        title: "Desert Safari",
        details:
          "Premium desert safari with sunset vibes and optional dinner experience.",
      },
      {
        day: "Day 5",
        title: "Island / Diving Options",
        details:
          "Choose an island trip or diving day depending on your preference.",
      },
      {
        day: "Day 6",
        title: "Departure",
        details:
          "Check-out and private transfer with smooth assistance.",
      },
    ],
  },
];

// ✅ helpers
export function getAllTours() {
  return TOURS;
}

export function getTourBySlug(slug) {
  const s = decodeURIComponent(String(slug || ""))
    .trim()
    .toLowerCase();

  return TOURS.find((t) => String(t.slug).toLowerCase() === s);
}