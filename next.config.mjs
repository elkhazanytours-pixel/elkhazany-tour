/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/luxury-private-tours-in-luxor",
        destination: "/blog/luxury-private-tours-in-luxor",
        permanent: true,
      },
      // ✅ Old tour slug → New tour slug (301 redirect)
      {
        source: "/tours/luxury-nile-river-cruise",
        destination: "/tours/nile-cruise-aswan-to-luxor",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
