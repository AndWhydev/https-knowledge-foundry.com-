# AI search SOP: learn library pages

How every page under `/glossary`, `/guides`, `/regulations`, and `/compare` is researched, written, checked, and released. Evidence and sources behind each rule: `docs/research/ai-search-research.md` (rule IDs match its "Actionable rules" section). Rules marked **must** are release blockers. `node scripts/validate-learn.mjs` enforces the mechanical ones.

## Why pages get cited

AI search engines (ChatGPT search, Perplexity, Google AI Overviews and AI Mode, Copilot, Claude) retrieve a handful of candidate pages from a search index, then quote the passages that answer the question most directly and verifiably. Two things follow:

1. **Get into the candidate set:** crawlable HTML, indexed in Google and Bing, one clear topic per URL, strong internal links, real authority signals.
2. **Get quoted once there:** a self-contained answer at the top, question-shaped headings, specific facts with primary sources. Adding citations, quotations, and statistics is the only intervention shown to raise visibility in a controlled study (GEO, KDD 2024: 30 to 40% relative gain).

Schema and `llms.txt` are for correctness, not citation. Neither is a lever.

## 1. Technical (before anything is released)

| Rule | Status |
|---|---|
| **T1** canonical domain knowledge-foundry.com serves this site; vercel.app redirects to it | **Open: owner action** |
| **T2** WordPress URLs 301 to the nearest new page | **Open: owner action** |
| **T3** robots.txt allows everything but `/api/`, names AI search bots, does not block `/_next/` | Done (`src/app/robots.ts`) |
| **T4** Vercel firewall AI Bots ruleset not in deny mode | **Open: check in Vercel dashboard** |
| **T5** full body, headings, tables, dates in server HTML | Done (static render; FAQs never collapsed out of DOM) |
| **T6** no noindex / nosnippet on content | Done |
| **T7** sitemap lastmod equals the visible updated date, never build time | Done |
| **T8** Google Search Console and Bing Webmaster Tools verified, sitemap submitted | **Open: owner action after T1** |
| **T9** IndexNow submissions for new and changed URLs | Open: after T1 |
| **T10** GA4 "AI search" channel and monthly AI report review | Open: owner action |
| **T11** `/llms.txt` generated from the same index as the sitemap | Done |
| **T12** self-referencing canonical on every page | Done |

## 2. Page structure

- **P1** H1 is the buyer's question or the term. Glossary: "What is a competency framework?".
- **P2** `shortAnswer`, rendered directly under the H1: 40 to 80 words, self-contained if quoted alone, names the entity in full, **no links**. Glossary answers open "A [term] is ...".
- **P3** Byline with published and updated dates, link to `/editorial-standards`. Named reviewer shown only when a real one is supplied (`reviewedBy`); never invented.
- **P4** H2s phrased as the sub-questions a buyer or an AI fan-out query would ask (who it applies to, what it requires, when, penalties, how to evidence it, how to build the training). **The first sentence or two under every H2 answers that heading directly**, then detail follows.
- **P5** Key facts in the first 30% of the page: who it applies to, the core obligation, dates, the regulator.
- **P6** At least one table or ordered list where the content is genuinely tabular or sequential. No decorative tables.
- **P7** `sources`: every primary source used, title and issuing body. Inline citation links at the point a claim is made.
- **P8** 3 to 6 FAQs for residual questions not already answered by an H2. 30 to 90 word answers.
- **P9** Internal links: at least 3 in the body. Link glossary terms on first mention, 2 to 5 sibling pages, and one relevant product, program, or industry page. 3 to 6 `related` slugs.
- **P10** One topic per URL. If two planned pages overlap by more than about half, merge them.

## 3. Copy

