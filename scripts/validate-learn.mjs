#!/usr/bin/env node
/**
 * Validates every learn page against the AI search SOP (docs/AI-SEARCH-SOP.md).
 * Usage: node scripts/validate-learn.mjs [--quiet] [file ...]
 * Exits 1 on any error. Warnings do not fail.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const contentDir = path.join(root, "src/content/learn");
const appDir = path.join(root, "src/app");
const KINDS = { glossary: "/glossary", guide: "/guides", regulation: "/regulations", comparison: "/compare" };
const MIN_WORDS = { glossary: 650, comparison: 950, guide: 1200, regulation: 1200 };
const MIN_SOURCES = { glossary: 2, comparison: 2, guide: 3, regulation: 3 };
const BANNED = [
  "in today's", "delve", "ever-evolving", "ever evolving", "game-changer", "game changer", "unlock",
  "seamless", "navigate the complex", "landscape of", "it's important to note", "it is important to note",
  "in conclusion", "look no further", "revolutioni", "cutting-edge", "cutting edge", "leverage",
  "tapestry", "embark", "holistic", "synergy", "paradigm", "robust", "empower",
];
const US_SPELLING = [
  /\borganiz/i, /\bbehavior/i, /\bcolor\b/i, /\banalyz/i, /\bprioritiz/i, /\brecogniz/i, /\bstandardiz/i,
  /\boptimiz/i, /\bcenter\b/i, /\blicense\b(?! holder)/i, /\bdefense\b/i, /\bcatalog\b/i, /\benroll\b/i, /\bfulfill\b/i,
];

const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const only = args.filter((a) => !a.startsWith("--")).map((f) => path.resolve(f));

// Static routes from the app directory.
const routes = new Set(["/"]);
(function walk(dir, prefix) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith("[") || e.name.startsWith("(") || e.name.startsWith("_")) continue;
    const p = path.join(dir, e.name);
    const r = `${prefix}/${e.name}`;
    if (fs.existsSync(path.join(p, "page.tsx"))) routes.add(r);
    walk(p, r);
  }
})(appDir, "");

// Load all pages.
const pages = [];
for (const [kind] of Object.entries(KINDS)) {
  const dir = path.join(contentDir, kind);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    const file = path.join(dir, f);
    try {
      pages.push({ file, kind, data: JSON.parse(fs.readFileSync(file, "utf8")) });
    } catch (e) {
      pages.push({ file, kind, parseError: e.message });
    }
  }
}
for (const p of pages) if (p.data) routes.add(`${KINDS[p.kind]}/${p.data.slug}`);
const slugs = new Map(pages.filter((p) => p.data).map((p) => [p.data.slug, p]));

const words = (s) => String(s ?? "").split(/\s+/).filter(Boolean).length;
const allText = (d) =>
  [
    d.title, d.seoTitle, d.description, d.shortAnswer, ...(d.keyTakeaways ?? []),
    ...(d.sections ?? []).flatMap((s) => [s.heading, ...(s.blocks ?? []).flatMap((b) =>
      b.type === "p" || b.type === "callout" ? [b.title ?? "", b.text] : b.type === "table" ? [b.caption ?? "", ...b.head, ...b.rows.flat()] : b.items ?? [])]),
    ...(d.faqs ?? []).flatMap((f) => [f.q, f.a]),
  ].join("\n");
const bodyWords = (d) =>
  words([d.shortAnswer, ...(d.keyTakeaways ?? []), ...(d.sections ?? []).flatMap((s) => [s.heading, ...(s.blocks ?? []).flatMap((b) =>
    b.type === "p" || b.type === "callout" ? [b.text] : b.type === "table" ? [...b.head, ...b.rows.flat()] : b.items ?? [])]), ...(d.faqs ?? []).flatMap((f) => [f.q, f.a])].join(" "));

let errors = 0, warnings = 0;
const titles = new Map(), seoTitles = new Map();

for (const p of pages) {
  if (only.length && !only.includes(p.file)) continue;
  const rel = path.relative(root, p.file);
  const E = (m) => { errors++; console.log(`ERROR ${rel}: ${m}`); };
  const W = (m) => { warnings++; if (!quiet) console.log(`warn  ${rel}: ${m}`); };
  if (p.parseError) { E(`invalid JSON: ${p.parseError}`); continue; }
  const d = p.data;
  const base = path.basename(p.file, ".json");

  for (const k of ["slug", "title", "seoTitle", "description", "shortAnswer", "keyTakeaways", "sections", "faqs", "sources", "related", "published", "updated"])
    if (d[k] === undefined) E(`missing field ${k}`);
  if (d.slug !== base) E(`slug "${d.slug}" does not match filename`);
  if (d.kind && d.kind !== p.kind) E(`kind "${d.kind}" does not match folder "${p.kind}"`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.slug ?? "")) E("slug must be lowercase kebab case");
  if ((d.seoTitle ?? "").length > 40) E(`seoTitle ${d.seoTitle.length} chars (max 40)`);
  const dl = (d.description ?? "").length;
  if (dl < 120 || dl > 158) E(`description ${dl} chars (120 to 158)`);
  const sa = words(d.shortAnswer);
  if (sa < 40 || sa > 75) E(`shortAnswer ${sa} words (40 to 75)`);
  if (!Array.isArray(d.keyTakeaways) || d.keyTakeaways.length < 3 || d.keyTakeaways.length > 5) E("keyTakeaways must have 3 to 5 items");
  if (p.kind === "glossary" && !d.term) E("glossary page needs term");
  if (p.kind === "regulation" && (!d.jurisdiction || !d.regulator)) E("regulation page needs jurisdiction and regulator");
  for (const k of ["published", "updated"]) if (d[k] && !/^\d{4}-\d{2}-\d{2}$/.test(d[k])) E(`${k} must be YYYY-MM-DD`);

  const minSections = p.kind === "glossary" ? 3 : 4;
  if (!Array.isArray(d.sections) || d.sections.length < minSections) E(`needs at least ${minSections} sections`);
  const ids = new Set();
  for (const s of d.sections ?? []) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.id ?? "")) E(`section id "${s.id}" must be kebab case`);
    if (ids.has(s.id) || s.id === "faq" || s.id === "sources") E(`duplicate or reserved section id "${s.id}"`);
    ids.add(s.id);
    if (!s.blocks?.length) E(`section "${s.id}" has no blocks`);
    for (const b of s.blocks ?? []) {
      if (!["p", "ul", "ol", "table", "callout"].includes(b.type)) E(`section "${s.id}" has unknown block type "${b.type}"`);
      if (b.type === "table") {
        if (!b.head?.length || !b.rows?.length) E(`table in "${s.id}" needs head and rows`);
        for (const r of b.rows ?? []) if (r.length !== b.head.length) E(`table row in "${s.id}" has ${r.length} cells, head has ${b.head.length}`);
      }
      if ((b.type === "p") && words(b.text) > 120) W(`long paragraph (${words(b.text)} words) in "${s.id}"`);
    }
  }
  const questionHeadings = (d.sections ?? []).filter((s) => /\?$/.test(s.heading)).length;
  if (questionHeadings < Math.min(2, (d.sections ?? []).length)) W("fewer than 2 question style H2s");

  if (!Array.isArray(d.faqs) || d.faqs.length < 3 || d.faqs.length > 6) E("faqs must have 3 to 6 items");
  for (const f of d.faqs ?? []) {
    if (!/\?$/.test(f.q)) E(`FAQ question must end with ?: "${f.q}"`);
    const n = words(f.a);
    if (n < 20 || n > 110) W(`FAQ answer ${n} words (aim 30 to 90): "${f.q}"`);
  }

  if ((d.sources ?? []).length < MIN_SOURCES[p.kind]) E(`needs at least ${MIN_SOURCES[p.kind]} sources`);
  for (const s of d.sources ?? []) {
    if (!/^https:\/\//.test(s.url ?? "")) E(`source URL must be https: ${s.url}`);
    if (!s.title || !s.publisher) E(`source missing title or publisher: ${s.url}`);
  }
  if (p.kind === "regulation" && (d.jurisdiction ?? "").includes("Australia") &&
      !(d.sources ?? []).some((s) => /\.gov\.au\//.test(s.url + "/")))
    E("Australian regulation page needs at least one .gov.au primary source");

  if (!Array.isArray(d.related) || d.related.length < 3 || d.related.length > 6) E("related must have 3 to 6 slugs");
  for (const r of d.related ?? []) {
    if (r === d.slug) E("related includes itself");
    else if (!slugs.has(r)) W(`related slug not (yet) published: ${r}`);
  }
  for (const l of d.productLinks ?? []) if (!routes.has(l.href)) E(`productLinks href not a route: ${l.href}`);

  const text = allText(d);
  if (/[–—]/.test(text + JSON.stringify(d.sources ?? []))) E("contains an em or en dash (sources included; use a colon or hyphen in source titles)");
  if (/ - /.test(text)) E("contains a spaced hyphen used as a dash");
  for (const m of text.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
    const href = m[2];
    if (href.startsWith("/")) { if (!routes.has(href.split("#")[0])) W(`internal link not (yet) a route: ${href}`); }
    else if (!/^https:\/\//.test(href)) E(`link must be internal or https: ${href}`);
  }
  const lower = text.toLowerCase();
  for (const b of BANNED) if (lower.includes(b)) E(`banned phrase "${b}"`);
  for (const re of US_SPELLING) { const m = text.match(re); if (m) W(`US spelling? "${m[0]}"`); }
  if (/!/.test(text.replace(/\]\([^)]*\)/g, ""))) W("contains an exclamation mark");

  const wc = bodyWords(d);
  if (wc < MIN_WORDS[p.kind]) E(`${wc} words (min ${MIN_WORDS[p.kind]} for ${p.kind})`);

  const t = (d.title ?? "").toLowerCase();
  if (titles.has(t)) E(`duplicate title with ${titles.get(t)}`); else titles.set(t, rel);
  const st = (d.seoTitle ?? "").toLowerCase();
  if (seoTitles.has(st)) E(`duplicate seoTitle with ${seoTitles.get(st)}`); else seoTitles.set(st, rel);
}

console.log(`\n${pages.length} pages checked: ${errors} errors, ${warnings} warnings`);
process.exit(errors ? 1 : 0);
