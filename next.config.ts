import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: '/digital-marketing',
        destination: '/services/digital-marketing',
        statusCode: 301,
      },
      {
        source: '/blog/website-performance-and-conversion',
        destination: '/blog/landing-page-journey-for-digital-campaigns',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
