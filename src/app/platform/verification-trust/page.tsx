import type { Metadata } from "next";
import {
  Fingerprint,
  LockKeyhole,
  ScrollText,
  Boxes,
  UserCheck,
  Radar,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { HeroTimeline } from "@/components/heros/hero-timeline";

export const metadata: Metadata = {
  alternates: { canonical: "/platform/verification-trust" },
  title: "Verification & Trust. Why you can rely on it",
  description:
    "Frameworks are defined, reviewed, controlled, and approved by a human before content reaches delivery. Each block carries a Foundry Hash. Each programme carries a Master Integrity Root.",
};

const capabilities = [
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Structure before wording",
    desc: "Formal frameworks, including chapters, sections, must teach requirements, and assessment points, are defined and locked before any content is generated.",
  },
  {
    icon: <ScrollText className="h-5 w-5" />,
    title: "Reviewability at block level",
    desc: "Nothing is hidden. Reviewers evaluate discrete, typed blocks. Navigational, instructional, simulation, or assessment. All with complete transparency.",
  },
  {
    icon: <Radar className="h-5 w-5" />,
    title: "Surgical revision",
    desc: "Change only what needs to change. Regeneration at the block level operates inside isolation that persists state, preserving Core Knowledge Graph continuity.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: "A human approval gate",
    desc: "Each generated output enters a mandatory Review Queue. Approve, revise, or reject. Approval and deployment are deliberately distinct steps.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Foundry Hash on each block",
    desc: "Each discrete content block receives a cryptographic identifier through the Foundry Integrity Ledger. If content changes, the hash changes.",
  },
  {
    icon: <LockKeyhole className="h-5 w-5" />,
    title: "Master Integrity Root",
    desc: "Block level hashes aggregate into a programme level root. Recipients can confirm that what they received is what was approved for release.",
  },
];

const steps = [
  {
    n: "01",
    title: "Structure is defined",
    desc: "The framework, meaning must teach requirements, prerequisites, assessment points, and standards alignment, is authored, reviewed, and locked before generation begins.",
  },
  {
    n: "02",
    title: "Content is generated against structure",
    desc: "Instruction is compiled to fit the approved framework. Structure governs wording, not the reverse. Each block is typed and traceable.",
  },
  {
    n: "03",
    title: "Blocks enter the Review Queue",
    desc: "A human reviewer sees exactly what they are evaluating, block by block. Approve, revise, regenerate, or reject. Nothing publishes automatically.",
  },
  {
    n: "04",
    title: "Hash and release",
    desc: "Approved blocks receive Foundry Hashes. The programme aggregates to a Master Integrity Root. Release is a separate, deliberate confirmation.",
  },
];

const faq = [
  {
    q: "What exactly does the Foundry Hash prove?",
    a: "It proves that a given block of content is byte for byte identical to the version that was approved. If a single character changes anywhere in the block, the hash changes. Recipients (auditors, learners, downstream systems) can independently confirm that what they hold matches what was released.",
  },
  {
    q: "How does the Master Integrity Root work at the programme level?",
    a: "Individual block hashes are aggregated into a single programme level root. Verifying the root verifies each block beneath it. It is the same cryptographic principle used in software supply chains and financial ledgers, applied to learning content.",
  },
  {
    q: "Can the model generate something the framework did not authorise?",
    a: "No. Generation is bounded by the approved framework and constrained by Automated Validation Gates that reference the Pedagogical Roadmap in real time. Output that does not align to the framework does not leave the compiler. This is what we mean by 'automation within boundaries defined by humans'.",
  },
  {
    q: "What if a reviewer approves a block and later we discover it was wrong?",
    a: "The Forensic Revision Chain retains each version. Revert to any prior approved state, or run the block through the compiler again against updated guidance. The rollback itself becomes an evidence event with its own hash and approval trail.",
  },
  {
    q: "Do we get to see the framework, or is it a black box?",
    a: "You see the framework. It is readable by humans in the Foundry, exportable to JSON, XML, or a spreadsheet, and reviewable at every stage of authoring and revision. The stance against opacity is not marketing language. It is a load bearing architectural principle.",
  },
  {
    q: "Can auditors verify integrity without access to the platform?",
    a: "Yes. Hash values and the Master Integrity Root are exportable. An auditor with the released content, the hash record, and any standard hashing implementation can confirm integrity independently. Verification does not require Knowledge Foundry to be in the loop.",
  },
];

