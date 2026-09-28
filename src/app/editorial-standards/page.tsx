import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  alternates: { canonical: "/editorial-standards" },
  title: "Editorial standards",
  description:
    "How Knowledge Foundry researches, writes, sources, dates, and corrects its reference pages on compliance training, regulations, and competency.",
};

const label = "text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)]";

const standards: { heading: string; body: string }[] = [
  {
    heading: "Primary sources first",
    body: "Statements about what a law, regulator, or standard requires are checked against the primary source: the legislation, the regulator's own guidance, or the standard's published text. Each page lists the sources it relies on. Secondary commentary is used only for context and is labeled as such.",
  },
  {
    heading: "Answer first, then detail",
    body: "Each page opens with a short answer to its core question, followed by the detail, the exceptions, and the sources. Where the law is unsettled or depends on circumstances, the page says so rather than simplifying.",
  },
  {
    heading: "No invented figures",
    body: "We do not publish statistics, case examples, or quotations we cannot attribute to a named, checkable source. Illustrative examples are labeled as illustrative.",
  },
  {
    heading: "Dated and maintained",
    body: "Every page shows the date it was last updated. When a regulation or standard changes, affected pages are reviewed and the date is changed only when the content is.",
  },
  {
    heading: "Written with assistance, checked against sources",
    body: "Drafts are prepared with AI assistance. Before publication, every claim about a law, regulator, or standard is checked against the primary sources listed on the page, and claims that cannot be verified are removed.",
  },
  {
    heading: "Not legal advice",
    body: "These pages are general information for L&D, compliance, and risk professionals. They are not legal or compliance advice for any particular organization.",
  },
  {
    heading: "Corrections",
    body: "If you find an error, email hello@knowledge-foundry.com with the page address and the correction. Material corrections are made promptly and the page's updated date changes to match.",
  },
];

export default function EditorialStandards() {
  return (
    <section className="bg-[color:var(--color-canvas-warm)] py-12 md:py-16">
      <Container size="narrow">
        <div className={`${label} text-[color:var(--color-forge)] mb-4`}>Editorial standards</div>
        <h1 className="text-[36px] md:text-[52px] leading-[1.04] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-ink)] max-w-[20ch]">
          How our reference pages are made.
        </h1>
        <div className="mt-10 space-y-8">
          {standards.map((s) => (
            <div key={s.heading} className="border-t border-[color:var(--color-hairline-strong)] pt-5">
              <h2 className="text-[21px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)]">
                {s.heading}
              </h2>
              <p className="mt-2 text-[16.5px] leading-[1.7] text-[color:var(--color-ink-soft)]">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
