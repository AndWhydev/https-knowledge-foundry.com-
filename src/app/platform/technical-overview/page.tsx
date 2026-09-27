import type { Metadata } from "next";
import {
  Cpu,
  Binary,
  Layers,
  Fingerprint,
  ScanSearch,
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
  title: "Technical Overview — For serious evaluators",
  description:
    "Knowledge-first architecture, structured generation, reproducibility, traceability, bounded automation, and verifiable delivery — the six principles behind Knowledge Foundry.",
};

const capabilities = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Knowledge-first architecture",
    desc: "Structure precedes content. The Proprietary Semantic Compiler processes inputs into formal models; the Deterministic Logic Framework establishes the Program Schema before generation is engaged.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Structured generation",
    desc: "Output is modular, typed, and reviewable. Recursive Contextual Synchronization operates across intra-lesson, intra-chapter, and global framework levels via the Hierarchical Logic Protocol.",
  },
  {
    icon: <Binary className="h-5 w-5" />,
    title: "Reproducibility",
    desc: "Locked logic framework. Chapter-level roadmaps with must-teach requirements. Foundry Integrity Ledger with cryptographic identifiers on every block. State-persistent versioning and revert.",
  },
  {
    icon: <ScanSearch className="h-5 w-5" />,
    title: "Traceability",
    desc: "Structural positioning, pedagogical anchoring, statutory and policy mapping, and full provenance and revision intelligence — an immutable connection between output and requirement.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Bounded automation",
    desc: "Automation within boundaries. Humans control input, architecture, quality governance, strategic triggers, and release confirmation. Proprietary Execution Protocols prevent end-to-end automation.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Verifiable delivery",
    desc: "Visible frameworks, controlled revisions, verifiable integrity, deliberate delivery — architected as Verifiable Knowledge Infrastructure rather than as content generation with checks bolted on.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret",
    desc: "The Proprietary Semantic Compiler processes source inputs — subject prompts, documentation, standards, requirements — into formal models. Analytical, not generative.",
  },
  {
    n: "02",
    title: "Structure",
    desc: "The Deterministic Logic Framework establishes the Program Schema: program shape, sequencing logic, instructional mandates, behavioural outcomes, hierarchical order, validation points.",
  },
  {
    n: "03",
    title: "Approve",
    desc: "The Pedagogical Roadmap is reviewed and locked before generation begins. Framework is the single source of truth. Nothing generates until the blueprint is approved.",
  },
  {
    n: "04",
    title: "Generate",
    desc: "Constrained generation compiles content against the locked schema. Automated Validation Gates reference the Roadmap in real time. Output is typed, modular, and hashed.",
  },
  {
    n: "05",
    title: "Verify and release",
    desc: "Foundry Hash on every block. Master Integrity Root on every programme. Multi-Sig release gates. Forensic Revision Chain behind every change.",
  },
];

const faq = [
  {
    q: "What models does the platform use, and how are they governed?",
    a: "Model selection is governed by the Semantic Compiler and constrained by Proprietary Execution Protocols — models operate only inside the framework envelope approved by a human owner. Model architecture is not the differentiator; the constraint architecture around the model is. Specific model configurations are disclosed under mutual non-disclosure for technical evaluation.",
  },
  {
    q: "How does the platform prevent generative drift on long-form programmes?",
    a: "Recursive Contextual Synchronization operates at three levels: intra-lesson (within a lesson), intra-chapter (across lessons in a chapter), and global framework (across the entire programme). Real-time alignment checks reference the Pedagogical Roadmap. Content that does not align to the approved framework does not leave the compiler.",
  },
  {
    q: "Where can we deploy — cloud, on-premise, private tenancy?",
    a: "Multi-tenant SaaS is the default. Single-tenant deployments and dedicated environments are available for enterprise, regulated, and sovereignty-sensitive engagements. Data residency options can be scoped to specific jurisdictions. Detailed deployment topology is provided during technical evaluation.",
  },
  {
    q: "How does hashing actually work at scale?",
    a: "Each discrete content block receives a cryptographic identifier — the Foundry Hash — through the Foundry Integrity Ledger. Block hashes aggregate into a Master Integrity Root at programme level. Verification of the root verifies every block beneath it. The same primitive used in software supply chains and financial ledgers, applied to learning content.",
  },
  {
    q: "What does the API look like?",
    a: "API-first, multi-tenant, covering programme lifecycle operations, block-level access, provenance retrieval, and integrity verification. It is the same interface the platform uses internally. Documentation, OpenAPI specifications, and reference implementations are available under mutual non-disclosure.",
  },
  {
    q: "How do you handle model updates, prompt drift, and reproducibility over time?",
    a: "The Locked Logic Framework and chapter-level roadmaps constrain generation to the approved schema, so upstream model changes do not silently alter output shape. Every generation records the compiler version, model configuration, and framework version used. Reproducibility is a property of the constraint envelope, not of the underlying model.",
  },
  {
    q: "What is the confidentiality posture for technical evaluations?",
    a: "All technical evaluations — architecture walkthroughs, cryptographic protocols, execution protocols, deployment topology — are conducted under a Mutual Non-Disclosure Agreement (mNDA). Architectural Verification and Ledger Documentation are provided for technical, compliance, or accreditation review under the same agreement.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Verification & Trust",
    desc: "Foundry Hash, Master Integrity Root, Forensic Revision Chain — the primitives the architecture rests on.",
    href: "/platform/verification-trust",
  },
  {
    eyebrow: "Adjacent",
    title: "Integrations & delivery",
    desc: "Deployment shapes, export formats, and the API — the interfaces to the architecture described here.",
    href: "/platform/integrations",
  },
  {
    eyebrow: "Downstream",
    title: "Knowledge governance",
    desc: "How architectural guarantees translate into operational discipline at portfolio scale.",
    href: "/platform/knowledge-governance",
  },
];

