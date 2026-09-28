# Edit brief: make the learn library international

Knowledge Foundry is an international business: holding company in Portugal, with channels in Australia, Portugal (and the wider EU), the United States, Japan, and the United Arab Emirates. The learn library was written as if every reader were Australian. The owner's only criticism of the pages is that they "mention Australia a lot". Everything else about them is right: keep the substance, structure, tone, and accuracy exactly as they are.

Repo: /home/andy/knowledge-foundry-v2. Read `docs/AI-SEARCH-SOP.md` and the `LearnPage` type in `src/lib/learn.ts` first.

## What to change

**Guides, glossary, comparisons** (jurisdiction-neutral pages):
- Write for a reader in any of those markets. Remove "Australian", "in Australia", "Australian organisations" and similar wherever the point is general. Most mentions should simply go.
- Where a page uses an Australian regulator, law, or framework as an example (ASQA, AQF, AUSTRAC, APRA, ASIC, Safe Work Australia, TEQSA), keep it only if it genuinely illustrates the point, and frame it as one example: "for example, Australia's ASQA requires ..." rather than as the default context. Do not keep more than two Australian examples on a page.
- Where a page's argument depends on one regulatory example, you may add **one** comparable example from the EU, Portugal, the United States, Japan, or the UAE, but **only if you verify it on the primary source** (EUR-Lex, the EU AI Act text, GDPR text, ecfr.gov, OSHA, e-Gov Japan, UAE government portals, etc.) and add it to `sources` and `factCheck`. Good candidates: EU AI Act Article 4 (AI literacy), GDPR Article 39(1)(b) (DPO awareness raising and training), NIS2 Article 20(2) (management body training), DORA Article 13(6), US 29 CFR 1910 OSHA training provisions, US 21 CFR 211.25 (GMP personnel training). Do not add examples you cannot verify. Adding none is fine.
- Titles, `seoTitle`, and `description`: remove "Australian" unless the page is genuinely about Australia.

**Regulation pages** (these are genuinely about Australian law and stay Australian):
- Keep the jurisdiction; it is the point of the page. Cut **redundant** repetition: say "Australian" or "in Australia" once in the short answer or opening where it identifies the jurisdiction, then refer to the law or regulator by name. Aim for at most about four mentions of Australia per page including the short answer, takeaways, sections, and FAQs (full formal names such as "Australian Prudential Regulation Authority" and statute titles do not count and must not be changed).
- Standardise the `jurisdiction` field to start with "Australia" for Australian law pages (e.g. "Australia (Commonwealth)" or "Australia: ..."), and to exactly "International standard (ISO)" for the three ISO pages (iso-45001-competence-and-awareness, iso-27001-awareness-training-requirements, iso-9001-competence-requirements). On the ISO pages, make the body international: explain the standard for any organisation, and keep any Australian law cross-references to one short, clearly labelled example.

**Everywhere:**
- Keep Australian/British spelling (organisation, behaviour, programme is not used; use "program").
- Do not change facts, dates, clause numbers, quotations, `published`, `updated`, `release`, `related`, or `slug`.
- Keep every SOP rule: short answer 40 to 80 words with no links, no em or en dashes, no banned phrases, at least 3 internal links, minimum word counts.
- After editing each file, run `node scripts/validate-learn.mjs --quiet <file>` from the repo root and fix any errors.
- Only edit your assigned files. No git, no builds.

## Report

Per page: Australia mentions before → after (count), and any international example you added with its source. Keep it short.

To count: `python3 -c "import json,re,sys;d=json.load(open(sys.argv[1]));v=json.dumps({k:d[k] for k in ['title','seoTitle','description','shortAnswer','keyTakeaways','sections','faqs']});print(len(re.findall(r'\bAustralia(n|ns)?\b',v)))" <file>`
