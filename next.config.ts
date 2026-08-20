import type { NextConfig } from 'next';

const staticAssetHeaders = [
  {
    key: 'Cache-Control',
    value: 'public, max-age=31536000, immutable',
  },
  {
    key: 'Accept-Ranges',
    value: 'bytes',
  },
];

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: staticAssetHeaders,
      },
      {
        source: '/videos/:path*',
        headers: staticAssetHeaders,
      },
    ];
  },
};

export default nextConfig;
