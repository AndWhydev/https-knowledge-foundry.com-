import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { TiltCard } from "@/components/motion/tilt-card";

export type RelatedItem = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
};

export function Related({
  eyebrow = "Adjacent capabilities",
  title = "Where this fits in the system.",
  items,
}: {
  eyebrow?: string;
  title?: string;
  items: RelatedItem[];
}) {
  return (
    <Section className="bg-[color:var(--color-canvas-warm)]">
      <Container>
        <div className="mb-12 max-w-[640px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SplitText as="h2" className="text-display-2 mt-5" stagger={0.05}>
            {title}
          </SplitText>
        </div>
        <RevealStagger className="grid md:grid-cols-3 gap-4">
          {items.map((item) => (
            <RevealItem key={item.href}>
              <TiltCard maxTilt={3}>
                <Link
                  href={item.href}
                  className="group block h-full rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-7 hover:border-[color:var(--color-ink-soft)] transition-all duration-300"
                >
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
                    {item.eyebrow}
                  </div>
                  <h3 className="text-[19px] font-[family-name:var(--font-display)] font-semibold tracking-tight mb-3 group-hover:text-[color:var(--color-forge)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[color:var(--color-ink-muted)] leading-[1.6]">
                    {item.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium">
                    Continue
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </div>
                </Link>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
