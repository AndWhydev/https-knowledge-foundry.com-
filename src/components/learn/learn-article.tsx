import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/solution/cta-band";
import { Inline, plain } from "@/components/learn/inline";
import {
  findLearnPage,
  formatDate,
  kinds,
  learnHref,
  readingMinutes,
  type Block,
  type LearnPage,
} from "@/lib/learn";
import { site } from "@/lib/site";

const mono = "font-[family-name:var(--font-jetbrains)]";
const label = `text-[11px] font-medium uppercase tracking-[0.14em] ${mono}`;

/**
 * Answer-first article template for the learn library. Everything an answer
 * engine needs is in the server HTML: the short answer directly under the
 * H1, question-style headings, tables, FAQs that are never collapsed out of
 * the DOM, dated sources, and matching JSON-LD.
 */
export function LearnArticle({ page }: { page: LearnPage }) {
  const kind = kinds[page.kind];
  const url = `${site.url}${learnHref(page)}`;
  const related = page.related
    .map((slug) => findLearnPage(slug))
    .filter((p): p is LearnPage => Boolean(p));

  return (
    <>
      <JsonLd page={page} url={url} />

      <article className="bg-[color:var(--color-canvas-warm)]">
        <header className="pt-10 md:pt-14 pb-10 border-b border-[color:var(--color-hairline-strong)]">
          <Container size="narrow">
            <nav aria-label="Breadcrumb" className={`${label} text-[color:var(--color-ink-muted)] mb-8`}>
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/learn" className="hover:text-[color:var(--color-forge)]">
                    Learn
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={kind.path} className="hover:text-[color:var(--color-forge)]">
                    {kind.label}
                  </Link>
                </li>
              </ol>
            </nav>
            <div className={`${label} text-[color:var(--color-forge)] mb-4`}>{kind.eyebrow}</div>
            <h1 className="text-[34px] md:text-[48px] leading-[1.05] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-ink)] max-w-[24ch]">
              {page.title}
            </h1>

            {/* The short answer: the passage answer engines lift. */}
            <div className="mt-8 rounded-[var(--radius-lg)] border border-[color:var(--color-hairline-strong)] bg-white p-6 md:p-7">
              <div className={`${label} text-[color:var(--color-ink-faint)] mb-3`}>Short answer</div>
              <p className="text-[17px] md:text-[18px] leading-[1.6] text-[color:var(--color-ink)]">
                <Inline text={page.shortAnswer} />
              </p>
            </div>

            <dl className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 ${label} text-[color:var(--color-ink-faint)]`}>
              <div className="flex gap-2">
                <dt>Updated</dt>
                <dd className="text-[color:var(--color-ink-muted)]">
                  <time dateTime={page.updated}>{formatDate(page.updated)}</time>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt>Reading time</dt>
                <dd className="text-[color:var(--color-ink-muted)]">{readingMinutes(page)} min</dd>
              </div>
              {page.jurisdiction && (
                <div className="flex gap-2">
                  <dt>Jurisdiction</dt>
                  <dd className="text-[color:var(--color-ink-muted)]">{page.jurisdiction}</dd>
                </div>
              )}
              {page.regulator && (
                <div className="flex gap-2">
                  <dt>Regulator</dt>
                  <dd className="text-[color:var(--color-ink-muted)]">{page.regulator}</dd>
                </div>
              )}
            </dl>
          </Container>
        </header>

        <div className="py-12 md:py-16">
          <Container size="narrow">
            <section aria-labelledby="takeaways" className="mb-12">
              <h2 id="takeaways" className={`${label} text-[color:var(--color-ink-faint)] mb-4`}>
                Key takeaways
              </h2>
              <ul className="space-y-3">
                {page.keyTakeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-[16px] leading-[1.6] text-[color:var(--color-ink-soft)]">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-forge)]" aria-hidden />
                    <span>
                      <Inline text={t} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {page.sections.length > 3 && (
              <nav aria-label="Contents" className="mb-12 border-y border-[color:var(--color-hairline-strong)] py-6">
                <div className={`${label} text-[color:var(--color-ink-faint)] mb-3`}>Contents</div>
                <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {page.sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-[14.5px] text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-forge)]">
                        <span className={`${mono} text-[11px] text-[color:var(--color-forge)] mr-2`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {page.sections.map((s) => (
              <section key={s.id} id={s.id} className="mb-12 scroll-mt-28">
                <h2 className="text-[26px] md:text-[30px] leading-[1.15] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] mb-5">
                  {s.heading}
                </h2>
                <div className="space-y-5">
                  {s.blocks.map((b, i) => (
                    <BlockView key={i} block={b} />
                  ))}
                </div>
              </section>
            ))}

            {page.productLinks && page.productLinks.length > 0 && (
              <aside className="mb-12 rounded-[var(--radius-lg)] border border-[color:var(--color-hairline-strong)] bg-white p-6">
                <div className={`${label} text-[color:var(--color-forge)] mb-3`}>How Knowledge Foundry approaches this</div>
                <ul className="space-y-2">
                  {page.productLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]">
                        {l.label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {page.faqs.length > 0 && (
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-[26px] md:text-[30px] leading-[1.15] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] mb-5">
                  Frequently asked questions
                </h2>
                <div className="divide-y divide-[color:var(--color-hairline-strong)] border-y border-[color:var(--color-hairline-strong)]">
                  {page.faqs.map((f) => (
                    <div key={f.q} className="py-5">
                      <h3 className="text-[17.5px] font-semibold tracking-tight font-[family-name:var(--font-display)] text-[color:var(--color-ink)]">
                        {f.q}
                      </h3>
                      <p className="mt-2 text-[15.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">
                        <Inline text={f.a} />
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {page.sources.length > 0 && (
              <section id="sources" className="scroll-mt-28">
                <h2 className={`${label} text-[color:var(--color-ink-faint)] mb-4`}>Sources</h2>
                <ol className="space-y-2.5 list-decimal pl-5 marker:text-[color:var(--color-ink-faint)]">
                  {page.sources.map((src) => (
                    <li key={src.url} className="text-[14px] leading-[1.55] text-[color:var(--color-ink-muted)]">
                      <a href={src.url} rel="noopener" target="_blank" className="inline-flex items-baseline gap-1 text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-forge)]">
                        {src.title}
                        <ExternalLink className="h-3 w-3 shrink-0 translate-y-[1px]" aria-hidden />
                      </a>
                      <span className="text-[color:var(--color-ink-faint)]">, {src.publisher}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-[13px] leading-[1.6] text-[color:var(--color-ink-faint)]">
                  This page is general information, not legal or compliance advice. Check the primary sources above
                  and obtain advice for your circumstances. See our{" "}
                  <Link href="/editorial-standards" className="underline underline-offset-2 hover:text-[color:var(--color-forge)]">
                    editorial standards
                  </Link>
                  .
                </p>
              </section>
            )}
          </Container>
        </div>

        {related.length > 0 && (
          <section className="border-t border-[color:var(--color-hairline-strong)] py-14 bg-white">
            <Container size="narrow">
              <h2 className={`${label} text-[color:var(--color-ink-faint)] mb-6`}>Related</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {related.map((r) => (
                  <Link key={r.slug} href={learnHref(r)} className="group block border-t border-[color:var(--color-hairline-strong)] pt-4 hover:border-[color:var(--color-forge)]">
                    <div className={`${label} text-[color:var(--color-forge)] mb-2`}>{kinds[r.kind].singular}</div>
                    <div className="text-[17px] font-semibold tracking-tight font-[family-name:var(--font-display)] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] leading-[1.3]">
                      {r.title}
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>

      <CtaBand />
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  const body = "text-[16.5px] leading-[1.7] text-[color:var(--color-ink-soft)]";
  switch (block.type) {
    case "p":
      return (
        <p className={body}>
          <Inline text={block.text} />
        </p>
      );
    case "ul":
    case "ol": {
      const Tag = block.type;
      return (
        <Tag className={`${body} space-y-2 pl-6 ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-[color:var(--color-forge)]`}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              <Inline text={item} />
            </li>
          ))}
        </Tag>
      );
    }
    case "table":
      return (
        <div className="-mx-5 sm:mx-0 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-[14.5px] leading-[1.55] bg-white sm:rounded-[var(--radius-md)] overflow-hidden">
            {block.caption && (
              <caption className={`${label} text-left text-[color:var(--color-ink-faint)] pb-3 px-5 sm:px-0`}>{block.caption}</caption>
            )}
            <thead>
              <tr className="border-b border-[color:var(--color-hairline-strong)]">
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold text-[color:var(--color-ink)] align-bottom">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-[color:var(--color-hairline)] last:border-0">
                  {row.map((cell, j) =>
                    j === 0 ? (
                      <th key={j} scope="row" className="px-4 py-3 align-top font-medium text-[color:var(--color-ink)]">
                        <Inline text={cell} />
                      </th>
                    ) : (
                      <td key={j} className="px-4 py-3 align-top text-[color:var(--color-ink-soft)]">
                        <Inline text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="border-l-2 border-[color:var(--color-forge)] bg-white px-5 py-4">
          {block.title && <div className="font-semibold text-[15.5px] text-[color:var(--color-ink)] mb-1">{block.title}</div>}
          <p className="text-[15.5px] leading-[1.65] text-[color:var(--color-ink-soft)]">
            <Inline text={block.text} />
          </p>
        </div>
      );
  }
}

function JsonLd({ page, url }: { page: LearnPage; url: string }) {
  const kind = kinds[page.kind];
  const org = { "@id": `${site.url}/#organization` };
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.title,
      description: page.description,
      abstract: plain(page.shortAnswer),
      url,
      mainEntityOfPage: url,
      datePublished: page.published,
      dateModified: page.updated,
      inLanguage: "en-AU",
      author: org,
      publisher: org,
      isPartOf: { "@id": `${site.url}${kind.path}#collection` },
      citation: page.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url, publisher: s.publisher })),
      ...(page.kind === "glossary" && page.term ? { about: { "@id": `${url}#term` } } : {}),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Learn", item: `${site.url}/learn` },
        { "@type": "ListItem", position: 2, name: kind.label, item: `${site.url}${kind.path}` },
        { "@type": "ListItem", position: 3, name: page.title, item: url },
      ],
    },
  ];
  if (page.kind === "glossary" && page.term) {
    graph.push({
      "@type": "DefinedTerm",
      "@id": `${url}#term`,
      name: page.term,
      alternateName: page.alsoKnownAs,
      description: plain(page.shortAnswer),
      url,
      inDefinedTermSet: { "@type": "DefinedTermSet", "@id": `${site.url}/glossary#set`, name: "Knowledge Foundry glossary" },
    });
  }
  if (page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
      })),
    });
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
