import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
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
                "p-8 relative",
                tone === "ink" ? "bg-[color:var(--color-ink)]" : "bg-white",
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em] text-[color:var(--color-forge)]">
                  STEP {step.n}
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className={cn(
                      "h-3.5 w-3.5 hidden lg:block",
                      tone === "ink" ? "text-white/25" : "text-[color:var(--color-ink-faint)]",
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
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
