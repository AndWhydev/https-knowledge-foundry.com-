import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import type { ReactNode } from "react";

/** Editorial two-column prose block: caption / body */
export function ProseBlock({
  eyebrow,
  title,
  children,
  variant = "split",
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  variant?: "split" | "single";
}) {
  if (variant === "single") {
    return (
      <Section>
        <Container size="narrow">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <SplitText as="h2" className="text-display-2 mt-5 max-w-[22ch]" stagger={0.05}>
            {title}
          </SplitText>
          <Reveal delay={0.35}>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.7] text-[color:var(--color-ink-soft)] [&_a]:text-[color:var(--color-forge)] [&_a]:underline-offset-4 [&_strong]:text-[color:var(--color-ink)] [&_strong]:font-semibold">
              {children}
            </div>
          </Reveal>
        </Container>
      </Section>
    );
  }
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-10 lg:gap-20">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <SplitText as="h2" className="text-display-2 mt-5 max-w-[22ch]" stagger={0.05}>
              {title}
            </SplitText>
          </div>
          <div className="lg:pt-2">
            <Reveal delay={0.35}>
              <div className="space-y-5 text-[16px] leading-[1.7] text-[color:var(--color-ink-soft)] [&_a]:text-[color:var(--color-forge)] [&_a]:underline-offset-4 [&_strong]:text-[color:var(--color-ink)] [&_strong]:font-semibold">
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
