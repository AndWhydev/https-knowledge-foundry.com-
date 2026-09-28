"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Editorial article layout — for /insights/*.
 *
 * Magazine-inspired: cream canvas, giant italic-serif-toned headline (using
 * the display sans, italicised via letter-spacing), byline + reading time,
 * TOC in the margin, wide-set prose, pull quotes, image captions.
 * Deliberately DIFFERENT from every other page template.
 */
export function EditorialArticle({
  eyebrow,
  title,
  dek,
  date,
  readingTime,
  toc,
  children,
  related,
}: {
  eyebrow: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  toc?: { id: string; label: string }[];
  children: ReactNode;
  related?: { title: string; href: string; eyebrow: string }[];
}) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });

  const [activeToc, setActiveToc] = useState<string | null>(toc?.[0]?.id ?? null);
  useEffect(() => {
    if (!toc) return;
    const observers = toc.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveToc(item.id);
        },
        { rootMargin: "-45% 0px -50% 0px" },
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [toc]);

  return (
    <article className="bg-[color:var(--color-canvas-warm)] min-h-screen">
      {/* Reading progress bar */}
      {!reduce && (
        <motion.div
          className="fixed top-[2px] left-0 right-0 h-[2px] origin-left z-[59] bg-[color:var(--color-forge)]"
          style={{ scaleX }}
          aria-hidden
        />
      )}

      {/* Editorial masthead */}
      <header className="pt-12 pb-8 border-b border-[color:var(--color-hairline-strong)]">
        <Container size="narrow">
          <nav aria-label="Breadcrumb" className="mb-10">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-forge)] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" aria-hidden />
              Back to Insights
            </Link>
          </nav>

          <Reveal>
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-5">
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="text-[38px] md:text-[54px] lg:text-[64px] leading-[1.02] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-ink)] max-w-[22ch]"
            >
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[18px] md:text-[20px] leading-[1.5] text-[color:var(--color-ink-muted)] mt-7 max-w-[52ch]">
              {dek}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-6 text-[12px] uppercase tracking-[0.12em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                {date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {readingTime}
              </span>
            </div>
          </Reveal>
        </Container>
      </header>

      {/* Body — 2 columns on lg: TOC sidebar + wide prose */}
      <div className="py-14 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-[220px_minmax(0,680px)] xl:grid-cols-[240px_minmax(0,720px)_1fr] gap-10 lg:gap-16 max-w-[1100px] mx-auto lg:mx-0 xl:mx-auto">
            {/* TOC — sticky in margin */}
            {toc && (
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <div className="text-[10px] font-medium uppercase tracking-[0.16em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-4">
                    Contents
                  </div>
                  <ol className="space-y-2.5 border-l border-[color:var(--color-hairline-strong)]">
                    {toc.map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={cn(
                            "group block -ml-px pl-4 border-l-2 py-1 transition-all",
                            activeToc === item.id
                              ? "border-[color:var(--color-forge)] text-[color:var(--color-ink)]"
                              : "border-transparent text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:border-[color:var(--color-ink-soft)]",
                          )}
                        >
                          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.14em] text-[color:var(--color-forge)] mr-2">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[13.5px]">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            )}

            {/* Main prose column */}
            <div className="editorial-prose">{children}</div>

            {/* Optional right rail — empty for now, keeps 3-col balance */}
            <div className="hidden xl:block" />
          </div>
        </Container>
      </div>

      {/* Related + CTA footer */}
      {related && related.length > 0 && (
        <section className="border-t border-[color:var(--color-hairline-strong)] py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-[1100px] mx-auto">
              <div className="text-[10px] font-medium uppercase tracking-[0.16em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-8">
                Read next
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group block border-t border-[color:var(--color-hairline-strong)] pt-5 hover:border-[color:var(--color-forge)] transition-colors"
                  >
                    <div className="text-[10.5px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
                      {r.eyebrow}
                    </div>
                    <h3 className="text-[19px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors leading-[1.25]">
                      {r.title}
                    </h3>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)]">
                      Continue
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Inline demonstration CTA — editorial voice, not a marketing band */}
      <section className="py-16 bg-[color:var(--color-canvas-warm)]">
        <Container size="narrow">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:justify-between border-y border-[color:var(--color-ink)] py-8">
            <p className="text-[15.5px] leading-[1.55] text-[color:var(--color-ink)] max-w-[46ch]">
              Bring a subject to the Foundry. We build the framework in 45 minutes and you keep it.
            </p>
            <Magnetic strength={0.2}>
              <Button href="/demonstration" variant="primary" size="md" arrow>
                Request a demonstration
              </Button>
            </Magnetic>
          </div>
        </Container>
      </section>
    </article>
  );
}

/** Convenience wrappers used inside <EditorialArticle>{children}</EditorialArticle> */

export function EditorialH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="text-[28px] md:text-[34px] leading-[1.15] font-[family-name:var(--font-display)] font-semibold tracking-[-0.02em] text-[color:var(--color-ink)] mt-16 mb-6 scroll-mt-28"
    >
      {children}
    </h2>
  );
}

export function EditorialP({ children }: { children: ReactNode }) {
  return (
    <p className="text-[17px] leading-[1.7] text-[color:var(--color-ink-soft)] mb-6 max-w-[64ch] [&_strong]:text-[color:var(--color-ink)] [&_strong]:font-semibold [&_em]:italic">
      {children}
    </p>
  );
}

export function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <figure className="my-14 pl-6 md:pl-10 border-l-4 border-[color:var(--color-forge)]">
      <blockquote className="text-[24px] md:text-[30px] leading-[1.25] font-[family-name:var(--font-display)] font-semibold tracking-[-0.02em] text-[color:var(--color-ink)]">
        &ldquo;{children}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-[12px] uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)]">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}

export function EditorialList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-8 space-y-3 max-w-[62ch]">
      {items.map((it, i) => (
        <li key={i} className="flex gap-4 text-[16.5px] leading-[1.65] text-[color:var(--color-ink-soft)]">
          <span className="mt-2 h-1 w-4 shrink-0 bg-[color:var(--color-forge)]" aria-hidden />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function EditorialAside({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-12 bg-white border border-[color:var(--color-hairline)] rounded-[var(--radius-md)] p-6 md:p-8">
      <div className="text-[10.5px] font-medium uppercase tracking-[0.16em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
        {title}
      </div>
      <div className="text-[15px] leading-[1.6] text-[color:var(--color-ink-soft)] [&_p]:mb-3 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
