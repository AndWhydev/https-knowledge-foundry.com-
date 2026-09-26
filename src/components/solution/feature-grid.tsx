import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Feature = {
  icon?: ReactNode;
  title: string;
  desc: string;
};

export function FeatureGrid({
  eyebrow,
  title,
  lede,
  features,
  columns = 3,
  tone = "canvas",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
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
        <div className="max-w-[720px] mb-14">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Reveal>
            <h2 className={cn("text-display-2 mt-5", tone === "ink" && "text-white")}>{title}</h2>
          </Reveal>
          {lede && (
            <Reveal delay={0.1}>
              <p className={cn("text-lede mt-5", tone === "ink" && "text-white/70")}>{lede}</p>
            </Reveal>
          )}
        </div>

        <RevealStagger
          className={cn(
            "grid gap-px rounded-[var(--radius-lg)] overflow-hidden",
            tone === "ink" ? "bg-white/10" : "bg-[color:var(--color-hairline)]",
            columns === 2 && "md:grid-cols-2",
            columns === 3 && "md:grid-cols-3",
            columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {features.map((f) => (
            <RevealItem
              key={f.title}
              className={cn(
                "p-8",
                tone === "canvas" && "bg-white",
                tone === "warm" && "bg-[color:var(--color-canvas-warm)]",
                tone === "ink" && "bg-[color:var(--color-ink)]",
              )}
            >
              {f.icon && (
                <div
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] mb-5 text-[color:var(--color-forge)]",
                    tone === "ink" ? "bg-white/6" : "bg-[color:var(--color-canvas-tint)]",
                  )}
                >
                  {f.icon}
                </div>
              )}
              <h3
                className={cn(
                  "text-[18px] leading-[1.28] font-semibold tracking-tight font-[family-name:var(--font-display)] mb-3",
                  tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
                )}
              >
                {f.title}
              </h3>
              <p
                className={cn(
                  "text-[13.5px] leading-[1.6]",
                  tone === "ink" ? "text-white/60" : "text-[color:var(--color-ink-muted)]",
                )}
              >
                {f.desc}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
