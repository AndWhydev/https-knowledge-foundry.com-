# Knowledge Foundry v2 — Information Architecture

**Total pages: 46 primary + 3 legal = 49**

## Design principles (adapted from the Landing Page SOP)

- **One dominant conversion action per page** — every page has a single primary CTA (Request a demonstration / Speak to us / Download the brief). Secondary CTAs never compete for the same visual weight.
- **Message match per traffic source** — H1 answers the query that got the visitor there. Industry page H1s echo industry language, not platform language.
- **Substantiable claims only** — no fabricated logos, no invented case studies, no synthetic testimonials. Where a case study is anonymised, say so plainly.
- **Real photography or abstract AI-generated imagery** — never AI-generated people, staff, or clients. Section imagery is abstract/architectural (foundry, cubes, lattices, blueprints).
- **Core Web Vitals as hard gates** — LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 on throttled mobile.
- **WCAG 2.1 AA everywhere.**
- **Server-side conversion validation** — demo requests fire the conversion event only after backend validates. Layered spam protection (honeypot → timing → server → rate limit).
- **Privacy Act compliance** — collection notice on every form, privacy policy in footer.
- **Indexable** (unlike paid landing pages). Full sitemap + structured data.

## Site map

### Home & entry
1. `/` — Home

### Platform (13 pages — the capability spine)
2. `/platform` — The Platform (overview)
3. `/platform/see-it-work` — Interactive walkthrough
4. `/platform/framework-intelligence`
5. `/platform/gap-analysis`
6. `/platform/remediation`
7. `/platform/knowledge-transformation`
8. `/platform/verification-trust`
9. `/platform/knowledge-governance`
10. `/platform/standards-accreditation`
11. `/platform/audit-evidence`
12. `/platform/enterprise-learning-modernisation`
13. `/platform/integrations`
14. `/platform/technical-overview`

### Programs (use-cases — 6 pages)
15. `/programs` — Programs overview
16. `/programs/educational`
17. `/programs/compliance`
18. `/programs/product-enablement`
19. `/programs/operational-procedures`
20. `/programs/hybrid-verification`

### Industries (7 pages — enterprise-appropriate framing)
21. `/industries` — Industries index
22. `/industries/financial-services`
23. `/industries/healthcare-life-sciences`
24. `/industries/energy-resources`
25. `/industries/government-defence`
26. `/industries/professional-services`
27. `/industries/higher-education`

### Proof (4 pages — anonymised until client provides real names)
28. `/case-studies` — Case studies index
29. `/case-studies/regulated-financial-services`
30. `/case-studies/national-healthcare-operator`
31. `/case-studies/critical-infrastructure`

### Insights hub (9 pages — original substantive content)
32. `/insights` — Insights index
33. `/insights/knowledge-structure-before-content`
34. `/insights/what-verification-really-measures`
35. `/insights/why-training-fails-audits`
36. `/insights/scorm-is-a-transport-not-a-strategy`
37. `/insights/knowledge-drift-and-how-to-detect-it`
38. `/insights/framework-first-methodology`
39. `/insights/hybrid-verification-primer`
40. `/insights/ai-generated-content-and-compliance-risk`

### Trust, about, contact (6 pages)
41. `/trust` — Trust center overview
42. `/trust/security`
43. `/trust/compliance-posture`
44. `/about`
45. `/who-can-use-this`
46. `/demonstration` — Contact / demo request

### Legal (3 — required, unlinked from primary nav)
- `/privacy`
- `/terms`
- `/accessibility-statement`

## Global navigation

```
Platform ▾   Programs ▾   Industries ▾   Case studies   Insights   About
                                                      [Request a demonstration →]
```

Mega-menu for Platform, Programs, Industries. Persistent CTA in the header.

## Motion & animation language

- **Restrained, formal, cinematic.** No bouncy or playful springs. Enterprise buyers read fast-decay eases as unserious.
- **Scroll-linked reveals** (fade-up + slight y-translate) on section entries.
- **Magnetic hover** on primary CTAs only.
- **Marquee** for logo/certification strip (respect `prefers-reduced-motion`).
- **Gradient blur** ambient behind hero.
- **Isometric SVG animations** for the platform lattice (drives the "framework-first" story).
- **Higgsfield-generated hero video** looped, ≤6MB, muted, poster preloaded. Never LCP element.
