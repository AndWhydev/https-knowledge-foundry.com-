import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { StepsRail } from "./steps-rail";
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

        <StepsRail steps={steps} tone={tone} />
      </Container>
    </Section>
  );
}
