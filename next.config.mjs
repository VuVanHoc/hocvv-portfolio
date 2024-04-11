/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fhan14-5.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