export default function TechnicalOverviewPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Company · Technical Overview"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Technical Overview", href: "/platform/technical-overview" },
        ]}
        title={
          <>
            For{" "}
            <span className="text-[color:var(--color-forge)]">serious</span>{" "}
            evaluators.
          </>
        }
        lede="This page describes how the Knowledge Foundry behaves and why it produces reliable outputs across diverse domains — without relying on black-box generation. Technical by design; deliberate by construction."
        secondaryCta={{ label: "See it work", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-blueprint.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="This is not a 'write me a course' tool. It is a structured knowledge system."
      >
        <p>
          The platform does not generate free-form material and organise it
          afterward. It treats knowledge structure as a first-class artefact:
          the Proprietary Semantic Compiler interprets inputs into formal
          models; the Deterministic Logic Framework establishes the Program
          Schema before the generative engine is engaged; the framework is
          reviewable and editable before any lesson content exists.
        </p>
        <p>
          Generation begins only when the blueprint is approved. Structure
          remains the single source of truth throughout the programme
          lifecycle, preventing the generative drift that undermines
          long-form, high-stakes content elsewhere.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six architectural principles"
        title="Knowledge-first. Structured. Reproducible. Traceable. Bounded. Verifiable."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How a programme moves through the architecture"
        title="Interpret. Structure. Approve. Generate. Verify and release."
        lede="The sequence is not incidental. Every stage produces artefacts the next stage depends on — and every stage leaves an evidence trail."
        steps={steps}
      />

      <ProseBlock
        eyebrow="The evaluator's advantage"
        title="Visible frameworks. Controlled revisions. Verifiable integrity. Deliberate delivery."
      >
        <p>
          The objective of Knowledge Foundry is not merely the generation of
          instructional content. It is the establishment of a{" "}
          <strong>Verifiable Knowledge Infrastructure</strong>: an architecture
          where every framework is inspectable, every revision is surgical,
          every integrity claim is cryptographic, and every release is a
          deliberate human decision rather than a downstream side effect of
          generation.
        </p>
        <p>
          <strong>Visible frameworks</strong> shorten onboarding and eliminate
          black-box risk. <strong>Controlled revisions</strong> allow surgical
          updates without programme regeneration.{" "}
          <strong>Verifiable integrity</strong> supports statutory and
          accreditation scrutiny. <strong>Deliberate delivery</strong> makes
          release an act of authority, not automation.
        </p>
      </ProseBlock>

      <FAQ title="Technical questions from serious evaluators." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="For technical, compliance, and accreditation evaluators"
        title="Validate the architecture against your environment."
        lede="A technical walkthrough typically covers the Semantic Compiler, Deterministic Logic Framework, cryptographic hashing protocols, block-level traceability, Multi-Sig release gates, and deployment topology. All evaluations under mutual non-disclosure."
        ctaLabel="Request a technical evaluation"
      />
    </>
  );
}
