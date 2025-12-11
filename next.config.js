/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'noemiedufresne.s3.ca-central-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