- **C1** Regulation pages: at least three specific, verifiable facts unique to that regulation (section or clause numbers, commencement dates, thresholds, penalties, named regulator guidance), each linked to its primary source and recorded in `factCheck`.
- **C2** No unsourced numbers. No invented statistics, examples, quotations, or case studies. If a fact cannot be verified against a primary or authoritative source, leave it out.
- **C3** Quote the primary text verbatim where it is short and decisive (one or two per page), with attribution.
- **C4** At least one element of original value on every page: a worked example, a table mapping obligation to learning outcome to assessment evidence, a checklist, or a template. This separates reference content from commodity content.
- **C5** Full entity name on first mention with the abbreviation in brackets: "Australian Prudential Regulation Authority (APRA)". Same names sitewide.
- **C6** Plain, analytical Australian English. Short paragraphs, active voice, university reading level. No hype and no sales copy in answer sections. Knowledge Foundry appears only in a final section headed "How does Knowledge Foundry approach this?" (optional) and in `productLinks`.
- **C7** No keyword stuffing, hidden text, or text addressed to AI systems.
- **C8** Regulation pages state jurisdiction and currency: "as at September 2026".
- **C9** AI may draft. Every claim is checked against its source before release, and the `factCheck` record lists claim and source for the checked facts.

### House style (from the brand voice guide, adapted for reference content)

- No em dashes or en dashes anywhere, including source titles. No spaced hyphens used as dashes. Use commas, colons, brackets, or two sentences.
- No exclamation marks, no emoji, no numbers in headlines ("5 ways to ..."), no first person singular.
- No named competitors or vendor comparisons. Comparison pages are category level.
- Banned filler (checked): in today's, delve, ever evolving, game changer, unlock, seamless, landscape of, it is important to note, in conclusion, cutting edge, leverage, robust, holistic, synergy, paradigm, empower, embark, tapestry.
- The brand's distinctive phrases ("Structure before content", "Define first. Write second.") may appear once, in the Knowledge Foundry section only.

## 4. Schema (implemented in the template)

`Article` with published and modified dates matching the visible ones, `BreadcrumbList`, `DefinedTerm` in a `DefinedTermSet` for glossary pages, `FAQPage` for visible FAQs (no Google rich result since May 2026; harmless), sitewide `Organization`. No `HowTo`. Nothing marked up that is not visible. `Person` markup only for a real named reviewer.

## 5. Release and maintenance

- **E1** Nothing is released to production before T1 to T8 pass. `LIVE_RELEASE` in `src/lib/learn.ts` is 0 until then. Preview deployments and local builds show every page.
- **E2** Release 1 is the hubs plus the strongest 20 to 25 pages across all four clusters. Then one batch of 10 to 20 pages per week: raise `LIVE_RELEASE` by one and deploy.
- **E3** Before each new batch: previous batch indexed in Google and Bing, no manual actions, no crawl errors. If under about half are indexed after three weeks, pause and improve quality.
- **E4** Change `updated` only when content materially changes.
- **E5** Regulation pages reviewed every 6 months and immediately after regulator changes. Glossary every 12 months.
- **E6** At 90 days, review Search Console, Bing AI Performance, and a fixed prompt panel. Improve pages with impressions but no citations. Merge or remove pages with neither.
- **E7** Off-site: LinkedIn articles by named staff on the top guides, contributed articles in Australian industry body publications, genuine G2 and Capterra reviews, one piece of original research a year.

## 6. Page file format

One JSON file per page: `src/content/learn/<kind>/<slug>.json`, kind being `glossary`, `guide`, `regulation`, or `comparison`. Type: `LearnPage` in `src/lib/learn.ts`. Inline text supports `**bold**` and `[label](href)` only; internal hrefs start with `/`. Block types: `p`, `ul`, `ol`, `table` (`head`, `rows`, optional `caption`; first cell of each row is the row heading), `callout` (`title`, `text`).

Minimum body length (a quality floor, not a target): glossary 650 words, comparison 950, guide and regulation 1,200. Write until the question is fully answered.

## 7. Checklist per page

1. `node scripts/validate-learn.mjs <file>` passes with no errors.
2. Every fact in the regulation's `factCheck` was read on the source page itself, not a summary of it.
3. The short answer reads correctly if pasted alone into a chat reply.
4. Each H2's first sentence answers the H2.
5. At least one original element (C4) exists.
6. Nothing is invented. When in doubt, cut it.
