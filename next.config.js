/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "images.pexels.com",
      "media.istockphoto.com",
      "thumbs.dreamstime.com",
    ],
  },
  env: {
    API_BASE_URL: "http://localhost:8080",
  },
};

module.exports = nextConfig;
