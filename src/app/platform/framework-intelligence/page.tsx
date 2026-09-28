import type { Metadata } from "next";
import { Compass, Layers3, Network, Target, GitCompareArrows, ShieldCheck } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { HeroTerminal } from "@/components/heros/hero-terminal";

export const metadata: Metadata = {
  alternates: { canonical: "/platform/framework-intelligence" },
  title: "Framework Intelligence. Structure the subject before writing",
  description:
    "Framework Intelligence maps concepts, relationships, progression, and assessment logic. Instruction is written after that, not before. Structure governs everything downstream.",
};

const capabilities = [
  { icon: <Layers3 className="h-5 w-5" />, title: "Concept mapping", desc: "Discrete concepts are extracted from source material, deduplicated across documents, and organised into a working ontology." },
  { icon: <Network className="h-5 w-5" />, title: "Relationship graph", desc: "How concepts depend on, contain, contradict, or supersede each other, modelled explicitly rather than implied by paragraph order." },
  { icon: <Target className="h-5 w-5" />, title: "Assessment logic", desc: "Which concepts must be assessed, at what depth, and with what evidence. All defined as part of the framework, before instruction begins." },
  { icon: <Compass className="h-5 w-5" />, title: "Progression design", desc: "Prerequisite chains and cognitive load are laid down so learners meet concepts in the order the subject actually requires." },
  { icon: <GitCompareArrows className="h-5 w-5" />, title: "Alignment mapping", desc: "Each framework node ties back to a source requirement: a policy clause, a standard, a competency, or an accreditation statement." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Review gates", desc: "Frameworks are proposed by the system and approved by a human owner. Nothing generates until the framework is signed off." },
];

const steps = [
  { n: "01", title: "Ingest source", desc: "Documents, policies, standards, subject matter expert notes, and prior training material are ingested. Formats are normalised. Provenance is retained." },
  { n: "02", title: "Extract requirements", desc: "The system identifies what must be known: concepts, capabilities, behaviours, and decisions. Each requirement is sourced back to the sentence that implies it." },
  { n: "03", title: "Propose framework", desc: "A structured framework is drafted, covering concepts, relationships, progression, and assessment points. Reviewable, editable, and always cited." },
  { n: "04", title: "Human approval", desc: "The framework owner reviews, revises, and approves. Only an approved framework can drive content production downstream." },
];

const faq = [
  {
    q: "How is this different from an authoring tool that just lets me outline a course?",
    a: "Outlining tools capture what an author decides to write about. Framework Intelligence starts one level up. It extracts, from your source material, what must be true for a learner to be competent, and it represents that as a structured, traceable object separate from the instruction that will later teach it. The framework outlives any single course.",
  },
  {
    q: "Do you replace our subject matter experts?",
    a: "No. Framework Intelligence proposes a framework grounded in the source material you provide, and your subject matter expert approves, revises, or rejects it. What changes is what the SME spends their time on. Reviewing structure and edge cases, rather than writing paragraphs.",
  },
  {
    q: "Can we start with an existing training library instead of source documents?",
    a: "Yes, and this is common. The system reads existing training as source, extracts the framework it implies, then compares that framework to your authoritative documents. The gaps between the two are usually the story.",
  },
  {
    q: "What does the framework look like as an artefact?",
    a: "A structured object. Concept nodes, relationship edges, assessment definitions, and provenance links back to source. Readable by humans in the Foundry, and exportable to JSON, XML, or a spreadsheet for review outside the system.",
  },
  {
    q: "Who owns the framework once it is built?",
    a: "You do. The framework and all its versions belong to your organisation. If you leave the platform, you leave with the framework, its provenance, and its evidence.",
  },
];

const related = [
  { eyebrow: "Next in sequence", title: "Gap Analysis", desc: "Compare the approved framework to what already exists in your training library. Find the silent holes.", href: "/platform/gap-analysis" },
  { eyebrow: "Downstream", title: "Remediation", desc: "Once gaps are visible, close them in place, with change history and approvals attached.", href: "/platform/remediation" },
  { eyebrow: "The full journey", title: "Knowledge transformation", desc: "The whole arc from scattered source to a coherent, versioned knowledge system.", href: "/platform/knowledge-transformation" },
];

export default function FrameworkIntelligencePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Capability · Framework Intelligence"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Framework Intelligence", href: "/platform/framework-intelligence" },
        ]}
        title={<>Structure the subject <span className="text-[color:var(--color-forge)]">before</span> writing anything about it.</>}
        lede="Framework Intelligence maps concepts, relationships, progression, and assessment logic. Instruction is written after that, not before. The framework is the object of record. Content is downstream of it."
        secondaryCta={{ label: "See a live framework", href: "/platform/see-it-work" }}
        visual={<HeroTerminal
          title="framework://ingest · aml-ctf-v3.2"
          lines={[
            { text: "> read source: austrac-aml-ctf-2026.pdf", color: "muted" },
            { text: "  extracted: 142 requirements", color: "ok" },
            { text: "> propose framework", color: "muted" },
            { text: "  concepts: 87", color: "ok" },
            { text: "  relationships: 214", color: "ok" },
            { text: "  assessment points: 43", color: "ok" },
            { text: "> await approval", color: "forge" },
            { text: "  reviewer: J. Chen · approved 2026-09-18", color: "ok" },
            { text: "> ready for content generation", color: "forge" },
          ]}
        />}
      />

      <ProseBlock eyebrow="Why this matters" title="The framework is the thing that gets audited.">
        <p>
          When a regulator, an accrediting body, or your own board asks how you know a
          program covers what it should, the answer is not the slide deck. The answer is
          the framework: the object that names every concept the subject requires, every
          assessment that confirms it, and every source that implies it must exist.
        </p>
        <p>
          Without an authored framework, the coverage question has no defensible answer.
          With one, the answer is a file, and the file is testable.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves inside Framework Intelligence"
        title="What the system actually does."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From source material to approved framework."
        lede="Framework Intelligence is a proposal-and-approval loop. The system proposes. A human owner approves. Nothing generates downstream until the framework is signed."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A framework you can review, revise, and defend."
      >
        <p>
          The output is not a slide deck describing what the framework <em>could</em> be.
          It is a structured artefact, inspectable, versionable, and exportable, that
          becomes the source of truth for each downstream activity: content generation,
          gap analysis, verification, and evidence.
        </p>
        <p>
          <strong>Concept nodes</strong> carry definitions, prerequisites, and source citations.
          <strong> Relationships</strong> are typed (depends on, contains, contradicts,
          supersedes). <strong>Assessment points</strong> specify the evidence a learner must
          produce to demonstrate competence. <strong>Provenance</strong> ties each node to
          the source sentence that implies it.
        </p>
      </ProseBlock>

      <FAQ title="How Framework Intelligence works, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a subject"
        title="See your framework build itself."
        lede="Send us a policy, a standard, or a subject you already teach. We spend 45 minutes with the Foundry on your material, and you leave with the framework it produces. Yours to keep."
      />
    </>
  );
}
