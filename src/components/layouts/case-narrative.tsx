"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/motion/count-up";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Case study narrative layout — for /case-studies/*.
 *
 * Editorial storytelling structure: masthead → situation → framework work →
 * outcome (with big animated numbers) → verbatim outputs → next steps.
 * Timeline chapter bar down the left. Deliberately DIFFERENT from platform
 * pages and insights.
 */

export type CaseChapter = {
  n: string;
  label: string;
  id: string;
};

export function CaseStudy({
  sector,
  title,
  dek,
  chapters,
  children,
}: {
  sector: string;
  title: string;
  dek: string;
  chapters: CaseChapter[];
  children: ReactNode;
}) {
  return (
    <article className="min-h-screen">
      {/* Masthead */}
      <header className="relative overflow-hidden bg-[color:var(--color-ink)] text-white pt-14 pb-24 md:pt-20 md:pb-32">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none rounded-full"
          aria-hidden
          style={{
            background: "radial-gradient(circle, rgba(239,103,4,0.20), transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        <Container>
          <nav aria-label="Breadcrumb" className="mb-10">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" aria-hidden />
              All case studies
            </Link>
          </nav>

          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-end">
            <div>
              <Reveal>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-5">
                  Case study · {sector}
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="text-[38px] md:text-[54px] lg:text-[62px] leading-[1.02] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-white max-w-[22ch]">
                  {title}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 text-[17.5px] md:text-[19px] leading-[1.55] text-white/70 max-w-[54ch]">
                  {dek}
                </p>
              </Reveal>
            </div>

            {/* Chapter map */}
            <Reveal delay={0.2}>
              <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <div className="text-[10px] font-medium uppercase tracking-[0.16em] font-[family-name:var(--font-jetbrains)] text-white/50 mb-4">
                  Chapters
                </div>
                <ol className="space-y-3">
                  {chapters.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className="group flex items-baseline gap-4 text-[13.5px] text-white/80 hover:text-[color:var(--color-forge)] transition-colors"
                      >
                        <span className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.14em] text-[color:var(--color-forge)]">
                          {c.n}
                        </span>
                        <span>{c.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </Container>
      </header>

      {/* Chapters */}
      <div className="py-16 md:py-24">{children}</div>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-[color:var(--color-canvas-warm)] border-t border-[color:var(--color-hairline-strong)]">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-5">
              For your organization
            </div>
            <h2 className="text-[32px] md:text-[42px] leading-[1.1] font-[family-name:var(--font-display)] font-semibold tracking-[-0.028em] text-[color:var(--color-ink)] max-w-[24ch] mx-auto">
              Bring the subject. Leave with the framework.
            </h2>
            <p className="mt-6 text-[16.5px] leading-[1.6] text-[color:var(--color-ink-muted)] max-w-[52ch] mx-auto">
              A 45-minute working session with our team on a real subject or program you own.
              You keep the framework the Foundry produces.
            </p>
            <div className="mt-9 inline-flex">
              <Magnetic strength={0.22}>
                <Button href="/demonstration" variant="primary" size="lg" arrow>
                  Request a demonstration
                </Button>
              </Magnetic>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}

export function Chapter({
  n,
  label,
  id,
  title,
  children,
  tone = "canvas",
}: {
  n: string;
  label: string;
  id: string;
  title: string;
  children: ReactNode;
  tone?: "canvas" | "warm" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 scroll-mt-24",
        tone === "warm" && "bg-[color:var(--color-canvas-warm)]",
        tone === "ink" && "bg-[color:var(--color-ink)] text-white",
      )}
    >
      <Container>
        <div className="grid lg:grid-cols-[180px_minmax(0,1fr)] gap-8 lg:gap-16 max-w-[1080px] mx-auto">
          <div className="lg:pt-2">
            <Reveal>
              <div className={cn(
                "font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em] uppercase",
                tone === "ink" ? "text-[color:var(--color-forge)]" : "text-[color:var(--color-forge)]",
              )}>
                Chapter {n}
              </div>
              <div className={cn(
                "mt-2 text-[13px] font-[family-name:var(--font-jetbrains)] tracking-[0.05em]",
                tone === "ink" ? "text-white/60" : "text-[color:var(--color-ink-muted)]",
              )}>
                {label}
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h2 className={cn(
                "text-[28px] md:text-[38px] leading-[1.1] font-[family-name:var(--font-display)] font-semibold tracking-[-0.025em] max-w-[24ch]",
                tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
              )}>
                {title}
              </h2>
            </Reveal>
            <div className={cn(
              "mt-8 space-y-6 text-[16.5px] leading-[1.7] max-w-[60ch]",
              tone === "ink" ? "text-white/70 [&_strong]:text-white" : "text-[color:var(--color-ink-soft)] [&_strong]:text-[color:var(--color-ink)]",
              "[&_strong]:font-semibold",
            )}>
              {children}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function OutcomeStats({
  items,
  footnote,
}: {
  items: { value: number; suffix?: string; prefix?: string; label: string; decimals?: number }[];
  footnote?: string;
}) {
  return (
    <div className="mt-12">
      <RevealStagger className="grid sm:grid-cols-3 gap-px bg-[color:var(--color-hairline-strong)] rounded-[var(--radius-md)] overflow-hidden">
        {items.map((item, i) => (
          <RevealItem
            key={i}
            className="bg-[color:var(--color-canvas-warm)] p-7 md:p-8"
          >
            <div className="text-[44px] md:text-[56px] leading-[0.95] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
              {item.prefix}
              <CountUp value={item.value} suffix={item.suffix} duration={2} decimals={item.decimals} />
            </div>
            <div className="mt-4 text-[13.5px] leading-[1.5] text-[color:var(--color-ink-muted)] max-w-[28ch]">
              {item.label}
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
      {footnote && (
        <p className="mt-4 text-[11.5px] leading-[1.5] text-[color:var(--color-ink-faint)] max-w-[52ch]">
          {footnote}
        </p>
      )}
    </div>
  );
}

export function CaseQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className="my-12 md:my-16 border-t-2 border-b-2 border-[color:var(--color-forge)] py-8"
    >
      <blockquote className="text-[22px] md:text-[28px] leading-[1.3] font-[family-name:var(--font-display)] font-semibold tracking-[-0.02em] text-[color:var(--color-ink)] max-w-[36ch]">
        &ldquo;{children}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 text-[11.5px] uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)]">
          {attribution}
        </figcaption>
      )}
    </motion.figure>
  );
}
