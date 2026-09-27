import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Landmark, HeartPulse, Zap, Lock } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { TopicHeader } from "@/components/solution/topic-header";
import { CtaBand } from "@/components/solution/cta-band";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Case studies. Knowledge Foundry in regulated enterprise",
  description:
    "Anonymised case studies showing how Knowledge Foundry rebuilds training frameworks for financial services, healthcare, and critical infrastructure operators.",
};

const cases = [
  {
    icon: <Landmark className="h-5 w-5" />,
    sector: "Financial services",
    title: "A tier 1 Australian financial institution",
    programme: "RG146 refresh and AFSL licensee training",
    desc: "Contractor drift and a thematic review finding forced a rebuild that began with the framework, before content could be trusted again.",
    href: "/case-studies/regulated-financial-services",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    sector: "Healthcare",
    title: "A national private hospital operator",
    programme: "Clinical procedure library and credentialing",
    desc: "Four hundred procedures across more than thirty sites, each site quietly diverging. One framework, variance per site modelled explicitly.",
    href: "/case-studies/national-healthcare-operator",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    sector: "Critical infrastructure",
    title: "An Australian critical infrastructure operator",
    programme: "Safety critical operations and competency verification",
    desc: "A post incident review exposed drift between training and behaviour. Hybrid verification replaced pass and click.",
    href: "/case-studies/critical-infrastructure",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Case studies"
        breadcrumb={[{ label: "Case studies", href: "/case-studies" }]}
        title={<>How the Foundry <span className="text-[color:var(--color-forge)]">operates</span> inside regulated enterprise.</>}
        lede="Three anonymised programmes across financial services, healthcare, and critical infrastructure. Different sectors, one pattern. Framework first, content second, evidence throughout."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "See the platform", href: "/platform/framework-intelligence" }}
      />

      <Section>
        <Container>
          <div className="mb-12 flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-[640px]">
              <Eyebrow>Selected engagements</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5">Anonymised by default. Named on request.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lede mt-5">
                  The cases below are written without client identifiers. Named references, board level
                  metrics, and full outcome dossiers are shared under NDA on request during the
                  demonstration process.
                </p>
              </Reveal>
            </div>
            <div className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[color:var(--color-hairline-strong)] bg-white px-4 py-2.5 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)]">
              <Lock className="h-3.5 w-3.5 text-[color:var(--color-forge)]" aria-hidden />
              Named references under NDA
            </div>
          </div>

          <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {cases.map((c) => (
              <RevealItem key={c.href}>
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8 hover:border-[color:var(--color-ink-soft)] transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[color:var(--color-canvas-tint)] text-[color:var(--color-forge)] mb-6">
                    {c.icon}
                  </div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
                    {c.sector}
                  </div>
                  <h3 className="text-[22px] font-[family-name:var(--font-display)] font-semibold tracking-tight mb-2 group-hover:text-[color:var(--color-forge)] transition-colors">
                    {c.title}
                  </h3>
                  <div className="text-[13px] text-[color:var(--color-ink-muted)] mb-4 font-[family-name:var(--font-jetbrains)]">
                    {c.programme}
                  </div>
                  <p className="text-[14.5px] text-[color:var(--color-ink-soft)] leading-[1.6] flex-1">
                    {c.desc}
                  </p>
                  <div className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium">
                    Read the case
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </div>
                </Link>
              </RevealItem>
            ))}

            <RevealItem>
              <div className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-dashed border-[color:var(--color-hairline-strong)] bg-[color:var(--color-canvas-warm)] p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-white text-[color:var(--color-ink-muted)] mb-6 border border-[color:var(--color-hairline)]">
                  <span className="font-[family-name:var(--font-jetbrains)] text-[13px]">04</span>
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-muted)] mb-3">
                  Available
                </div>
                <h3 className="text-[22px] font-[family-name:var(--font-display)] font-semibold tracking-tight mb-3 text-[color:var(--color-ink)]">
                  Your case study could sit here.
                </h3>
                <p className="text-[14.5px] text-[color:var(--color-ink-soft)] leading-[1.6] flex-1">
                  Programmes taken on this year are selected for their difficulty, not their scale. If
                  your subject is regulated, contested, or has a real audit horizon, we would like to
                  see it.
                </p>
                <Link
                  href="/demonstration"
                  className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-forge)] hover:text-[color:var(--color-forge-hot)]"
                >
                  Start a conversation
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </RevealItem>
          </RevealStagger>

          <p className="mt-10 text-[12px] leading-[1.7] text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)] max-w-[720px]">
            Note. Client identities have been withheld. Programme details are described at a level
            sufficient to convey the shape of the engagement. Named references, contract scopes, and
            verified outcome data are made available under mutual NDA during evaluation.
          </p>
        </Container>
      </Section>

      <CtaBand
        eyebrow="See the pattern on your own material"
        title="Bring a subject you already teach."
        lede="Forty five minutes with the Foundry on your source documents. You leave with the framework it produces, and a candid view on whether an engagement here would repay the effort."
      />
    </>
  );
}
