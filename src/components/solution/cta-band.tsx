import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { Magnetic } from "@/components/motion/magnetic";
import { BandVideo } from "@/components/motion/band-video";

export function CtaBand({
  eyebrow = "Ready to see it?",
  title = "Bring a subject. Leave with a framework.",
  lede = "A 45-minute working session with our team on a real subject or program you own. You see the system operate on your material, and you keep the framework it produces.",
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
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-[#0d0f14] text-white p-10 md:p-16">
          <BandVideo src="/media/grid-loop.mp4" poster="/media/grid-loop.jpg" />
          {/* Legibility: dark on the copy, open toward the button */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] via-[#0d0f14]/80 to-[#0d0f14]/40" aria-hidden />
          <div
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(239,103,4,0.22),transparent_70%)]"
            aria-hidden
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5 max-w-[20ch] text-white" stagger={0.05}>
                {title}
              </SplitText>
              <Reveal delay={0.35}>
                <p className="text-lede mt-5 max-w-[52ch] text-white/70">{lede}</p>
              </Reveal>
            </div>
            <div className="md:justify-self-end">
              <Magnetic strength={0.24}>
                <Button href={ctaHref} variant="forge" size="lg" arrow>
                  {ctaLabel}
                </Button>
              </Magnetic>
              <p className="mt-4 text-[12px] text-white/50 leading-relaxed max-w-[26ch]">
                We reply within one business day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
