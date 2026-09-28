import fs from "node:fs";
import path from "node:path";

/**
 * Learn library: answer-first reference pages built for AI search and
 * classic search. One JSON file per page under src/content/learn/<kind>/.
 * The schema is validated by scripts/validate-learn.mjs before build.
 */

export type LearnKind = "glossary" | "guide" | "regulation" | "comparison";

export const kinds: Record<
  LearnKind,
  { path: string; label: string; singular: string; eyebrow: string; intro: string }
> = {
  glossary: {
    path: "/glossary",
    label: "Glossary",
    singular: "Definition",
    eyebrow: "Glossary",
    intro:
      "Plain definitions of the terms used in structured learning, compliance training, and knowledge governance.",
  },
  guide: {
    path: "/guides",
    label: "Guides",
    singular: "Guide",
    eyebrow: "Guide",
    intro:
      "Step by step methods for building, evidencing, and maintaining training in regulated organisations.",
  },
  regulation: {
    path: "/regulations",
    label: "Regulations and standards",
    singular: "Regulation",
    eyebrow: "Regulation and standard",
    intro:
      "What regulations and international standards require of training, competence, and evidence, grouped by jurisdiction, with links to the primary sources.",
  },
  comparison: {
    path: "/compare",
    label: "Comparisons",
    singular: "Comparison",
    eyebrow: "Comparison",
    intro:
      "Side by side explanations of commonly confused approaches, formats, and tools in workplace learning.",
  },
};

/** Inline text supports **bold** and [label](href) links only. */
export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title?: string; text: string };

export type LearnSection = { id: string; heading: string; blocks: Block[] };

export type LearnPage = {
  slug: string;
  kind: LearnKind;
  /** H1. For glossary pages, the question form ("What is a competency framework?"). */
  title: string;
  /** Shown in <title> before the site suffix. Max 40 characters. */
  seoTitle: string;
  /** Meta description, 120 to 158 characters. */
  description: string;
  /** Direct 40 to 75 word answer to the page's core question. Rendered first. */
  shortAnswer: string;
  keyTakeaways: string[];
  /** Glossary only: the term being defined and common alternative names. */
  term?: string;
  alsoKnownAs?: string[];
  /** Regulation only. */
  jurisdiction?: string;
  regulator?: string;
  appliesTo?: string[];
  sections: LearnSection[];
  faqs: { q: string; a: string }[];
  sources: { title: string; publisher: string; url: string }[];
  /** Slugs of other learn pages (any kind). */
  related: string[];
  /** Links into the product site where genuinely relevant. */
  productLinks?: { label: string; href: string }[];
  published: string;
  updated: string;
  /**
   * Release batch (docs/AI-SEARCH-SOP.md, rule E2). Production shows pages
   * with release <= LIVE_RELEASE; previews and local builds show everything.
   */
  release: number;
  /** Named human reviewer. Rendered only when present; never invented. */
  reviewedBy?: { name: string; role: string; url?: string };
  /** Not rendered. Review record: each checked claim and the source that supports it. */
  factCheck?: { claim: string; source: string }[];
};

/**
 * Highest release batch that is live on production. 0 = nothing published:
 * hold until the canonical domain serves this site (SOP rule E1).
 */
export const LIVE_RELEASE = 1;

const showAll = process.env.VERCEL_ENV !== "production";

const ROOT = path.join(process.cwd(), "src", "content", "learn");

let cache: LearnPage[] | null = null;

export function allLearnPages(): LearnPage[] {
  if (cache) return cache;
  const pages: LearnPage[] = [];
  for (const kind of Object.keys(kinds) as LearnKind[]) {
    const dir = path.join(ROOT, kind);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) {
      const page = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")) as LearnPage;
      if (showAll || page.release <= LIVE_RELEASE) pages.push({ ...page, kind });
    }
  }
  cache = pages;
  return pages;
}

export function learnPagesOf(kind: LearnKind): LearnPage[] {
  return allLearnPages()
    .filter((p) => p.kind === kind)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getLearnPage(kind: LearnKind, slug: string): LearnPage | undefined {
  return allLearnPages().find((p) => p.kind === kind && p.slug === slug);
}

export function findLearnPage(slug: string): LearnPage | undefined {
  return allLearnPages().find((p) => p.slug === slug);
}

/** Jurisdictions the regulation index groups by, in display order. */
export const regions = [
  "International standards",
  "European Union",
  "Portugal",
  "United States",
  "Japan",
  "United Arab Emirates",
  "Australia",
] as const;

export function regionOf(page: Pick<LearnPage, "jurisdiction">): string {
  const j = page.jurisdiction ?? "";
  if (/^International/i.test(j)) return "International standards";
  return regions.find((r) => j.startsWith(r)) ?? "Other";
}

export function learnHref(page: Pick<LearnPage, "kind" | "slug">): string {
  return `${kinds[page.kind].path}/${page.slug}`;
}

export function wordCount(page: LearnPage): number {
  const text = [
    page.shortAnswer,
    ...page.keyTakeaways,
    ...page.sections.flatMap((s) => [
      s.heading,
      ...s.blocks.flatMap((b) =>
        b.type === "p" || b.type === "callout"
          ? [b.text]
          : b.type === "table"
            ? [...b.head, ...b.rows.flat()]
            : b.items,
      ),
    ]),
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(page: LearnPage): number {
  return Math.max(2, Math.round(wordCount(page) / 220));
}

/** "September 28, 2026" */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
