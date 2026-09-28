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
  alternates: { canonical: "/insights/framework-first-methodology" },
  title: "The four move methodology, in depth",
  description:
    "Interpret, structure, produce, deliver. The four move methodology behind Knowledge Foundry, explained at the level of rationale rather than marketing.",
};

const toc = [
  { id: "sec-1", label: "One move, undifferentiated" },
  { id: "sec-2", label: "Four moves, four artifacts" },
  { id: "sec-3", label: "What collapses when moves merge" },
  { id: "sec-4", label: "A sequencing discipline" },
];

const related = [
  { eyebrow: "Insight", title: "Knowledge structure before content", href: "/insights/knowledge-structure-before-content" },
  { eyebrow: "Insight", title: "Knowledge drift, and how to detect it", href: "/insights/knowledge-drift-and-how-to-detect-it" },
  { eyebrow: "Capability", title: "Framework intelligence", href: "/platform/framework-intelligence" },
];

export default function Page() {
  return (
    <EditorialArticle
      eyebrow="Insight · Methodology"
      title="Interpret. Structure. Produce. Deliver."
      dek="The four moves behind each Foundry engagement. This is the argument for why they are sequenced this way, and why collapsing any two of them into one produces the failures the industry has learned to normalize."
      date="15 January 2026"
      readingTime="9 min read"
      toc={toc}
      related={related}
    >
      <EditorialP>
        Most training programs, whether authored by humans or assisted by an LLM, execute a single
        undifferentiated move. A subject matter expert or an author reads some source material,
        decides in the same breath what the program should teach, and writes the content that
        teaches it. Interpretation, structure, production, and delivery all happen inside the
        head of one person, in one working session, undocumented.
      </EditorialP>
      <EditorialP>
        The result is a program in which no phase has an artifact of its own. There is only
        content, and the content is the only object the organization owns. Each downstream
        question (coverage, verification, audit, drift) is asked of the content, and each
        answer is a rereading of the content.
      </EditorialP>

      <EditorialH2 id="sec-1">One move, undifferentiated</EditorialH2>
      <EditorialP>
        The single move default is not stupid. It is efficient in the short run and legible to
        stakeholders who buy content. It fails on a longer horizon, when the organization is
        asked to defend a claim it made two years ago, in a language it no longer speaks, about
        a source that has since been amended.
      </EditorialP>

      <PullQuote attribution="Knowledge Foundry, Methodology Notes">
        Each move is a discipline. Each move produces an artifact the organization can defend. The sequencing is not aesthetic. It is the argument.
      </PullQuote>

      <EditorialH2 id="sec-2">Four moves, four artifacts</EditorialH2>
      <EditorialP>
        Structure governs the sequence. Each move takes the previous move's artifact as its
        input and produces its own artifact as output. Human sign off gates the transitions.
      </EditorialP>
      <EditorialList items={[
        <><strong>Interpret.</strong> Extract, from policies, standards, and subject matter, the requirements the program must satisfy. Sentence by sentence, with provenance preserved. Generation before interpretation is guesswork wearing a uniform.</>,
        <><strong>Structure.</strong> Propose a framework (concept nodes, typed relationships, prerequisite chains, assessment definitions) grounded in what interpretation produced. The framework is the object of record from this point on.</>,
        <><strong>Produce.</strong> Generate instruction, activities, and verification against the approved framework. Each produced element carries a link to the node it satisfies and, through the node, to the source clause.</>,
        <><strong>Deliver.</strong> Package and release under governance. Versioning, sign off, and deprecation are first class operations. Delivery opens the next iteration, not the end of the loop.</>,
      ]} />

      <EditorialH2 id="sec-3">What collapses when the moves merge</EditorialH2>
      <EditorialP>
        Skip Interpret and each downstream artifact inherits a guess about what the source
        requires. When the guess is wrong (discoverable only by rereading the source, which is
        the work you skipped) the program cannot be corrected in one place. It must be
        corrected everywhere the guess propagated.
      </EditorialP>
      <EditorialP>
        Skip Structure and you are back in the default failure mode. Authoring that begins with
        content, with structural decisions smuggled into paragraphs. Coverage becomes unmeasurable.
        Revision becomes catastrophic. Verification instruments are chosen after the fact rather
        than defined at the level of the concept.
      </EditorialP>
      <EditorialP>
        Invert Structure and Produce (write the content first, then reverse engineer a
        framework from it) and you get a framework that mirrors the content instead of judging
        it. The framework becomes a documentation exercise, not a design instrument. Auditors
        spot the inversion quickly.
      </EditorialP>

      <EditorialAside title="On sign off between phases">
        <p>
          The gates between moves are not administrative. They are the point at which the
          organization confirms that the previous artifact is the one it wants to build on.
          Without gates, the phases blur back into a single move, and the discipline collapses
          into the default it was meant to replace.
        </p>
      </EditorialAside>

      <EditorialH2 id="sec-4">A sequencing discipline, not a marketing frame</EditorialH2>
      <EditorialP>
        Each move is the input to the next. Each move produces an artifact the organization can
        defend. Each artifact is traceable to the one upstream of it and testable against the
        one downstream. That is what the four move methodology is for. Not a naming
        convention, but a sequence that keeps the phases separate long enough to hold each of
        them to its own standard.
      </EditorialP>
    </EditorialArticle>
  );
}
