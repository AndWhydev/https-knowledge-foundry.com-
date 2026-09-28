import type { Metadata } from "next";
import {
  Building2,
  RefreshCcw,
  ShieldCheck,
  Layers,
  UsersRound,
  Gauge,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { HeroComparison } from "@/components/heros/hero-comparison";

export const metadata: Metadata = {
  alternates: { canonical: "/platform/enterprise-learning-modernisation" },
  title: "Enterprise Learning Modernisation. Modernise what matters, preserve what works",
  description:
    "Modernise legacy training libraries in place. Preserve institutional knowledge, shield subject matter experts, and modernise incrementally without learner disruption or the risk of ripping out and replacing.",
};

const capabilities = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Asset retention",
    desc: "Existing courses, procedures, and compliance content remain in operation. Years of subject matter effort are preserved as the baseline, not discarded as the starting point.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "SME shielding",
    desc: "Frontline expertise is captured as structured knowledge, not repeatedly elicited again. Subject matter experts are protected from becoming a bottleneck.",
  },
  {
    icon: <UsersRound className="h-5 w-5" />,
    title: "No learner disruption",
    desc: "Learners continue to progress through familiar structures. Modernisation happens beneath them, not on top of them. Continuity is a design constraint.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Ecosystem visibility",
    desc: "Where content lives, who owns it, when it was last reviewed, and what it depends on, surfaced as a single portfolio view rather than reconstructed on demand.",
  },
  {
    icon: <RefreshCcw className="h-5 w-5" />,
    title: "Incremental modernisation",
    desc: "Modernise at the pace risk demands. A single course, a single standard, a single business unit. Each modernisation is scoped and independently deliverable.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Corporate governance",
    desc: "Ironclad ecosystem visibility over time. Ownership, approvals, drift, and integrity operate at portfolio scale, not one course at a time.",
  },
];

const steps = [
  {
    n: "01",
    title: "Analyse",
    desc: "Deconstruct and review legacy learning assets. Identify what still holds up, what has drifted, and where risk has quietly accumulated.",
  },
  {
    n: "02",
    title: "Validate",
    desc: "Systematically evaluate coverage, structural mapping, and integrity against the standards, policies, and requirements that apply now.",
  },
  {
    n: "03",
    title: "Improve",
    desc: "Targeted optimisation of identified vulnerabilities. Weakness is closed in place. Approved structure and learner pathways are preserved.",
  },
  {
    n: "04",
    title: "Govern",
    desc: "Ownership, cadence, drift detection, and release control are attached to the modernised assets, not left to memory or spreadsheet.",
  },
  {
    n: "05",
    title: "Deploy",
    desc: "Modernised assets roll into live environments with a full evidence trail. Rollout is controlled, reversible, and traceable at every stage.",
  },
];

const faq = [
  {
    q: "We have hundreds of courses. Where do we realistically start?",
    a: "Start where risk concentrates. Courses tied to regulated standards, courses that failed a recent audit, courses whose subject matter expert is about to leave, or courses that reference a standard which just updated. The platform surfaces candidates for prioritisation automatically, and modernisation scopes cleanly to a single asset before scaling outward.",
  },
  {
    q: "How do you avoid the classic rip and replace failure mode?",
    a: "Modernisation operates on the existing assets. Structure, outcomes, and learning pathways are preserved by default. Weakness is closed in place. Regeneration is scoped to specific blocks rather than whole courses. Rip and replace is a distinct choice, not the default path.",
  },
  {
    q: "What happens to our existing LMS, SharePoint, or content stores?",
    a: "They remain. Knowledge Foundry sits alongside them as a source of truth for structure, provenance, and integrity, while the modernised assets deploy back into the existing delivery layer via SCORM, structured HTML, or API. Nothing has to be forklifted.",
  },
  {
    q: "How long does modernising a legacy library actually take?",
    a: "It depends on scope, but the operating model is incremental. A single high risk course can be analysed, remediated, reverified, and released again in days. A programme of dozens of courses runs on a rolling cadence, with each modernised asset independently deployable rather than blocked behind a big bang release.",
  },
  {
    q: "Who inside our organisation actually runs this?",
    a: "The people who already own learning quality: L&D leadership, compliance and risk owners, and subject matter experts. The platform amplifies their methodology rather than replacing their judgement. Automation handles the architectural grind. Humans retain decision authority at each gate.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Gap analysis",
    desc: "The engine that identifies where modernisation is actually needed, before any content changes hands.",
    href: "/platform/gap-analysis",
  },
  {
    eyebrow: "Next in sequence",
    title: "Remediation",
    desc: "The mechanism that closes gaps in place, preserving structure, evidence, and learner familiarity.",
    href: "/platform/remediation",
  },
  {
    eyebrow: "Adjacent",
    title: "Knowledge governance",
    desc: "How modernised assets stay modern. Ownership, cadence, drift, and release control at portfolio scale.",
    href: "/platform/knowledge-governance",
  },
];

export default function EnterpriseLearningModernisationPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Enterprise · Learning Modernisation"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Enterprise Learning Modernisation", href: "/platform/enterprise-learning-modernisation" },
        ]}
        title={
          <>
            Modernise what matters.{" "}
            <span className="text-[color:var(--color-forge)]">Preserve</span>{" "}
            what works.
          </>
        }
        lede="Most organisations already possess years of investment in training programmes, learning materials, compliance content, and operational knowledge. Modernisation does not require replacement. In most cases, it requires a clearer understanding of what exists and what should be improved."
        secondaryCta={{ label: "See it work", href: "/platform/see-it-work" }}
        visual={<HeroComparison
          before={{
            title: "Legacy authoring",
            items: [
              "Content written before structure is defined",
              "Reviewers fix wording, miss coverage",
              "Evidence scattered across email and PDFs",
              "Audit answer: we cannot show you",
              "Policy change lands in training weeks later",
            ],
          }}
          after={{
            title: "The Foundry",
            items: [
              "Framework defined and approved first",
              "Reviewers approve structure, not paragraphs",
              "Every decision signed and exportable",
              "Audit answer: here is the file",
              "Policy change surfaces as a framework diff",
            ],
          }}
        />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Legacy learning does not fail loudly. It fails as ecosystem drift."
      >
        <p>
          Learning ecosystems evolve, and complexity outruns control. Content
          splits and drifts. Updates are applied to isolated courses while the
          rest is left untouched. Frontline knowledge stays lodged in individual
          memory rather than framework documentation. Unverified coverage
          patterns introduce quiet, cumulative exposure. The kind that appears
          only when an audit or an incident finally names it.
        </p>
        <p>
          The traditional responses (accept static decay, or a high risk
          rip and replace) are both failures of imagination. Knowledge Foundry
          offers a third path.{" "}
          <strong>Audit and optimise your active intellectual property in place</strong>,
          modernising incrementally, with no learner disruption and full
          evidence.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Modernisation without disruption"
        title="Preserve. Shield. Improve. Govern."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="A continuous discipline, not a single event"
        title="Analyse. Validate. Improve. Govern. Deploy."
        lede="Modernisation is not a project you finish. It is an operating model you install, and the platform makes it sustainable at portfolio scale."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Learning quality, ecosystem consistency, asset confidence, sustainability."
      >
        <p>
          The outcome is a legacy library that has become a modern one, without
          the disruption, cost, or risk of starting again. Existing investment
          is protected. Standards drift is closed. Subject matter expertise is
          captured as structured knowledge rather than trapped in individuals.
          Governance operates at portfolio scale rather than course by course.
        </p>
        <p>
          <strong>Asset retention</strong> protects existing investment.{" "}
          <strong>System integrity</strong> improves quality.{" "}
          <strong>Risk management</strong> reduces exposure.{" "}
          <strong>Velocity and scale</strong> compound as the modernised
          baseline grows.
        </p>
      </ProseBlock>

      <FAQ
        title="How Enterprise Learning Modernisation works, in detail."
        items={faq}
      />
      <Related items={related} />
      <CtaBand
        eyebrow="For L&D and risk leadership at scale"
        title="See modernisation on your legacy library."
        lede="Send us a course, a compliance programme, or an entire practice area you know needs attention. We spend 45 minutes with the Foundry on your material, and you leave with a modernisation blueprint. Yours to keep."
      />
    </>
  );
}
