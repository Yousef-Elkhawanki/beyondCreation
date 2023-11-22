/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["localhost", "127.0.0.1", "dev.api.xplor.beyond-creation.net"],
  },
};

module.exports = nextConfig;
