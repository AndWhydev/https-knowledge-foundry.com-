import { allLearnPages, kinds, learnHref, type LearnKind } from "@/lib/learn";
import { site } from "@/lib/site";
import { plain } from "@/components/learn/inline";
import { videoHref, videos } from "@/lib/videos";

export const dynamic = "force-static";

/**
 * llms.txt (https://llmstxt.org): a plain Markdown map of the site for
 * language model tools. Cheap to serve; no major engine is confirmed to rely
 * on it, so it complements rather than replaces the sitemap.
 */
export function GET() {
  const core = [
    ["Platform overview", "/platform", "How Knowledge Foundry turns source material into structured, auditable learning frameworks."],
    ["Framework Intelligence", "/platform/framework-intelligence", "Defining concepts, relationships, and assessment logic before content is written."],
    ["Gap Analysis", "/platform/gap-analysis", "Finding missing, contradictory, or outdated coverage in an existing training library."],
    ["Audit and Evidence", "/platform/audit-evidence", "Traceable evidence packs for regulators and boards."],
    ["Compliance programs", "/programs/compliance", "Instruction aligned to policies and the behaviors they require."],
    ["Industries", "/industries", "Financial services, healthcare, energy, government, professional services, higher education."],
    ["Trust center", "/trust", "Security, data residency, and compliance posture."],
    ["Request a demonstration", "/demonstration", "A 45 minute working session on your own material."],
  ];
  const order: LearnKind[] = ["regulation", "guide", "glossary", "comparison"];
  const pages = allLearnPages();

  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "Knowledge Foundry is an international platform, with its holding company in Portugal, serving organizations in Portugal and the wider EU, the United States, Japan, Australia, and the United Arab Emirates. It defines the knowledge framework (concepts, relationships, assessment points, and provenance) before any training content is written, so programs in regulated organizations are reviewable, standards aligned, and audit ready.",
    "",
    "## Product",
    ...core.map(([t, p, d]) => `- [${t}](${site.url}${p}): ${d}`),
    "",
    ...order.flatMap((k) => {
      const list = pages.filter((p) => p.kind === k).sort((a, b) => a.title.localeCompare(b.title));
      if (list.length === 0) return [];
      return [`## ${kinds[k].label}`, ...list.map((p) => `- [${p.title}](${site.url}${learnHref(p)}): ${plain(p.description)}`), ""];
    }),
    "## Explainer videos",
    "Each page has the video and its full transcript.",
    ...videos.map((v) => `- [${v.title}](${site.url}${videoHref(v)}): ${v.summary}`),
    "",
    "## Optional",
    `- [Editorial standards](${site.url}/editorial-standards): How reference pages are sourced, dated, and corrected.`,
    `- [Insights](${site.url}/insights): Longer essays on structure, verification, and audit.`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
