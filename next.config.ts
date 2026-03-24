import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images with modern formats
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable experimental features for better performance
  experimental: {
    // Inline small CSS for faster initial load
    optimizeCss: true,
    // Reduce JavaScript bundle size
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Reduce JavaScript bundle size
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Turbopack configuration (required for Next.js 16+)
  turbopack: {
    // Turbopack handles optimization automatically
  },
};

export default nextConfig;
