# Industry wave brief (November 2026)

Shared instructions for every writer in the industry and niche expansion. Read this first, then `docs/writer-brief.md`, `docs/AI-SEARCH-SOP.md`, and the `LearnPage` type in `src/lib/learn.ts`. Open two existing regulation pages (for example `src/content/learn/regulation/hipaa-security-and-privacy-training.json` and `src/content/learn/regulation/austrac-aml-ctf-training-requirements.json`) and match their structure and quality.

## Overrides to the writer brief

- Today is 2026-11-08. `published` and `updated` are "2026-11-08". Currency phrasing: "as at November 2026".
- `release` is the number given in your task.
- These pages are `kind: "regulation"` unless your task says otherwise, written to `src/content/learn/regulation/<slug>.json`.
- The H1 is the question a person in that industry actually types or asks an assistant, for example "What training is mandatory for dental practices in Australia?".

## Quality bar (this is what keeps the expansion safe under Google's scaled content and doorway policies)

1. Every page must carry at least 5 specific, verifiable facts unique to that industry and jurisdiction (section or clause numbers, hours, frequencies, thresholds, commencement dates, named regulator guidance), each read on the primary source and recorded in `factCheck`.
2. If you cannot verify 5 such facts for a page from primary sources, **do not write the page**. Report it as skipped with the reason. Never pad, never generalize to fill space, never invent.
3. No two pages may share boilerplate paragraphs. Each page's sections, tables and FAQs are specific to its industry. Do not reuse your own wording across pages in your batch.
4. Each page needs an original element (SOP C4): normally a table mapping each obligation to the role it applies to, the frequency, and the evidence an auditor would expect.
5. Name the regulator and the instrument in full on first mention. State the jurisdiction precisely (for example "Australia (New South Wales)").
6. Where an obligation is in transition, consultation, litigation, or not yet commenced, say so plainly with the date.

## Research budget

The shared web search budget is limited. Prefer WebFetch on official sources you can name directly (legislation sites, regulator sites, eCFR mirrors at law.cornell.edu, EUR-Lex, legislation.gov.au, MHLW, ecfr mirrors). Use WebSearch only to find a specific official URL you cannot guess, and keep it to a handful of searches per page.

## Linking

At least 3 internal body links: existing pages (list `src/content/learn/*/`), the relevant industry page (`/industries/financial-services`, `/industries/healthcare-life-sciences`, `/industries/energy-resources`, `/industries/government-defence`, `/industries/professional-services`, `/industries/higher-education`), and core guides such as `/guides/how-to-map-training-to-compliance-obligations`, `/guides/how-to-build-a-training-matrix`, `/guides/how-to-prepare-training-records-for-an-audit`, `/guides/how-to-set-mandatory-training-refresh-cycles`. Only link slugs that exist on disk or are in your own batch.

## Process

Research, write, then run `node scripts/validate-learn.mjs --quiet <file>` and fix every ERROR. Create only the files in your task. No other edits, no build, no git.

## Report

Table: slug, words, sources, factCheck count, and reviewer flags. List skipped pages with reasons.
