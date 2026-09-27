import type { Metadata } from "next";
import {
  GraduationCap,
  ShieldCheck,
  Boxes,
  ClipboardList,
  BadgeCheck,
  Layers,
  Compass,
  FileSearch2,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { HeroLattice } from "@/components/hero-lattice";

export const metadata: Metadata = {
  title: "Programs. Structured learning for the outcomes you are accountable for",
  description:
    "Five program types, one architecture. Educational, compliance, product enablement, operational procedures, and hybrid verification. each governed by an approved framework.",
};

const programs = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Educational programs",
    desc: "Structured subject learning designed to build understanding over time. Progression is deliberate, assessment is integrated, coverage is systematic. not assumed.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Compliance programs",
    desc: "Regulatory and policy requirements translated into structured behavioural instruction. Not awareness. Adherence. measurable, mapped, and defensible under audit.",
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Product enablement",
    desc: "Product documentation transformed into structured mastery. Every capability, dependency, and failure mode is taught in the order the product actually requires.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Operational procedures",
    desc: "Tasks and workflows turned into repeatable execution. Structure governs sequence. Consistency is a property of the system, not a virtue of the operator.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Hybrid verification",
    desc: "Learning combined with capability confirmation. Every objective is paired with a validation mechanism and a defined competency threshold. Confirmed readiness, not exposure.",
  },
];

const shared = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: "One framework discipline",
    desc: "Every program type follows the same architecture: interpret the source, structure the subject, produce instruction, deliver with evidence. The framework is the object of record. content is downstream of it.",
  },
  {
    icon: <FileSearch2 className="h-5 w-5" />,
    title: "Provenance to source",
    desc: "Every module, every assessment, every activity ties back to the sentence in the source material that requires it. When the regulator asks how you know, the answer is a file.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Variants from one asset",
    desc: "A single approved framework can produce multiple tailored programs. by role, cohort, jurisdiction, or delivery mode. without re-authoring the underlying knowledge.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret",
    desc: "The system reads your source material. policies, standards, subject documents, SME notes. and extracts what must be known.",
  },
  {
    n: "02",
    title: "Structure",
    desc: "A framework is authored. Concepts, dependencies, progression, and assessment logic are defined before any instruction is written.",
  },
  {
    n: "03",
    title: "Produce",
    desc: "Instruction, activities, and verification are generated to match the framework. Every element traces back to a requirement in the source.",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "The program is reviewable, standards-aligned, and audit-ready. Full evidence trail. Ongoing governance built in.",
  },
];

const faq = [
  {
    q: "Can we run more than one program type from the same source material?",
    a: "Yes. A single approved framework can produce a compliance program for the whole workforce, an operational procedure for frontline execution, and a hybrid verification track for accredited roles. without duplicating the underlying knowledge. When the source changes, all downstream programs update against the same governance chain.",
  },
  {
    q: "How is a compliance program different from an educational program in the Foundry?",
    a: "Both start with a framework. Compliance programs bias the framework toward behavioural outcomes tied to regulatory clauses and role responsibilities. Educational programs bias toward cognitive progression and Bloom-aligned assessment. The architecture is the same. The lens on the framework differs.",
  },
  {
    q: "Do we have to build every program type at once?",
    a: "No. Most engagements begin with the single program type carrying the most risk. usually compliance or hybrid verification. Framework Intelligence and Gap Analysis extend across the rest of your library as it becomes ready.",
  },
  {
    q: "What if our current programs sit in an LMS we cannot replace?",
    a: "The Foundry is designed to sit alongside your LMS, not replace it. Programs produced here export in SCORM, xAPI, and structured packages, and can be published into most enterprise learning environments. The Foundry becomes your source of truth. The LMS remains your delivery layer.",
  },
  {
    q: "Who reviews the program before it goes live?",
    a: "Your framework owner and subject-matter reviewers. Nothing generates without an approved framework, and nothing releases without human sign-off at defined gates. The system proposes; the organisation approves.",
  },
];

export default function ProgramsIndexPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Programs"
        breadcrumb={[{ label: "Programs", href: "/programs" }]}
        title={
          <>
            Different outcomes. One <span className="text-[color:var(--color-forge)]">structural</span> discipline.
          </>
        }
        lede="Five program types — each purpose-built for the outcomes an enterprise is accountable for. Each governed by an approved framework, each traceable to source, each reviewable at block level before delivery."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<HeroLattice className="w-full aspect-square max-w-[480px] mx-auto" />}
      />

      <ProseBlock eyebrow="How to read this" title="The program follows the framework. Not the author.">
        <p>
          Most learning platforms ask you to choose a template, then fill it with content.
          The Foundry inverts that. You define what must be understood, verified, or performed —
          and the program is generated to fit. What changes between program types is not the
          architecture, but the shape of the outcome the framework encodes.
        </p>
        <p>
          Educational programs privilege cognitive progression. Compliance programs privilege
          behavioural adherence to regulatory clauses. Product enablement privileges correct
          use under dependency. Operational procedures privilege repeatable execution. Hybrid
          verification privileges demonstrable capability. Same discipline. Different centre of gravity.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Five program types"
        title="Purpose-built for what the organisation is accountable for."
        features={programs}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How every program is built"
        title="Interpret. Structure. Produce. Deliver."
        lede="The sequence is not incidental. Reverse it and you produce content nobody can defend when the regulator, the accreditor, or the board asks how it maps to the source."
        steps={steps}
      />

      <FeatureGrid
        eyebrow="What every program inherits"
        title="Shared discipline. Different centres of gravity."
        features={shared}
        columns={3}
        tone="warm"
      />

      <FAQ title="How the program library works." items={faq} />

      <CtaBand
        eyebrow="Bring a subject"
        title="See the framework build itself."
        lede="A 45-minute working session on a real programme you own. You watch the Foundry interpret, structure, and produce — and you keep the framework it creates."
      />
    </>
  );
}
