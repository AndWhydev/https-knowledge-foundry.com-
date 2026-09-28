import type { Metadata } from "next";
import {
  Compass, FileSearch2, Layers, GitBranch, Fingerprint,
  ShieldCheck, Scale, ClipboardCheck, Puzzle, Cpu,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { HeroLattice } from "@/components/hero-lattice";

export const metadata: Metadata = {
  alternates: { canonical: "/platform" },
  title: "The platform: how it works",
  description:
    "The Knowledge Foundry platform: ten capabilities that turn subjects into structured learning systems that are verifiable and ready for audit. Framework first.",
};

const capabilities = [
  { icon: <Compass className="h-5 w-5" />, title: "Framework Intelligence", desc: "The system reads your subject and builds the framework. Concepts, relationships, dependencies, and assessment logic are laid down before writing begins." },
  { icon: <FileSearch2 className="h-5 w-5" />, title: "Gap Analysis", desc: "Existing knowledge is compared against the framework. Missing, contradictory, or outdated material is surfaced with precision at the source." },
  { icon: <Layers className="h-5 w-5" />, title: "Remediation", desc: "Gaps close in place. Each change carries provenance: what changed, why, by whom, and against which requirement." },
  { icon: <GitBranch className="h-5 w-5" />, title: "Knowledge Transformation", desc: "Documents, policies, and standards become a coherent, versioned knowledge system, rather than a folder of PDFs." },
  { icon: <Fingerprint className="h-5 w-5" />, title: "Verification & Trust", desc: "Capability is confirmed, not just completion. Each assessment ties back to a defined requirement in the framework." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Knowledge Governance", desc: "Ownership, review cadences, deprecation, and drift detection are built into the system rather than bolted on." },
  { icon: <Scale className="h-5 w-5" />, title: "Standards & Accreditation", desc: "Alignment to policy, sector standards, or accrediting bodies is a first class output, not a compliance afterthought." },
  { icon: <ClipboardCheck className="h-5 w-5" />, title: "Audit & Evidence", desc: "Each decision, review, and version is exportable. When someone asks how you know, the answer is a file." },
  { icon: <Puzzle className="h-5 w-5" />, title: "Integrations", desc: "The Foundry sits alongside your LMS, HRIS, content stores, and identity provider. It is a source of truth, not a replacement." },
  { icon: <Cpu className="h-5 w-5" />, title: "Technical Overview", desc: "Architecture, models, delivery, and data residency. The technical shape of what you would deploy." },
];

const process = [
  { n: "01", title: "Interpret", desc: "Source material is read for the requirements it implies. Subjects, standards, and policies each yield the shape of what must be known." },
  { n: "02", title: "Structure", desc: "A framework is authored. Concepts, relationships, progression, and assessment points, all defined before content is written." },
  { n: "03", title: "Produce", desc: "Instruction, activities, and verification are generated to match the framework. Each element traces back to a requirement." },
  { n: "04", title: "Deliver", desc: "The program is reviewable, aligned to your standards, and ready for audit. Full evidence trail. Ongoing governance built in." },
];

export default function PlatformPage() {
  return (
    <>
      <TopicHeader
        eyebrow="The Platform"
        breadcrumb={[{ label: "Platform", href: "/platform" }]}
        title={<>The system behind <span className="text-[color:var(--color-forge)]">structured</span> knowledge.</>}
        lede="Knowledge Foundry turns subjects, documents, and requirements into structured learning systems. Ten capabilities, one coherent architecture, designed to produce programs that are correct by construction and provably so."
        secondaryCta={{ label: "See it work", href: "/platform/see-it-work" }}
        visual={<HeroLattice className="w-full aspect-square max-w-[520px] mx-auto" />}
      />

      <ProseBlock eyebrow="How to read this page" title="Structure governs everything downstream.">
        <p>
          Most learning platforms ask you to author content. The Foundry asks you to define
          <strong> what should exist</strong>. The framework, meaning concepts, relationships,
          progression, and verification, is written first, reviewed, and approved. Only then does
          the system produce instruction to fit it.
        </p>
        <p>
          The result is programs where each module traces back to a requirement, each
          assessment maps to a capability, and each change is evidenced. This is not another
          content authoring tool. It is a knowledge system with a delivery layer attached.
        </p>
      </ProseBlock>

      <ProcessSteps
        eyebrow="The four moves"
        title="Interpret. Structure. Produce. Deliver."
        lede="The sequence is not incidental. Reverse it and you produce content nobody can defend when the regulator asks how it maps to the policy."
        steps={process}
      />

      <FeatureGrid
        eyebrow="Ten capabilities"
        title="One coherent system, ten discrete jobs."
        lede="Each capability is buildable standalone, and each is designed to feed the next. Most engagements start with Framework Intelligence and Gap Analysis, then scale outward."
        features={capabilities}
        columns={4}
      />

      <CtaBand
        eyebrow="Bring us a subject"
        title="See the framework build itself."
        lede="A 45 minute working session on a subject or program you own. You watch the Foundry interpret, structure, and produce, and you keep the framework it creates."
      />
    </>
  );
}
