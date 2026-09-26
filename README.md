# Knowledge Foundry — v2

A rebuilt marketing website for Knowledge Foundry, the enterprise platform that turns subjects, documents, and requirements into structured learning systems.

## Stack
- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (utility + custom `@theme` tokens)
- **Motion** (formerly framer-motion) for scroll-linked reveals + interactions
- **Lucide** for iconography
- **Higgsfield** for editorial imagery + hero video loop
- **Vercel** for hosting

## Structure

- `src/app/` — App Router routes (46 primary pages + 3 legal)
- `src/components/ui/` — primitives (Button, Card, Container/Section/Eyebrow)
- `src/components/solution/` — composable page sections (TopicHeader, FeatureGrid, ProcessSteps, FAQ, CtaBand, ProseBlock, Related)
- `src/components/motion/` — Reveal, RevealStagger, RevealItem
- `src/components/hero-lattice.tsx` — animated isometric SVG
- `src/components/hero-video.tsx` — lazy-loaded ambient hero video
- `src/components/editorial-still.tsx` — Higgsfield editorial image wrapper (next/image)
- `src/lib/site.ts` — site metadata + navigation model
- `public/media/` — editorial imagery (5 stills + 1 hero video loop, Higgsfield-generated)
- `docs/ARCHITECTURE.md` — full information architecture

## Local dev

```
npm install
npm run dev
```

## Build principles (from the Landing Page SOP, adapted for enterprise B2B)

- One dominant conversion action per page (Request a demonstration)
- Message match — H1 reflects the query, not the internal taxonomy
- Substantiable claims only; no fabricated logos, testimonials, or case studies
- No AI-generated people, staff, or client photos (AU Consumer Law s.18)
- Real photography or abstract AI-generated imagery only
- WCAG 2.1 AA (focus visible, contrast, semantic HTML, labels)
- `prefers-reduced-motion` respected on all animations
- Core Web Vitals targets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1
- Static generation everywhere possible
- Server-side form validation before conversion event fires
- Layered spam protection (honeypot → timing → server → rate limit) — see /demonstration
- Privacy Act APP 5 collection notice on every form
