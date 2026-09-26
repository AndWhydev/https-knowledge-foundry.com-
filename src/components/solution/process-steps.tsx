import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type Step = {
  n: string;
  title: string;
  desc: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  lede,
  steps,
  tone = "ink",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  steps: Step[];
  tone?: "ink" | "canvas";
}) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden",
        tone === "ink" && "bg-[color:var(--color-ink)] text-white",
      )}
    >
      {tone === "ink" && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      )}
      <Container>
        <div className="max-w-[720px] mb-14">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <SplitText as="h2" className={cn("text-display-2 mt-5", tone === "ink" && "text-white")} stagger={0.05}>
            {title}
          </SplitText>
          {lede && (
            <Reveal delay={0.35}>
              <p className={cn("text-lede mt-5", tone === "ink" && "text-white/70")}>{lede}</p>
            </Reveal>
          )}
        </div>

        <RevealStagger
          className={cn(
            "grid gap-px rounded-[var(--radius-lg)] overflow-hidden",
            steps.length === 3 && "md:grid-cols-3",
            steps.length === 4 && "md:grid-cols-2 lg:grid-cols-4",
            steps.length === 5 && "md:grid-cols-3 lg:grid-cols-5",
            tone === "ink" ? "bg-white/10" : "bg-[color:var(--color-hairline)]",
          )}
        >
          {steps.map((step, i) => (
            <RevealItem
              key={step.n}
              className={cn(
                "group p-8 relative overflow-hidden transition-colors",
                tone === "ink" ? "bg-[color:var(--color-ink)] hover:bg-[color:var(--color-ink-soft)]/40" : "bg-white hover:bg-[color:var(--color-canvas-warm)]",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  tone === "ink"
                    ? "bg-[radial-gradient(circle_at_top_left,rgba(239,103,4,0.10),transparent_60%)]"
                    : "bg-[radial-gradient(circle_at_top_left,rgba(239,103,4,0.06),transparent_60%)]",
                )}
                aria-hidden
              />
              {/* Animated seam */}
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-[2px] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 ease-out",
                  "bg-gradient-to-b from-[color:var(--color-forge)] via-[color:var(--color-forge)]/50 to-transparent",
                )}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em] text-[color:var(--color-forge)]">
                    STEP {step.n}
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight
                      className={cn(
                        "h-3.5 w-3.5 hidden lg:block transition-transform duration-300 group-hover:translate-x-1",
                        tone === "ink" ? "text-white/25 group-hover:text-[color:var(--color-forge)]" : "text-[color:var(--color-ink-faint)] group-hover:text-[color:var(--color-forge)]",
                      )}
                      aria-hidden
                    />
                  )}
                </div>
                <h3
                  className={cn(
                    "text-[20px] font-[family-name:var(--font-display)] font-semibold tracking-tight mb-3",
                    tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "text-[13.5px] leading-[1.6]",
                    tone === "ink" ? "text-white/60" : "text-[color:var(--color-ink-muted)]",
                  )}
                >
                  {step.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
