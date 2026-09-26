import type { Metadata } from "next";
import { Layers3, Network, Compass } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Knowledge structure comes before content — Knowledge Foundry",
  description:
    "Writing before structure is the root cause of training failure. The argument for structural literacy as the missing L&D discipline.",
};

const supporting = [
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Content is downstream of a decision",
    desc: "Every paragraph in a training programme is a decision about what the learner should know. Without a framework, that decision is made silently, by the author, one sentence at a time.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "Structure names the relationships",
    desc: "A framework does not merely list concepts. It names how concepts depend on, contain, contradict, and supersede each other. Content that ignores those relationships teaches around them.",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Progression is a subject property, not an author preference",
    desc: "The order in which concepts must be met is a property of the subject. Framework-first design surfaces it. Content-first design invents an order and hopes it holds.",
  },
];

const related = [
  { eyebrow: "Methodology", title: "The four-move methodology, in depth", desc: "Interpret. Structure. Produce. Deliver. The rationale for each move.", href: "/insights/framework-first-methodology" },
  { eyebrow: "Audit", title: "Why training fails audits", desc: "Audit failures trace back to structure, not to content quality.", href: "/insights/why-training-fails-audits" },
  { eyebrow: "Standards", title: "SCORM is a transport, not a strategy", desc: "Standards describe delivery. They do not say what a learner should know.", href: "/insights/scorm-is-a-transport-not-a-strategy" },
];

export default function KnowledgeStructureBeforeContentPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Methodology"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "Knowledge structure before content", href: "/insights/knowledge-structure-before-content" },
        ]}
        title={<>Knowledge structure comes <span className="text-[color:var(--color-forge)]">before</span> content.</>}
        lede="Writing before structure is the root cause of training failure. The missing discipline in L&D is not writing. It is structural literacy."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>March 2026</span>
            <span aria-hidden>·</span>
            <span>6 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Methodology</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="The industry treats content as the artefact. It is not.">
        <p>
          Most organisations that produce training think of the programme as a body of content:
          modules, decks, videos, workbooks. When the programme fails — when learners underperform,
          when auditors find gaps, when behaviour does not change — the reflex is to review the
          content. Rewrite the modules. Refilm the videos. Add scenarios.
        </p>
        <p>
          The reflex is misdirected. The failure is rarely in the content. It is in the layer
          beneath the content: the structural decisions about what concepts must exist, how they
          relate, and how they progress. Those decisions are the framework. Most training
          programmes have never had one.
        </p>
        <p>
          A framework, in the sense used here, is not a table of contents. It is a structured
          object: a set of concept nodes with definitions and provenance, typed relationships
          between them, a prerequisite graph, and a set of assessment definitions. It is
          reviewable independent of any wording. It can be tested against a source policy or
          standard. It can be inspected by a subject-matter expert. It exists whether or not any
          content has yet been written to satisfy it.
        </p>
        <p>
          When authors write before this object exists, three things happen. First, structural
          decisions get smuggled into paragraphs — a concept is introduced early because the
          author found a good sentence for it, not because the subject requires it there. Second,
          coverage becomes unmeasurable — the only way to ask <em>does this programme cover the
          requirement</em> is to reread the programme. Third, revision becomes catastrophic —
          when the source changes, no one knows which paragraphs to update, because no paragraph
          is explicitly tied to the requirement it satisfies.
        </p>
        <p>
          Structural literacy is the discipline of authoring the framework before the wording. It
          treats the framework as the primary artefact and content as an expression of that
          artefact. The Foundry exists because this discipline is rarely present in the
          organisations that most need it — and because human authors, working unaided, do not
          reliably impose it on themselves.
        </p>
        <p>
          <strong>The framework is the object of record.</strong> Content is downstream of it.
          Once a team accepts this, every other question in a training programme — coverage,
          revision, audit, verification — becomes tractable. Until a team accepts this, none of
          those questions have defensible answers.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Three consequences"
        title="What changes when structure comes first."
        features={supporting}
        columns={3}
        tone="warm"
      />

      <ProseBlock variant="single" eyebrow="So what" title="Structural literacy is a hiring question, not a tooling question.">
        <p>
          Framework-first design is not a feature that a lesson-authoring tool can add. It is a
          discipline that requires a different kind of professional attention — one that most
          instructional design curricula do not teach and most L&D functions do not hire for.
          The Foundry is built to make the discipline enforceable regardless of who is at the
          keyboard. But the underlying shift is one of professional stance. The question a mature
          L&D function should be able to answer is not <em>what is in our library</em>. It is
          <em> what framework does our library implement, and where does it diverge from the
          framework the subject actually requires.</em>
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="See the discipline enacted"
        title="Bring a subject. Watch a framework build."
        lede="Forty-five minutes on your source material. You leave with the framework the Foundry proposes for it, and a candid view of where your current content diverges from that framework."
      />
    </>
  );
}
