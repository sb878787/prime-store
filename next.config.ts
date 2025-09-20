import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // or use remotePatterns if you need more control
  },
};

export default nextConfig;
