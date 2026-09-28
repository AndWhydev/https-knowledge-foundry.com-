import type { Metadata } from "next";
import {
  ShieldCheck,
  Scale,
  Fingerprint,
  ClipboardCheck,
  GitCompareArrows,
  AlertTriangle,
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
  alternates: { canonical: "/programs/compliance" },
  title: "Compliance training programs",
  description:
    "Regulatory and policy requirements turned into structured instruction at clause level. Each control is tagged to a role, evidenced and defensible at audit.",
};

const capabilities = [
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Interpretation at clause level",
    desc: "Requirements are parsed at the resolution of the individual clause. Mandatory controls, documentation anchors, role responsibilities, and behavioral implications are extracted explicitly.",
  },
  {
    icon: <GitCompareArrows className="h-5 w-5" />,
    title: "Harmonizing many standards",
    desc: "Where an internal SOP, an ISO standard, and a regulator's guidance overlap, the system maps them once, surfacing conflicts, redundancies, and orphaned clauses.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Obligations tagged to roles",
    desc: "Each control is attached to the role accountable for it. No orphaned clauses. No assumed responsibilities. Coverage is measurable per role, not per module.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Behavioral assessment",
    desc: "Evaluation measures applied behavior, not policy recall. Scenario based decisions, walkthroughs of control execution, escalation validation, and checks on documentation accuracy.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Requirement traceability",
    desc: "Each instructional block is cryptographically and logically tied to its originating requirement, its behavioral expectation, and its verification method.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Evidence ready for audit",
    desc: "Version history, review sign offs, and change documentation are exportable as a coherent evidence pack when the regulator, the internal auditor, or the board asks.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the requirement",
    desc: "Policies, standards, and statutory obligations are read at clause level. Mandatory controls, role responsibilities, and evidence expectations are extracted with provenance.",
  },
  {
    n: "02",
    title: "Map to operations",
    desc: "Requirements are compared to internal SOPs and existing programs. Coverage, conflicts, redundancies, and gaps are surfaced against the standards you are accountable for.",
  },
  {
    n: "03",
    title: "Construct the framework",
    desc: "A compliance framework is authored (controls, role assignments, evidence requirements, and assessment logic) then approved by the framework owner before generation.",
  },
  {
    n: "04",
    title: "Generate and evidence",
    desc: "Instruction is produced to fit the framework. Each module carries provenance. Each release is signed. The program is defensible on the day it goes live.",
  },
];

const faq = [
  {
    q: "How is this different from a compliance module hosted in an LMS?",
    a: "An LMS module records that a person completed content. It does not evidence that the content maps to a specific regulatory clause, or that the assessment measured the behavior the clause requires. The Foundry treats the mapping as the primary artifact and the module as its expression. Under audit, the artifact is what defends the program, not the completion record.",
  },
  {
    q: "Can you support programs across many jurisdictions, where the same role is regulated differently in different markets?",
    a: "Yes. One framework can carry variant branches for jurisdiction, entity, or product line. A relationship manager in one market may be subject to different licensing requirements than the same role in another. The framework encodes that difference, and the generated program reflects it. Governance stays in one place.",
  },
  {
    q: "How does the platform handle standards that update, for example an ISO revision or a change in regulator guidance?",
    a: "When source documents update, the system parses them again and diffs the new clauses against the existing framework. What changed, what became obsolete, and what needs remediation is surfaced explicitly. You do not rebuild the program. You patch the framework and regenerate the affected blocks.",
  },
  {
    q: "Do you replace our compliance team?",
    a: "No. The compliance team sets the risk posture, approves the framework, and signs off releases. What changes is what they spend time on: structural judgment and edge cases, rather than writing paragraphs that summarize policy.",
  },
  {
    q: "What evidence can you export for an external audit?",
    a: "Framework versions with clause level provenance. Release sign off records with reviewer identity and timestamp. Change history at block level. Assessment results linked to the requirement they validate. A coverage report showing each mandatory control mapped to instructional and assessment evidence. HTML, PDF, or structured JSON.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Framework Intelligence",
    desc: "The capability that maps policies, standards, and obligations into a structured framework before instruction is generated.",
    href: "/platform/framework-intelligence",
  },
  {
    eyebrow: "Adjacent",
    title: "Hybrid verification",
    desc: "Where compliance requires demonstrable capability rather than acknowledged awareness, verification pairs with the compliance framework.",
    href: "/programs/hybrid-verification",
  },
  {
    eyebrow: "Sector",
    title: "Financial services",
    desc: "Prudential rules, licensing regimes, conduct obligations, and product knowledge for regulated roles. Evidenced.",
    href: "/industries/financial-services",
  },
];

export default function ComplianceProgramsPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Program · Compliance"
        breadcrumb={[
          { label: "Programs", href: "/programs" },
          { label: "Compliance", href: "/programs/compliance" },
        ]}
        title={
          <>
            Awareness is <span className="text-[color:var(--color-forge)]">not</span> adherence.
          </>
        }
        lede="The Foundry translates regulatory and policy requirements into structured behavioral instruction at the resolution of a clause. Compliance becomes a technical outcome, not a generic awareness exercise."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<AnimatedEditorial src="editorial-magazine.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock eyebrow="Why this matters" title="Policies do not change behavior. Structure does.">
        <p>
          Traditional compliance training fails because policies are static, legalistic, and
          detached from the workflow they are supposed to govern. Slide based summaries produce
          checkbox completion and hidden organizational risk. When the regulator arrives, the
          defense is a completion report, not evidence that the instruction mapped to the
          clause, or that the assessment measured the behavior the clause requires.
        </p>
        <p>
          The Foundry treats the standard as the object of record. Each clause is parsed for its
          controls, its role responsibilities, and its evidence expectations. Instruction is
          generated to satisfy those requirements, and each module is traceable back to the
          clause it exists to serve.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves inside compliance programs"
        title="Coverage is systematic, not assumed."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From requirement to defensible program."
        lede="Rules are not summarized. They are compiled. Instruction is generated as specific, measurable action per role. Functionally derived from the source, not loosely related to it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A program that survives contact with an audit."
      >
        <p>
          The output is not a course. It is a governed compliance system. A framework mapped to
          clauses, instruction generated to satisfy them, assessment engineered to measure the
          behavior they require, and an evidence trail that reconstructs each decision.
        </p>
        <p>
          When the internal auditor asks how you know a control is trained, the answer is a
          report. When the regulator asks how you know a role is competent, the answer is a
          report. Nothing depends on the memory of the person who authored the slide deck.
        </p>
      </ProseBlock>

      <FAQ title="How compliance programs work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a requirement"
        title="See your obligations become a program."
        lede="Send us a policy, a standard, or a regulator guidance document. In a 45 minute working session we run the Foundry on your material and you leave with the framework it produces."
        ctaLabel="Request a compliance architecture review"
      />
    </>
  );
}
