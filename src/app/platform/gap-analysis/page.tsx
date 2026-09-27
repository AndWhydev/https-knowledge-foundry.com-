import type { Metadata } from "next";
import {
  FileSearch2,
  ScanSearch,
  Braces,
  ListTree,
  ShieldAlert,
  ClipboardList,
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
  title: "Gap Analysis. Find the silent holes in your training library",
  description:
    "Compare existing courses, policies, and procedures against the framework they should cover. Coverage is analysed at explicit, semantic, hierarchical, evidential, and structural levels, rather than by keyword.",
};

const capabilities = [
  {
    icon: <ScanSearch className="h-5 w-5" />,
    title: "Explicit coverage",
    desc: "Direct references to a requirement, concept, control, outcome, or standard clause are located and cited.",
  },
  {
    icon: <Braces className="h-5 w-5" />,
    title: "Semantic coverage",
    desc: "Conceptual alignment where the meaning is present but the exact language differs. Keywords do not decide fitness.",
  },
  {
    icon: <ListTree className="h-5 w-5" />,
    title: "Hierarchical coverage",
    desc: "Parent and child relationships and dependency chains across frameworks, evaluated as a graph rather than a flat checklist.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Evidence mapping",
    desc: "Verification claims, outcomes, and assessments are located and matched against the requirements that demand them.",
  },
  {
    icon: <FileSearch2 className="h-5 w-5" />,
    title: "Structural coverage",
    desc: "Content is evaluated for whether it sits in the right place in a learning pathway, not just whether it exists somewhere.",
  },
  {
    icon: <ShieldAlert className="h-5 w-5" />,
    title: "Gaps ranked by risk",
    desc: "Gaps are ranked by regulatory exposure, criticality, and downstream dependency, so remediation starts where it matters.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ingest the library",
    desc: "Existing courses, policies, procedures, manuals, and supporting documentation are read in place. No manual reauthoring.",
  },
  {
    n: "02",
    title: "Interpret requirements",
    desc: "Selected standards, frameworks, competencies, or accreditation criteria are decomposed into measurable, testable criteria.",
  },
  {
    n: "03",
    title: "Map evidence",
    desc: "The system identifies where each requirement is addressed and records the supporting evidence at the level of a sentence.",
  },
  {
    n: "04",
    title: "Score coverage",
    desc: "Explicit, semantic, hierarchical, and evidential matches are evaluated together to determine true alignment.",
  },
  {
    n: "05",
    title: "Report gaps",
    desc: "Requirements with insufficient support, weak evidence, or drift are flagged with source citations and remediation prompts.",
  },
];

const faq = [
  {
    q: "How is this different from a keyword search across our SharePoint or LMS?",
    a: "Keyword search finds the phrase. It does not confirm the requirement is met. Gap Analysis interprets each requirement into what would count as evidence, then locates that evidence, regardless of the exact wording. A course can pass a keyword audit while failing the underlying obligation, and often does.",
  },
  {
    q: "Do we need to have already built a framework to run gap analysis?",
    a: "No. If a framework exists, whether internal, ISO, regulatory, or accreditation, we compare against it. If one does not, the platform can extract an implied framework from the source documents themselves, then compare that to your training. Both paths are supported.",
  },
  {
    q: "How do you avoid drowning us in low value flags?",
    a: "Each finding carries a criticality weighting drawn from the source requirement. Mandatory controls and obligations sensitive to risk surface first. Cosmetic and stylistic drift is separated from coverage drift and can be suppressed. The default report is triaged, not raw.",
  },
  {
    q: "Can we scope the analysis to a single course or a single standard?",
    a: "Yes. Gap analysis can run against one course, one policy family, one ISO clause, or a whole learning portfolio. The engine and reporting are the same. The scope is a parameter.",
  },
  {
    q: "What does the output look like?",
    a: "A structured report, readable by both machines and humans, that lists each requirement, the evidence located for it, the confidence of the match, and any gap. Each line links back to the source document and paragraph. Exportable as PDF, HTML, or JSON.",
  },
  {
    q: "Is this destructive to our existing content?",
    a: "No. Gap analysis is read only. Nothing in your library is altered. Remediation is a separate, deliberate step you commission after the report is reviewed.",
  },
];

const related = [
  {
    eyebrow: "Upstream",
    title: "Framework Intelligence",
    desc: "The framework is what gap analysis measures against. Build it first, then compare.",
    href: "/platform/framework-intelligence",
  },
  {
    eyebrow: "Next in sequence",
    title: "Remediation",
    desc: "Once gaps are visible, close them in place, with change history, approvals, and preserved intent.",
    href: "/platform/remediation",
  },
  {
    eyebrow: "Adjacent",
    title: "Audit & evidence",
    desc: "Each gap report is itself an audit artefact. Traceable, exportable, and defensible.",
    href: "/platform/audit-evidence",
  },
];

export default function GapAnalysisPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Capability · Gap Analysis"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Gap Analysis", href: "/platform/gap-analysis" },
        ]}
        title={
          <>
            Validate <span className="text-[color:var(--color-forge)]">first</span>.
            Improve second.
          </>
        }
        lede="Most organisations already own more training content than they can defend. Gap Analysis interprets what your standards, policies, and frameworks actually require, then measures your existing library against it. At meaning, rather than at keyword."
        secondaryCta={{ label: "See a live report", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-gap.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="The content exists. That does not mean it covers what it should."
      >
        <p>
          Procedures change. Standards update. Regulatory expectations shift. Subject
          matter expands. Priorities move. Over time, gaps emerge, not because anyone
          intended to create them, but because maintaining alignment across hundreds of
          documents and courses becomes structurally impossible by hand.
        </p>
        <p>
          The result is a familiar and dangerous confidence:{" "}
          <strong>the content exists, therefore it must be correct</strong>. Knowledge
          Foundry treats that assumption as the risk it is, and replaces it with
          coverage that can be demonstrated at the resolution of each requirement.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Coverage, at five resolutions"
        title="Structured analysis across five dimensions, not keyword matching."
        lede="Traditional audits look for the phrase. Knowledge Foundry looks for the requirement, and the evidence that satisfies it, even when the language does not match."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From library to defensible baseline."
        lede="Gap analysis is read only. Evidence comes first. Each finding is traceable and cited back to source. Nothing in your library is altered."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A defensible baseline you can act on, not a spreadsheet you cannot."
      >
        <p>
          The output is not an executive summary written in generalities. It is a
          structured object. Each framework requirement, the evidence located for it,
          the strength of the match, and any gap. Each row traces back to source
          document and paragraph.
        </p>
        <p>
          <strong>Explicit matches</strong> are cited. <strong>Semantic matches</strong>{" "}
          are scored with confidence. <strong>Missing coverage</strong> is enumerated
          and ranked by regulatory weight. <strong>Weak evidence</strong> is separated
          from absent evidence. Each finding is exportable, and each
          export carries the analysis version that produced it.
        </p>
      </ProseBlock>

      <FAQ title="How Gap Analysis works, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring us a library"
        title="See your coverage without guesswork."
        lede="Send us a course, a policy family, or an accreditation you must align to. We spend 45 minutes with the Foundry on your material, and you leave with a coverage report. Yours to keep."
      />
    </>
  );
}
