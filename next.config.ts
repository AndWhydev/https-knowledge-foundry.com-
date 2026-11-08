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
  // The production vercel.app alias would otherwise serve a full duplicate of
  // the site. Send it to the canonical domain (SOP rule T1). Preview URLs have
  // different hostnames and are unaffected.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "https-knowledge-foundrycom.vercel.app" }],
        destination: "https://www.knowledge-foundry.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
