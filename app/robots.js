export default function robots() {
  const baseUrl =
    (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://elkhazanytour.com")
      .replace(/\/+$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}