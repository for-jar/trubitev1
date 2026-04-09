import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. Tell Next.js to export static HTML files
  output: 'export',
  
  // 2. Tell Next.js your repository name so routing works on GitHub Pages
  basePath: '/trubitev1',
  
  // 3. Disable image optimization (GitHub Pages doesn't support the Next.js image server)
  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  transpilePackages: ['motion'],
};

export default nextConfig;
