module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/landing-pages",
        destination: `http://localhost:3001/landing-pages`,
      },
      {
        source: "/search-results",
        destination: `http://localhost:3002/search-results`,
      },
      {
        source: "/dummy",
        destination: `http://www.google.com`,
      },
    ];
  },
};
