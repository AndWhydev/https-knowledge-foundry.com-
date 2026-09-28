import type { Metadata } from "next";
import {
  Wrench,
  GitPullRequestArrow,
  Sparkles,
  ClipboardCheck,
  History,
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
  alternates: { canonical: "/platform/remediation" },
  title: "Remediation. Close gaps without starting again",
  description:
    "Preserve what works. Improve what does not. Remediation strengthens existing training in place, with every change tied to a requirement and an approver.",
};

const capabilities = [
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Blueprint generation",
    desc: "Each identified deficiency is converted into a structured remediation task. Scoped, cited, and reviewable before any change is made.",
  },
  {
    icon: <GitPullRequestArrow className="h-5 w-5" />,
    title: "From gap to task",
    desc: "Abstract compliance gaps become concrete improvement activities with defined evidence, outcomes, and assessment implications.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Evidence enhancement",
    desc: "Additional evidence requirements, validation checkpoints, and observable outcomes are introduced only where the framework demands them.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Controlled regeneration",
    desc: "Only affected blocks regenerate. Approved structure, validated pathways, and adjacent content remain untouched.",
  },
  {
    icon: <History className="h-5 w-5" />,
    title: "Enhancement aware of version",
    desc: "Each change records what changed, why, by whom, and against which requirement, with a reversible history behind it.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Preservation guarantees",
    desc: "Original chapters, modules, learning journeys, and educational intent stay intact wherever they still hold up.",
  },
];

const steps = [
  {
    n: "01",
    title: "Analyse",
    desc: "Existing content is evaluated against the framework, standard, or organisational requirement it should support.",
  },
  {
    n: "02",
    title: "Identify gaps",
    desc: "Deficient coverage, weak evidence, missing outcomes, or drifted assessments are surfaced with precision at the source.",
  },
  {
    n: "03",
    title: "Generate blueprint",
    desc: "Each gap becomes a structured remediation task describing exactly what should improve. Reviewed and approved before any content changes.",
  },
  {
    n: "04",
    title: "Enhance in place",
    desc: "Affected sections regenerate within the approved architecture. Learner pathways, terminology, and continuity are preserved.",
  },
  {
    n: "05",
    title: "Reverify",
    desc: "The improved content runs against the framework again. Coverage is confirmed, not asserted. Improvement becomes measurable.",
  },
];

const faq = [
  {
    q: "Why not just rewrite the course from scratch?",
    a: "Rewrites lose institutional memory, force learners to readapt to new structures, and introduce fresh omissions of their own. Where the existing content still carries intent, evidence, and pedagogical coherence, preserving it is safer and cheaper. Remediation is scoped precisely to what actually needs to change.",
  },
  {
    q: "How do you avoid breaking approved content when you edit adjacent blocks?",
    a: "Regeneration operates at block level, inside isolation that persists state. The Core Knowledge Graph and approved structure remain the constraint envelope. Regenerated blocks must fit inside it. Everything else is untouched, and every change is reversible.",
  },
  {
    q: "Who approves a remediation before it goes live?",
    a: "The human owner of the framework, or the delegated reviewer, works from a mandatory Review Queue. Approve, revise, or reject decisions are logged. Approval and deployment are deliberately separate steps. Generation does not imply publication.",
  },
  {
    q: "Can auditor feedback drive remediation directly?",
    a: "Yes. Auditor comments can be attached to the framework requirement they concern, which weights the corresponding blocks for targeted regeneration. The remediation trail then shows the auditor point, the change made, and the reverification result.",
  },
  {
    q: "How do we know remediation actually closed the gap and did not just move it?",
    a: "Each remediation ends in reverification against the same framework used to identify the gap. Closure is evidenced, not asserted. The prior state, the change set, the current state, and the requirement are all recorded together in the audit trail.",
  },
  {
    q: "What happens to previous versions of a remediated block?",
    a: "They remain accessible and revertible through the Forensic Revision Chain. Each revision produces a new content hash and a version entry. Nothing is quietly overwritten. If a change turns out to be wrong, rollback is a single deliberate action.",
  },
];

const related = [
  {
    eyebrow: "Upstream",
    title: "Gap Analysis",
    desc: "Remediation is only as good as the gap report that drives it. Validate coverage before you improve it.",
    href: "/platform/gap-analysis",
  },
  {
    eyebrow: "Adjacent",
    title: "Knowledge governance",
    desc: "Ownership, review cadences, and release gates that keep remediation deliberate rather than reflexive.",
    href: "/platform/knowledge-governance",
  },
  {
    eyebrow: "Downstream",
    title: "Audit & evidence",
    desc: "Each remediation is an evidence event. Export the trail, defend the change.",
    href: "/platform/audit-evidence",
  },
];

export default function RemediationPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Capability · Remediation"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Remediation", href: "/platform/remediation" },
        ]}
        title={
          <>
            Preserve what works.{" "}
            <span className="text-[color:var(--color-forge)]">Improve</span> what does not.
          </>
        }
        lede="When a gap is identified, the reflex is to rebuild. Rebuilds lose institutional knowledge, disrupt learners, and introduce their own omissions. Remediation strengthens existing content in place. Each change is scoped, cited, approved, and reversible."
        secondaryCta={{ label: "See it work", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-remediation.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Rewrites are the most expensive way to introduce new risk."
      >
        <p>
          Existing training carries years of subject matter effort, validated
          pathways, and learner familiarity. Discarding it to fix a subset of
          deficiencies trades a known content set for an unknown one, and the
          unknown one has never been reviewed, audited, or taught.
        </p>
        <p>
          Remediation treats the existing asset as the baseline and asks a
          disciplined question: <strong>what should remain, what should be
          strengthened, and what should be added</strong>. Everything else stays.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves inside Remediation"
        title="Surgical improvement, not wholesale replacement."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="The remediation lifecycle"
        title="Analyse. Identify. Blueprint. Enhance. Reverify."
        lede="Each remediation begins with evidence and ends with evidence. Improvement is measurable rather than subjective."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A stronger version of the programme you already own."
      >
        <p>
          The output is not a replacement course. It is the same course, with the
          weaknesses named, closed, and evidenced. Structure, outcomes, and
          learning pathways are preserved. Weak coverage is strengthened. Missing
          evidence is added. Assessments are realigned to the requirements they
          are supposed to demonstrate.
        </p>
        <p>
          <strong>Each change is traceable.</strong> Each regeneration carries a
          new content hash and a revision entry.{" "}
          <strong>Each approval is logged.</strong> Each previous version
          remains accessible. When someone asks what changed and why, the answer
          is a file, not a memory.
        </p>
      </ProseBlock>

      <FAQ title="How Remediation works, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a course that no longer holds up"
        title="See remediation on your own content."
        lede="Send us a course that failed an audit, drifted from a standard, or was never quite finished. We spend 45 minutes with the Foundry on your material, and you leave with a remediation blueprint. Yours to keep."
      />
    </>
  );
}
