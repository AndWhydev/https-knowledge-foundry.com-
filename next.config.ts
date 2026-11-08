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
    // Old WordPress URLs still indexed by search engines, sent to their nearest new page (SOP rule T2).
    const legacy: [string, string][] = [
      ["/the-platform", "/platform"],
      ["/the-programs", "/programs"],
      ["/the-approach", "/platform/framework-intelligence"],
      ["/the-industries", "/industries"],
      ["/about-us", "/about"],
      ["/contact", "/demonstration"],
      ["/contact-us", "/demonstration"],
      ["/privacy-policy", "/privacy"],
      ["/blog", "/insights"],
    ];
    return [
      ...legacy.map(([source, destination]) => ({ source: `${source}{/}?`, destination, permanent: true })),
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
