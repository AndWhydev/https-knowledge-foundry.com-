import type { Metadata } from "next";
import Link from "next/link";
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
  alternates: { canonical: "/industries/higher-education" },
  title: "Higher education course architecture",
  description:
    "Course architecture aligned to institutional quality standards, with constructive alignment, outcome mapping and accreditation evidence.",
};

const capabilities = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Architecture aligned to quality standards",
    desc: "Course and unit structure aligned to institutional quality standards (the European Standards and Guidelines and A3ES in Portugal, US institutional accreditors, NIAD-QE in Japan, the Higher Education Standards Framework in Australia, the CAA in the UAE), with design, delivery, assessment, and monitoring encoded as framework properties, not narrative claims.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Constructive alignment",
    desc: "Learning outcomes, teaching activities, and assessment tasks explicitly linked at the framework level. Constructive alignment is not asserted in a course handbook. It is structurally enforced.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Progression aligned to qualification level",
    desc: "Cognitive demand aligned to qualification framework level (the EQF and national frameworks such as the QNQ in Portugal, the AQF, or another national equivalent) and course learning outcomes. Progression aligned to Bloom is defined at the framework, so assessment at subject level is defensible against course level claims.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Evidence for course review",
    desc: "For internal course review, external referencing, and institutional reaccreditation, coverage, mapping, and assessment evidence exports in a coherent, versioned form ready for panel scrutiny.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Mapping to professional accreditation",
    desc: "Where a course carries professional accreditation (engineering, psychology, nursing, accounting) the framework encodes accreditor competency requirements alongside institutional outcomes.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Change with provenance",
    desc: "When a subject, a course, or a standard changes, the framework diffs against the new source and surfaces each affected outcome, activity, and assessment, with revision history intact.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the course",
    desc: "Course learning outcomes, subject outlines, qualification framework requirements, and professional accreditation criteria are ingested and parsed against the applicable institutional quality standards.",
  },
  {
    n: "02",
    title: "Structure the architecture",
    desc: "A structured course and subject framework is proposed: outcomes, activities, assessment, and mapping to qualification level and professional accreditation criteria where relevant.",
  },
  {
    n: "03",
    title: "Construct with academic sign off",
    desc: "The academic unit and course coordinator review and approve the framework. Instruction, activities, and assessment are generated only against an approved architecture.",
  },
  {
    n: "04",
    title: "Evidence for accreditation",
    desc: "Constructive alignment mapping, cohort assessment evidence, and change history export for internal course review, external referencing, and institutional reaccreditation.",
  },
];

const faq = [
  {
    q: "How does this fit with our internal course review and quality assurance processes?",
    a: "The Foundry produces frameworks that make course review a data exercise rather than a narrative one. Constructive alignment, outcome mapping, and assessment coverage are exportable per subject, per course, per cohort. Internal review panels receive a structured artifact rather than a bundle of subject outlines to compare by hand.",
  },
  {
    q: "Can the framework encode both institutional and professional accreditation outcomes?",
    a: "Yes. Where a course carries professional accreditation (EUR-ACE, ABET, or Engineers Australia for engineering, AACSB for business, the accountancy bodies, national nursing and psychology accreditors) the framework can encode accreditor competency requirements alongside institutional graduate outcomes. Coverage against both is measurable and exportable.",
  },
  {
    q: "How does the platform support institutional reaccreditation or course accreditation cycles?",
    a: "Frameworks encode alignment to the applicable quality standards, whether from the European Standards and Guidelines and A3ES, a US institutional accreditor, NIAD-QE, TEQSA, or the CAA, and evidence (design, delivery, assessment, monitoring) accumulates by design rather than being manufactured at cycle time. When reaccreditation approaches, the artifact you present is a framework with coverage at the level of the clause, not a defense reconstructed from disparate sources.",
  },
  {
    q: "Does the platform claim registration or accreditation of its own?",
    a: "No. The Foundry is a system for structuring courses and evidencing outcomes. The institution remains the accredited provider. The platform produces evidence structured against the applicable quality standards, but does not represent itself as an accredited or registered higher education provider.",
  },
  {
    q: "Can this handle both undergraduate and postgraduate coursework, including research components?",
    a: "The framework model applies to any coursework structure with defined learning outcomes and assessment. Research components with outcome statements can be encoded. Purely dissertation based research work sits outside the frame the platform is designed for.",
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
    desc: "How alignment to external standards (including institutional quality standards and professional accreditation criteria) is treated as a first class output.",
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
        lede="Course architecture aligned to institutional quality standards. Outcomes, activities, and assessment linked at the framework level. Evidence for institutional and professional accreditation produced by design."
        secondaryCta={{ label: "See educational programs", href: "/programs/educational" }}
        visual={<AnimatedEditorial src="editorial-education.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Accreditation cycles audit the design as much as the delivery."
      >
        <p>
          Internal course review, external referencing, professional accreditation, and
          institutional reaccreditation all ask a shared question. Can the institution demonstrate that
          learning outcomes, teaching activities, and assessment tasks are aligned, not
          asserted to be aligned, but structurally connected? A subject outline does not answer
          that question. A framework, a mapping matrix, and a versioned change record do.
        </p>
        <p>
          The Foundry treats institutional quality standards, qualification frameworks, and
          professional accreditation criteria as sources of structural obligation. Course frameworks encode
          the required alignment. Subject level material generates against it. Evidence
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
        title="Evidence an accreditation panel will accept without follow up."
      >
        <p>
          Frameworks aligned to institutional quality standards and qualification frameworks. Course
          architectures where constructive alignment is a structural property, not a claim.
          Mapping to professional accreditation produced alongside institutional outcomes.
          Change history intact across cycles.
        </p>
        <p>
          When the panel arrives, the artifact you present is a framework, not a case
          reassembled from subject outlines the night before.
        </p>
        <p>
          Plain language guides to instruments that often sit in scope:{" "}
          <Link href="/regulations/gdpr-staff-training-requirements">GDPR staff training</Link>,{" "}
          <Link href="/regulations/eu-ai-act-ai-literacy">EU AI Act AI literacy</Link>,{" "}
          <Link href="/regulations/japan-ai-guidelines-for-business-training">the Japan AI Guidelines for Business</Link>,{" "}
          <Link href="/regulations/teqsa-hesf-course-design-requirements">the Higher Education Standards Framework</Link>, and{" "}
          <Link href="/regulations/aqf-levels-and-learning-outcomes">AQF levels and learning outcomes</Link>.
        </p>
      </ProseBlock>

      <FAQ title="How higher education engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a course"
        title="See your course architecture take shape."
        lede="Send us a course document, a subject outline, or an accreditation criterion set. In 45 minutes on your material, you leave with the framework the Foundry produces. Yours to keep."
      />
    </>
  );
}
