import type { Metadata } from "next";
import {
  BadgeCheck,
  Target,
  GaugeCircle,
  Fingerprint,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { AnimatedEditorial } from "@/components/motion/animated-editorial";

export const metadata: Metadata = {
  title: "Hybrid Verification. Confirmed capability, not attended sessions",
  description:
    "Structured learning combined with integrated validation. Every objective is paired with a measurable outcome, a validation mechanism, and a defined competency threshold.",
};

const capabilities = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Objective-to-validation pairing",
    desc: "Every learning objective in the framework is paired with a measurable outcome, a validation mechanism, and a defined competency threshold. Nothing floats unassessed.",
  },
  {
    icon: <GaugeCircle className="h-5 w-5" />,
    title: "Proportional cognitive demand",
    desc: "Higher cognitive demand receives proportional validation. Applied roles require applied proof. Advanced capability is demonstrably verified. not inferred from a quiz score.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Scenario-based simulation",
    desc: "Decision-based evaluation and scenario simulation place the learner in the conditions they will face in role. Assessment measures behaviour under realistic constraint.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Competency thresholds",
    desc: "Threshold logic. pass, conditional, fail. is defined at the framework level and applied consistently. Certification decisions are auditable, not editorial.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Accreditation alignment",
    desc: "Where verification supports formal accreditation, assessment reasoning and Bloom alignment are surfaced for the accreditor. The certification defends itself against the standard.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Evidence pack export",
    desc: "For every certified individual, the system exports a coherent evidence pack: framework version, learning path, assessment attempts, threshold decisions, and reviewer sign-off.",
  },
];

const steps = [
  {
    n: "01",
    title: "Define capability boundaries",
    desc: "What the individual must know, apply, and perform is scoped explicitly. Knowledge boundaries and capability expectations are agreed before framework construction begins.",
  },
  {
    n: "02",
    title: "Structure with validation",
    desc: "The framework pairs each learning objective with a validation mechanism and a competency threshold. Instruction and assessment are designed together, not sequenced apart.",
  },
  {
    n: "03",
    title: "Generate and verify",
    desc: "Instruction and applied assessment are generated to fit the framework. Learners progress through validated checkpoints; the system records evidence at each gate.",
  },
  {
    n: "04",
    title: "Release with sign-off",
    desc: "Certification is issued only when threshold logic and reviewer sign-off are both satisfied. Every certified individual carries an exportable evidence pack.",
  },
];

const faq = [
  {
    q: "How is hybrid verification different from a standard assessment at the end of a course?",
    a: "End-of-course assessment measures recall after content exposure. Hybrid verification treats validation as a structural element of the framework: every objective carries its assessment, its threshold, and its evidence requirement from the moment the framework is drafted. Instruction and assessment are designed together. not sequenced apart.",
  },
  {
    q: "Can this support formal certification pathways?",
    a: "Yes. Where verification supports formal accreditation, threshold logic, assessment reasoning, and Bloom alignment are exportable for the accreditor. The framework acts as the primary defensible artefact, and every certified individual carries a coherent evidence pack tied to their assessment history.",
  },
  {
    q: "What kinds of assessment methods does the platform support?",
    a: "Objective knowledge checks, applied problem-solving scenarios, decision-based evaluation, scenario-based simulation, and structured performance walkthroughs. Method selection is driven by cognitive demand: what the learner must demonstrate determines what the assessment must measure.",
  },
  {
    q: "How does this fit alongside our existing LMS or credentialing system?",
    a: "The Foundry publishes into most enterprise learning environments via SCORM, xAPI, and structured packages. Credentialing metadata. threshold decisions, assessment provenance, evidence exports. can be issued into your existing HRIS or credential registry. The Foundry becomes the source of certification truth; delivery remains where it is.",
  },
  {
    q: "Who signs off a certification decision?",
    a: "The framework owner defines the sign-off protocol. Threshold logic can be fully automated, reviewer-approved, or multi-signature depending on the risk posture. The audit trail records every signatory and every decision. including reversals. with timestamp and identity.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Verification & trust",
    desc: "The capability layer that governs how certification decisions are made, evidenced, and defended across the platform.",
    href: "/platform/verification-trust",
  },
  {
    eyebrow: "Adjacent",
    title: "Compliance programs",
    desc: "Where regulated roles require demonstrable capability rather than acknowledged awareness, hybrid verification pairs with the compliance framework.",
    href: "/programs/compliance",
  },
  {
    eyebrow: "Sector",
    title: "Healthcare & life sciences",
    desc: "Clinical credentialing, AHPRA CPD, and defensible competency verification in accountable environments.",
    href: "/industries/healthcare-life-sciences",
  },
];

export default function HybridVerificationPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Program · Hybrid Verification"
        breadcrumb={[
          { label: "Programs", href: "/programs" },
          { label: "Hybrid verification", href: "/programs/hybrid-verification" },
        ]}
        title={
          <>
            Exposure is <span className="text-[color:var(--color-forge)]">not</span> proof.
          </>
        }
        lede="The Foundry combines structured learning with integrated validation to produce demonstrable, defensible competence. Every lesson is anchored to a verification checkpoint. Confirmed readiness, not attended sessions."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<AnimatedEditorial src="editorial-blueprint.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock eyebrow="Why this matters" title="Learning without validation creates risk.">
        <p>
          In regulated, safety-critical, or high-accountability environments, organisations must
          be able to prove that individuals understand required knowledge, can apply it correctly,
          can perform under realistic conditions, and meet defined competency standards. A
          completion record does not answer any of those questions — it answers a different,
          smaller question: whether the person clicked through the material.
        </p>
        <p>
          The Foundry treats verification as a structural element of the framework, not an
          appendix to it. Every objective carries its assessment, its threshold, and its
          evidence requirement from the moment the framework is drafted. The certification is
          defensible because the framework is defensible.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves inside hybrid verification"
        title="Instruction and validation, designed together."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="Define. Structure. Generate. Release."
        lede="Verification does not happen at the end of the programme. It is embedded throughout the framework, and the certification decision is the sum of the evidence the framework was designed to collect."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A certification that defends itself."
      >
        <p>
          Organisations gain defensible certification pathways, clear competency thresholds,
          reduced risk exposure, measurable workforce capability, and audit-aligned validation
          evidence. Individuals gain clear progression, transparent evaluation, and confirmed
          readiness for the role they are being certified into.
        </p>
        <p>
          When the accreditor, the regulator, or the client asks how you know an individual is
          competent, the answer is not a completion certificate. It is a framework, a set of
          assessment attempts, a threshold decision, and a reviewer sign-off — all linked, all
          exportable, all defensible.
        </p>
      </ProseBlock>

      <FAQ title="How hybrid verification programmes work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a certification pathway"
        title="See your competency model take shape."
        lede="Send us the role, the standard, or the certification you are accountable for. In 45 minutes with the Foundry on your material, you leave with the verification framework it produces."
        ctaLabel="Start with your certification pathway"
      />
    </>
  );
}
