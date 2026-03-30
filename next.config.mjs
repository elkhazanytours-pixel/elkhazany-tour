/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [70, 72, 75, 80, 85, 90],
  },
  async redirects() {
    return [
      {
        source: "/luxury-private-tours-in-luxor",
        destination: "/blog/luxury-private-tours-in-luxor",
        permanent: true,
      },
      {
        source: "/tours/luxury-nile-river-cruise",
        destination: "/tours/nile-cruise-aswan-to-luxor",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
