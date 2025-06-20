import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  basePath: '',
};

export default nextConfig;
