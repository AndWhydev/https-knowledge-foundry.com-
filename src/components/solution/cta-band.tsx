import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaBand({
  eyebrow = "Ready to see it?",
  title = "Bring a subject. Leave with a framework.",
  lede = "A 45-minute working session with our team on a real subject or programme you own. You see the system operate on your material — and you keep the framework it produces.",
  ctaLabel = "Request a demonstration",
  ctaHref = "/demonstration",
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-hairline)] bg-gradient-to-br from-white to-[color:var(--color-canvas-warm)] p-10 md:p-16">
          <div
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(239,103,4,0.12),transparent_70%)]"
            aria-hidden
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5 max-w-[20ch]">{title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lede mt-5 max-w-[52ch]">{lede}</p>
              </Reveal>
            </div>
            <div className="md:justify-self-end">
              <Button href={ctaHref} variant="primary" size="lg" arrow>
                {ctaLabel}
              </Button>
              <p className="mt-4 text-[12px] text-[color:var(--color-ink-faint)] leading-relaxed max-w-[26ch]">
                We reply within one business day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
