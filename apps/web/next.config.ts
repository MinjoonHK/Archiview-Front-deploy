import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return [];
    return [
      {
        source: '/api/v1/:path*',
        destination: `/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
