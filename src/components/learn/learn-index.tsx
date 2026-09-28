import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/solution/cta-band";
import { kinds, learnHref, learnPagesOf, type LearnKind } from "@/lib/learn";
import { site } from "@/lib/site";

const label = "text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)]";

/** Plain, crawlable list of every page of one kind, grouped A to Z for the glossary. */
export function LearnIndex({ kind }: { kind: LearnKind }) {
  const k = kinds[kind];
  const pages = learnPagesOf(kind);
  if (pages.length === 0) notFound();
  const url = `${site.url}${k.path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: k.label,
        description: k.intro,
        url,
        isPartOf: { "@id": `${site.url}/learn#hub` },
        hasPart: pages.map((p) => ({ "@type": "Article", name: p.title, url: `${site.url}${learnHref(p)}` })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Learn", item: `${site.url}/learn` },
          { "@type": "ListItem", position: 2, name: k.label, item: url },
        ],
      },
      ...(kind === "glossary"
        ? [
            {
              "@type": "DefinedTermSet",
              "@id": `${site.url}/glossary#set`,
              name: "Knowledge Foundry glossary",
              url,
              hasDefinedTerm: pages.map((p) => ({ "@type": "DefinedTerm", name: p.term ?? p.title, url: `${site.url}${learnHref(p)}` })),
            },
          ]
        : []),
    ],
  };

  const groups =
    kind === "glossary"
      ? Object.entries(
          pages.reduce<Record<string, typeof pages>>((acc, p) => {
            const letter = (p.term ?? p.title).replace(/^What (is|are) (an? |the )?/i, "").charAt(0).toUpperCase();
            (acc[letter] ??= []).push(p);
            return acc;
          }, {}),
        ).sort(([a], [b]) => a.localeCompare(b))
      : [["", pages] as const];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[color:var(--color-canvas-warm)] pt-10 md:pt-14 pb-12 border-b border-[color:var(--color-hairline-strong)]">
        <Container size="narrow">
          <nav aria-label="Breadcrumb" className={`${label} text-[color:var(--color-ink-muted)] mb-8`}>
            <Link href="/learn" className="hover:text-[color:var(--color-forge)]">
              Learn
            </Link>
          </nav>
          <h1 className="text-[36px] md:text-[52px] leading-[1.04] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
            {k.label}
          </h1>
          <p className="mt-5 text-[18px] leading-[1.55] text-[color:var(--color-ink-muted)] max-w-[56ch]">{k.intro}</p>
        </Container>
      </section>
      <section className="py-12 md:py-16">
        <Container size="narrow">
          {groups.map(([letter, list]) => (
            <div key={letter || "all"} className="mb-10">
              {letter && <h2 className={`${label} text-[color:var(--color-forge)] mb-3`}>{letter}</h2>}
              <ul className="divide-y divide-[color:var(--color-hairline)] border-y border-[color:var(--color-hairline)]">
                {list.map((p) => (
                  <li key={p.slug}>
                    <Link href={learnHref(p)} className="group block py-4">
                      <div className="text-[17px] font-semibold tracking-tight font-[family-name:var(--font-display)] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)]">
                        {p.title}
                      </div>
                      <p className="mt-1 text-[14.5px] leading-[1.55] text-[color:var(--color-ink-muted)]">{p.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
