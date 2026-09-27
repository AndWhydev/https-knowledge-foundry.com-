"use client";

import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { CountUp } from "@/components/motion/count-up";
import { cn } from "@/lib/cn";

/**
 * Big numbers strip. Alternative to ProseBlock for pages that lead with
 * quantitative claims. Dark by default, high impact.
 */
export function BigNumbers({
  eyebrow,
  title,
  lede,
  items,
  tone = "ink",
  footnote,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  items: { value: number; suffix?: string; prefix?: string; label: string; decimals?: number }[];
  tone?: "ink" | "warm" | "canvas";
  footnote?: string;
}) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden",
        tone === "ink" && "bg-[color:var(--color-ink)] text-white",
        tone === "warm" && "bg-[color:var(--color-canvas-warm)]",
      )}
    >
      {tone === "ink" && (
        <>
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse, rgba(239,103,4,0.15), transparent 65%)",
              filter: "blur(40px)",
            }}
          />
        </>
      )}
      <Container>
        <div className="max-w-[720px] mb-14">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <SplitText as="h2" className={cn("text-display-2 mt-5", tone === "ink" && "text-white")} stagger={0.05}>
            {title}
          </SplitText>
          {lede && (
            <Reveal delay={0.35}>
              <p className={cn("mt-6 text-[16.5px] leading-[1.65]", tone === "ink" ? "text-white/70" : "text-[color:var(--color-ink-muted)]")}>
                {lede}
              </p>
            </Reveal>
          )}
        </div>

        <RevealStagger
          className={cn(
            "grid gap-px rounded-[var(--radius-lg)] overflow-hidden",
            items.length === 3 && "md:grid-cols-3",
            items.length === 4 && "md:grid-cols-2 lg:grid-cols-4",
            tone === "ink" ? "bg-white/10" : "bg-[color:var(--color-hairline-strong)]",
          )}
        >
          {items.map((item, i) => (
            <RevealItem
              key={i}
              className={cn(
                "p-8 md:p-10",
                tone === "ink" ? "bg-[color:var(--color-ink)]" : "bg-white",
              )}
            >
              <div className={cn(
                "text-[48px] md:text-[64px] leading-[0.95] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em]",
                tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
              )}>
                {item.prefix}
                <CountUp value={item.value} suffix={item.suffix} duration={1.8} decimals={item.decimals} />
              </div>
              <div className={cn(
                "mt-5 text-[13.5px] leading-[1.55] max-w-[32ch]",
                tone === "ink" ? "text-white/60" : "text-[color:var(--color-ink-muted)]",
              )}>
                {item.label}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        {footnote && (
          <p className={cn(
            "mt-4 text-[11.5px] leading-[1.5] max-w-[52ch]",
            tone === "ink" ? "text-white/40" : "text-[color:var(--color-ink-faint)]",
          )}>
            {footnote}
          </p>
        )}
      </Container>
    </Section>
  );
}
