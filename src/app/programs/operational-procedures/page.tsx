import type { Metadata } from "next";
import {
  ClipboardList,
  ListOrdered,
  GitBranch,
  AlertOctagon,
  CheckCircle2,
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
  alternates: { canonical: "/programs/operational-procedures" },
  title: "Operational procedures training",
  description:
    "Tasks, workflows and procedures turned into repeatable, verifiable execution. Structure governs sequence, so consistency rests with the system.",
};

const capabilities = [
  {
    icon: <ListOrdered className="h-5 w-5" />,
    title: "Sequenced steps",
    desc: "Required steps, order, and required inputs are extracted from source procedures and modelled explicitly. No assumed prior experience. No missed prerequisites.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Conditional pathways",
    desc: "Decision points and their downstream branches are captured as first class elements. The procedure knows what to do when conditions diverge, and teaches it.",
  },
  {
    icon: <AlertOctagon className="h-5 w-5" />,
    title: "Stages sensitive to error",
    desc: "Failure risks and stages prone to error are surfaced during framework construction and reinforced with proportional emphasis in the generated guidance.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Validation checkpoints",
    desc: "Step confirmation, scenario testing, and completion checks are built into the procedure rather than appended afterwards. Performance is measured against defined outcomes.",
  },
  {
    icon: <Repeat className="h-5 w-5" />,
    title: "Repeatability across teams",
    desc: "The same procedure produces the same outcome whether performed once, daily, across shifts, or across sites. Consistency is anchored in the framework, not in the operator.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Standards mapping",
    desc: "Where procedures sit under a formal regime (OSHA, HACCP, GMP, ISO 45001) steps and validation checkpoints tie back to the specific clause they satisfy.",
  },
];

const steps = [
  {
    n: "01",
    title: "Define the task",
    desc: "The task or objective is scoped: what is being performed, by whom, under what conditions, and what defines a completed outcome.",
  },
  {
    n: "02",
    title: "Extract structure",
    desc: "Required steps, materials, decision points, dependencies, and failure risks are extracted from source SOPs, subject matter expert input, or a combination of both.",
  },
  {
    n: "03",
    title: "Construct the framework",
    desc: "Sequential modules, conditional pathways, reinforcement checkpoints, and completion validation are proposed as a structured procedure. Approved before generation.",
  },
  {
    n: "04",
    title: "Generate guided instruction",
    desc: "Instruction is produced to fit the framework: clear step progression, visual aids where useful, integrated validation, and revisions under version control.",
  },
];

const faq = [
  {
    q: "How is this different from a standard SOP document?",
    a: "An SOP document is a static artefact. When conditions change, the document does not know. The Foundry treats the procedure as a structured object (steps, dependencies, decision points, validation) and generates guided instruction from it. When the source changes, the affected steps regenerate. When the operator performs the procedure, validation is measurable, not assumed.",
  },
  {
    q: "Can this cover safety critical procedures under OSHA, HACCP, or ISO 45001?",
    a: "Yes. Steps and validation checkpoints carry provenance to the specific standard clause they satisfy. Under audit, the procedure defends itself against the standard, not against a reviewer's memory of what the SOP was supposed to say.",
  },
  {
    q: "What about procedures that vary by site or shift?",
    a: "One approved framework can carry variants specific to a site or shift without duplicating the underlying procedure. Where a step differs (say, equipment specific to a site) the variant is a branch on the framework, not a fork of the entire document. Governance stays in one place.",
  },
  {
    q: "How does the platform capture procedures that only exist as tribal knowledge?",
    a: "The framework construction phase supports capture driven by an SME as well as document ingestion. The system proposes a structural draft based on interviews or observations. The SME reviews, corrects, and approves. What was previously implicit becomes an inspectable, versionable artefact.",
  },
  {
    q: "Can the same procedure produce learning material for training and quick reference material for operators?",
    a: "Yes. From one approved framework the system generates full training programmes for new operators and condensed reference formats for experienced ones. The knowledge structure is identical. The instructional expression adapts to the use.",
  },
];

const related = [
  {
    eyebrow: "Adjacent",
    title: "Hybrid verification",
    desc: "Where operational procedures require demonstrable capability (competency sign off, verified execution) verification pairs with the procedure framework.",
    href: "/programs/hybrid-verification",
  },
  {
    eyebrow: "Adjacent",
    title: "Product enablement",
    desc: "Where procedures are tied to a specific product or piece of equipment, product enablement extends the framework to the product itself.",
    href: "/programs/product-enablement",
  },
  {
    eyebrow: "Sector",
    title: "Energy & resources",
    desc: "Safety critical operations, verification based on competency, and procedure evidence aligned to ISO 45001.",
    href: "/industries/energy-resources",
  },
];

export default function OperationalProceduresPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Program · Operational Procedures"
        breadcrumb={[
          { label: "Programs", href: "/programs" },
          { label: "Operational procedures", href: "/programs/operational-procedures" },
        ]}
        title={
          <>
            Knowing is <span className="text-[color:var(--color-forge)]">not</span> the same as doing.
          </>
        }
        lede="The Foundry transforms tasks, workflows, and procedures into structured instruction aligned to clarity, repeatability, and measurable execution. Structure governs execution."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<AnimatedEditorial src="editorial-infrastructure.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock eyebrow="Why this matters" title="Instructions alone do not guarantee correct performance.">
        <p>
          Operational learning too often relies on watching someone else, reading informal
          instructions, or repetition based on memory. The result is missed steps, incorrect
          sequencing, inconsistent results, and quiet dependence on the prior experience of
          individual operators. When that experience walks out the door, the procedure walks
          out with it.
        </p>
        <p>
          The Foundry treats the procedure as a structured object. Steps, dependencies,
          decision points, failure risks, validation. Instruction is generated to fit that
          structure so execution becomes a property of the system, not a virtue of the operator.
          Consistency stops being aspirational and becomes measurable.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves inside operational procedures"
        title="From activity to structured execution."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="Define. Extract. Structure. Generate."
        lede="Only once the framework is validated is instructional content generated. Structure governs execution. Execution governs outcome."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Execution is no longer a variable."
      >
        <p>
          Organisations gain consistent results, reduced error rates, faster skill transfer, and
          reduced dependency on informal knowledge. Individuals gain clear step progression,
          reduced confusion, increased confidence, and improved accuracy. Neither depends on who
          happens to be on shift.
        </p>
        <p>
          The outcome is not exposure to instructions. The outcome is correct execution, anchored
          to a structural framework the organisation approves, versions, and can defend.
        </p>
      </ProseBlock>

      <FAQ title="How operational procedure programmes work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a procedure"
        title="See your task structure itself."
        lede="Send us an SOP, a workflow, or a task you already run. In a 45 minute working session on your material, you leave with the framework the Foundry produces."
        ctaLabel="Start with your task"
      />
    </>
  );
}
