/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.mktw.net", "images.barrons.com", "s.wsj.net"],
   
  },
  distDir: 'build',
};

module.exports = nextConfig;
