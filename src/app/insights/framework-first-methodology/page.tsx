import type { Metadata } from "next";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { ProcessSteps } from "@/components/solution/process-steps";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "The framework-first methodology, in depth — Knowledge Foundry",
  description:
    "Interpret. Structure. Produce. Deliver. The four-move methodology behind Knowledge Foundry, explained at the level of rationale — not the level of marketing.",
};

const steps = [
  {
    n: "01",
    title: "Interpret",
    desc: "Read the source. Extract, from policies, standards, and subject matter, the requirements the programme must satisfy — sentence by sentence, with provenance preserved. Interpretation is a distinct phase because it is a distinct kind of work, and because generation before interpretation is guesswork wearing a uniform.",
  },
  {
    n: "02",
    title: "Structure",
    desc: "Propose a framework — concept nodes, typed relationships, prerequisite chains, assessment definitions — grounded in what interpretation produced. Structure is human-reviewable, human-approvable, and reviewed before anything downstream generates. The framework is the object of record from this point on.",
  },
  {
    n: "03",
    title: "Produce",
    desc: "Generate instruction, activities, and verification against the approved framework. Every produced element carries a link to the framework node it satisfies and, through the node, to the source clause that made the node necessary. Production is downstream of structure. It is never the other way around.",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "Package and release under governance. Versioning, sign-off, and deprecation are first-class operations. Delivery does not conclude the loop — it opens the next iteration, in which source changes and drift signals feed back into interpretation and structure.",
  },
];

const related = [
  { eyebrow: "Methodology", title: "Knowledge structure before content", desc: "The underlying discipline the four moves enact.", href: "/insights/knowledge-structure-before-content" },
  { eyebrow: "Governance", title: "Knowledge drift, and how to detect it", desc: "Why the loop is a loop and not a line.", href: "/insights/knowledge-drift-and-how-to-detect-it" },
  { eyebrow: "Verification", title: "A primer on hybrid verification", desc: "How Produce and Deliver handle verification specifically.", href: "/insights/hybrid-verification-primer" },
];

export default function FrameworkFirstMethodologyPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Methodology"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "Framework-first methodology", href: "/insights/framework-first-methodology" },
        ]}
        title={<>Interpret. Structure. Produce. <span className="text-[color:var(--color-forge)]">Deliver.</span></>}
        lede="The four moves behind every Foundry engagement. This is the argument for why they are sequenced this way — and why collapsing any two of them into one produces the failures the industry has learned to normalise."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>January 2026</span>
            <span aria-hidden>·</span>
            <span>9 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Methodology</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="Four moves that are almost always collapsed into one.">
        <p>
          Most training programmes, whether human-authored or LLM-assisted, execute a single
          undifferentiated move. A subject-matter expert or an author reads some source material,
          decides in the same breath what the programme should teach, and writes the content
          that teaches it. Interpretation, structure, production, and delivery all happen inside
          the head of one person, in one working session, undocumented.
        </p>
        <p>
          The result is a programme in which no phase has an artefact of its own. There is no
          interpretation record separate from the content. There is no framework separate from
          the interpretation. There is no production separate from the framework. There is only
          content, and the content is the only object the organisation owns. Every downstream
          question — coverage, verification, audit, drift — is asked of the content, and every
          answer is a rereading of the content.
        </p>
        <p>
          The four-move methodology exists to make each move a distinct discipline with a
          distinct artefact, sequenced deliberately, gated by human sign-off between phases. The
          sequencing is not aesthetic. It is the argument.
        </p>
      </ProseBlock>

      <ProcessSteps
        eyebrow="The four moves"
        title="Each move produces its own artefact."
        lede="The moves are ordered because each one is the input to the next. Skipping a move — or executing it implicitly inside another — is what produces the audit findings the industry has learned to explain away."
        steps={steps}
      />

      <ProseBlock variant="single" eyebrow="Why the order matters" title="What collapses when you invert or skip a move.">
        <p>
          Skip Interpret and you are guessing what the source requires. Every downstream
          artefact inherits the guess. When the guess is wrong — which is discoverable only by
          re-reading the source, which is the work you skipped — the programme cannot be
          corrected in one place. It must be corrected everywhere the guess propagated.
        </p>
        <p>
          Skip Structure and you are back in the default L&D failure mode: content-first
          authoring, with structural decisions smuggled into paragraphs. Coverage becomes
          unmeasurable. Revision becomes catastrophic. Verification instruments are chosen after
          the fact, rather than defined at the level of the concept.
        </p>
        <p>
          Invert Structure and Produce — write the content first, then reverse-engineer a
          framework from it — and you get a framework that mirrors the content instead of
          judging it. The framework becomes a documentation exercise, not a design instrument.
          Auditors, in our experience, spot the inversion quickly. The framework describes what
          was written, not what should have been.
        </p>
        <p>
          Skip Deliver — treat governance, versioning, and deprecation as afterthoughts — and
          the programme's compliance posture decays the moment the first regulator update is
          issued. Not because the update is missed, but because there is no mechanism to see
          which parts of the library the update touches.
        </p>
        <p>
          <strong>Each move is the input to the next. Each move is a discipline. Each move
          produces an artefact the organisation can defend.</strong> That is what the four-move
          methodology is for. Not a marketing frame. A sequencing discipline.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="See the methodology enacted"
        title="Bring a subject. Watch the four moves run."
        lede="Forty-five minutes on your source material. You see Interpret, Structure, Produce, and Deliver as distinct phases with distinct artefacts, on your own subject, in one sitting."
      />
    </>
  );
}
