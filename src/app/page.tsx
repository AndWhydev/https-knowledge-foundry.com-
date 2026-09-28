import type { Metadata } from "next";
import Link from "next/link";
import {
  Blocks, Compass, Layers, ShieldCheck, GitBranch, FileSearch2,
  Gauge, Scale, ClipboardCheck, ArrowRight, ArrowUpRight, Sparkles,
  BookOpenCheck, Fingerprint, LineChart, CircuitBoard,
} from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroLattice3D } from "@/components/hero-lattice-3d";
import { HeroCanvas } from "@/components/hero-canvas";
import { Marquee } from "@/components/marquee";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { AnimatedEditorial } from "@/components/motion/animated-editorial";
import { HeroVideo } from "@/components/hero-video";
import { SplitText, Highlight } from "@/components/motion/split-text";
import { Magnetic } from "@/components/motion/magnetic";
import { CountUp } from "@/components/motion/count-up";
import { TiltCard } from "@/components/motion/tilt-card";
import { CursorSpotlight } from "@/components/motion/cursor-spotlight";
import { FloatingCubes } from "@/components/motion/floating-cubes";
import { CompactProcess } from "@/components/compact-process";
import { BentoOutputs } from "@/components/bento-outputs";
import { FrameworkDemo } from "@/components/framework-demo";
import { FAQ as HomeFAQ } from "@/components/solution/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Knowledge Foundry. Structured knowledge. Deliberate instruction.",
  description:
    "Knowledge Foundry turns subjects, documents, and requirements into structured learning systems. Reviewable. Aligned to your standards. Ready for audit. The framework is defined before any content is written.",
};

