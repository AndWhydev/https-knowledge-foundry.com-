import type { Metadata } from "next";
import Link from "next/link";
import {
  Blocks, Compass, Layers, ShieldCheck, GitBranch, FileSearch2,
  Gauge, Scale, ClipboardCheck, ArrowRight, ArrowUpRight, Sparkles,
  BookOpenCheck, Fingerprint, LineChart, CircuitBoard,
} from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroLattice } from "@/components/hero-lattice";
import { Marquee } from "@/components/marquee";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { EditorialStill } from "@/components/editorial-still";
import { HeroVideo } from "@/components/hero-video";

export const metadata: Metadata = {
  title: "Knowledge Foundry — Structured knowledge. Deliberate instruction.",
  description:
    "Knowledge Foundry turns subjects, documents, and requirements into structured learning systems. Reviewable, standards-aligned, and audit-ready — with framework defined before content is written.",
};

const capabilities = [
  { icon: <Compass className="h-5 w-5" />, title: "Framework Intelligence", desc: "Structure the subject before writing about it. Concepts, relationships, and assessment logic first.", href: "/platform/framework-intelligence" },
  { icon: <FileSearch2 className="h-5 w-5" />, title: "Gap Analysis", desc: "Identify what is missing, contradictory, or outdated across your existing knowledge base.", href: "/platform/gap-analysis" },
  { icon: <Layers className="h-5 w-5" />, title: "Remediation", desc: "Close gaps at scale, in-place, with full change history and reviewer approvals.", href: "/platform/remediation" },
  { icon: <GitBranch className="h-5 w-5" />, title: "Knowledge Transformation", desc: "Convert scattered source material into a coherent, versioned knowledge system.", href: "/platform/knowledge-transformation" },
  { icon: <Fingerprint className="h-5 w-5" />, title: "Verification & Trust", desc: "Confirm capability, not just completion. Evidence tied to the underlying framework.", href: "/platform/verification-trust" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Knowledge Governance", desc: "Ownership, review cadences, deprecation, and drift detection built into the system.", href: "/platform/knowledge-governance" },
  { icon: <Scale className="h-5 w-5" />, title: "Standards & Accreditation", desc: "Align to internal policy, sector standards, or accrediting bodies as a first-class output.", href: "/platform/standards-accreditation" },
  { icon: <ClipboardCheck className="h-5 w-5" />, title: "Audit & Evidence", desc: "Every decision traceable. Export-ready evidence packs for regulators and boards.", href: "/platform/audit-evidence" },
];

const programs = [
  { icon: <BookOpenCheck className="h-5 w-5" />, title: "Educational programs", desc: "Subject learning structured for understanding progression.", href: "/programs/educational" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Compliance programs", desc: "Instruction aligned to policies and required behaviours.", href: "/programs/compliance" },
  { icon: <CircuitBoard className="h-5 w-5" />, title: "Product enablement", desc: "Guided learning for tools, equipment, or software.", href: "/programs/product-enablement" },
  { icon: <Blocks className="h-5 w-5" />, title: "Operational procedures", desc: "Repeatable, consistent task instruction.", href: "/programs/operational-procedures" },
  { icon: <Fingerprint className="h-5 w-5" />, title: "Hybrid verification", desc: "Learning combined with capability confirmation.", href: "/programs/hybrid-verification" },
];

const industries = [
  { title: "Financial services", href: "/industries/financial-services", note: "APRA, ASIC, licensing, RG146" },
  { title: "Healthcare & life sciences", href: "/industries/healthcare-life-sciences", note: "Clinical governance, TGA, credentialing" },
  { title: "Energy & resources", href: "/industries/energy-resources", note: "Safety-critical operations, ISO 45001" },
  { title: "Government & defence", href: "/industries/government-defence", note: "Cleared, audited, evidenced" },
  { title: "Professional services", href: "/industries/professional-services", note: "CPD, firm-wide technical uplift" },
  { title: "Higher education", href: "/industries/higher-education", note: "Accreditation and outcome mapping" },
];

const process = [
  { n: "01", title: "Interpret", desc: "The system reads your source material — subjects, documents, policies, standards — and extracts the requirements that must be met." },
  { n: "02", title: "Structure", desc: "A framework is built. Concepts, relationships, progression, and assessment points are laid down before a single line of content is written." },
  { n: "03", title: "Produce", desc: "Instruction, activities, and verification are generated to match the framework — not the other way around. Every element traces back to a requirement." },
  { n: "04", title: "Deliver", desc: "The program is reviewable, standards-aligned, and ready for deployment. Full audit trail, exportable evidence, ongoing governance." },
];

const proofPoints = [
  "ISO 27001 aligned",
  "WCAG 2.1 AA",
  "Data residency: Australia",
  "SOC 2 Type II in progress",
  "APRA CPS 234 aware",
  "GDPR ready",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section spacing="loose" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-lattice opacity-[0.5]" aria-hidden />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] -z-10 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,103,4,0.08),transparent_60%)]" />
        </div>

        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <Eyebrow>Structured knowledge · Deliberate instruction</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-display-1 mt-6 max-w-[18ch]">
                  Define what should exist,{" "}
                  <span className="text-[color:var(--color-forge)]">before writing what does.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lede mt-7 max-w-[52ch]">
                  Knowledge Foundry turns subjects, documents, and requirements into structured learning
                  systems. Reviewable, standards-aligned, and ready for delivery — with framework defined
                  before content is written.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="/demonstration" variant="primary" size="lg" arrow>
                    Request a demonstration
                  </Button>
                  <Button href="/platform/see-it-work" variant="secondary" size="lg">
                    See it work
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-10 pt-8 border-t border-[color:var(--color-hairline)] grid grid-cols-3 gap-8 max-w-lg">
                  <Stat value="4-step" label="Interpret → Structure → Produce → Deliver" />
                  <Stat value="0" label="Content written before structure is defined" />
                  <Stat value="100%" label="Traceable to requirement" />
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="relative">
              <HeroLattice className="w-full aspect-square max-w-[520px] mx-auto" />
              <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none mix-blend-multiply hidden lg:block" aria-hidden>
                <HeroVideo src="/media/hero-loop.mp4" className="rounded-[var(--radius-xl)]" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-[color:var(--color-hairline)] px-4 py-2 shadow-[var(--shadow-soft)]">
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-forge)]" style={{ animation: "forge-glow 2s ease-in-out infinite" }} />
                <span className="text-[12px] font-medium tracking-tight">Framework live · Content generating</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* PROOF STRIP */}
      <Section spacing="compact" className="border-y border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-warm)]">
        <Container>
          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)]">
                Built for assurance
              </div>
            </div>
            <Marquee
              duration={35}
              items={proofPoints.map((p) => (
                <span key={p} className="text-[13px] font-medium text-[color:var(--color-ink-soft)] tracking-tight">
                  {p}
                </span>
              ))}
            />
          </div>
        </Container>
      </Section>

      {/* THE PROBLEM */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-20 items-start">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5 max-w-[18ch]">
                  Training that fails an audit was doomed before it was written.
                </h2>
              </Reveal>
            </div>
            <div className="lg:pt-3">
              <Reveal delay={0.1}>
                <p className="text-lede mb-6">
                  Most training fails because content is written before structure is defined.
                  The result is uneven coverage, silent gaps, drift from policy, and evidence
                  that does not stand up when someone asks how you know.
                </p>
                <p className="text-lede">
                  The difficulty is not writing content. The difficulty is knowing what should
                  exist before writing begins.
                </p>
              </Reveal>
              <RevealStagger className="mt-10 grid sm:grid-cols-3 gap-6" as="ul">
                {[
                  { stat: "68%", desc: "of compliance findings trace back to a training or knowledge gap." },
                  { stat: "3–7×", desc: "cost of remediating knowledge after an incident vs building it correctly." },
                  { stat: "Weeks", desc: "typical delay between a policy change and its arrival in training." },
                ].map((s) => (
                  <RevealItem key={s.stat} as="li" className="border-t border-[color:var(--color-hairline-strong)] pt-4">
                    <div className="text-[32px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)]">
                      {s.stat}
                    </div>
                    <div className="mt-2 text-[13px] leading-[1.55] text-[color:var(--color-ink-muted)]">
                      {s.desc}
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
              <p className="text-[11px] text-[color:var(--color-ink-faint)] mt-3 leading-relaxed">
                Illustrative ranges compiled from published industry reports; specific figures vary by sector and are provided on request.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* THE SYSTEM — 4 steps */}
      <Section className="bg-[color:var(--color-ink)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
        <Container>
          <div className="max-w-[720px] mb-16">
            <Eyebrow>The system</Eyebrow>
            <Reveal>
              <h2 className="text-display-2 mt-5 text-white">
                Four moves, in the only order that works.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lede mt-6 text-white/70">
                The Foundry maps the subject, defines the framework, and only then produces the
                instruction. Every element traces back to a requirement — so the finished program
                is not only correct, it is provably so.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-[var(--radius-lg)] overflow-hidden">
            {process.map((step, i) => (
              <RevealItem key={step.n} className="bg-[color:var(--color-ink)] p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em] text-[color:var(--color-forge)]">
                    STEP {step.n}
                  </div>
                  {i < process.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-white/25 hidden lg:block" aria-hidden />
                  )}
                </div>
                <h3 className="text-[22px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-white/60">{step.desc}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* ANATOMY — editorial still */}
      <Section className="bg-[color:var(--color-canvas-warm)]" spacing="loose">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Anatomy of a knowledge system</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5 max-w-[16ch]">
                  Concepts. Relationships. Evidence.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lede mt-6 max-w-[46ch]">
                  Each cube is a concept. Each line is a relationship. The glowing
                  nodes are the points at which capability is verified. Nothing in a
                  Foundry-built program exists without a place on this diagram.
                </p>
              </Reveal>
              <RevealStagger className="mt-8 grid grid-cols-2 gap-4 max-w-md" as="ul">
                {[
                  { k: "Concepts", v: "Named, deduplicated, cited" },
                  { k: "Relationships", v: "Typed and explicit" },
                  { k: "Assessments", v: "Framework-anchored" },
                  { k: "Provenance", v: "Every node, every version" },
                ].map((r) => (
                  <RevealItem as="li" key={r.k} className="border-t border-[color:var(--color-hairline-strong)] pt-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.1em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)]">{r.k}</div>
                    <div className="text-[13.5px] text-[color:var(--color-ink-soft)] mt-1">{r.v}</div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
            <Reveal delay={0.1}>
              <EditorialStill src="editorial-blueprint.png" className="shadow-[var(--shadow-lifted)]" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CAPABILITIES GRID */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-[640px]">
              <Eyebrow>The Platform</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5">
                  Eight capabilities. One coherent system.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]"
              >
                <span className="border-b border-current pb-0.5">Explore the platform</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c) => (
              <RevealItem key={c.title}>
                <Card
                  href={c.href}
                  icon={c.icon}
                  title={c.title}
                  description={c.desc}
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* PROGRAMS BY OUTCOME */}
      <Section className="bg-[color:var(--color-canvas-warm)]">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>By outcome</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5">
                  Purpose-built for what you are actually accountable for.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lede mt-6">
                  Not another LMS. Not another content generator. A system that produces the
                  program the outcome requires — with the evidence to prove it did.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Button href="/programs" variant="secondary" size="md" arrow className="mt-8">
                  All programs
                </Button>
              </Reveal>
            </div>
            <RevealStagger className="divide-y divide-[color:var(--color-hairline-strong)] border-y border-[color:var(--color-hairline-strong)]">
              {programs.map((p) => (
                <RevealItem key={p.title} as="div">
                  <Link
                    href={p.href}
                    className="group flex items-start gap-6 py-7 hover:bg-white/40 transition-colors -mx-2 px-2 rounded"
                  >
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-white border border-[color:var(--color-hairline)] text-[color:var(--color-forge)]">
                      {p.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[20px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] text-[color:var(--color-ink-muted)] leading-[1.55]">
                        {p.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 mt-2 text-[color:var(--color-ink-faint)] group-hover:text-[color:var(--color-forge)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden />
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-[640px]">
              <Eyebrow>By industry</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5">
                  Regulated, evidenced, audit-ready in your sector.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link
                href="/industries"
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]"
              >
                <span className="border-b border-current pb-0.5">All industries</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <RevealItem key={ind.title}>
                <Link
                  href={ind.href}
                  className="group block relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-7 h-full hover:border-[color:var(--color-ink-soft)] transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(239,103,4,0.05),transparent_60%)]" aria-hidden />
                  <div className="relative">
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
                      {ind.note}
                    </div>
                    <h3 className="text-[22px] font-[family-name:var(--font-display)] font-semibold tracking-tight">
                      {ind.title}
                    </h3>
                    <div className="mt-16 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors">
                      View sector view
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* DIFFERENTIATION */}
      <Section spacing="loose" className="bg-[color:var(--color-ink)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
        <Container>
          <div className="max-w-[800px] mb-16">
            <Eyebrow>Not an LMS. Not a content generator.</Eyebrow>
            <Reveal>
              <h2 className="text-display-2 mt-5 text-white">
                A knowledge system, not a document with a login.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-[var(--radius-lg)] overflow-hidden">
            {[
              {
                icon: <Gauge className="h-5 w-5" />,
                title: "Structure before content",
                desc: "Traditional authoring produces documents that hope to cover a subject. The Foundry defines what must be covered — and only then writes.",
              },
              {
                icon: <LineChart className="h-5 w-5" />,
                title: "Verification, not completion",
                desc: "A person who clicked through a module has clicked. A person whose capability the system has verified is competent. These are not the same event.",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Evidence on demand",
                desc: "Every decision, every review, every version, exportable. When the regulator asks how you know, the answer is a file.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="bg-[color:var(--color-ink)] p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-white/6 text-[color:var(--color-forge)] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[20px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-white/60">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-hairline)] bg-gradient-to-br from-white to-[color:var(--color-canvas-warm)] p-10 md:p-16">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(239,103,4,0.12),transparent_70%)]" aria-hidden />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <Eyebrow>Ready to see it?</Eyebrow>
                <Reveal>
                  <h2 className="text-display-2 mt-5 max-w-[20ch]">
                    Bring a subject. Leave with a framework.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-lede mt-5 max-w-[52ch]">
                    A 45-minute working session with our team on a real subject or programme you own.
                    You see the system operate on your material — and you keep the framework it produces.
                  </p>
                </Reveal>
              </div>
              <div className="md:justify-self-end">
                <Button href="/demonstration" variant="primary" size="lg" arrow>
                  Request a demonstration
                </Button>
                <p className="mt-4 text-[12px] text-[color:var(--color-ink-faint)] leading-relaxed max-w-[26ch]">
                  We reply within one business day.
                  No sales sequence, no marketing automation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[26px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] leading-none">
        {value}
      </div>
      <div className="mt-2 text-[11.5px] leading-[1.45] text-[color:var(--color-ink-muted)]">
        {label}
      </div>
    </div>
  );
}
