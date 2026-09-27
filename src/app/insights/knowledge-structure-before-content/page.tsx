import type { Metadata } from "next";
import {
  EditorialArticle,
  EditorialH2,
  EditorialP,
  PullQuote,
  EditorialList,
  EditorialAside,
} from "@/components/layouts/editorial-article";

export const metadata: Metadata = {
  title: "Knowledge structure comes before content. Knowledge Foundry",
  description:
    "Writing before structure is the root cause of training failure. The argument for structural literacy as the missing discipline in L&D.",
};

const toc = [
  { id: "sec-1", label: "Content is not the artefact" },
  { id: "sec-2", label: "What a framework actually is" },
  { id: "sec-3", label: "What breaks when authors write first" },
  { id: "sec-4", label: "Structural literacy is a stance" },
];

const related = [
  { eyebrow: "Insight", title: "The four move methodology, in depth", href: "/insights/framework first-methodology" },
  { eyebrow: "Insight", title: "Why training fails audits", href: "/insights/why-training-fails-audits" },
  { eyebrow: "Capability", title: "Framework intelligence", href: "/platform/framework-intelligence" },
];

export default function Page() {
  return (
    <EditorialArticle
      eyebrow="Insight · Methodology"
      title="Knowledge structure comes before content."
      dek="Writing before structure is the root cause of training failure. The missing discipline in L&D is not writing. It is structural literacy. The practice of authoring the framework before the wording."
      date="12 March 2026"
      readingTime="6 min read"
      toc={toc}
      related={related}
    >
      <EditorialP>
        Most organisations that produce training treat the programme as a body of content:
        modules, decks, videos, workbooks. When the programme fails, when learners underperform,
        when auditors find gaps, when behaviour does not change, the reflex is to review the
        content. Rewrite the modules. Refilm the videos. Add scenarios.
      </EditorialP>
      <EditorialP>
        The reflex is misdirected. The failure is rarely in the content. It is in the layer
        beneath the content. The structural decisions about what concepts must exist, how they
        relate, and how they progress. Those decisions are the framework. Most training
        programmes have never had one.
      </EditorialP>

      <EditorialH2 id="sec-1">Content is not the artefact</EditorialH2>
      <EditorialP>
        The industry treats content as the object of record. A programme is what has been
        written, filmed, and packaged. Ask an L&D leader what their programme covers and the
        answer will describe a library. Ask what the library covers and the answer will describe
        another library, one level down. There is no artefact above the content that the content
        is accountable to.
      </EditorialP>
      <EditorialP>
        Structure governs coverage. It governs order. It governs what counts as a complete
        answer to a requirement. Without an explicit structural artefact upstream of the
        wording, none of those judgements are inspectable. They live inside authors, one
        paragraph at a time, and they leave the organisation when the authors do.
      </EditorialP>

      <PullQuote attribution="Knowledge Foundry, Structural Literacy Manifesto">
        The framework is the object of record. Content is downstream of it.
      </PullQuote>

      <EditorialH2 id="sec-2">What a framework actually is</EditorialH2>
      <EditorialP>
        A framework, in the sense used here, is not a table of contents. It is a structured
        object, reviewable independent of any wording, testable against a source policy or
        standard, and inspectable by a subject matter expert before a single paragraph is drafted.
      </EditorialP>
      <EditorialList items={[
        <><strong>Concept nodes.</strong> Named units of knowledge with definitions and provenance back to the source clauses that made them necessary.</>,
        <><strong>Typed relationships.</strong> Explicit connections (depends on, contains, contradicts, supersedes) that name how concepts sit against each other.</>,
        <><strong>Prerequisite graph.</strong> The order in which concepts must be met, treated as a property of the subject, not an author preference.</>,
        <><strong>Assessment definitions.</strong> The evidence each node requires before a claim of competence can be made against it.</>,
      ]} />

      <EditorialH2 id="sec-3">What breaks when authors write first</EditorialH2>
      <EditorialP>
        When authors write before this object exists, three things happen. Structural decisions
        get smuggled into paragraphs. A concept is introduced early because the author found a
        good sentence for it, not because the subject requires it there. Coverage becomes
        unmeasurable. The only way to ask whether the programme covers the requirement is to
        reread the programme. Revision becomes catastrophic. When the source changes, no one
        knows which paragraphs to update, because no paragraph is explicitly tied to the
        requirement it satisfies.
      </EditorialP>

      <EditorialAside title="On the word framework">
        <p>
          The word is overused. In the Foundry sense, a framework is not a taxonomy, a mind
          map, or a course outline. It is a structured, machine readable object with concept
          nodes, typed relationships, prerequisite chains, and assessment definitions. Each of
          them is traceable to a source clause. If a putative framework cannot answer the coverage,
          lineage, and evidence questions by query, it is a diagram, not a framework.
        </p>
      </EditorialAside>

      <EditorialH2 id="sec-4">Structural literacy is a stance</EditorialH2>
      <EditorialP>
        Design that begins with the framework is not a feature a lesson authoring tool can add. It
        is a discipline that requires a different kind of professional attention. One most
        instructional design curricula do not teach and most L&D functions do not hire for. The
        Foundry is built to make the discipline enforceable regardless of who is at the keyboard.
        But the underlying shift is one of professional stance. The question a mature L&D
        function should be able to answer is not <em>what is in our library</em>. It is
        <em> what framework does our library implement, and where does it diverge from the
        framework the subject actually requires.</em>
      </EditorialP>
    </EditorialArticle>
  );
}
