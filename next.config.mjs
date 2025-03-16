/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path`,
      },
    ];
  },
};

export default nextConfig;
