import type { Metadata } from "next";
import { ShieldCheck, GitCompareArrows, FileSearch2 } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Why training fails audits — Knowledge Foundry",
  description:
    "Audit failures trace back to knowledge structure, not content quality. The case for audit-first design in regulated training programmes.",
};

const supporting = [
  {
    icon: <FileSearch2 className="h-5 w-5" />,
    title: "Auditors ask coverage questions",
    desc: "Does the programme cover this requirement, where, at what depth, and evidenced how. Content-first programmes cannot answer these without a manual reread of the library.",
  },
  {
    icon: <GitCompareArrows className="h-5 w-5" />,
    title: "Auditors ask lineage questions",
    desc: "When the regulation changed, which content changed in response, when, and who signed the change. Programmes without provenance produce narrative answers, not defensible ones.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Auditors ask evidence questions",
    desc: "Which cohort, on which date, met which requirement, verified how. If the record ties completion to a framework node tied to a source clause, the question is trivial. If not, it is unanswerable.",
  },
];

const related = [
  { eyebrow: "Governance", title: "Knowledge drift, and how to detect it", desc: "Drift is the silent condition that produces the audit finding you didn't see coming.", href: "/insights/knowledge-drift-and-how-to-detect-it" },
  { eyebrow: "Provenance", title: "AI-generated content and compliance risk", desc: "The provenance problem, and why cryptographic evidence matters.", href: "/insights/ai-generated-content-and-compliance-risk" },
  { eyebrow: "Methodology", title: "Knowledge structure before content", desc: "Writing before structure is the root cause of training failure.", href: "/insights/knowledge-structure-before-content" },
];

export default function WhyTrainingFailsAuditsPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Audit"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "Why training fails audits", href: "/insights/why-training-fails-audits" },
        ]}
        title={<>Training fails audits <span className="text-[color:var(--color-forge)]">because of structure,</span> not content.</>}
        lede="Audit findings are almost never about the wording. They are about what the wording is silent on. Framework-first design makes the silence visible before an auditor does."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>February 2026</span>
            <span aria-hidden>·</span>
            <span>8 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Audit</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="Audits are structural. Content is not.">
        <p>
          Sit through enough audit debriefs and a pattern emerges. The findings are rarely about
          the quality of a specific paragraph. They are about the absence of a specific paragraph
          — coverage the auditor expected to find and did not — or about the inability of the
          organisation to defend a claim that a given cohort met a given requirement on a given
          date.
        </p>
        <p>
          Both classes of finding are structural. Coverage failures are structural because
          coverage is a property of a framework, not of a body of content. A programme cannot
          know whether it covers a requirement unless it has an explicit framework against which
          the requirement can be located. Evidence failures are structural because evidence
          requires a chain — from a completion record, to the framework node it satisfies, to
          the source clause that made the node necessary — and that chain does not exist in
          programmes that were written module by module.
        </p>
        <p>
          The industry's usual response to an audit finding is to add more content. If coverage
          was flagged, write a module about the flagged topic. If evidence was flagged, add a
          quiz. Neither response addresses the finding's root. The next audit finds the next
          gap, and the pattern repeats — because the underlying condition, the absence of a
          framework, has not been touched.
        </p>
        <p>
          Audit-first design begins from a different starting position. Before any content is
          written, the framework is built from the sources an auditor would consult: the
          regulation, the standard, the internal policy. Every framework node is traceable to
          the clause that made it exist. Content is written to satisfy framework nodes, and
          every content asset carries a link back to the node. Verification records tie back to
          the same framework node. The complete lineage — source clause, framework node, content
          asset, verification record, cohort, date — is a query, not a project.
        </p>
        <p>
          When an audit arrives in a programme designed this way, the auditor is not the person
          discovering the coverage gap. The framework is. And the framework has already
          surfaced, at authoring time, the gap the auditor would otherwise have found. The
          auditor's job becomes verification of a defensible position, not discovery of an
          indefensible one.
        </p>
        <p>
          <strong>Audits fail on the questions the training programme was never built to
          answer.</strong> The corrective is not to answer those questions better. It is to
          build the programme, from the beginning, around the object that makes the questions
          answerable — the framework.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Three question types"
        title="What auditors actually ask."
        features={supporting}
        columns={3}
        tone="warm"
      />

      <ProseBlock variant="single" eyebrow="So what" title="Ask the audit question at authoring time.">
        <p>
          A test for the maturity of any training programme is whether the coverage question, the
          lineage question, and the evidence question can be answered by query — without a
          person spending a week rereading the library. If they can, the programme has a
          framework. If they cannot, it has content. Audits punish the difference.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="Bring the last audit finding"
        title="Test the argument on a real finding."
        lede="Forty-five minutes on a finding your organisation has actually received. The Foundry builds the framework the finding implies, and shows what a structural response — as opposed to a content response — would look like."
      />
    </>
  );
}
