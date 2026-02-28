import { TOURS } from "../lib/tours";

export default function sitemap() {
  const baseUrl = "https://elkhazany-tour.vercel.app";

  const staticRoutes = ["", "/tours", "/about", "/contact", "/booking"].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));

  const tourRoutes = TOURS.map((t) => ({
    url: `${baseUrl}/tours/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...tourRoutes];
}