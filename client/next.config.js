/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "cdn.riastatic.com",
      "cdn0.riastatic.com",
      "cdn1.riastatic.com",
      "cdn2.riastatic.com",
      "cdn3.riastatic.com",
      "cdn4.riastatic.com",
      "img6.auto.ria.com",
    ],
  },
};

module.exports = nextConfig;
