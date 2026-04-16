import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images served from the same domain (Vercel deployment)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
    // Allow unoptimized local images in public folder
    // This ensures hero-bg.jpg works on Vercel
    unoptimized: false,
  },
};

export default nextConfig;