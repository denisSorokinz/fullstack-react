/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: '*.riastatic.com',
      protocol: 'https'
    }, {
      hostname: '*.auto.ria.com',
      protocol: 'https'
    }]
  },
};

module.exports = nextConfig;
