/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};
