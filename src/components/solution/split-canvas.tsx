import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";
import { AnimatedEditorial } from "@/components/motion/animated-editorial";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SrcKey = Parameters<typeof AnimatedEditorial>[0]["src"];

/**
 * Split canvas section. Editorial image on one side, list of numbered points
 * on the other. Alternative to FeatureGrid.
 */
export function SplitCanvas({
  eyebrow,
  title,
  lede,
  image,
  points,
  imageOn = "left",
  tone = "warm",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image: SrcKey;
  points: { title: string; desc: ReactNode }[];
  imageOn?: "left" | "right";
  tone?: "canvas" | "warm" | "ink";
}) {
  const imageBlock = (
    <Reveal className="relative">
      <AnimatedEditorial src={image} parallax={25} float={false} />
    </Reveal>
  );

  const contentBlock = (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <SplitText as="h2" className={cn("text-display-2 mt-5 max-w-[20ch]", tone === "ink" && "text-white")} stagger={0.05}>
        {title}
      </SplitText>
      {lede && (
        <Reveal delay={0.35}>
          <p className={cn("mt-6 text-[16.5px] leading-[1.65] max-w-[46ch]", tone === "ink" ? "text-white/70" : "text-[color:var(--color-ink-muted)]")}>
            {lede}
          </p>
        </Reveal>
      )}
      <RevealStagger className="mt-10 space-y-6">
        {points.map((p, i) => (
          <RevealItem
            key={i}
            className={cn("flex gap-5 items-start pt-5 border-t",
              tone === "ink" ? "border-white/12" : "border-[color:var(--color-hairline-strong)]",
            )}
          >
            <span className={cn(
              "font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.14em] pt-0.5 min-w-[24px]",
              "text-[color:var(--color-forge)]",
            )}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={cn(
                "text-[17px] leading-[1.3] font-semibold tracking-tight font-[family-name:var(--font-display)]",
                tone === "ink" ? "text-white" : "text-[color:var(--color-ink)]",
              )}>
                {p.title}
              </h3>
              <p className={cn(
                "mt-2 text-[14px] leading-[1.6]",
                tone === "ink" ? "text-white/65" : "text-[color:var(--color-ink-muted)]",
              )}>
                {p.desc}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  );

  return (
    <Section
      className={cn(
        tone === "warm" && "bg-[color:var(--color-canvas-warm)]",
        tone === "ink" && "bg-[color:var(--color-ink)] text-white",
      )}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {imageOn === "left" ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}

export function CalloutBanner({
  quote,
  attribution,
  cta,
  tone = "ink",
}: {
  quote: string;
  attribution?: string;
  cta?: { label: string; href: string };
  tone?: "ink" | "warm";
}) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden",
        tone === "ink" && "bg-[color:var(--color-ink)] text-white",
        tone === "warm" && "bg-[color:var(--color-canvas-warm)]",
      )}
    >
      <Container size="narrow">
        <div className="text-center">
          <SplitText as="h2" className={cn("text-[32px] md:text-[42px] leading-[1.15] font-[family-name:var(--font-display)] font-semibold tracking-[-0.025em] max-w-[26ch] mx-auto", tone === "ink" && "text-white")} stagger={0.06}>
            {quote}
          </SplitText>
          {attribution && (
            <div className={cn(
              "mt-6 text-[11.5px] uppercase tracking-[0.16em] font-[family-name:var(--font-jetbrains)]",
              tone === "ink" ? "text-white/50" : "text-[color:var(--color-ink-faint)]",
            )}>
              {attribution}
            </div>
          )}
          {cta && (
            <Reveal delay={0.4}>
              <Link
                href={cta.href}
                className={cn(
                  "group mt-10 inline-flex items-center gap-2 text-[14px] font-medium border-b pb-0.5",
                  tone === "ink"
                    ? "text-white border-white hover:text-[color:var(--color-forge)] hover:border-[color:var(--color-forge)]"
                    : "text-[color:var(--color-ink)] border-[color:var(--color-ink)] hover:text-[color:var(--color-forge)] hover:border-[color:var(--color-forge)]",
                )}
              >
                {cta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>
  );
}
