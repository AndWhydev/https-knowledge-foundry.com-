import type { Metadata } from "next";
import { Waves, AlertTriangle, GitBranch } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Knowledge drift, and how to detect it — Knowledge Foundry",
  description:
    "What knowledge drift is, why it happens silently, and how framework-first design surfaces it before an auditor does.",
};

const supporting = [
  {
    icon: <Waves className="h-5 w-5" />,
    title: "Source drift",
    desc: "The regulation, standard, or policy changes. If the training library has no link back to the source, the drift is invisible until a human notices — which is usually late.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Interpretation drift",
    desc: "Different authors, at different times, interpret the same source clause differently. Two modules end up teaching subtly conflicting things. Learners see the conflict. Authors do not.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Practice drift",
    desc: "Operational practice quietly diverges from documented procedure. Trainers, drawing on practice, teach what people do, not what the procedure says. The gap widens with each cohort.",
  },
];

const related = [
  { eyebrow: "Governance", title: "Framework-first methodology, in depth", desc: "The four moves that make drift detectable by construction.", href: "/insights/framework-first-methodology" },
  { eyebrow: "Audit", title: "Why training fails audits", desc: "Audit failures trace to structure, not to content.", href: "/insights/why-training-fails-audits" },
  { eyebrow: "Provenance", title: "AI-generated content and compliance risk", desc: "The provenance problem, and why cryptographic evidence matters.", href: "/insights/ai-generated-content-and-compliance-risk" },
];

export default function KnowledgeDriftPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Governance"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "Knowledge drift and how to detect it", href: "/insights/knowledge-drift-and-how-to-detect-it" },
        ]}
        title={<>Knowledge drift is <span className="text-[color:var(--color-forge)]">silent by default.</span></>}
        lede="Training libraries do not fail suddenly. They drift — quietly, over years — until an auditor asks a question the library was once able to answer and no longer can."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>January 2026</span>
            <span aria-hidden>·</span>
            <span>7 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Governance</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="Drift is a condition, not an event.">
        <p>
          Every mature training library drifts. It is not a matter of author negligence. It is a
          natural consequence of authoring content, over years, against sources that themselves
          change and against operational practice that itself changes. The failure is not that
          drift occurs. The failure is that most libraries have no mechanism to see it occurring.
        </p>
        <p>
          Drift takes three broad forms. Source drift is what happens when the underlying
          regulation, standard, or policy is updated and the training library is not — or is
          updated in one module and not in another that touches the same requirement.
          Interpretation drift is what happens when different authors, in different quarters,
          interpret the same clause differently and their interpretations quietly diverge.
          Practice drift is what happens when what operators actually do in the field diverges
          from what the procedure documents say, and trainers — drawing on their own
          practical experience — teach the drift rather than the document.
        </p>
        <p>
          All three forms are invisible in a library organised as content. There is nothing to
          compare a module against, because the source it once satisfied has no explicit link
          to it. A human review can find drift, but only by reading the library end to end
          against the sources end to end, and only if the reviewer is competent to spot the
          divergences. This kind of review is rare, expensive, and by the time it happens the
          drift has usually already produced an operational consequence somewhere upstream.
        </p>
        <p>
          Framework-first design changes the detection problem. Every framework node is tied to
          the source clause that implies it. Every content asset is tied to the framework node
          it satisfies. When the source changes, the change is a diff against the framework —
          not a diff against a document nobody has time to reread. Nodes that require review
          light up. Content assets tied to those nodes are flagged. The library does not need a
          human to notice the drift. The library notices, and asks a human to adjudicate.
        </p>
        <p>
          Interpretation drift is caught in the same architecture. Two modules that satisfy the
          same framework node are, by construction, teaching the same thing. If they are not,
          the divergence is a review event that surfaces without a full-library audit. Practice
          drift is harder — it requires the framework to be updated against observed operational
          reality — but it becomes tractable, because there is now a framework to update, not
          just a set of documents to rewrite.
        </p>
        <p>
          <strong>Drift is inevitable. Undetected drift is a design choice.</strong> The design
          choice that produces undetected drift is the choice to author content without a
          framework upstream of it.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Three drift types"
        title="Where the library quietly diverges."
        features={supporting}
        columns={3}
        tone="warm"
      />

      <ProseBlock variant="single" eyebrow="So what" title="The instrument for detecting drift is the framework itself.">
        <p>
          Organisations that want to detect drift do not need a bigger review team. They need a
          framework, and they need the framework to be the object of record for the library.
          Once it is, drift stops being something a human has to notice. It becomes something
          the system reports, and something a human has to decide about. That inversion — from
          detection to adjudication — is the point.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="See drift, made visible"
        title="Bring a library that has been running for years."
        lede="Forty-five minutes on a sample of your existing library and its source. The Foundry proposes the framework, compares it to the library, and surfaces the drift that has accumulated in the interval."
      />
    </>
  );
}
