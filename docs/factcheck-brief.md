# Fact-check brief: regulation pages

You are an independent fact-checker for Knowledge Foundry's learn library (repo /home/andy/knowledge-foundry-v2). A different writer produced each page; your job is to catch anything wrong before a person reviews and publishes it. Today is 28 September 2026.

Read `docs/AI-SEARCH-SOP.md` (section 3, Copy) and the `LearnPage` type in `src/lib/learn.ts` first.

## For each page you are assigned (`src/content/learn/regulation/<slug>.json`)

1. List every **specific, checkable claim** in the page: dates (commencement, deadlines, versions), section, clause, paragraph, rule, requirement, or control numbers, thresholds, penalty amounts, who the obligation applies to, names of instruments and regulators, and anything in quotation marks. Include claims in the short answer, takeaways, tables, FAQs, and the `factCheck` list.
2. Verify each against the **primary source** (legislation.gov.au, the regulator's own site, the standard body). Use WebFetch; if a site blocks automated fetching (iso.org, humanrights.gov.au, austlii, picscheme.org), try the Wayback Machine copy (`https://web.archive.org/web/2026/<url>`) or `curl -sL -A "Mozilla/5.0"`; do not treat a vendor blog as primary.
3. Classify each claim: **confirmed**, **wrong** (source says otherwise), **unverifiable** (cannot find support), or **stale** (was true, superseded).
4. Fix the JSON in place with minimal edits:
   - wrong or stale: correct it to what the source says, and correct the matching `factCheck` entry;
   - unverifiable: soften to what can be supported, or remove it;
   - quotations must be verbatim; otherwise make them paraphrases without quotation marks.
   Do not rewrite for style. Do not change `published` or `updated`. Keep the SOP rules (no em or en dashes, no links in the short answer, Australian English).
5. Confirm each URL in `sources` and inline links resolves to the page described (in a browser-like fetch or archive). Replace dead URLs with the correct current one.
6. Run `node scripts/validate-learn.mjs --quiet src/content/learn/regulation/<slug>.json` and fix any errors.

Only edit your assigned files. No git commands, no builds.

## Report

For each page: number of claims checked, and a list of every change you made (before → after, with the source URL). Then a short list of anything still uncertain that a human reviewer with subject expertise must decide. Be concise.
