# Writer brief: learn library pages

You are writing reference pages for Knowledge Foundry (repo: /home/andy/knowledge-foundry-v2), an Australian enterprise platform that defines the knowledge framework (concepts, relationships, assessment points, provenance) before any training content is written, so training in regulated organisations is reviewable, standards aligned, and audit ready. Readers: heads of L&D, compliance, risk, and training managers in regulated Australian organisations. The pages must be good enough that ChatGPT, Perplexity, Google AI Overviews, and Claude quote them.

## Read first (required)

1. `docs/AI-SEARCH-SOP.md`: the rules. Follow every "must".
2. `src/lib/learn.ts`: the `LearnPage` type (your JSON must match it exactly).
3. `docs/ai-search-topic-map.md`: every planned slug, for `related` and internal links.

## Research and accuracy (the most important part)

- Use WebSearch and WebFetch. For every factual claim about a law, regulator, standard, date, threshold, clause number, or penalty, **open the primary source** (legislation.gov.au, the regulator's own site, the standard body's page) and confirm it. Do not rely on your memory or on blog summaries for facts. Today is 28 September 2026; many Australian rules changed in 2024 to 2026, so check what is current and what has commenced.
- If you cannot verify something, leave it out. Never invent statistics, case examples, quotations, clause numbers, or URLs. Every URL you put in `sources`, `factCheck`, or an inline link must be one you actually fetched successfully (or confirmed exists via search results showing that exact URL).
- ISO standards are paywalled: cite iso.org pages for the standard and describe clause content at the level ISO and reputable certification bodies describe publicly. Do not quote paywalled text at length.
- Regulation pages: record at least 3 (aim for 5+) checked claims in `factCheck` as `{ "claim": "...", "source": "https://..." }`.
- Glossary, guide, and comparison pages: cite authoritative sources (regulators, standards bodies, ADL for SCORM/xAPI/cmi5, universities, government). Record `factCheck` entries for any specific facts you state.

## Writing

- Australian English (organisation, behaviour, programme is acceptable but the site uses "program"; use "program"). Plain, analytical, confident. Not salesy.
- Structure per the SOP: short answer (40 to 80 words, no links) → key takeaways (3 to 5) → sections with question headings where natural, each opening with a direct 1 to 2 sentence answer → optional final section "How does Knowledge Foundry approach this?" (2 to 4 sentences, factual, no hype) → FAQs (3 to 6) → sources.
- Include at least one original element (SOP C4): e.g. a table mapping obligations to learning outcomes to assessment evidence, a worked example clearly labelled illustrative, a checklist.
- Internal links: at least 3 in the body using `[label](/path)`. Link to sibling learn pages by their planned paths (`/glossary/<slug>`, `/guides/<slug>`, `/regulations/<slug>`, `/compare/<slug>` from the topic map, even if not written yet) and to one product page where relevant. Valid product paths: /platform, /platform/see-it-work, /platform/framework-intelligence, /platform/gap-analysis, /platform/remediation, /platform/knowledge-transformation, /platform/verification-trust, /platform/knowledge-governance, /platform/standards-accreditation, /platform/audit-evidence, /platform/enterprise-learning-modernisation, /platform/integrations, /platform/technical-overview, /programs, /programs/educational, /programs/compliance, /programs/product-enablement, /programs/operational-procedures, /programs/hybrid-verification, /industries/financial-services, /industries/healthcare-life-sciences, /industries/energy-resources, /industries/government-defence, /industries/professional-services, /industries/higher-education, /demonstration.
- `productLinks`: 1 to 3 of the product paths above, only where genuinely relevant, with plain labels.
- No em dashes (—) or en dashes (–) anywhere, including source titles (replace with a colon or hyphen). No " - " used as a dash. No exclamation marks. No banned phrases (see SOP). No named vendors or products in comparisons.
- Do not write to a word count, but the validator enforces floors: glossary 650, comparison 950, guide and regulation 1,200 words. Most regulation and guide pages will naturally run 1,400 to 2,200.
- Field notes: `slug` equals the filename; `kind` matches the folder; `seoTitle` max 40 characters (the site appends " · Knowledge Foundry"); `description` 120 to 158 characters; `published` and `updated` are "2026-09-28"; `release` is 1 (the editor re-batches later); omit `reviewedBy`. Section `id`s are kebab case and unique; do not use `faq` or `sources` as ids. Table rows must have the same number of cells as `head`.

## Process per page

1. Research (fetch sources) → 2. write the JSON to `src/content/learn/<kind>/<slug>.json` → 3. run `node scripts/validate-learn.mjs --quiet src/content/learn/<kind>/<slug>.json` from the repo root and fix every ERROR (warnings about related slugs "not yet published" are expected) → 4. reread: does each H2's first sentence answer it; is anything unverified; would the short answer stand alone?

Only create or edit your own batch's files. Do not edit any other file in the repo. Do not run `next build` or git commands.

## Report back

A short table: slug, word count (from the validator or your estimate), number of sources, and any claims you deliberately left out or anything a human reviewer should double check (especially regulatory points that are in transition).
