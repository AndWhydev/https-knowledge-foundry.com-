import type { Metadata } from "next";
import {
  Scale,
  BookMarked,
  Ruler,
  Award,
  Settings2,
  Repeat,
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
  title: "Standards & Accreditation Alignment. Turn requirements into capability",
  description:
    "ISO, regulatory frameworks, competency models, accreditation criteria, and proprietary methodologies become structured, testable coverage, clause by clause. Alignment is explicit. Gaps are visible.",
};

const capabilities = [
  {
    icon: <Scale className="h-5 w-5" />,
    title: "ISO standards",
    desc: "ISO 9001, 27001, 45001, and beyond. Decomposed to clause resolution and mapped to the framework nodes that must satisfy them.",
  },
  {
    icon: <BookMarked className="h-5 w-5" />,
    title: "Regulatory requirements",
    desc: "Legislative, industry, and sector specific obligations are parsed into measurable criteria, with traceable lineage from clause to lesson.",
  },
  {
    icon: <Ruler className="h-5 w-5" />,
    title: "Competency frameworks",
    desc: "Capability and role models mapping skills, knowledge, behaviours, and performance criteria, aligned to assessment logic in the framework.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Accreditation criteria",
    desc: "Formal certification, registration, or licensing requirements are treated as first class inputs, not compliance afterthoughts.",
  },
  {
    icon: <Settings2 className="h-5 w-5" />,
    title: "Proprietary frameworks",
    desc: "Bespoke internal methodologies, operational models, or subject matter architectures ingest and align the same way as external standards.",
  },
  {
    icon: <Repeat className="h-5 w-5" />,
    title: "Harmonising many standards",
    desc: "SOP plus ISO 9001 plus ISO 27001 in one programme. Conflicts, overlaps, and redundancies are surfaced explicitly rather than hidden.",
  },
];

const steps = [
  {
    n: "01",
    title: "Standard",
    desc: "The source requirement, whether an external framework, an internal competency model, a certification guideline, or an organisational methodology, is ingested with provenance.",
  },
  {
    n: "02",
    title: "Framework",
    desc: "Requirements are parsed into a structured blueprint. Clauses become nodes. Nodes become reviewable, refinable, and testable.",
  },
  {
    n: "03",
    title: "Outcomes",
    desc: "Learning outcomes forge an explicit connection between the requirement and the capability the learner must demonstrate.",
  },
  {
    n: "04",
    title: "Assessments",
    desc: "Validation checkpoints are engineered alongside outcomes rather than appended afterward. Assessment covers what the standard obliges.",
  },
  {
    n: "05",
    title: "Verification",
    desc: "Continuous audit mechanisms track asset alignment against the intended baseline. Drift is detected before it is exposed.",
  },
];

const faq = [
  {
    q: "We already have a compliance matrix in a spreadsheet. Why replace it?",
    a: "You do not have to. Alignment output is exportable to the same spreadsheet formats your compliance team already uses. What Knowledge Foundry adds is that each row in that spreadsheet is now backed by traceable evidence, hashed content, and an approver, rather than someone's memory of where the phrase 'access control' appeared in a course.",
  },
  {
    q: "How does clause level mapping actually work?",
    a: "The Semantic Compiler decomposes each standard into its testable clauses. Framework nodes are then mapped to those clauses, many to many where necessary. When content is produced against a framework node, it inherits the clause references. Each lesson block can be traced upward to the specific clause it exists to satisfy.",
  },
  {
    q: "Can you handle overlapping standards without duplicate content?",
    a: "Yes. Harmonising many standards is a first class capability. When ISO 9001 and ISO 27001 both require a control that maps to the same framework node, the content satisfies both. Redundancies are surfaced. Conflicts are flagged for human resolution rather than silently reconciled.",
  },
  {
    q: "What happens when a standard is revised, for example ISO 27001:2022 replacing 2013?",
    a: "The new version is ingested. The system compares clause by clause against the previous version and identifies what changed, what was added, and what was superseded. Each framework node and content block that referenced the old clause is flagged for review. You decide what to regenerate.",
  },
  {
    q: "Do you cover regional or sector specific standards, or only the well known ones?",
    a: "Any structured requirement can be ingested. International, national, sector specific, or proprietary. The compiler treats a state safety regulation the same way it treats ISO 45001. What matters is that the source is structured. The source of the structure does not.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Framework Intelligence",
    desc: "Standards become alignable only when the framework they align to is authored first.",
    href: "/platform/framework-intelligence",
  },
  {
    eyebrow: "Adjacent",
    title: "Gap analysis",
    desc: "The engine that measures existing content against selected standards, clause by clause.",
    href: "/platform/gap-analysis",
  },
  {
    eyebrow: "Downstream",
    title: "Audit & evidence",
    desc: "Alignment is only useful if it is exportable and defensible. This is how you prove it.",
    href: "/platform/audit-evidence",
  },
];

export default function StandardsAccreditationPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Governance · Standards & Accreditation"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Standards & Accreditation", href: "/platform/standards-accreditation" },
        ]}
        title={
          <>
            Alignment is{" "}
            <span className="text-[color:var(--color-forge)]">explicit</span>.
            Gaps are visible.
          </>
        }
        lede="Standards, competency frameworks, accreditation criteria, and organisational methodologies provide structure. Transforming those requirements into meaningful, verifiable learning is where most programmes fail. This is where they hold up."
        secondaryCta={{ label: "See it work", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-standards.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Standards are written for auditors. Learning is written for people. The gap between them is where risk lives."
      >
        <p>
          Most standards were never designed for learning. They exist to
          establish structural requirements, operational controls, and
          performance criteria for audit, not to teach anyone. When
          organisations translate them into training, interpretation drift is
          almost guaranteed. Different authors emphasise different clauses,
          reviewers second guess each other, and the connection between
          requirement and instruction becomes impossible to defend.
        </p>
        <p>
          Knowledge Foundry closes that translation gap.{" "}
          <strong>Requirements are parsed at the resolution of a clause</strong>.
          Framework nodes are mapped to clauses explicitly. Each downstream
          lesson can be traced back to the specific clause it exists to satisfy,
          and forward to the assessment that demonstrates competence in it.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six supported alignment types"
        title="External standards and internal frameworks, treated equivalently."
        lede="ISO, regulatory, competency, accreditation, or proprietary. The platform ingests each as structured input and treats each as a first class constraint."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="From standard to verified capability"
        title="Standard. Framework. Outcomes. Assessments. Verification."
        lede="Alignment is not a one off audit. It is a continuous lifecycle. Reviewed, validated, enhanced, and improved as requirements evolve."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A living alignment matrix, not a snapshot spreadsheet."
      >
        <p>
          The output is not a static compliance document that ages the moment
          it is signed. It is a living object. Standard on one axis, framework
          and content on the other, evidence in each cell, provenance behind
          each claim.
        </p>
        <p>
          <strong>Coverage becomes systematic</strong>, not assumed.{" "}
          <strong>Alignment becomes explicit</strong>, not interpretive.{" "}
          <strong>Traceability becomes forensic</strong>, not anecdotal. When a
          regulator asks how the programme satisfies clause 7.5.3, the answer
          is a report. And the report is testable.
        </p>
      </ProseBlock>

      <FAQ
        title="How Standards & Accreditation Alignment works, in detail."
        items={faq}
      />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring us a standard"
        title="See alignment on your own material."
        lede="Send us a standard, a competency framework, or an accreditation you must meet, along with a course that should already satisfy it. We spend 45 minutes with the Foundry, and you leave with the alignment report. Yours to keep."
      />
    </>
  );
}
