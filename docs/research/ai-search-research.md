# AI search visibility research: GEO, AEO and the SEO that feeds them

Prepared for: Knowledge Foundry (production preview https://https-knowledge-foundrycom.vercel.app, canonical https://knowledge-foundry.com)
Research date: 28 September 2026
Scope: how ChatGPT search, Perplexity, Google AI Overviews and AI Mode, Microsoft Copilot, Claude and Gemini find and cite sources, and what that means for publishing about 100 informational pages (glossary, regulation guides, how to guides, comparisons) for an Australian enterprise B2B audience in regulated sectors.

## How to read this report

Every claim is tagged with its evidence type:

- **[Primary]**: the platform's own documentation or an official blog post.
- **[Study]**: a published analysis with a stated method and sample. Almost all of these are by SEO tool vendors (Ahrefs, Semrush, BrightEdge, Profound, SE Ranking, Seer). They are useful but correlational, usually not peer reviewed, and the vendor sells a product in the space.
- **[Academic]**: peer reviewed or preprint research.
- **[Reported]**: trade press reporting on something the platform did not formally document.
- **[Vendor claim / speculation]**: marketing assertions or unverified figures. Treat with caution.

Headline conclusion: there is no separate "AI ranking algorithm" you can optimise for in isolation. Every major AI search product retrieves from a conventional search index (Google, Bing, Brave, or the vendor's own crawl) and then chooses passages to quote. Being indexed, crawlable and ranking reasonably in that underlying index is the entry ticket. On top of that, a small set of content traits (answer first, clear definitions, specific facts, cited sources, freshness, entity clarity) and off-site brand presence shift the odds of being the passage that gets quoted.

---

## 1. How each AI search engine retrieves and selects sources

### 1.1 Summary table

| Product | Retrieval index | Crawler that must be allowed for citation | Training crawler (can be blocked without losing citation) | User-triggered fetcher |
|---|---|---|---|---|
| ChatGPT search | Mixed: OpenAI's own index plus third-party providers (Bing historically dominant; Google and others observed) | `OAI-SearchBot` | `GPTBot` | `ChatGPT-User` (robots.txt "may not apply") |
| Perplexity | Own index ("hundreds of billions" of pages) | `PerplexityBot` | None declared (Perplexity says PerplexityBot is not used for foundation model training) | `Perplexity-User` (generally ignores robots.txt) |
| Google AI Overviews and AI Mode | Google Search index, via core ranking systems plus query fan-out | `Googlebot` | `Google-Extended` (does not affect Search inclusion) | n/a |
| Gemini app | Google Search grounding | `Googlebot` | `Google-Extended` also governs grounding use in Gemini apps and Vertex AI | n/a |
| Microsoft Copilot and Bing AI answers | Bing index | `Bingbot` | No separate token; use NOARCHIVE / NOCACHE meta to limit AI use | n/a |
| Claude (web search) | Brave Search (strong evidence, not formally named) plus Anthropic's own search crawl | `Claude-SearchBot` | `ClaudeBot` | `Claude-User` (honours robots.txt) |
| Apple (Siri, Spotlight, Safari suggestions) | Applebot crawl | `Applebot` | `Applebot-Extended` (does not crawl; only controls training use) | n/a |

### 1.2 OpenAI (ChatGPT search)

- **[Primary]** OpenAI's crawler page lists four agents. `OAI-SearchBot` powers ChatGPT search results; sites that want to appear in search answers should allow it. `GPTBot` collects training data; disallowing it opts out of training only. `ChatGPT-User` performs user-initiated actions and "robots.txt rules may not apply". `OAI-AdsBot` only visits submitted ad landing pages. OpenAI says it can take about 24 hours after a robots.txt change for its systems to adjust. (developers.openai.com/api/docs/bots, undated, fetched September 2026)
- **[Primary]** OpenAI's publisher FAQ says any public site can appear in ChatGPT search, advises not blocking OAI-SearchBot, notes that a URL learned from a third-party search provider may still show as a bare link and title unless the page carries `noindex`, and says ChatGPT appends `utm_source=chatgpt.com` to outbound links. (help.openai.com publisher FAQ; page returned 403 to our fetcher, content confirmed via search result extracts and multiple secondary reports)
- **[Study]** Seer Interactive (6 February 2025, about 100 queries, 500+ citations) found 87% of SearchGPT citations matched Bing's top organic results versus 56% for Google. Small sample.
- **[Study]** Ahrefs (3 September 2025, about 3,311 short-tail queries) found only 10% URL overlap between ChatGPT citations and Google's top 10, but 31.8% domain overlap: ChatGPT often picks a different page from a domain that ranks.
- **[Study / Reported]** Peec AI (4 September 2026) reported, from inspecting ChatGPT's response streams and OpenAI job ads, that ChatGPT runs its own multi-vertical index (internally "Labrador": general web, PDFs, YouTube, news, Wikipedia, legal, medical, finance and more) and also pulls from Google, Microsoft's Web IQ, licensed partners and scraping providers. OpenAI has not published this architecture. Treat the details as credible but unconfirmed.
- **[Study]** Semrush (30 June 2026, 100 prompts run in two modes) found only 25.6% of cited domains overlap between ChatGPT's minimal reasoning and high reasoning ("Thinking") modes. Thinking mode cited more sources (4.5 versus 2.6 per answer), cut Reddit's share from 15% to 7%, and raised government and academic sources from 1.9% to 8.8%. For a regulated-sector B2B audience this is relevant: deeper, more authoritative reference content is favoured when users ask considered questions.

**Implication:** allow `OAI-SearchBot`, make sure pages are indexed in Bing (Bing Webmaster Tools plus IndexNow), and do not rely on Bing alone because OpenAI's own crawl is growing.

### 1.3 Perplexity

- **[Primary]** `PerplexityBot` is "designed to surface and link websites in search results on Perplexity. It is not used to crawl content for AI foundation models." It respects robots.txt. `Perplexity-User` fetches pages when a user asks and "generally ignores robots.txt rules". IP lists are published. (docs.perplexity.ai/guides/bots, undated)
- **[Primary]** Perplexity launched a public Search API on 25 September 2025 describing its own index of "hundreds of billions" of pages.
- **[Reported]** Cloudflare (4 August 2025) accused Perplexity of using undeclared crawlers with generic Chrome user agents to bypass blocks; Perplexity denied it. Not directly relevant to a site that wants to be cited, but it shows user-agent blocking is not a reliable control.
- **[Study]** Ahrefs (September 2025) found 65% of Perplexity citations matched Google's top 10 for short-tail queries, much higher than ChatGPT.
- **[Study]** Ahrefs freshness study (28 July 2025) found Perplexity weights recency heavily.

### 1.4 Google AI Overviews, AI Mode and Gemini

- **[Primary]** Google's "AI features and your website" page (updated 10 December 2025): to be eligible as a supporting link, a page must be indexed and eligible to show a snippet. "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary." AI Overviews and AI Mode use "query fan-out", issuing multiple related searches across subtopics. Controls are the normal ones: `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex`.
- **[Primary]** Google's "Optimizing your website for generative AI features on Google Search" guide (published 15 May 2026, updated 10 July 2026) describes retrieval augmented generation on top of core Search ranking systems plus query fan-out. It tells site owners to publish unique, non-commodity content with "unique expert or experienced takes that go beyond common knowledge", use clear headings and semantic HTML, meet technical requirements, and reduce duplicate content. It lists things you do **not** need: llms.txt, chunking content into tiny pieces, rewriting "just for generative AI search", chasing inauthentic mentions, or special schema.
- **[Primary]** `Google-Extended` controls whether Google crawled content is used to train future Gemini models and for grounding in Gemini apps and Vertex AI. "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal." (common crawlers page, updated 14 July 2026). So blocking Google-Extended does not remove you from AI Overviews or AI Mode, which are Search features.
- **[Primary / Reported]** Search Console now has a property-level "Search generative AI" control that excludes a site from AI features; Google says it is not used as a ranking signal elsewhere. Rolled out worldwide 31 August 2026. The UK CMA has required page-level controls by March 2027. (Search Engine Journal, 31 August 2026)
- **[Study]** Ahrefs (21 July 2025, 1.9 million citations from 1 million AI Overviews): 76.1% of cited pages ranked in the top 10. **[Study]** Ahrefs follow-up (reported 2 March 2026, 863,000 keywords, 4 million AI Overview URLs): only 38% ranked in the top 10 for the same query, 31.2% in positions 11 to 100 and 31.0% beyond 100. Ahrefs says the two datasets are not directly comparable (better citation parsing) and attributes much of the change to query fan-out and the switch to Gemini 3 for AI Overviews in January 2026. **[Study]** BrightEdge (16 months to September 2025) found overlap rising from 32.3% to 54.5%, and much higher in trust-sensitive verticals: healthcare 75.3%, education 72.6%.

**Implication:** ranking for the exact head query matters less than it did, but being in Google's index and ranking for the many sub-questions that fan-out generates matters a great deal. That argues for a cluster of precise, specific pages (which is exactly the 104-page topic map) rather than a few broad ones. In YMYL-like sectors (health, finance), organic ranking is still the strongest predictor.

### 1.5 Microsoft Copilot and Bing

- **[Primary / Reported]** Bing rewrote its Webmaster Guidelines on 27 February 2026. They now name Generative Engine Optimization, describe "grounding results and citations" as an eligibility outcome, recommend stating facts directly, using consistent entity names, keeping each URL to one topic with key information near the top, and expand spam definitions to "Keyword Stuffing and Artificially Engineered Language" and prompt injection. Meta directives: `NOARCHIVE` prevents use in Copilot answers; `NOCACHE` limits Copilot to URL, title and snippet; `data-nosnippet` may reduce citation quality. (Search Engine Journal summary, 27 February 2026; the Bing guidelines page did not render for our fetcher)
- **[Primary]** Bing Webmaster Tools AI Performance report (public preview 10 February 2026) shows total citations, average cited pages, grounding queries and page-level citation counts across Copilot, Bing AI summaries and some partner integrations. Bing's own recommendations there: depth and expertise, clear headings, tables and FAQ sections, claims supported with examples, data and cited sources, and IndexNow to keep content current.

### 1.6 Anthropic (Claude)

- **[Primary]** Anthropic's support article (dated 7 April 2026) describes three bots, all honouring robots.txt and `Crawl-delay`: `ClaudeBot` (training), `Claude-SearchBot` (indexing for search result quality; blocking it "may reduce your site's visibility and accuracy in user search results"), and `Claude-User` (fetches pages in response to user questions). Anthropic publishes an IP list and warns that IP blocking can stop its bots reading robots.txt.
- **[Reported]** Anthropic added Brave Search to its subprocessor list on 19 March 2025, and independent testing (Simon Willison, March 2025) matched Claude's citations to Brave results. Anthropic has not formally named its search provider. Brave runs its own independent index.

**Implication:** allow `Claude-SearchBot` and `Claude-User`. Being well indexed by Brave matters for Claude; there is no Brave webmaster console, but Brave discovers pages through its own crawl and browser-derived signals.

### 1.7 Apple

- **[Primary]** Apple (support article dated 4 September 2026): `Applebot` powers Siri, Spotlight and Safari search features. `Applebot-Extended` "does not crawl webpages"; it only controls whether Applebot-collected data trains Apple's foundation models. Blocking it leaves you discoverable in Spotlight, Siri and Safari.

### 1.8 Crawling technicalities that affect this site

- **[Study]** Vercel (17 December 2024): AI crawlers from OpenAI, Anthropic, Meta, ByteDance and Perplexity fetch JavaScript files but **do not execute them**. Only Google (Gemini via Googlebot) and Applebot render. Critical content must be in the server-rendered HTML. Knowledge Foundry is statically generated with Next.js 16, so body copy is already in the HTML; keep it that way (no client-only tabs, accordions that fetch content, or content injected after hydration).
- **[Primary]** Vercel's AI Bots managed firewall ruleset is off by default, but if anyone enables it in deny mode it will block search bots as well as training bots. Check the Vercel firewall settings before launch.
- **Observed on the live site (28 September 2026):**
  1. `robots.txt` on the Vercel deployment disallows `/_next/`. Google's guidance is not to block CSS and JavaScript needed for rendering. Remove that line (keep `/api/`).
  2. The canonical domain `knowledge-foundry.com` currently serves the old WordPress site (nginx, `wp-sitemap.xml`), while the new Vercel build declares `https://knowledge-foundry.com` as canonical and points to `https://knowledge-foundry.com/sitemap.xml`, which does not exist on the live WordPress host. Until the domain is cut over to Vercel, search engines will see conflicting signals and the new pages will not index properly under the canonical. Publish the 100 pages at or after domain cutover, with 301s from any WordPress URLs worth keeping, and redirect the `*.vercel.app` production host to the canonical domain.
  3. The sitemap sets `lastmod` to build time for static routes. Learn pages already use each page's `updated` field, which is correct. See section 8.

### 1.9 Recommended robots.txt

The business goal is citation, so allow all search and user fetchers. Blocking training crawlers is a separate commercial decision; for a vendor that wants its definitions and brand learned by models, allowing training is arguably beneficial, and there is no evidence either way that it changes citation rates.

```
User-agent: *
Allow: /
Disallow: /api/

# Explicitly allowed search and answer crawlers (documentation only; "*" already allows them)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
Allow: /
Disallow: /api/

Sitemap: https://knowledge-foundry.com/sitemap.xml
```

Note that a crawler obeys only the most specific group that matches it, so every named group must repeat the `Disallow: /api/` line. If the client ever decides to opt out of training, add separate groups for `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended` with `Disallow: /`; this does not affect citation eligibility on any platform according to each vendor's documentation.

---

## 2. Content characteristics that correlate with being cited

### 2.1 The GEO paper (the only controlled academic study)

**[Academic]** Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande, "GEO: Generative Engine Optimization", KDD 2024 (arXiv 2311.09735; v1 16 November 2023, v3 28 June 2024). Princeton, Georgia Tech, Allen Institute for AI, IIT Delhi.

Method: 10,000 query benchmark (GEO-bench). A simulated engine fetched the top 5 Google results and had GPT-3.5-turbo write an answer. One source per query was rewritten by an LLM using each of nine methods, and visibility was measured by "position-adjusted word count" (how much of the answer draws on that source, weighted by position) and a subjective impression score.

Findings:
- Cite Sources, Quotation Addition and Statistics Addition gave the largest gains: 30 to 40% relative improvement in position-adjusted word count and 15 to 30% in subjective impression.
- Fluency Optimisation and Easy-to-Understand gave 15 to 30%.
- Authoritative (more persuasive) tone gave no significant improvement.
- Keyword stuffing gave little to no improvement, and on Perplexity performed 10% worse than baseline.
- Gains were far larger for lower-ranked sources: Cite Sources raised visibility of the rank 5 source by 115.1% while the rank 1 source fell by 30.3% when all sources were optimised.
- On real Perplexity (200 samples, sources provided as file uploads), Quotation Addition improved position-adjusted word count by 22%, and the best methods improved subjective impression by up to 37%.
- Effectiveness varied by domain.

Limitations to state honestly: the engine was a 2023 GPT-3.5 simulation with only five sources, the Perplexity test bypassed retrieval (sources were uploaded), and "visibility" means share of the answer, not whether you are retrieved at all. It shows that once you are in the candidate set, verifiable specifics help you get quoted. It says nothing about getting into the candidate set.

### 2.2 Where on the page citations come from

- **[Study]** Kevin Indig, Growth Memo (16 February 2026; reported by Search Engine Land): 1.2 million ChatGPT responses, 18,012 verified citations. 44.2% of citations came from the first 30% of a page, 31.1% from the middle 30 to 70%, and 24.7% from the final third (the "ski ramp"). Cited passages more often used definitional phrasing ("X is ..."), sat under question-style headings, had high entity density (about 20.6% proper nouns versus 5 to 8% in ordinary text), balanced analytical tone, and a Flesch-Kincaid grade around 16 rather than 19+. Full method is paywalled; the percentages are as reported by secondary sources. Correlational.
- **[Study]** Search Engine Land (A. Gnuse, 19 November 2025): of blog posts cited by ChatGPT in the dataset, 72.4% had an identifiable "answer capsule" (a short, self-contained answer directly after the heading) and 52.2% contained original data or brand-owned insight. Answer capsules with no links inside them correlated with more citations. Descriptive, no control group, sample not clearly stated in the extracts we could access.
- **[Primary]** Bing's February 2026 guidelines independently say to put essential information near the top and state facts directly.
- **[Primary] Counterpoint:** Google says you do not need to "break your content into tiny pieces" and its systems understand multi-topic pages. The two are compatible: write a complete page, but lead each page and each section with the direct answer.

### 2.3 Freshness

- **[Study]** Ahrefs (28 July 2025, about 17 million citations across ChatGPT, Perplexity, Gemini, Copilot and AI Overviews): AI-cited content averaged 1,064 days old versus 1,432 days for Google organic results, about 25.7% fresher. ChatGPT showed the strongest recency preference (cited pages 458 days newer than organic); AI Overviews cited slightly older content than organic. Ahrefs warned that updating low-quality content daily will not help and that average cited age is still 2.9 years.
- **[Primary]** Google lists "changing the date of pages to make them seem fresh when the content has not substantially changed" as a sign of search-engine-first content (helpful content guidance, updated 10 December 2025).
- **[Vendor claim]** Secondary sites quote "half of citations are to content updated in the last 13 weeks" and a "4.5 week citation half-life". We could not trace these to a primary method. Do not use them as targets.

### 2.4 Length, depth and topical coverage

- **[Study]** Semrush topic authority study (20 July 2026, 50,000+ brands, 600,000+ ChatGPT citations, January to June 2026): only 15.2% of categories had a clear "owner"; domain-level SEO metrics predicted topic ownership only about half the time; owners held position in 90.4% of month-over-month comparisons. Suggests coverage of a whole topic cluster matters more than domain authority alone.
- **[Study]** Kevin Indig (23 March 2026, 21,000+ citations) analysed length, depth and focus; findings are paywalled and not verifiable here.
- **[Primary]** Google warns against writing to "a particular word count". No credible study supports a fixed ideal length. Write until the question is fully answered.

### 2.5 E-E-A-T, authorship and original data

- **[Primary]** Google's helpful content guidance: clear sourcing, author bylines with background, explaining how content was made (including automation where readers would wonder), and original research or analysis beyond rewriting others.
- **[Primary]** Google's AI optimisation guide: "unique expert or experienced takes that go beyond common knowledge"; avoid commodity content.
- **[Study]** Search Engine Land (November 2025): original data present on 52.2% of ChatGPT-cited posts.
- For regulated-sector content, citing the primary regulator source (legislation.gov.au, AUSTRAC, ASIC, APRA, ACSQHC, TEQSA, Safe Work Australia) directly is both an E-E-A-T signal and the GEO paper's "Cite Sources" method.

### 2.6 Formatting

- **[Primary]** Bing recommends headings, tables and FAQ sections. Google recommends clear structure, headings and semantic HTML.
- Tables and lists are easy for retrieval systems to extract and align with Bing's advice, but no controlled study isolates their effect. Evidence: weak to moderate.

---

## 3. Structured data

### 3.1 What Google says about structured data and AI features

- **[Primary]** "Structured data isn't required for generative AI search" and there is "no special schema.org markup you need to add" (AI optimisation guide, July 2026). Existing structured data must match visible content (AI features page, December 2025). Structured data remains "a good idea" for rich result eligibility.
- **[Study]** Ahrefs (11 May 2026): 1,885 pages that added JSON-LD between August 2025 and March 2026 versus 4,000 matched controls. Changes: AI Overviews minus 4.6% (small but statistically significant), AI Mode plus 2.4% and ChatGPT plus 2.2% (both within noise). Caveat: all pages were already heavily cited, so the effect on new or uncited pages is unknown.
- **[Vendor claim]** Some sites quote uplift figures such as "FAQPage +34% Perplexity" attributed to SE Ranking. The SE Ranking coverage we checked contains no such figures. Disregard.
- **[Reported]** Tests reported in 2026 suggest LLM fetchers read JSON-LD, if at all, as raw text, not as parsed data. Plausible but not formally documented.

Conclusion: implement schema for correctness, entity disambiguation and the rich results Google still supports, not as a citation lever.

### 3.2 Type by type

| Type | Status (September 2026) | Recommendation |
|---|---|---|
| `Article` (or `TechArticle`) | Supported by Google. Recommended properties: `headline`, `author` (Person or Organization with `url`), `datePublished`, `dateModified`, `image`. | Use on every guide and regulation page. Dates must match the visible dates. |
| `BreadcrumbList` | Supported rich result. | Use on every page; mirror the visible breadcrumb. |
| `Organization` | Supported (logo, name, contact, `sameAs`). | Once, sitewide (home or about), with `sameAs` to LinkedIn, Crunchbase, G2 and so on. Helps entity disambiguation. |
| `FAQPage` | **Rich results removed.** FAQ rich results stopped appearing on 7 May 2026; Search Console report and Rich Results Test support dropped June 2026; API support ends August 2026. Since August 2023 they had been limited to authoritative government and health sites. Markup remains valid schema.org and harmless. | Optional. Keep visible Q and A sections for users and Bing (which explicitly recommends FAQ sections). Do not expect a SERP feature. |
| `HowTo` | No Google rich result on any surface (restricted 2023, gone from all surfaces). Valid schema.org. | Optional; no Google benefit. Write how to guides as numbered HTML lists. |
| `DefinedTerm` / `DefinedTermSet` | Valid schema.org, never a Google rich result type. | Low cost, semantically accurate for glossary pages. Use it for correctness, not for expected ranking or citation gains. |
| `Person` (author) | Used within Article; author pages recommended. | Real named authors or reviewers with profile pages and `sameAs` to LinkedIn. |
| `Speakable`, `ClaimReview`, `Dataset` | Speakable still listed but niche; ClaimReview is for fact-checkers; Dataset only for real downloadable datasets. | Skip, unless Knowledge Foundry publishes a genuine dataset (for example an annual survey), in which case use `Dataset`. |

---

## 4. llms.txt

- **What it is [Primary]:** a proposal by Jeremy Howard (first published 3 September 2024, v2 10 August 2026) for a Markdown file at `/llms.txt` with an H1 site name, a blockquote summary, and H2 sections listing links to key pages, plus optional `.md` versions of pages. Intended mainly for inference-time use by LLM tools and agents, not training.
- **Adoption [Study]:** SE Ranking (reported 20 November 2025, about 300,000 domains): 10.13% of domains had one. No relationship between having llms.txt and citation frequency; removing the variable improved their model's accuracy.
- **Crawler behaviour [Vendor claim]:** reported log analyses show a negligible share of AI bot requests hitting llms.txt (figures of around 0.1% circulate). Directionally consistent with Google's statements but not independently verified.
- **Google [Primary]:** the May 2026 AI optimisation guide says Google Search does not use llms.txt and it "neither harm[s] nor help[s]" visibility. John Mueller compared it to the keywords meta tag (April 2025). Separately, Chrome Lighthouse 13.3 includes an experimental "agentic browsing" audit that checks for llms.txt (Search Engine Journal, 20 May 2026), which is about browser agents, not search ranking.
- **OpenAI, Anthropic, Perplexity, Microsoft:** none has documented reading llms.txt for search retrieval or ranking. Some developer tooling (coding assistants, agent SDK docs) consumes llms.txt files for documentation sites.

Honest verdict: no major AI search engine is known to use llms.txt for citation. It is cheap and harmless. The site already generates one at `src/app/llms.txt/route.ts`; keep it accurate but spend no further effort and do not report it to the client as a visibility lever.

---

## 5. Publishing about 100 pages with AI assistance: Google's policies

### 5.1 The rules

- **Scaled content abuse [Primary]:** "when many pages are generated for the primary purpose of manipulating search rankings and not helping users." Examples: "using generative AI tools or other similar tools to generate many pages without adding value for users"; scraping or synonymising; "stitching or combining content from different web pages without adding value"; pages that make little sense but contain keywords. (Spam policies, updated 28 August 2026.) Google's March 2024 announcement says this applies "no matter whether content is produced through automation, human efforts, or some combination".
- **Manipulating AI responses [Primary]:** the spam policies now cover "attempting to manipulate generative AI responses in Google Search". Bing's guidelines add "Artificially Engineered Language" and prompt injection. Never include hidden instructions or text aimed at LLMs.
- **Generative AI guidance [Primary]** (updated 10 December 2025): AI is acceptable, and "particularly useful when researching a topic, and to add structure to original content". Metadata and structured data must be accurate. Disclosure of how content was made is encouraged where readers would expect it.
- **Helpful content [Primary]:** Who / How / Why. Warning signs include producing lots of content on many unrelated topics, extensive automation, writing on trends without expertise, faking freshness, and arbitrary word counts.
- **Quality Rater Guidelines [Primary, January 2025]:** content "created with generative AI with likely no original content and provides no value" is rated Lowest; but "the use of Generative AI tools alone does not determine the level of effort or Page Quality rating".
- **Site reputation abuse:** applies to third-party content hosted to exploit a host's ranking signals. Not relevant here provided Knowledge Foundry writes its own content.
- **Enforcement [Reported]:** Google ran spam updates in August 2025, March 2026, June 2026 and August 2026 (18 to 21 August). Glenn Gabe's case studies (31 August 2026) show heavy losses for sites combining programmatic templates with AI text, especially in YMYL niches, with site-wide impact. Claims that "sites publishing 50 to 100 quality AI-assisted articles saw traffic climb 30 to 80%" circulate on vendor blogs without a traceable method: **[Vendor claim]**.

### 5.2 What separates acceptable scaled content from spam

| Acceptable | Spam signal |
|---|---|
| Each page answers a distinct, real question buyers ask (the topic map is question-led) | Pages that differ only by a swapped keyword (city, industry, standard) with the same body |
| Each page contains facts specific to that regulation or term: clause numbers, dates, who it applies to, penalties, primary source links | Generic filler that would be true of any regulation |
| Subject-matter review by a named person, recorded on the page | No accountable author, or a fake persona |
| Original perspective: how Knowledge Foundry would map the obligation to learning outcomes and evidence, worked examples, templates | Pure summaries of other sites |
| Release in batches, monitored, with pages improved or pruned based on data | 100 pages dumped in a day and never touched again |
| Accurate dates, updated only when content materially changes | Bumping `dateModified` sitewide on every build |

### 5.3 Is 100 pages at once a problem?

Google does not publish a volume threshold; the policy is about purpose and value, not count. That said, a new domain launch with 100+ templated reference pages is exactly the pattern classifiers look at, and the canonical domain is changing platform at the same time. Staged release is prudent: it lets you see indexing rates and quality signals per cluster before committing the rest, and it gives a natural cadence of fresh content. See the Actionable rules for a concrete cadence.

---

## 6. Off-site factors (recommendations for the client)

Evidence:
- **[Study]** Ahrefs (26 May 2025, 75,000 brands): brand visibility in AI Overviews correlated most with branded web mentions (Spearman 0.664), branded anchors (0.527) and branded search volume (0.392); backlinks only 0.218, Domain Rating 0.326. A 2026 follow-up (Business Wire, 26 May 2026) found YouTube mentions the strongest single correlate across ChatGPT, AI Mode and AI Overviews. Correlation, not causation.
- **[Study]** Ahrefs (Patrick Stox, June 2025 data): web mentions correlate strongly with AI Overview visibility (0.65) but weakly for Perplexity (0.30) and ChatGPT (0.15). Google is more brand-biased.
- **[Study]** Profound (680 million citations, August 2024 to June 2025): Wikipedia 7.8% of all ChatGPT citations; Reddit the top source for AI Overviews (2.2%) and Perplexity (6.6%).
- **[Study]** Semrush (13 weeks to 12 October 2025, 230,000+ prompts, 100 million+ citations): Reddit, Wikipedia, LinkedIn, YouTube and Medium most cited overall. ChatGPT's Reddit citation share swung from about 60% of responses to about 10% within weeks, so platform shares are volatile.
- **[Primary]** Google's AI guide says pursuing "inauthentic mentions" is not effective.

Recommendations for Knowledge Foundry:
1. **LinkedIn:** the buyers (heads of L&D, compliance, risk) live here and LinkedIn is heavily cited. Publish condensed versions of key guides as LinkedIn articles by named staff, linking back to the canonical page.
2. **Industry and peer publications:** AHRI, AITD, Governance Institute of Australia, Risk Management Institution of Australasia, Compliance Institute, health and higher education sector newsletters. Contributed articles and commentary create authentic brand mentions and links.
3. **Review and directory sites:** G2, Capterra, GetApp, Software Advice profiles with genuine customer reviews. Perplexity in particular cites G2 and Gartner-type sources for commercial queries.
4. **Third-party comparison articles and analyst coverage:** being included in "best compliance training platforms Australia" roundups by independent publishers matters for commercial prompts. Do not pay for fake listicles.
5. **Reddit:** only genuine participation by identifiable staff in relevant communities (for example r/instructionaldesign, r/humanresources, r/auslaw where appropriate). Astroturfing is against Reddit rules and Google's inauthentic-mention warning.
6. **Wikipedia:** do not write your own article. If Knowledge Foundry becomes notable through independent coverage, others may. Improving cited sources on existing regulation articles is legitimate only if done transparently and neutrally.
7. **YouTube:** short explainer videos for top regulation guides (for example "What does CPS 230 mean for training?") embedded on the page; YouTube is one of the most cited domains in AI Overviews.
8. **Original research:** an annual "State of compliance training in Australia" survey is the single strongest asset for earned mentions and for the "original data" citation trait.

---

## 7. Measurement

### 7.1 Referral traffic

- **GA4 native channel [Primary / Reported]:** Google Analytics added an "AI Assistant" default channel (medium `ai-assistant`) announced 13 May 2026, broadly available by about 7 June 2026. It is forward-only and referrer-dependent.
- **Custom channel group (keep as well):** create a channel "AI search" above Referral with Session source matching:

```
(^|\.)(chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|copilot\.cloud\.microsoft|edgeservices\.bing\.com|you\.com|phind\.com|meta\.ai|grok\.com|chat\.deepseek\.com|chat\.mistral\.ai)$
```

  and also `utm_source` equal to `chatgpt.com` (ChatGPT appends this) or matching `perplexity|copilot|gemini|claude`.
- **Limits:** many AI clicks arrive with no referrer (apps, some mobile browsers), so they land in Direct. Reported estimates range from about a third to over half of AI sessions; treat as indicative. Google AI Overviews and AI Mode clicks are reported as ordinary Google organic traffic and cannot be separated in GA4.
- **Vercel Web Analytics** shows referrers; use it as a cross-check.

### 7.2 Citation and impression monitoring

- **Google Search Console [Primary]:** Generative AI performance report (launched 3 June 2026, worldwide 31 August 2026, data from 18 May 2026) shows impressions in AI Overviews and AI Mode by page, country, device, date and query type. No clicks yet. Sites need enough impressions to see it.
- **Bing Webmaster Tools [Primary]:** AI Performance report shows citations, cited pages and grounding queries for Copilot and Bing AI answers. The closest thing to first-party citation data for the ChatGPT-adjacent ecosystem. Verify the site in Bing Webmaster Tools on day one (it can import from Search Console).
- **Server logs [Primary]:** count hits from `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`, verifying against the published IP lists. `*-User` hits are a direct proxy for "a user's question caused this page to be fetched". On Vercel, use log drains or the Observability bot filter.
- **Prompt tracking tools [Vendor]:** Ahrefs Brand Radar, Semrush AI Visibility Toolkit, Profound, Peec AI, Otterly and others sample prompts and report mention and citation share. Useful for trend lines; Google explicitly notes that "no third-party tool has access to our internal ranking or AI systems". Results vary heavily by prompt set and mode (Semrush found only 25.6% domain overlap between ChatGPT modes), so fix a stable prompt panel (for example 50 buyer questions) and track trends, not absolute numbers.
- **Manual panel:** monthly, run 20 core questions in ChatGPT (search on), Perplexity, Google AI Mode, Copilot, Claude and Gemini; record whether knowledge-foundry.com is cited and which URL.

---

## 8. Internal linking, clusters, sitemaps and IndexNow

### 8.1 Internal linking and hubs

- **[Primary]** Google relies on links for discovery and understanding; its AI guide recommends clear structure and reducing duplicates. Query fan-out means Google retrieves pages for many sub-questions at once; a hub that links to precise child pages, each answering one sub-question, maps well to fan-out.
- **[Study]** Semrush's July 2026 topic study supports cluster-level coverage as the unit of AI visibility.
- Structure for this site: four hubs (`/regulations`, `/glossary`, `/guides`, `/compare`) plus the `/learn` index, each hub with a short intro, grouped links and one-line summaries; every child links up to its hub, sideways to two to five siblings, and to one relevant product or industry page. Glossary terms used in guides link to the glossary definition on first use.

### 8.2 Sitemaps

- **[Primary]** Google ignores `<priority>` and `<changefreq>`. It uses `<lastmod>` only "if it's consistently and verifiably accurate", meaning the date of the last significant change to main content, structured data or links.
- Current site: learn pages use their `updated` field (good); static routes use build time (bad: every deploy claims every page changed, which teaches Google to distrust the site's lastmod). Fix static routes to use a stored content date.
- Submit the sitemap in both Google Search Console and Bing Webmaster Tools.

### 8.3 IndexNow

- **[Primary]** IndexNow (indexnow.org) lets a site notify participating engines (Bing, Yandex, Naver, Seznam, Yep and others; submissions to one are shared with all) of added, updated or deleted URLs. Host a key file at the root, then POST up to 10,000 URLs per request. Do not resubmit unchanged URLs; wait at least 5 minutes between submissions of the same URL. Google does not participate.
- **[Primary]** Bing explicitly recommends IndexNow for keeping AI answers current (February 2026 AI Performance announcement).
- Because ChatGPT and Copilot draw heavily on Bing, IndexNow is the one "AI specific" technical step with a documented mechanism. Implement it as a post-deploy step that submits only URLs whose content hash changed.

---

## Actionable rules (SOP)

Each rule is written to be testable. "Must" rules are release blockers.

### A. Technical setup (before the first page ships)

- **T1 (must).** The canonical domain `knowledge-foundry.com` serves the Next.js site, `https://knowledge-foundry.com/sitemap.xml` returns the new sitemap, and `*.vercel.app` production URLs 308 redirect to the canonical domain. Test: `curl -I` on each.
- **T2 (must).** WordPress URLs with traffic or backlinks 301 to the closest new page. Test: redirect map checked against the WP sitemap and Search Console top pages.
- **T3 (must).** `robots.txt` allows `/` for all agents, disallows only `/api/`, and does not disallow `/_next/`. Named groups for `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`, `Googlebot`, `Bingbot`, `Applebot` are allowed. Test: fetch robots.txt; run Google's robots.txt report.
- **T4 (must).** Vercel firewall: AI Bots managed ruleset is not in deny mode, and Bot Protection does not challenge verified bots. Test: review the firewall config, then check logs in week one for any 403 or challenge responses to those bot user agents.
- **T5 (must).** Every content page's full body text, headings, tables and dates are present in the initial HTML response (no client-only rendering). Test: `curl` the URL and grep for the answer paragraph and last H2.
- **T6 (must).** No page carries `noindex`, `nosnippet`, `data-nosnippet` on main content, `max-snippet` limits, `NOARCHIVE` or `NOCACHE`. Test: automated check in CI over all built HTML.
- **T7 (must).** Sitemap `<lastmod>` equals the page's visible "Last updated" date for every URL; never build time. `priority` and `changefreq` may be dropped. Test: script compares sitemap lastmod to page dateModified.
- **T8 (must).** Site verified in Google Search Console and Bing Webmaster Tools; sitemap submitted to both.
- **T9 (should).** IndexNow key file hosted; post-deploy script submits only new, changed or deleted URLs (content hash diff). Test: Bing Webmaster Tools IndexNow report shows submissions.
- **T10 (should).** GA4 AI Assistant channel visible plus a custom "AI search" channel using the regex in section 7.1; Search Console Generative AI report and Bing AI Performance report reviewed monthly.
- **T11 (could).** Keep the existing `/llms.txt` accurate (generated from the same content index as the sitemap). Do not invest further; do not claim it as a visibility lever.
- **T12 (must).** One canonical URL per page (self-referencing `rel=canonical`, no trailing slash duplicates, no query-string duplicates).

### B. Page structure

- **P1 (must).** H1 is the question or term exactly as a buyer would phrase it (for example "What does APRA CPS 230 mean for staff training?" or "Competency framework").
- **P2 (must).** The first paragraph after the H1 is a self-contained direct answer of 40 to 80 words that makes sense if quoted alone, names the entity in full, and contains no links. Glossary pages open with a one-sentence definition in the form "A [term] is ...".
- **P3 (must).** A visible byline block under the H1: author name linked to an author page, "Reviewed by" name and credential for regulation pages, "Published" and "Last updated" dates in `d Month yyyy` format.
- **P4 (must).** H2s are phrased as the sub-questions a buyer or AI fan-out would ask (who it applies to, what it requires, deadlines, penalties, how to evidence it, how to build the training). Each H2 is followed immediately by a one to two sentence answer before detail.
- **P5 (must).** Key facts in the first 30% of the page: who it applies to, the core obligation, commencement or deadline dates, the regulator.
- **P6 (should).** At least one table or ordered list where the content is naturally tabular or sequential (requirements by role, clause by clause mapping, steps). No decorative tables.
- **P7 (must).** A "Sources" section listing every primary source (legislation, regulatory guide, standard) with title, issuing body and date or version, and inline citations at the point each claim is made.
- **P8 (should).** A short FAQ section (three to six questions) for residual questions not covered by H2s. Written for users and Bing; FAQ schema optional.
- **P9 (must).** Internal links: link to the hub, to two to five siblings, to glossary terms on first mention, and to one relevant product, program or industry page. No orphan pages. Test: crawl shows every page has at least three inbound internal links.
- **P10 (must).** One topic per URL. If two planned pages would share more than about half their substance, merge them.

### C. Copy

- **C1 (must).** Every regulation page includes at least three specific, verifiable facts unique to that regulation (section or clause numbers, dates, thresholds, penalty levels, named regulator guidance) with a source link each. Test: editor checklist.
- **C2 (must).** Numbers carry a source and a date ("ASIC RG 146, updated 2024"). No unsourced statistics. No invented statistics.
- **C3 (should).** Where a respected authority has said something quotable (regulator speech, standard text), quote it verbatim with attribution; one or two per page at most.
- **C4 (must).** Include at least one element of original value per page: a worked example, a mapping of the obligation to learning outcomes and assessment evidence, a checklist or template, or Knowledge Foundry's own anonymised data. This is the difference between reference content and commodity content.
- **C5 (must).** Use full entity names on first mention with the abbreviation in brackets ("Australian Prudential Regulation Authority (APRA)"), and use the same name consistently sitewide (matches Bing's consistent-entity guidance).
- **C6 (must).** Write in plain, analytical Australian English; target roughly university reading level, short paragraphs, active voice. No hype, no sales copy in the answer sections. One clearly separated "How Knowledge Foundry helps" section at the end is fine.
- **C7 (must).** No keyword stuffing, no hidden text, no text addressed to AI systems, no prompt-injection style instructions.
- **C8 (must).** State jurisdiction and currency explicitly ("This guide covers Australian federal requirements as at September 2026").
- **C9 (must).** AI may be used for research, outlines and drafts. Every page is fact checked against its primary sources and edited by a human; regulation pages are reviewed by a named person with relevant expertise before publishing. Keep a review record (who, when, which sources checked).
- **C10 (should).** Publish an editorial standards page (the site already has `/editorial-standards`) describing research, AI assistance, review and correction process; link it from every byline.

### D. Schema

- **S1 (must).** `Article` (or `TechArticle`) JSON-LD on every guide, regulation and comparison page with `headline`, `author` (Person with `url` to the author page), `publisher` (Organization), `datePublished`, `dateModified`, `image`, `mainEntityOfPage`. Dates identical to visible dates. Test: Rich Results Test and a CI check comparing JSON-LD dates to visible dates.
- **S2 (must).** `BreadcrumbList` on every page matching the visible breadcrumb.
- **S3 (must).** Sitewide `Organization` with `name`, `url`, `logo`, `sameAs` (LinkedIn, G2, Crunchbase and other real profiles), and Australian address and ABN where appropriate.
- **S4 (should).** `DefinedTerm` within a `DefinedTermSet` on glossary pages. Expect no rich result.
- **S5 (could).** `FAQPage` markup on visible FAQ sections. No Google rich result since May 2026; harmless.
- **S6 (must).** Do not use `HowTo` expecting any Google feature. Do not mark up anything not visible on the page.
- **S7 (must).** `Person` pages for authors and reviewers with job title, credentials and `sameAs` to LinkedIn.

### E. Publishing cadence and maintenance

- **E1 (must).** Do not publish before T1 to T8 pass.
- **E2 (must).** Launch with hubs plus the strongest 20 to 25 pages (a mix across all four clusters, prioritising regulation guides with the most specific content). Then release in batches of about 10 to 20 pages per week, one topic-map batch at a time, so the full set is live over roughly five to eight weeks.
- **E3 (must).** Before each subsequent batch, check the previous batch: indexed in Google and Bing (URL Inspection, Bing URL inspection), no manual actions, no crawl errors. If indexing rate for a batch is below about half after three weeks, pause and review quality before publishing more.
- **E4 (must).** Update `dateModified` only when content materially changes (new facts, changed requirements, new sections). Cosmetic edits do not change the date.
- **E5 (must).** Regulation pages have a scheduled review date: every 6 months, and immediately when the regulator issues changes. Glossary pages every 12 months. Record the check even if nothing changes, but only bump the date if the content changes.
- **E6 (should).** At 90 days, review every page with Search Console (impressions including the Generative AI report), Bing AI Performance and the prompt panel. Improve pages with impressions but no citations; merge or remove pages with no impressions and no strategic reason to exist.
- **E7 (should).** Run the off-site programme alongside: LinkedIn articles by named staff for top guides, two contributed articles per quarter in Australian industry bodies' publications, G2 and Capterra profiles with genuine reviews, and plan one piece of original research per year.

---

## Where the evidence is weak

1. **Almost all content-trait findings are correlational vendor studies.** The only controlled experiment (the GEO paper) used a 2023 simulated engine and tells you how to get quoted once retrieved, not how to be retrieved.
2. **Answer-first and "ski ramp" findings** come from ChatGPT-only datasets with paywalled or partly described methods.
3. **Rank overlap figures conflict** (17%, 38%, 54.5%, 76%) because of different methods and dates. The direction is clear: organic ranking matters, fan-out spreads citations wider.
4. **Freshness:** real effect, varies by engine; widely quoted "13 weeks" and "half-life" figures are untraceable.
5. **Schema:** the best evidence (Ahrefs 2026) shows no citation lift for already-cited pages. Effect on new pages untested.
6. **llms.txt:** no evidence of use by any major AI search engine.
7. **ChatGPT's retrieval stack** is undocumented and changing; Bing-dependence findings from 2025 may overstate Bing's role in late 2026.
8. **Claude's use of Brave** is strongly evidenced but not officially confirmed.
9. **Volume thresholds for scaled content:** Google publishes none; the staged cadence here is prudent practice, not a documented rule.
10. **AI referral measurement** undercounts because of missing referrers, and Google AI feature clicks are not separable.

---

## Sources

Primary (platform documentation and official posts)

1. OpenAI, Overview of OpenAI crawlers. https://developers.openai.com/api/docs/bots (undated; fetched 28 September 2026)
2. OpenAI Help Center, Publishers and Developers FAQ. https://help.openai.com/en/articles/12627856-publishers-and-developers-faq (undated; content via search extracts, 28 September 2026)
3. Perplexity, Perplexity crawlers. https://docs.perplexity.ai/guides/bots (undated; fetched 28 September 2026)
4. Perplexity, Introducing the Perplexity Search API. https://www.perplexity.ai/hub/blog/introducing-the-perplexity-search-api (25 September 2025)
5. Anthropic, Does Anthropic crawl data from the web, and how can site owners block the crawler? https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler (7 April 2026)
6. Apple, About Applebot. https://support.apple.com/en-us/119829 (4 September 2026)
7. Google Search Central, AI features and your website. https://developers.google.com/search/docs/appearance/ai-features (updated 10 December 2025)
8. Google Search Central, Optimizing your website for generative AI features on Google Search. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide (published 15 May 2026, updated 10 July 2026)
9. Google Search Central Blog, A new resource for optimizing for generative AI in Google Search. https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing (May 2026)
10. Google Search Central, Google's common crawlers (Google-Extended). https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers (updated 14 July 2026)
11. Google Search Central, Spam policies for Google web search. https://developers.google.com/search/docs/essentials/spam-policies (updated 28 August 2026)
12. Google Search Central Blog, What web creators should know about our March 2024 core update and new spam policies. https://developers.google.com/search/blog/2024/03/core-update-spam-policies (5 March 2024)
13. Google Search Central, Google Search's guidance on using generative AI content. https://developers.google.com/search/docs/fundamentals/using-gen-ai-content (updated 10 December 2025)
14. Google Search Central, Creating helpful, reliable, people-first content. https://developers.google.com/search/docs/fundamentals/creating-helpful-content (updated 10 December 2025)
15. Google Search Central, FAQ (FAQPage) structured data. https://developers.google.com/search/docs/appearance/structured-data/faqpage (deprecation notice, 2026)
16. Google Search Central, Structured data search gallery. https://developers.google.com/search/docs/appearance/structured-data/search-gallery (updated 15 June 2026)
17. Google Search Central, Article structured data. https://developers.google.com/search/docs/appearance/structured-data/article (fetched 28 September 2026)
18. Google Search Central, Influence your byline dates. https://developers.google.com/search/docs/appearance/publication-dates (fetched 28 September 2026)
19. Google Search Central, Build and submit a sitemap. https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (fetched 28 September 2026)
20. Google Search Central Blog, Introducing Search generative AI performance reports in Search Console. https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports (June 2026)
21. Search Console Help, Generative AI performance report (Search). https://support.google.com/webmasters/answer/16984139 (2026)
22. Bing Webmaster Blog, Introducing AI Performance in Bing Webmaster Tools (public preview). https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview (10 February 2026)
23. Bing Webmaster Guidelines. https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a (revised 27 February 2026)
24. IndexNow FAQ. https://www.indexnow.org/faq (fetched 28 September 2026)
25. llms.txt proposal, Jeremy Howard. https://llmstxt.org/ (3 September 2024, v2 10 August 2026)
26. Vercel, The rise of the AI crawler. https://vercel.com/blog/the-rise-of-the-ai-crawler (17 December 2024)
27. Vercel, New one-click AI bot managed ruleset. https://vercel.com/changelog/new-one-click-ai-bot-managed-ruleset (2025)

Academic

28. Aggarwal P. et al., GEO: Generative Engine Optimization, KDD 2024. https://arxiv.org/abs/2311.09735 (v1 16 November 2023; v3 28 June 2024)

Studies (vendor or independent, correlational)

29. Seer Interactive, 87% of SearchGPT citations match Bing's top results. https://www.seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results (6 February 2025)
30. Ahrefs, ChatGPT may scrape Google, but the results don't match. https://ahrefs.com/blog/chatgpt-google-citations/ (3 September 2025)
31. Ahrefs, AI Overview citations and search rankings. https://ahrefs.com/blog/search-rankings-ai-citations (21 July 2025)
32. Search Engine Journal, Google AI Overview citations from top-ranking pages drop sharply (Ahrefs 2026 data). https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/ (2 March 2026)
33. BrightEdge, AI Overview citations now 54% from organic rankings. https://www.brightedge.com/resources/weekly-ai-search-insights/rank-overlap-after-16-months-of-aio (September 2025 data)
34. Ahrefs, Do AI assistants prefer to cite fresh content? (17 million citations). https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content (28 July 2025)
35. Ahrefs, We tracked 1,885 pages adding schema. https://ahrefs.com/blog/schema-ai-citations/ (11 May 2026)
36. Ahrefs, An analysis of AI Overview brand visibility factors (75K brands). https://ahrefs.com/blog/ai-overview-brand-correlation/ (26 May 2025)
37. Ahrefs, Google seems more biased towards big brands than ChatGPT and Perplexity. https://ahrefs.com/blog/branded-web-mentions-visibility-ai-search/ (2025)
38. Business Wire, Across 75,000 brands, YouTube mentions are the strongest signal of AI visibility (Ahrefs). https://www.businesswire.com/news/home/20260526119691/en/ (26 May 2026)
39. Profound, AI platform citation patterns. https://www.tryprofound.com/blog/ai-platform-citation-patterns (2025; data August 2024 to June 2025)
40. Semrush, The most-cited domains in AI: a 3-month study. https://www.semrush.com/blog/most-cited-domains-ai/ (late 2025; data July to October 2025)
41. Semrush, AI visibility is a topic-level game (50,000 brands). https://www.semrush.com/blog/chatgpt-topic-authority-study/ (20 July 2026)
42. Semrush, Only 25% of cited sources overlap between ChatGPT's reasoning modes. https://www.semrush.com/blog/chatgpt-reasoning-ai-visibility/ (30 June 2026)
43. Peec AI, ChatGPT built its own search index. https://peec.ai/blog/chatgpt-built-its-own-search-index (4 September 2026)
44. Kevin Indig, The science of how AI pays attention. https://www.growth-memo.com/p/the-science-of-how-ai-pays-attention (16 February 2026; paywalled)
45. Search Engine Land, 44% of ChatGPT citations come from the first third of content. https://searchengineland.com/chatgpt-citations-content-study-469483 (early 2026; reported figures via ALM Corp summary https://almcorp.com/blog/chatgpt-citations-study-44-percent-first-third-content/)
46. Kevin Indig, The science of how AI picks its sources. https://www.growth-memo.com/p/the-science-of-how-ai-picks-its-sources (23 March 2026; paywalled)
47. Search Engine Land (A. Gnuse), How to get cited by ChatGPT: the content traits LLMs quote most. https://searchengineland.com/how-to-get-cited-by-chatgpt-the-content-traits-llms-quote-most-464868 (19 November 2025)
48. Search Engine Journal, LLMs.txt shows no clear effect on AI citations, based on 300k domains (SE Ranking). https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/ (20 November 2025)

Trade press and reporting

49. Search Engine Journal, Bing adds GEO to official guidelines, expands AI abuse definitions. https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/ (27 February 2026)
50. Search Engine Journal, Google's new AI search guide calls AEO and GEO "still SEO". https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/ (15 May 2026)
51. Search Engine Journal, Google's llms.txt guidance depends on which product you ask. https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/ (20 May 2026)
52. Search Engine Journal, Google drops FAQ rich results from Search. https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/ (10 May 2026)
53. Search Engine Journal, Google Search Console AI reports rolled out worldwide. https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/ (31 August 2026)
54. Search Engine Land, Google says normal SEO works for ranking in AI Overviews and llms.txt won't be used. https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422 (July 2025)
55. SE Roundtable, Anthropic updates its crawler docs. https://www.seroundtable.com/anthropic-updates-its-crawler-docs-40978.html (2026)
56. Simon Willison, Anthropic Trust Center: Brave Search added as a subprocessor. https://simonwillison.net/2025/Mar/21/anthropic-use-brave/ (21 March 2025)
57. Search Engine Journal, Cloudflare delists and blocks Perplexity from crawling websites. https://www.searchenginejournal.com/cloudflare-delists-and-blocks-perplexity-from-crawling-websites/552899/ (August 2025)
58. Glenn Gabe (GSQi), August 2026 Google spam update case studies. https://www.gsqi.com/marketing-blog/august-2026-google-spam-update-case-studies/ (31 August 2026)
59. Search Engine Land, Google quality raters now assess whether content is AI-generated. https://searchengineland.com/google-quality-raters-content-ai-generated-454161 (January 2025)
60. Seer Interactive, Your AI traffic is hiding: tracking ChatGPT, Claude and more. https://www.seerinteractive.com/insights/are-ai-sites-like-chatgpt-sending-your-website-traffic (2026)
61. Delante, GA4 adds a native AI Assistant channel. https://delante.co/ga4-adds-a-ai-assistant-channel-what-it-changes/ (2026; Google announcement 13 May 2026)

Site observations: live checks of https://https-knowledge-foundrycom.vercel.app and https://knowledge-foundry.com (headers, robots.txt, canonical, sitemap), 28 September 2026.
