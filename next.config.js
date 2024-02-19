/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.mktw.net", "images.barrons.com", "s.wsj.net"],
   
  },
  distDir: '.next',
};

module.exports = nextConfig;
