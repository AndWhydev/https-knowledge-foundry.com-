import { Container, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { Magnetic } from "@/components/motion/magnetic";
import { CursorSpotlight } from "@/components/motion/cursor-spotlight";
import { FloatingCubes } from "@/components/motion/floating-cubes";
import type { ReactNode } from "react";

export function TopicHeader({
  eyebrow,
  title,
  lede,
  primaryCta = { label: "Request a demonstration", href: "/demonstration" },
  secondaryCta,
  breadcrumb,
  visual,
}: {
  eyebrow: string;
  title: string | ReactNode;
  lede: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  breadcrumb?: { label: string; href: string }[];
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-14 md:pt-24 pb-16 md:pb-24">
      <div className="absolute inset-0 -z-10 grid-lattice opacity-40" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] -z-10 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,103,4,0.06),transparent_60%)]" />
      </div>
      <CursorSpotlight size={560} color="rgba(239,103,4,0.08)" className="hidden md:block" />
      <FloatingCubes className="absolute inset-0 -z-10 pointer-events-none hidden md:block opacity-70" />
      <Container>
        {breadcrumb && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[12px] font-medium text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)]">
                {breadcrumb.map((b, i) => (
                  <li key={b.href} className="flex items-center gap-2">
                    <a href={b.href} className="hover:text-[color:var(--color-forge)] transition-colors uppercase tracking-[0.1em]">
                      {b.label}
                    </a>
                    {i < breadcrumb.length - 1 && <span aria-hidden>/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}
        <div className={visual ? "grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center" : ""}>
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <SplitText as="h1" className="text-display-1 mt-6 max-w-[22ch]" delay={0.08} stagger={0.055}>
              {title}
            </SplitText>
            <Reveal delay={0.45}>
              <p className="text-lede mt-7 max-w-[58ch]">{lede}</p>
            </Reveal>
            <Reveal delay={0.55}>
              <div className="mt-9 flex flex-wrap gap-3 items-center">
                <Magnetic strength={0.22}>
                  <Button href={primaryCta.href} variant="primary" size="lg" arrow>
                    {primaryCta.label}
                  </Button>
                </Magnetic>
                {secondaryCta && (
                  <Magnetic strength={0.14}>
                    <Button href={secondaryCta.href} variant="secondary" size="lg">
                      {secondaryCta.label}
                    </Button>
                  </Magnetic>
                )}
              </div>
            </Reveal>
          </div>
          {visual && (
            <Reveal delay={0.2} className="relative">
              {visual}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
