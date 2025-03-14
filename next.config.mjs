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
        destination: "http://45.87.80.20:8080/api/:path",
      },
    ];
  },
};

export default nextConfig;
