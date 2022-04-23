/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.istockphoto.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
