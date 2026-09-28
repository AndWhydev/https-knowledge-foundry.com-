import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Everything is crawlable except /api/. /_next/ must stay open: Google needs
 * the CSS and JS to render pages. The AI search and user fetchers are named
 * explicitly for clarity; a crawler obeys only its most specific group, so
 * each group repeats the /api/ rule. See docs/AI-SEARCH-SOP.md, rule T3.
 */
const searchAndAnswerBots = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  "Googlebot",
  "Bingbot",
  "Applebot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: searchAndAnswerBots, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
