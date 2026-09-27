import type { Metadata } from "next";
import {
  GraduationCap,
  BookOpen,
  Layers3,
  Target,
  ClipboardCheck,
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
  title: "Higher Education — TEQSA-aligned course architecture with defensible outcomes",
  description:
    "Course architecture aligned to the Higher Education Standards Framework. Constructive alignment, outcome mapping, and accreditation evidence produced by design.",
};

const capabilities = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "TEQSA-aligned architecture",
    desc: "Course and unit structure aligned to the Higher Education Standards Framework — with design, delivery, assessment, and monitoring encoded as framework properties, not narrative claims.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Constructive alignment",
    desc: "Learning outcomes, teaching activities, and assessment tasks explicitly linked at the framework level. Constructive alignment is not asserted in a course handbook; it is structurally enforced.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "AQF-level progression",
    desc: "Cognitive demand aligned to AQF level and course learning outcomes. Bloom-aligned progression is defined at the framework, so subject-level assessment is defensible against course-level claims.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Course-review evidence",
    desc: "For internal course review, external referencing, and TEQSA re-registration, coverage, mapping, and assessment evidence exports in a coherent, versioned form ready for panel scrutiny.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Professional-accreditation mapping",
    desc: "Where a course carries professional accreditation — engineering, psychology, nursing, accounting — the framework encodes accreditor competency requirements alongside institutional outcomes.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Change with provenance",
    desc: "When a subject, a course, or a standard changes, the framework diffs against the new source and surfaces every affected outcome, activity, and assessment — with revision history intact.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the course",
    desc: "Course learning outcomes, subject outlines, AQF requirements, and professional accreditation criteria are ingested and parsed against the Higher Education Standards Framework.",
  },
  {
    n: "02",
    title: "Structure the architecture",
    desc: "A structured course-and-subject framework is proposed: outcomes, activities, assessment, and mapping to AQF level and professional accreditation criteria where relevant.",
  },
  {
    n: "03",
    title: "Construct with academic sign-off",
    desc: "The academic unit and course coordinator review and approve the framework. Instruction, activities, and assessment are generated only against an approved architecture.",
  },
  {
    n: "04",
    title: "Evidence for accreditation",
    desc: "Constructive-alignment mapping, cohort assessment evidence, and change history export for internal course review, external referencing, and TEQSA re-registration.",
  },
];

const faq = [
  {
    q: "How does this fit with our internal course-review and quality-assurance processes?",
    a: "The Foundry produces frameworks that make course review a data exercise rather than a narrative one. Constructive alignment, outcome mapping, and assessment coverage are exportable per subject, per course, per cohort. Internal review panels receive a structured artefact rather than a bundle of subject outlines to compare by hand.",
  },
  {
    q: "Can the framework encode both institutional and professional-accreditation outcomes?",
    a: "Yes. Where a course carries professional accreditation — Engineers Australia, Australian Psychology Accreditation Council, the accountancy bodies, ANMAC — the framework can encode accreditor competency requirements alongside institutional graduate outcomes. Coverage against both is measurable and exportable.",
  },
  {
    q: "How does the platform support TEQSA re-registration or course accreditation cycles?",
    a: "Frameworks encode alignment to the Higher Education Standards Framework, and evidence — design, delivery, assessment, monitoring — accumulates by design rather than being manufactured at cycle time. When re-registration approaches, the artefact you present is a framework with clause-level coverage, not a defence reconstructed from disparate sources.",
  },
  {
    q: "Does the platform claim TEQSA registration or accreditation of its own?",
    a: "No. The Foundry is a system for structuring courses and evidencing outcomes; the institution remains the accredited provider. The platform produces evidence structured against the Higher Education Standards Framework, but does not represent itself as a TEQSA-accredited entity.",
  },
  {
    q: "Can this handle both undergraduate and postgraduate coursework, including research components?",
    a: "The framework model applies to any coursework structure with defined learning outcomes and assessment. Research components with outcome statements can be encoded; purely dissertation-based research work sits outside the frame the platform is designed for.",
  },
];

const related = [
  {
    eyebrow: "Program",
    title: "Educational programs",
    desc: "The program model for structured subject learning aligned to progression, comprehension, and measurable competency.",
    href: "/programs/educational",
  },
  {
    eyebrow: "Capability",
    title: "Standards & accreditation",
    desc: "How alignment to external standards — including the Higher Education Standards Framework and professional accreditation criteria — is treated as a first-class output.",
    href: "/platform/standards-accreditation",
  },
  {
    eyebrow: "Capability",
    title: "Knowledge governance",
    desc: "The platform capability that governs ownership, review cadences, and drift detection across course lifecycle.",
    href: "/platform/knowledge-governance",
  },
];

export default function HigherEducationPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Industry · Higher Education"
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: "Higher education", href: "/industries/higher-education" },
        ]}
        title={
          <>
            Constructive alignment as a <span className="text-[color:var(--color-forge)]">structural</span> property.
          </>
        }
        lede="Course architecture aligned to the Higher Education Standards Framework. Outcomes, activities, and assessment linked at the framework level. Evidence for TEQSA and professional accreditation produced by design."
        secondaryCta={{ label: "See educational programs", href: "/programs/educational" }}
        visual={<AnimatedEditorial src="editorial-education.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Accreditation cycles audit the design as much as the delivery."
      >
        <p>
          Internal course review, external referencing, professional accreditation, and TEQSA
          re-registration all ask a shared question: can the institution demonstrate that
          learning outcomes, teaching activities, and assessment tasks are aligned — not
          asserted to be aligned, but structurally connected? A subject outline does not answer
          that question. A framework, a mapping matrix, and a versioned change record do.
        </p>
        <p>
          The Foundry treats the Higher Education Standards Framework, the AQF, and professional
          accreditation criteria as sources of structural obligation. Course frameworks encode
          the required alignment. Subject-level material generates against it. Evidence
          accumulates by design.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves for higher education"
        title="Course architecture, defensible by construction."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From course intent to accreditation evidence."
        lede="Structure precedes instruction. Only once the academic unit and course coordinator have approved the framework does the platform generate the material and assessment that satisfies it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Evidence a TEQSA panel or accreditation body will accept without follow-up."
      >
        <p>
          Frameworks aligned to the Higher Education Standards Framework and AQF. Course
          architectures where constructive alignment is a structural property, not a claim.
          Professional accreditation mapping produced alongside institutional outcomes.
          Change history intact across cycles.
        </p>
        <p>
          When the panel arrives, the artefact you present is a framework — not a case
          reassembled from subject outlines the night before.
        </p>
      </ProseBlock>

      <FAQ title="How higher education engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a course"
        title="See your course architecture take shape."
        lede="Send us a course document, a subject outline, or an accreditation criterion set. In 45 minutes on your material, you leave with the framework the Foundry produces — yours to keep."
      />
    </>
  );
}
