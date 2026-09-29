import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allLearnPages, kinds, learnHref } from "@/lib/learn";
import { videoHref, videos } from "@/lib/videos";

type Route = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const routes: Route[] = [
  { path: "",                                   priority: 1.0, changeFrequency: "weekly" },
  { path: "/demonstration",                     priority: 0.95, changeFrequency: "monthly" },

  // Platform capabilities
  { path: "/platform",                          priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform/see-it-work",              priority: 0.85, changeFrequency: "monthly" },
  { path: "/platform/framework-intelligence",   priority: 0.85, changeFrequency: "monthly" },
  { path: "/platform/gap-analysis",             priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/remediation",              priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/knowledge-transformation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/verification-trust",       priority: 0.85, changeFrequency: "monthly" },
  { path: "/platform/knowledge-governance",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/standards-accreditation",  priority: 0.8, changeFrequency: "monthly" },
  { path: "/platform/audit-evidence",           priority: 0.85, changeFrequency: "monthly" },
  { path: "/platform/enterprise-learning-modernisation", priority: 0.75, changeFrequency: "monthly" },
  { path: "/platform/integrations",             priority: 0.75, changeFrequency: "monthly" },
  { path: "/platform/technical-overview",       priority: 0.75, changeFrequency: "monthly" },

  // Programs
  { path: "/programs",                          priority: 0.85, changeFrequency: "monthly" },
  { path: "/programs/educational",              priority: 0.75, changeFrequency: "monthly" },
  { path: "/programs/compliance",               priority: 0.85, changeFrequency: "monthly" },
  { path: "/programs/product-enablement",       priority: 0.75, changeFrequency: "monthly" },
  { path: "/programs/operational-procedures",   priority: 0.75, changeFrequency: "monthly" },
  { path: "/programs/hybrid-verification",      priority: 0.8,  changeFrequency: "monthly" },

  // Industries
  { path: "/industries",                        priority: 0.85, changeFrequency: "monthly" },
  { path: "/industries/financial-services",     priority: 0.85, changeFrequency: "monthly" },
  { path: "/industries/healthcare-life-sciences", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/energy-resources",       priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/government-defence",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/professional-services",  priority: 0.75, changeFrequency: "monthly" },
  { path: "/industries/higher-education",       priority: 0.75, changeFrequency: "monthly" },

  // Case studies
  { path: "/case-studies",                      priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies/regulated-financial-services", priority: 0.75, changeFrequency: "monthly" },
  { path: "/case-studies/national-healthcare-operator", priority: 0.75, changeFrequency: "monthly" },
  { path: "/case-studies/critical-infrastructure", priority: 0.75, changeFrequency: "monthly" },

  // Insights
  { path: "/insights",                          priority: 0.85, changeFrequency: "weekly" },
  { path: "/insights/knowledge-structure-before-content", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights/what-verification-really-measures", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights/why-training-fails-audits", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights/scorm-is-a-transport-not-a-strategy", priority: 0.65, changeFrequency: "monthly" },
  { path: "/insights/knowledge-drift-and-how-to-detect-it", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights/framework-first-methodology", priority: 0.75, changeFrequency: "monthly" },
  { path: "/insights/hybrid-verification-primer", priority: 0.65, changeFrequency: "monthly" },
  { path: "/insights/ai-generated-content-and-compliance-risk", priority: 0.7, changeFrequency: "monthly" },

  // Trust + Company + Legal
  { path: "/trust",                             priority: 0.7, changeFrequency: "monthly" },
  { path: "/trust/security",                    priority: 0.65, changeFrequency: "monthly" },
  { path: "/trust/compliance-posture",          priority: 0.65, changeFrequency: "monthly" },
  { path: "/about",                             priority: 0.6, changeFrequency: "monthly" },
  { path: "/who-can-use-this",                  priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy",                           priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms",                             priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility-statement",           priority: 0.3, changeFrequency: "yearly" },
  { path: "/editorial-standards",               priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Last material content change for the static pages. Never the build time
  // (SOP rule T7): bump this only when those pages' content actually changes.
  const staticPagesUpdated = new Date("2026-09-28");
  const learn = allLearnPages();
  // Hubs change whenever any page in them does.
  const latest = (list: typeof learn) =>
    list.reduce((max, p) => (p.updated > max ? p.updated : max), "2026-01-01");
  return [
    ...routes.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: staticPagesUpdated,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    // Hubs are listed only once they have pages in them.
    ...(learn.length
      ? [{ url: `${site.url}/learn`, lastModified: new Date(latest(learn)), changeFrequency: "weekly" as const, priority: 0.8 }]
      : []),
    ...Object.entries(kinds)
      .filter(([kind]) => learn.some((p) => p.kind === kind))
      .map(([kind, k]) => ({
      url: `${site.url}${k.path}`,
      lastModified: new Date(latest(learn.filter((p) => p.kind === kind))),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    // One watch page per explainer video, with video sitemap entries.
    ...videos.map((v) => ({
      url: `${site.url}${videoHref(v)}`,
      lastModified: new Date(v.uploadDate),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      videos: [
        {
          title: `${v.title}: Knowledge Foundry explainer`,
          thumbnail_loc: v.poster,
          description: v.summary || v.tagline,
          content_loc: v.src,
          duration: Math.round(v.seconds),
          publication_date: v.uploadDate,
        },
      ],
    })),
    ...learn.map((p) => ({
      url: `${site.url}${learnHref(p)}`,
      lastModified: new Date(p.updated),
      changeFrequency: "monthly" as const,
      priority: p.kind === "regulation" || p.kind === "guide" ? 0.7 : 0.6,
    })),
  ];
}