const capabilities = [
  { icon: <Compass className="h-5 w-5" />, title: "Framework Intelligence", desc: "Structure the subject before writing anything about it. Concepts, relationships, and assessment logic come first.", href: "/platform/framework-intelligence" },
  { icon: <FileSearch2 className="h-5 w-5" />, title: "Gap Analysis", desc: "Identify what is missing, contradictory, or outdated across your existing knowledge base.", href: "/platform/gap-analysis" },
  { icon: <Layers className="h-5 w-5" />, title: "Remediation", desc: "Close gaps at scale, in place, with full change history and reviewer approvals.", href: "/platform/remediation" },
  { icon: <GitBranch className="h-5 w-5" />, title: "Knowledge Transformation", desc: "Convert scattered source material into a coherent, versioned knowledge system.", href: "/platform/knowledge-transformation" },
  { icon: <Fingerprint className="h-5 w-5" />, title: "Verification & Trust", desc: "Confirm capability, not just completion. Evidence is tied to the underlying framework.", href: "/platform/verification-trust" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Knowledge Governance", desc: "Ownership, review cadences, deprecation, and drift detection are built into the system.", href: "/platform/knowledge-governance" },
  { icon: <Scale className="h-5 w-5" />, title: "Standards & Accreditation", desc: "Alignment to internal policy, sector standards, or accrediting bodies is a first class output.", href: "/platform/standards-accreditation" },
  { icon: <ClipboardCheck className="h-5 w-5" />, title: "Audit & Evidence", desc: "Every decision is traceable. Evidence packs export cleanly for regulators and boards.", href: "/platform/audit-evidence" },
];

const programs = [
  { icon: <BookOpenCheck className="h-5 w-5" />, title: "Educational programs", desc: "Subject learning structured for progression in understanding.", href: "/programs/educational" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Compliance programs", desc: "Instruction aligned to policies and the behaviours they require.", href: "/programs/compliance" },
  { icon: <CircuitBoard className="h-5 w-5" />, title: "Product enablement", desc: "Guided learning for tools, equipment, or software.", href: "/programs/product-enablement" },
  { icon: <Blocks className="h-5 w-5" />, title: "Operational procedures", desc: "Task instruction that is repeatable and consistent.", href: "/programs/operational-procedures" },
  { icon: <Fingerprint className="h-5 w-5" />, title: "Hybrid verification", desc: "Learning combined with confirmation of capability.", href: "/programs/hybrid-verification" },
];

const industries = [
  { title: "Financial services", href: "/industries/financial-services", note: "APRA, ASIC, licensing, RG146" },
  { title: "Healthcare & life sciences", href: "/industries/healthcare-life-sciences", note: "Clinical governance, TGA, credentialing" },
  { title: "Energy & resources", href: "/industries/energy-resources", note: "Safety critical operations, ISO 45001" },
  { title: "Government & defence", href: "/industries/government-defence", note: "Cleared, audited, evidenced" },
  { title: "Professional services", href: "/industries/professional-services", note: "CPD, technical uplift across the firm" },
  { title: "Higher education", href: "/industries/higher-education", note: "Accreditation and outcome mapping" },
];

const process = [
  { n: "01", title: "Interpret", desc: "The system reads your source material. Subjects, documents, policies, and standards. It extracts the requirements that must be met." },
  { n: "02", title: "Structure", desc: "A framework is built. Concepts, relationships, progression, and assessment points are laid down before a single line of content is written." },
  { n: "03", title: "Produce", desc: "Instruction, activities, and verification are generated to match the framework rather than the other way around. Each element traces back to a requirement." },
  { n: "04", title: "Deliver", desc: "The program is reviewable, aligned to your standards, and ready for deployment. Full audit trail, exportable evidence, ongoing governance." },
];

const proofPoints = [
  "ISO 27001 aligned",
  "WCAG 2.1 AA",
  "Data residency: Australia",
  "SOC 2 Type II in progress",
  "APRA CPS 234 aware",
  "GDPR ready",
];

const homeFaqItems = [
  {
    q: "Are you a replacement for our LMS?",
    a: "No. The Foundry sits upstream of your LMS. It produces the structured framework and the instruction that runs inside the LMS you already use. If you need us to deliver the runtime as well, we can, but replacing an LMS is not what we sell.",
  },
  {
    q: "Who owns the framework once it is built?",
    a: "You do. The framework, every version of it, and the evidence of every review, all belong to your organisation. If you leave the platform, you leave with the framework. That commitment is in the master services agreement, not just the pitch deck.",
  },
  {
    q: "How does this differ from an AI content generator?",
    a: "AI generators produce content that hopes to cover a subject. The Foundry defines what must be covered, in what order, and how it is verified, before content is generated at all. The framework is the object of record. Content is downstream of it, and traceable to it.",
  },
  {
    q: "What sits under review, and by whom?",
    a: "Each framework proposal is reviewed and approved by a human owner in your organisation before any content is generated. Each content asset carries a review chain. Nothing ships without a signed approval, and every signature is exportable.",
  },
  {
    q: "How long is the first commercial commitment?",
    a: "The initial framework build is delivered on a fixed scope and fixed price, typically 4 to 8 weeks depending on the subject. There is no multi year commitment to begin. Pilot and platform engagements are annual and cancellable at renewal.",
  },
  {
    q: "Where is our data held and who can access it?",
    a: "Australian data residency by default, AWS Sydney. Encryption at rest and in transit. Access is scoped to your project team via SSO. Full detail lives in the trust centre, including the subprocessor list and DPA.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — dark, interactive, WebGL-tier canvas */}
      <section className="relative overflow-hidden bg-[#0d0f14] text-white pt-12 md:pt-28 pb-20 md:pb-36 lg:min-h-[calc(100vh-72px)] flex items-center">
        <HeroCanvas />
        {/* Bottom fade to page bg */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" aria-hidden />

        <Container className="relative">
          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] backdrop-blur px-3 py-1.5 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-forge)]" style={{ animation: "forge-glow 2s ease-in-out infinite" }} />
                  <span className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.14em] text-white/70">
                    STRUCTURED KNOWLEDGE · DELIBERATE INSTRUCTION
                  </span>
                </div>
              </Reveal>
              <SplitText
                as="h1"
                className="text-display-1 max-w-[18ch] text-white [text-wrap:balance]"
                delay={0.1}
              >
                Define what should exist,{" "}
                <Highlight className="text-[color:var(--color-forge)]">
                  before writing what does.
                </Highlight>
              </SplitText>
              <Reveal delay={0.55}>
                <p className="text-lede mt-7 max-w-[52ch] text-white/70">
                  Knowledge Foundry turns subjects, documents, and requirements into
                  structured learning systems. Reviewable. Aligned to your standards.
                  Ready for audit. The framework is defined before any content is written.
                </p>
              </Reveal>
              <Reveal delay={0.7}>
                <div className="mt-9 flex flex-wrap gap-3 items-center">
                  <Magnetic strength={0.22}>
                    <Button href="/demonstration" variant="forge" size="lg" arrow>
                      Request a demonstration
                    </Button>
                  </Magnetic>
                  <Magnetic strength={0.14}>
                    <Link
                      href="/platform/see-it-work"
                      className="group inline-flex items-center gap-2 h-[52px] px-6 rounded-[var(--radius-md)] text-[15px] font-medium text-white/85 border border-white/12 hover:border-white/25 hover:text-white transition-colors backdrop-blur"
                    >
                      See it work
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
              <Reveal delay={0.85}>
                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
                  <DarkStat value={4} suffix="-step" label="Interpret → Structure → Produce → Deliver" />
                  <DarkStat value={0} label="Content written before structure is defined" />
                  <DarkStat value={100} suffix="%" label="Traceable to requirement" />
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="relative hidden lg:block">
              <HeroLattice3D className="w-full aspect-square max-w-[540px] mx-auto" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FRAMEWORK DEMO — live scripted walkthrough */}
      <div id="demo">
        <FrameworkDemo />
      </div>

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
      <Section className="relative overflow-hidden">
        <CursorSpotlight size={520} color="rgba(239,103,4,0.06)" className="hidden lg:block" />
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-20 items-start">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5 max-w-[18ch]" stagger={0.045}>
                Training that fails an audit was doomed before it was written.
              </SplitText>
            </div>
            <div className="lg:pt-3">
              <Reveal delay={0.1}>
                <p className="text-lede mb-6">
                  Most training fails because content is written before structure is defined.
                  The result is uneven coverage, silent gaps, drift from policy, and evidence
                  that does not stand up when someone asks how you know.
                </p>
                <p className="text-lede">
                  The difficulty is not writing content. It is knowing what should exist
                  before writing begins.
                </p>
              </Reveal>
              <RevealStagger className="mt-10 grid sm:grid-cols-3 gap-6" as="ul">
                {[
                  { stat: 68, suffix: "%", desc: "of compliance findings trace back to a training or knowledge gap." },
                  { stat: 5, suffix: "×", desc: "typical cost of remediating knowledge after an incident vs building it correctly." },
                  { stat: 6, suffix: " wks", desc: "typical delay between a policy change and its arrival in training." },
                ].map((s) => (
                  <RevealItem key={s.desc} as="li" className="border-t border-[color:var(--color-hairline-strong)] pt-4">
                    <div className="text-[36px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] leading-none">
                      <CountUp value={s.stat} suffix={s.suffix} duration={1.8} />
                    </div>
                    <div className="mt-3 text-[13px] leading-[1.55] text-[color:var(--color-ink-muted)]">
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

      {/* THE SYSTEM — compact interactive process */}
      <div id="system">
        <CompactProcess />
      </div>

      {/* CINEMATIC LATTICE — Higgsfield video showcase */}
      <section className="relative overflow-hidden bg-[color:var(--color-ink)] text-white py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Framework, in motion</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5 text-white max-w-[16ch]" stagger={0.05}>
                Structure that assembles itself, in the order it must.
              </SplitText>
              <Reveal delay={0.35}>
                <p className="text-lede mt-6 text-white/70 max-w-[46ch]">
                  Concepts seat into place. Relationships light up. The framework
                  is the artefact you keep. Reviewable, versioned, exportable.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="mt-8 flex flex-wrap gap-3 items-center">
                  <Magnetic strength={0.2}>
                    <Button href="/platform/framework-intelligence" variant="forge" size="md" arrow>
                      Framework Intelligence
                    </Button>
                  </Magnetic>
                  <Link
                    href="/platform/see-it-work"
                    className="inline-flex items-center py-3 text-[14px] font-medium text-white/70 hover:text-white transition-colors"
                  >
                    See it work →
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="relative">
              <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                  poster="/media/editorial-blueprint.png"
                >
                  <source src="/media/lattice-loop.mp4" type="video/mp4" />
                </video>
                {/* Corner marks */}
                {[
                  "top-3 left-3 border-t-2 border-l-2",
                  "top-3 right-3 border-t-2 border-r-2",
                  "bottom-3 left-3 border-b-2 border-l-2",
                  "bottom-3 right-3 border-b-2 border-r-2",
                ].map((pos, i) => (
                  <span
                    key={i}
                    aria-hidden
                    className={`absolute w-3.5 h-3.5 border-[color:var(--color-forge)] ${pos}`}
                  />
                ))}
                {/* Status pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/70 backdrop-blur border border-white/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-forge)]" style={{ animation: "forge-glow 2s ease-in-out infinite" }} />
                  <span className="text-[11px] font-medium tracking-tight text-white/80">Live · Framework assembling</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CLIENT'S SYSTEM DIAGRAM — the authoritative product story */}
      <Section spacing="loose" className="relative overflow-hidden">
        <Container>
          <div className="max-w-[640px] mb-12">
            <Eyebrow>The system, top to bottom</Eyebrow>
            <SplitText as="h2" className="text-display-2 mt-5 max-w-[18ch]" stagger={0.05}>
              Inputs on the left. Evidence on the right. Structure in between.
            </SplitText>
            <Reveal delay={0.35}>
              <p className="text-lede mt-6 max-w-[52ch]">
                Each input the Foundry accepts, each stage it runs, and each output it
                produces, laid out on a single page. Nothing hidden, nothing implied.
              </p>
            </Reveal>
          </div>
          {/* Master is now 2400×1368; sizes hint lets next/image pick the 1200 or 1080 variant. */}
          <div className="max-w-[1100px] mx-auto">
            <AnimatedEditorial
              src="original/foundry-system.png"
              parallax={30}
              float={false}
              frame={false}
              sizes="(min-width: 1200px) 1100px, (min-width: 768px) 92vw, 100vw"
            />
            <a
              href="/media/original/foundry-system.png"
              target="_blank"
              rel="noopener"
              className="md:hidden mt-4 inline-flex items-center gap-1.5 py-2 text-[14px] font-medium text-[color:var(--color-ink)]"
            >
              <span className="border-b border-current pb-0.5">View the diagram full size</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Container>
      </Section>

      {/* ANATOMY — editorial still with parallax */}
      <Section className="bg-[color:var(--color-canvas-warm)] relative overflow-hidden" spacing="loose">
        <FloatingCubes className="absolute inset-0 pointer-events-none opacity-40 hidden md:block" />
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Anatomy of a knowledge system</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5 max-w-[16ch]" stagger={0.05}>
                Concepts. Relationships. Evidence.
              </SplitText>
              <Reveal delay={0.15}>
                <p className="text-lede mt-6 max-w-[46ch]">
                  Each cube is a concept. Each line is a relationship. The glowing
                  nodes are the points at which capability is verified. Nothing in a
                  program built with the Foundry exists without a place on this diagram.
                </p>
              </Reveal>
              <RevealStagger className="mt-8 grid grid-cols-2 gap-4 max-w-md" as="ul">
                {[
                  { k: "Concepts", v: "Named, deduplicated, cited" },
                  { k: "Relationships", v: "Typed and explicit" },
                  { k: "Assessments", v: "Anchored to the framework" },
                  { k: "Provenance", v: "Each node, each version" },
                ].map((r) => (
                  <RevealItem as="li" key={r.k} className="border-t border-[color:var(--color-hairline-strong)] pt-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.1em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)]">{r.k}</div>
                    <div className="text-[13.5px] text-[color:var(--color-ink-soft)] mt-1">{r.v}</div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
            <AnimatedEditorial src="editorial-blueprint.png" parallax={50} />
          </div>
        </Container>
      </Section>

      {/* CAPABILITIES GRID */}
      <Section className="relative overflow-hidden">
        <CursorSpotlight size={640} color="rgba(239,103,4,0.06)" className="hidden lg:block" />
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-[640px]">
              <Eyebrow>The Platform</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5" stagger={0.05}>
                Eight capabilities. One coherent system.
              </SplitText>
            </div>
            <Reveal delay={0.1}>
              <Magnetic>
                <Link
                  href="/platform"
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]"
                >
                  <span className="border-b border-current pb-0.5">Explore the platform</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c) => (
              <RevealItem key={c.title}>
                <TiltCard>
                  <Link
                    href={c.href}
                    className="group relative flex h-full flex-col p-5 md:p-7 rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white hover:border-[color:var(--color-ink-soft)] transition-all"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[color:var(--color-canvas-tint)] text-[color:var(--color-forge)] mb-4 md:mb-6">
                      {c.icon}
                    </div>
                    <h3 className="text-[19px] leading-[1.25] font-semibold tracking-tight font-[family-name:var(--font-display)] mb-3">
                      {c.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-[color:var(--color-ink-muted)] flex-1">
                      {c.desc}
                    </p>
                    <div className="mt-6 hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </div>
                  </Link>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* BENTO OUTPUTS — what a Foundry programme produces */}
      <div id="bento">
        <BentoOutputs />
      </div>

      {/* PROGRAMS BY OUTCOME with editorial imagery */}
      <Section className="bg-[color:var(--color-canvas-warm)]">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>By outcome</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5" stagger={0.05}>
                Purpose-built for what you are actually accountable for.
              </SplitText>
              <Reveal delay={0.15}>
                <p className="text-lede mt-6">
                  This is not another learning management system. Nor another content generator.
                  It is a system that produces the program the outcome requires, with the
                  evidence to prove it did.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <Magnetic>
                  <Button href="/programs" variant="secondary" size="md" arrow className="mt-8">
                    All programs
                  </Button>
                </Magnetic>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-10 hidden lg:block">
                  <AnimatedEditorial src="editorial-transformation.png" parallax={30} float={false} sizes="360px" />
                </div>
              </Reveal>
            </div>
            <RevealStagger className="divide-y divide-[color:var(--color-hairline-strong)] border-y border-[color:var(--color-hairline-strong)]">
              {programs.map((p) => (
                <RevealItem key={p.title} as="div">
                  <Link
                    href={p.href}
                    className="group flex items-start gap-4 md:gap-6 py-5 md:py-7 hover:bg-white/40 transition-colors -mx-2 px-2 rounded"
                  >
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-white border border-[color:var(--color-hairline)] text-[color:var(--color-forge)] group-hover:border-[color:var(--color-forge)] transition-colors">
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
      <Section className="relative overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-[640px]">
              <Eyebrow>By industry</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5" stagger={0.05}>
                Regulated, evidenced, ready for audit in your sector.
              </SplitText>
            </div>
            <Reveal delay={0.1}>
              <Magnetic>
                <Link
                  href="/industries"
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]"
                >
                  <span className="border-b border-current pb-0.5">All industries</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <RevealItem key={ind.title}>
                <TiltCard maxTilt={3}>
                  <Link
                    href={ind.href}
                    className="group block relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-6 md:p-7 h-full hover:border-[color:var(--color-ink-soft)] transition-all"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(239,103,4,0.06),transparent_60%)]" aria-hidden />
                    <div className="relative">
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
                        {ind.note}
                      </div>
                      <h3 className="text-[22px] font-[family-name:var(--font-display)] font-semibold tracking-tight">
                        {ind.title}
                      </h3>
                      <div className="mt-6 md:mt-16 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors">
                        View sector view
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* GOVERNANCE / EVIDENCE showcase with editorial */}
      <Section className="bg-[color:var(--color-ink)] text-white relative overflow-hidden" spacing="loose">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-center">
            <AnimatedEditorial src="editorial-governance.png" parallax={45} />
            <div>
              <Eyebrow>A different category</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5 text-white max-w-[16ch]" stagger={0.05}>
                A knowledge system, not a document with a login.
              </SplitText>
              <Reveal delay={0.15}>
                <p className="text-lede mt-6 text-white/70 max-w-[46ch]">
                  Each decision, each review, each version, exportable. When the
                  regulator asks how you know, the answer is a file.
                </p>
              </Reveal>
              <RevealStagger className="mt-8 space-y-4" as="ul">
                {[
                  { title: "Structure before content", desc: "The framework is defined first. Instruction is generated to fit it, rather than the reverse." },
                  { title: "Verification, not completion", desc: "Capability is confirmed against the framework, not clicks against a page count." },
                  { title: "Evidence on demand", desc: "Each decision, timestamp, and version exports to your audit team." },
                ].map((item) => (
                  <RevealItem key={item.title} as="li" className="flex gap-4 items-start border-t border-white/10 pt-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-forge)] shrink-0" style={{ animation: "forge-glow 2.4s ease-in-out infinite" }} />
                    <div>
                      <div className="text-[15px] font-semibold text-white">{item.title}</div>
                      <div className="text-[13.5px] text-white/60 mt-1">{item.desc}</div>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW WE ENGAGE — 4-step commercial flow */}
      <Section className="bg-[color:var(--color-canvas-warm)]">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-16">
            <div>
              <Eyebrow>How we engage</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5 max-w-[16ch]" stagger={0.05}>
                From first call to production, in the open.
              </SplitText>
              <Reveal delay={0.35}>
                <p className="text-lede mt-6 max-w-[46ch]">
                  Four commercial stages. Each one produces something you keep,
                  whether or not the next stage happens. No procurement theatre.
                </p>
              </Reveal>
            </div>

            <RevealStagger className="grid sm:grid-cols-2 gap-4">
              {[
                { n: "01", t: "Working session", d: "45 minutes on a real subject you own. You watch the Foundry build a framework from your material. You keep the framework." },
                { n: "02", t: "Framework build", d: "A structured, reviewable framework for one programme or subject area, delivered in weeks. Fixed scope, fixed price. Yours to deploy or take elsewhere." },
                { n: "03", t: "Pilot", d: "The framework generates instruction and verification. It runs against a real cohort. Evidence exports to your regulator or board." },
                { n: "04", t: "Platform partnership", d: "Ongoing access to the Foundry across programmes, with governance, drift detection, and standards mapping baked in." },
              ].map((s) => (
                <RevealItem
                  key={s.n}
                  className="group relative rounded-[var(--radius-md)] border border-[color:var(--color-hairline)] bg-white p-6 hover:border-[color:var(--color-ink-soft)] transition-colors"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.18em] text-[color:var(--color-forge)]">
                      STAGE {s.n}
                    </span>
                    <span className="h-px flex-1 bg-[color:var(--color-hairline-strong)]" />
                  </div>
                  <h3 className="text-[19px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] mb-2">
                    {s.t}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                    {s.d}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* FEATURED INSIGHTS */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-[640px]">
              <Eyebrow>Insights</Eyebrow>
              <SplitText as="h2" className="text-display-2 mt-5 max-w-[18ch]" stagger={0.05}>
                Reading for the compliance and L&amp;D bench.
              </SplitText>
            </div>
            <Reveal delay={0.15}>
              <Magnetic>
                <Link
                  href="/insights"
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]"
                >
                  <span className="border-b border-current pb-0.5">All insights</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          <RevealStagger className="grid md:grid-cols-3 gap-4">
            {[
              { eyebrow: "Methodology", title: "Structure before content is the missing skill in L&D.", href: "/insights/knowledge-structure-before-content" },
              { eyebrow: "Verification", title: "What verification actually measures, and what it does not.", href: "/insights/what-verification-really-measures" },
              { eyebrow: "Compliance", title: "Why training programmes fail the audit before they are written.", href: "/insights/why-training-fails-audits" },
            ].map((item) => (
              <RevealItem key={item.href}>
                <Link
                  href={item.href}
                  className="group block h-full rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-7 hover:border-[color:var(--color-ink-soft)] transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-3">
                    {item.eyebrow}
                  </div>
                  <h3 className="text-[19px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors leading-[1.25]">
                    {item.title}
                  </h3>
                  <div className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* FAQ */}
      <div className="bg-[color:var(--color-canvas-warm)]">
        <HomeFAQ title="The six we get most often." eyebrow="Common questions" items={homeFaqItems} />
      </div>

      {/* CTA */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-hairline)] bg-gradient-to-br from-white to-[color:var(--color-canvas-warm)] p-10 md:p-16">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(239,103,4,0.12),transparent_70%)]" aria-hidden />
            <FloatingCubes className="absolute inset-0 opacity-40 pointer-events-none hidden md:block" />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <Eyebrow>Ready to see it?</Eyebrow>
                <SplitText as="h2" className="text-display-2 mt-5 max-w-[20ch]" stagger={0.05}>
                  Bring a subject. Leave with a framework.
                </SplitText>
                <Reveal delay={0.15}>
                  <p className="text-lede mt-5 max-w-[52ch]">
                    A 45 minute working session with our team on a real subject or programme you own.
                    You see the system operate on your material, and you keep the framework it produces.
                  </p>
                </Reveal>
              </div>
              <div className="md:justify-self-end">
                <Magnetic strength={0.24}>
                  <Button href="/demonstration" variant="primary" size="lg" arrow>
                    Request a demonstration
                  </Button>
                </Magnetic>
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

function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="text-[28px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)] leading-none">
        <CountUp value={value} suffix={suffix} duration={1.6} />
      </div>
      <div className="mt-2 text-[11.5px] leading-[1.45] text-[color:var(--color-ink-muted)]">
        {label}
      </div>
    </div>
  );
}

function DarkStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="text-[28px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-white leading-none">
        <CountUp value={value} suffix={suffix} duration={1.6} />
      </div>
      <div className="mt-2 text-[12px] leading-[1.45] text-white/60">
        {label}
      </div>
    </div>
  );
}
