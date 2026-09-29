import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Video posters stored in Vercel Blob (see src/lib/videos.ts)
    remotePatterns: [{ protocol: "https", hostname: "rqcietw1qdjalibj.public.blob.vercel-storage.com" }],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default nextConfig;