const related = [
  {
    eyebrow: "Adjacent",
    title: "Knowledge governance",
    desc: "Ownership, review cadence, deprecation, and drift detection. The operating model behind the release gate.",
    href: "/platform/knowledge-governance",
  },
  {
    eyebrow: "Downstream",
    title: "Audit & evidence",
    desc: "When someone asks how you know, the answer is a file. This is where those files come from.",
    href: "/platform/audit-evidence",
  },
  {
    eyebrow: "Technical",
    title: "Technical overview",
    desc: "The architecture behind Semantic Compiler, Foundry Hash, and Forensic Revision Chain.",
    href: "/platform/technical-overview",
  },
];

export default function VerificationTrustPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Governance · Verification & Trust"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Verification & Trust", href: "/platform/verification-trust" },
        ]}
        title={
          <>
            Why you can{" "}
            <span className="text-[color:var(--color-forge)]">rely</span> on it.
          </>
        }
        lede="Frameworks are defined, reviewed, controlled, and approved by a human before content reaches delivery. Each block is cryptographically identifiable. Each programme carries a Master Integrity Root. Trust is a technical property, not a claim."
        secondaryCta={{ label: "See the ledger", href: "/platform/see-it-work" }}
        visual={<HeroTimeline
          milestones={[
            { label: "Framework approved", sublabel: "signed 2026-09-18 · J. Chen", verified: true },
            { label: "Instruction generated to framework", sublabel: "traceable, 64 assets", verified: true },
            { label: "Learner completes programme", sublabel: "click-through recorded" },
            { label: "Capability verified against framework", sublabel: "evidence exported", verified: true },
            { label: "Ongoing drift monitoring", sublabel: "framework vs behaviour", verified: false },
          ]}
        />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Automation without governance is the risk. Governance is the answer."
      >
        <p>
          In regulated environments where accountability is high, the question is not
          whether AI produced good looking content. The question is whether the
          content is defensible: whether its structure was authored deliberately,
          whether its wording was reviewed by a named person, whether its
          integrity can be verified after release, and whether any change to it
          leaves an evidence trail.
        </p>
        <p>
          Verification and Trust is how Knowledge Foundry answers that question.
          Not with assertions. With <strong>a Foundry Hash on each block, a
          Master Integrity Root on each programme, a Forensic Revision Chain
          behind each change,</strong> and a mandatory human release gate above
          everything.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six load bearing controls"
        title="Reviewable, traceable, cryptographically verifiable."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="The release path"
        title="Structure. Compile. Review. Hash and release."
        lede="Nothing generated is automatically published. Generation and release are separate, intentional steps, with a hash on each side."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Content that is testable, not just believable."
      >
        <p>
          The output is not a rendered PDF and a promise. It is a released
          artefact with a cryptographic identity, an approver, a framework
          reference, a version history, and a trail behind each change that
          holds up in audit.
        </p>
        <p>
          <strong>Each programme is auditable.</strong> Each revision is
          controlled. <strong>Each release is deliberate.</strong> If the
          content matches its hash, the content matches its approval. If it does
          not, you know instantly.
        </p>
      </ProseBlock>

      <FAQ title="How Verification & Trust works, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="For technical evaluators"
        title="Inspect the ledger on your own material."
        lede="We provide detailed architectural verification and ledger documentation for compliance, security, or accreditation reviews under a standard mutual non-disclosure agreement."
        ctaLabel="Request a governance deep dive"
      />
    </>
  );
}
