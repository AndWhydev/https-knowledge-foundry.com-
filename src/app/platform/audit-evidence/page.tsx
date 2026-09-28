import type { Metadata } from "next";
import {
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  Signature,
  Fingerprint,
  Package,
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
  alternates: { canonical: "/platform/audit-evidence" },
  title: "Audit and evidence management",
  description:
    "Content lineage, review history, standards mapping, approvals, and cryptographic integrity, captured as evidence and exportable as an audit pack.",
};

const capabilities = [
  {
    icon: <FileSearch className="h-5 w-5" />,
    title: "Content lineage",
    desc: "Each learning asset stays permanently connected to the source materials, framework nodes, and standards it was built from. Provenance is not a metadata field. It is the architecture.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Review history",
    desc: "Each review action (approve, revise, comment, reject) is recorded across the creation lifecycle with the reviewer, timestamp, and version it applied to.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Standards mapping",
    desc: "Unalterable relationships between specific clauses and specific learning outputs. Each framework requirement traces down to the block that satisfies it.",
  },
  {
    icon: <Signature className="h-5 w-5" />,
    title: "Approval records",
    desc: "Sign off activities are captured inside live governance workflows: role, identity, decision, and target hash. Not an email trail.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Cryptographic verification",
    desc: "Foundry Hash on each block. Master Integrity Root on each programme. Forensic Revision Chain behind each change. Integrity is mathematical.",
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: "Exportable audit packs",
    desc: "A single command exports the evidence set: provenance, reviews, approvals, hashes, and revisions, in formats designed for external scrutiny.",
  },
];

const steps = [
  {
    n: "01",
    title: "Genesis",
    desc: "What was generated. Each block records the framework node, the source citation, the compiler version, and the initial hash.",
  },
  {
    n: "02",
    title: "Audit",
    desc: "What was reviewed. Each review action captures the reviewer, the decision, and the block state at the moment of the decision.",
  },
  {
    n: "03",
    title: "Delta",
    desc: "What was modified. Each regeneration produces a new hash, a diff, and a link to the reason: an auditor comment, a standard update, a policy change.",
  },
  {
    n: "04",
    title: "Signoff",
    desc: "What was approved. Each release action is signed by role and identity, tied to the specific hash it authorised, and recorded permanently.",
  },
  {
    n: "05",
    title: "Substrate",
    desc: "What evidence supports. Each claim in the programme is exportable back to source material, framework node, review record, and hash. End to end.",
  },
];

const faq = [
  {
    q: "What exactly is in an audit pack?",
    a: "Provenance metadata for each block, the full review and approval trail, the standards mapping and clause references, the Foundry Hash values, the Master Integrity Root, the Forensic Revision Chain for anything that changed, and the source citations behind each claim. Exportable as PDF, HTML, and structured machine readable formats. Designed for external scrutiny, not for internal comfort.",
  },
  {
    q: "How is this different from what our LMS or GRC platform already produces?",
    a: "LMS reports tell you who completed what. GRC platforms track that a control exists. Neither ties the content of a lesson to the clause it satisfies, the reviewer who approved it, and a cryptographic proof of what was released. The audit pack answers the question 'how do you know the training covers the requirement'. That is a question those systems are not built to answer.",
  },
  {
    q: "Can we prove integrity to an auditor without giving them platform access?",
    a: "Yes. Hash values, the Master Integrity Root, provenance records, and approval trails are exportable as portable artefacts. An auditor with the released content, the exported evidence, and any standard hashing tool can independently confirm integrity. Verification does not require Knowledge Foundry to be in the loop.",
  },
  {
    q: "How long is evidence retained?",
    a: "Indefinitely, by design. The Forensic Revision Chain preserves each version. Ownership records, approval decisions, and hash values are never purged as part of ordinary operation. Retention policies can be configured to your regulatory obligations, but the default is preservation, not disposal.",
  },
  {
    q: "What happens if a regulator asks about a decision made two years ago?",
    a: "You retrieve the specific version, the reviewer, the approval action, the framework node it satisfied, the source citation it was built from, and the hash proof that the content in evidence is byte for byte what was released. Two minutes, not two weeks.",
  },
  {
    q: "Can we integrate the evidence pack into an existing audit workflow?",
    a: "Yes. Export formats are structured (JSON, XML, CSV) as well as readable by humans (PDF, HTML). API access is available for continuous ingestion into GRC platforms, evidence lockers, or audit portals. The evidence is portable by design.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Verification & Trust",
    desc: "Foundry Hash, Master Integrity Root, and Forensic Revision Chain. The technical spine the audit pack exports.",
    href: "/platform/verification-trust",
  },
  {
    eyebrow: "Adjacent",
    title: "Knowledge governance",
    desc: "Ownership, approvals, and cadence. The operating model that produces the evidence continuously.",
    href: "/platform/knowledge-governance",
  },
  {
    eyebrow: "Upstream",
    title: "Standards & accreditation",
    desc: "Alignment is what the audit pack proves. This is where the standards enter the model.",
    href: "/platform/standards-accreditation",
  },
];

export default function AuditEvidencePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Governance · Audit & Evidence"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Audit & Evidence", href: "/platform/audit-evidence" },
        ]}
        title={
          <>
            When they ask how you know, the answer is a{" "}
            <span className="text-[color:var(--color-forge)]">file</span>.
          </>
        }
        lede="In regulated and accredited environments, creating content is the easy part. Demonstrating how it was created, how it evolved, who reviewed it, and how it was approved. That is where confidence is won or lost. Evidence should be visible, traceable, and defensible."
        secondaryCta={{ label: "See an audit pack", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-evidence.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Auditability is not passive record keeping. It is structural visibility."
      >
        <p>
          Most training environments treat evidence as an afterthought. A
          reactive scramble when the audit request arrives, involving screenshots,
          email chains, and reconstruction of who approved what as best they can.
          The result is fragile, slow, and often indefensible on the question
          that actually matters:{" "}
          <strong>can you demonstrate how this content was created, reviewed,
          verified, and approved</strong>.
        </p>
        <p>
          Knowledge Foundry inverts the model. Evidence is produced continuously,
          as a side effect of ordinary operation, and it is structured for
          external scrutiny from the moment it exists. The audit pack is not
          something you build for the audit. It is something you export.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six evidence primitives"
        title="Lineage, review, mapping, approval, integrity, export."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="What gets captured"
        title="Genesis. Audit. Delta. Signoff. Substrate."
        lede="Each decision in the lifecycle leaves a structured trace. Nothing is inferred from meeting notes. Nothing is reconstructed after the fact."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A defensible answer to every question, exportable in one action."
      >
        <p>
          The reactive question, <em>can we trust this content?</em>, is
          replaced by an operational standard:{" "}
          <em>can we definitively demonstrate how this content was created,
          reviewed, verified, and approved?</em> The answer is not a story. It
          is an evidence pack.
        </p>
        <p>
          <strong>Each decision leaves evidence.</strong> Each version is
          preserved. <strong>Each hash is verifiable.</strong> Each clause
          traces to the block that satisfies it. When the audit arrives, the
          pack already exists. And the pack is testable.
        </p>
      </ProseBlock>

      <FAQ title="How Audit & Evidence Management works, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="For audit, risk, and accreditation leaders"
        title="See the evidence pack on your own material."
        lede="Send us a live programme and the audit or accreditation you must satisfy. We spend 45 minutes with the Foundry, and you leave with the exported evidence pack. Yours to keep."
      />
    </>
  );
}
