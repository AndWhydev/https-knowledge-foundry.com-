import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Editorial spec table. Alternative to FeatureGrid.
 * Renders rows like a technical specification sheet — for capability pages
 * that need a data-dense treatment rather than card grid.
 */
export function SpecTable({
  eyebrow,
  title,
  lede,
  rows,
  tone = "canvas",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  rows: { label: string; value: ReactNode; note?: string }[];
  tone?: "canvas" | "warm" | "ink";
}) {
  return (
    <Section
      className={cn(
        tone === "warm" && "bg-[color:var(--color-canvas-warm)]",
        tone === "ink" && "bg-[color:var(--color-ink)] text-white",
      )}
    >
      <Container>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 lg:gap-16">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <SplitText as="h2" className={cn("text-display-2 mt-5 max-w-[22ch]", tone === "ink" && "text-white")} stagger={0.05}>
              {title}
            </SplitText>
            {lede && (
              <Reveal delay={0.35}>
                <p className={cn("mt-6 text-[15px] leading-[1.7] max-w-[46ch]", tone === "ink" ? "text-white/65" : "text-[color:var(--color-ink-muted)]")}>
                  {lede}
                </p>
              </Reveal>
            )}
          </div>
          <RevealStagger className="divide-y" as="div">
            {rows.map((r, i) => (
              <RevealItem
                key={i}
                className={cn(
                  "grid grid-cols-[minmax(0,180px)_minmax(0,1fr)] gap-8 py-5 group",
                  tone === "ink" ? "border-white/10" : "border-[color:var(--color-hairline)]",
                  i === 0 && (tone === "ink" ? "border-t border-white/10" : "border-t border-[color:var(--color-hairline)]"),
                )}
              >
                <div className={cn(
                  "font-[family-name:var(--font-jetbrains)] text-[11.5px] uppercase tracking-[0.14em] pt-1",
                  tone === "ink" ? "text-[color:var(--color-forge)]" : "text-[color:var(--color-forge)]",
                )}>
                  {r.label}
                </div>
                <div>
                  <div className={cn(
                    "text-[16.5px] leading-[1.55]",
                    tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
                  )}>
                    {r.value}
                  </div>
                  {r.note && (
                    <div className={cn(
                      "mt-1.5 text-[12.5px] leading-[1.55]",
                      tone === "ink" ? "text-white/50" : "text-[color:var(--color-ink-faint)]",
                    )}>
                      {r.note}
                    </div>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </Section>
  );
}
