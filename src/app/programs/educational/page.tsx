import type { Metadata } from "next";
import {
  Compass,
  Layers3,
  Network,
  Target,
  BookOpen,
  GaugeCircle,
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
  alternates: { canonical: "/programs/educational" },
  title: "Educational programs and curricula",
  description:
    "Subjects mapped into structured curricula with deliberate progression, integrated assessment and systematic coverage. Each module traces to a defined outcome.",
};

const capabilities = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Subject boundaries",
    desc: "What is in scope, what is out, and where the edges of the subject sit, defined explicitly so authors, reviewers, and learners are working from the same foundation.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "Prerequisite chains",
    desc: "Dependencies between concepts are modeled, not implied. Learners meet material in the order the subject actually requires, rather than in the order a paragraph happens to arrive.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Progression aligned to Bloom",
    desc: "Each structural block is tagged to a cognitive level, from remember through create, so difficulty is matched to the learner's stage of mastery rather than to the author's assumption.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Integrated assessment",
    desc: "Assessment points are defined inside the framework, not appended after content. Each check is traceable to a learning objective and a required level of competency.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Variants for many cohorts",
    desc: "One approved framework produces tailored editions for age cohorts, professional levels, or accreditation streams, without reauthoring the underlying knowledge.",
  },
  {
    icon: <GaugeCircle className="h-5 w-5" />,
    title: "Standards alignment",
    desc: "Where the subject sits under a syllabus or accreditation regime, framework nodes tie back to the specific outcome statements the program is accountable for.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the subject",
    desc: "Source material (syllabi, textbooks, subject matter expert notes, prior curriculum) is read for the concepts, dependencies, and competencies it implies.",
  },
  {
    n: "02",
    title: "Construct the framework",
    desc: "A structured curriculum is proposed: sections, modules, subtopics, learning objectives, and assessment points aligned to Bloom. Editable before any lesson is written.",
  },
  {
    n: "03",
    title: "Generate instruction",
    desc: "Once the educator approves the framework, instructional material is produced to fit. Lessons, activities, worked examples, formative and summative assessment.",
  },
  {
    n: "04",
    title: "Review and refine",
    desc: "Each block is inspectable and independently editable. Educators refine at the sentence level without regenerating the program. Each revision is versioned.",
  },
];

const faq = [
  {
    q: "How does this differ from a curriculum authoring tool?",
    a: "Authoring tools capture what an author decides to write. The Foundry starts one level up. It extracts from your source material what a learner must understand to be competent, and represents that as a structured framework separate from the lessons that will later teach it. The framework outlives any single course, revision, or author.",
  },
  {
    q: "Can we align to a formal syllabus, such as Common Core, GCSE, HSC, or a national curriculum?",
    a: "Yes. The framework can carry alignment metadata against any syllabus expressed as outcomes. Each module and assessment point traces back to the specific outcome statement it is teaching, so accreditation review becomes a report rather than a rebuild.",
  },
  {
    q: "What role does the educator play?",
    a: "The educator owns the framework. The system proposes structure and drafts instruction. The educator reviews, revises, and approves. What changes is what the educator spends time on: subject judgment and edge cases, not paragraph writing.",
  },
  {
    q: "Does it work for both foundational and highly specialized subjects?",
    a: "Yes. The system is agnostic to subject. Whether the material is primary literacy or advanced clinical diagnostics, the underlying discipline is the same: define structure, then generate instruction to fit. What varies is the depth and vocabulary of the framework.",
  },
  {
    q: "Can we produce multiple versions of the same program for different cohorts?",
    a: "Yes. One approved framework can generate variants for different age groups, prior experience levels, or industry contexts. The knowledge structure remains constant. The instructional expression adapts to the audience.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Framework Intelligence",
    desc: "The capability that maps the subject before instruction is written. Each educational program begins here.",
    href: "/platform/framework-intelligence",
  },
  {
    eyebrow: "Adjacent",
    title: "Hybrid verification",
    desc: "Where educational programs need demonstrable capability (certification pathways, applied competency), verification pairs with instruction.",
    href: "/programs/hybrid-verification",
  },
  {
    eyebrow: "Sector",
    title: "Higher education",
    desc: "Course architecture aligned to institutional quality standards, with outcome mapping and defensible accreditation evidence.",
    href: "/industries/higher-education",
  },
];

export default function EducationalProgramsPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Program · Educational"
        breadcrumb={[
          { label: "Programs", href: "/programs" },
          { label: "Educational", href: "/programs/educational" },
        ]}
        title={
          <>
            Educational programs built on structure <span className="text-[color:var(--color-forge)]">rather</span> than slides.
          </>
        }
        lede="The Foundry transforms subjects into structured learning systems aligned to progression, comprehension, and measurable competency. Educators focus on judgment. The system holds the architecture."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<AnimatedEditorial src="editorial-education.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock eyebrow="Why this matters" title="The focus is cognitive progression, not content volume.">
        <p>
          Educational programs are designed to move learners beyond simple awareness toward
          applied competency. That requires a subject to be mapped before it is written about.
          Concepts named, dependencies modeled, assessment points defined. Without that
          structure, coverage becomes an accident of who authored what, and progression becomes
          incidental to the order material happened to arrive.
        </p>
        <p>
          The Foundry treats the curriculum as the object of record. Instruction is downstream
          of it. The result is programs where each module ties to a defined outcome, each
          assessment ties to a required competency, and each change is versioned against a
          framework the educator has approved.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves inside educational programs"
        title="What the framework does for the subject."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From subject matter to structured curriculum."
        lede="Structure precedes instruction. Only once the educator has approved the framework does the system generate the material that will teach it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A curriculum you can defend to an accreditor."
      >
        <p>
          The output is not another slide deck. It is a structured curriculum artifact,
          inspectable, versioned, and exportable, where each module carries provenance to the
          source it teaches and each assessment carries provenance to the outcome it validates.
        </p>
        <p>
          When an accreditor asks how the program covers a syllabus outcome, the answer is
          not a promise. It is a map, and the map is testable.
        </p>
      </ProseBlock>

      <FAQ title="How educational programs work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a subject"
        title="See your curriculum structure itself."
        lede="Send us a syllabus, a subject document, or a course you already teach. In the 45 minutes we spend with the Foundry on your material, you leave with the framework it produces. Yours to keep."
      />
    </>
  );
}
