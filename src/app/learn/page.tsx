import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/solution/cta-band";
import { kinds, learnHref, learnPagesOf, type LearnKind } from "@/lib/learn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/learn" },
  title: "Learn: compliance and competency training",
  description:
    "Definitions, regulation guides, how to guides, and comparisons for L&D, compliance, and risk teams building auditable training in regulated organisations.",
};

const label = "text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)]";
const order: LearnKind[] = ["regulation", "guide", "glossary", "comparison"];

export default function LearnHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/learn#hub`,
    name: "Learn",
    url: `${site.url}/learn`,
    description: metadata.description,
    publisher: { "@id": `${site.url}/#organization` },
    hasPart: order.map((k) => ({ "@type": "CollectionPage", name: kinds[k].label, url: `${site.url}${kinds[k].path}` })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[color:var(--color-canvas-warm)] pt-10 md:pt-14 pb-12 border-b border-[color:var(--color-hairline-strong)]">
        <Container size="narrow">
          <div className={`${label} text-[color:var(--color-forge)] mb-4`}>Learn</div>
          <h1 className="text-[36px] md:text-[52px] leading-[1.04] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-ink)] max-w-[20ch]">
            Reference for building training that holds up under audit.
          </h1>
          <p className="mt-5 text-[18px] leading-[1.55] text-[color:var(--color-ink-muted)] max-w-[58ch]">
            What regulators expect of training, how to build and evidence it, and what the terms mean. Every page
            answers its question first, cites primary sources, and carries the date it was last checked.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container size="narrow">
          {order.map((k) => {
            const pages = learnPagesOf(k);
            if (pages.length === 0) return null;
            return (
              <div key={k} className="mb-14">
                <div className="flex items-end justify-between gap-6 mb-4">
                  <h2 className="text-[26px] md:text-[30px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)]">
                    {kinds[k].label}
                  </h2>
                  <Link href={kinds[k].path} className="shrink-0 inline-flex items-center gap-1.5 py-2 text-[14px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]">
                    All {pages.length}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <p className="text-[15.5px] leading-[1.6] text-[color:var(--color-ink-muted)] mb-5 max-w-[60ch]">{kinds[k].intro}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 border-t border-[color:var(--color-hairline)]">
                  {pages.slice(0, 8).map((p) => (
                    <li key={p.slug} className="border-b border-[color:var(--color-hairline)]">
                      <Link href={learnHref(p)} className="block py-3 text-[15px] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-forge)]">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
