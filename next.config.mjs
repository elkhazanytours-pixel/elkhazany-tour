/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/luxury-private-tours-in-luxor",
        destination: "/blog/luxury-private-tours-in-luxor",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;