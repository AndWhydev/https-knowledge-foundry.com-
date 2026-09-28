"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export type FAQItem = {
  q: string;
  a: string;
};

export function FAQ({
  eyebrow = "Common questions",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: FAQItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container size="narrow">
        <div className="mb-12 text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Reveal>
            <h2 className="text-display-2 mt-5">{title}</h2>
          </Reveal>
        </div>

        <div className="divide-y divide-[color:var(--color-hairline-strong)] border-y border-[color:var(--color-hairline-strong)]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span className="text-[17px] md:text-[19px] font-semibold tracking-tight font-[family-name:var(--font-display)] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 mt-1 flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "bg-[color:var(--color-ink)] border-[color:var(--color-ink)] text-white rotate-45"
                        : "border-[color:var(--color-hairline-strong)] text-[color:var(--color-ink-soft)] group-hover:border-[color:var(--color-ink)]"
                    }`}
                    aria-hidden
                  >
                    <Plus className="h-4 w-4 transition-transform" />
                  </span>
                </button>
                {/* Answers stay in the server HTML even when collapsed, so crawlers and
                    answer engines (which do not run JS) can read every one. */}
                <div
                  id={`faq-${i}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-14 text-[15px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
