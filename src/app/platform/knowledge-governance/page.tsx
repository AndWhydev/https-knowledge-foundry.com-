import type { Metadata } from "next";
import {
  ShieldCheck,
  UsersRound,
  GitBranch,
  BellRing,
  FileClock,
  Fingerprint,
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
  alternates: { canonical: "/platform/knowledge-governance" },
  title: "Knowledge Governance. Human oversight, machine assistance",
  description:
    "Ownership, review cadences, approval gates, and drift detection are embedded in the workflow rather than bolted on. Automation without governance creates risk. Governance is the discipline that turns speed into confidence.",
};

const capabilities = [
  {
    icon: <UsersRound className="h-5 w-5" />,
    title: "Named ownership",
    desc: "Each framework, module, and block has an accountable owner. Ownership is a first class attribute, not a footnote in a wiki page.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Approval gates",
    desc: "Content passes through defined stages of review, approval, and release before it becomes operational. Generation does not imply publication.",
  },
  {
    icon: <FileClock className="h-5 w-5" />,
    title: "Review cadences",
    desc: "Scheduled review cycles, and cycles driven by events, are attached to the framework itself. When a standard updates, the affected content surfaces automatically.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Version chains",
    desc: "Each revision is captured in a structured version chain. Reversible, comparable, and referenced by hash rather than by filename.",
  },
  {
    icon: <BellRing className="h-5 w-5" />,
    title: "Drift detection",
    desc: "When source documents, standards, or policies change, the framework flags each downstream artefact that referenced the changed source.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Cryptographic provenance",
    desc: "Foundry Hash, Master Integrity Root, and Forensic Revision Chain make integrity a mathematical property rather than a management claim.",
  },
];

const steps = [
  {
    n: "01",
    title: "Human review",
    desc: "Generated outputs are examined before they are accepted, modified, or released. Human expertise remains central to validation.",
  },
  {
    n: "02",
    title: "Approval gates",
    desc: "Content passes through defined approval stages before deployment. Important decisions are examined before they become operational.",
  },
  {
    n: "03",
    title: "Audit chains",
    desc: "Each change is cleanly recorded. What changed, who reviewed, when. Complete visibility into how content evolved between versions.",
  },
  {
    n: "04",
    title: "Release controls",
    desc: "Enforced controls decide when content is approved, released, updated, or replaced. Publication is a distinct act, not a side effect.",
  },
];

const faq = [
  {
    q: "How is this different from a workflow tool like Jira or an approval column in a spreadsheet?",
    a: "A workflow tool tracks that an approval happened. Knowledge Governance ties the approval to the content itself. Each version has a cryptographic hash, each approver has a signed record, and each reviewed block is comparable to its previous state. The approval and the artefact are inseparable.",
  },
  {
    q: "Who owns what, and how is that enforced?",
    a: "Ownership is assigned at framework, module, and block level. Assignees receive review tasks, approval requests, and drift notifications automatically. The system enforces access based on role, so someone without release authority cannot publish, and someone without editorial authority cannot alter approved structure.",
  },
  {
    q: "What happens when a source standard or policy is updated?",
    a: "The system detects the change against the ingested version, flags each framework node and content block that referenced the changed source, and routes a review task to the responsible owner. Nothing regenerates automatically. Drift becomes visible before it becomes damage.",
  },
  {
    q: "Can we prove governance to an external auditor?",
    a: "Yes. Governance produces an evidence pack: ownership records, approval trails, version chains, hash proofs, and drift resolutions. Each artefact is timestamped, signed, and exportable. Designed for scrutiny rather than for internal comfort.",
  },
  {
    q: "Do you replace our existing governance boards or approval committees?",
    a: "No. Governance boards decide policy. Knowledge Foundry enforces the operational consequences of those decisions. Cadences, gates, and thresholds are configurable to match your governance charter. The board sets the rules. The platform makes the rules unavoidable.",
  },
  {
    q: "What stops someone from bypassing the gates?",
    a: "The gates are enforced at the system level, not at the process level. Release actions require the corresponding role and produce a signed record. There is no 'publish and clean up later' path. Any attempt to alter approved content changes its hash, which is immediately visible.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Verification & Trust",
    desc: "Foundry Hash, Master Integrity Root, Forensic Revision Chain. The technical spine governance rides on.",
    href: "/platform/verification-trust",
  },
  {
    eyebrow: "Downstream",
    title: "Audit & evidence",
    desc: "Governance produces evidence continuously. This is how you export it for scrutiny.",
    href: "/platform/audit-evidence",
  },
  {
    eyebrow: "Adjacent",
    title: "Standards & accreditation",
    desc: "Where external requirements enter the governance model as first class constraints.",
    href: "/platform/standards-accreditation",
  },
];

export default function KnowledgeGovernancePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Governance · Knowledge Governance"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Knowledge Governance", href: "/platform/knowledge-governance" },
        ]}
        title={
          <>
            Human oversight.{" "}
            <span className="text-[color:var(--color-forge)]">Machine</span>{" "}
            assistance.
          </>
        }
        lede="Automation can accelerate content creation, analysis, and enhancement. Speed alone does not guarantee quality, accountability, or trust. Governance is the discipline that turns generation into confidence."
        secondaryCta={{ label: "See the release path", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-governance.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Automation without governance creates risk. Governance creates confidence."
      >
        <p>
          As organisations adopt automation, familiar failure modes emerge.
          Content changes rapidly. Multiple versions exist simultaneously. Review
          decisions become difficult to trace. Approval processes drift into
          rubber stamps. Confidence erodes even as output volume grows.
        </p>
        <p>
          Knowledge Foundry is built on the opposite principle:{" "}
          <strong>important decisions should remain visible, reviewable, and
          controllable</strong>. Governance is not a layer applied after content
          is created. It is embedded throughout the lifecycle, and it is
          enforced by architecture rather than by memo.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six governance primitives"
        title="Ownership, cadence, and integrity, embedded rather than appended."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="Four gates in the workflow"
        title="Review. Approve. Chain. Release."
        lede="Each decision is examined before it becomes operational. Each change is recorded. Each release is deliberate."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Trust in the process, not just the output."
      >
        <p>
          Governance is ultimately about trust. Not trust in automation, but
          trust in the process used to create, review, approve, and maintain
          critical knowledge assets. The system provides the concrete visibility
          and operational controls required to understand how an output was
          produced, how it has changed, and how it was approved for use.
        </p>
        <p>
          <strong>Traceable.</strong> Accountability is a property of the system.{" "}
          <strong>Immutable.</strong> Approved content cannot be silently
          altered. <strong>Compliant.</strong> Regulatory obligations are
          supported natively. <strong>Verified.</strong> Integrity is
          mathematical, not managerial.
        </p>
      </ProseBlock>

      <FAQ title="How Knowledge Governance works, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="For compliance and risk leaders"
        title="See governance operate on your material."
        lede="Send us a live programme and the governance charter it should conform to. We spend 45 minutes with the Foundry on your material, and you leave with an evidence pack. Yours to keep."
      />
    </>
  );
}
