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
  title: "SCORM is a transport, not a strategy. Knowledge Foundry",
  description:
    "SCORM and xAPI describe delivery. They do not say what a learner should know. Confusing the two produces confident vendors and undefended programmes.",
};

const toc = [
  { id: "sec-1", label: "Two questions, one flag" },
  { id: "sec-2", label: "Where the confusion is expensive" },
  { id: "sec-3", label: "The road and the map" },
  { id: "sec-4", label: "Buy for the framework" },
];

const related = [
  { eyebrow: "Insight", title: "Knowledge structure before content", href: "/insights/knowledge-structure-before-content" },
  { eyebrow: "Insight", title: "The four-move methodology, in depth", href: "/insights/framework-first-methodology" },
  { eyebrow: "Capability", title: "Standards and accreditation", href: "/platform/standards-accreditation" },
];

export default function Page() {
  return (
    <EditorialArticle
      eyebrow="Insight · Standards"
      title="SCORM is a transport. Not a strategy."
      dek="SCORM and xAPI describe how a learning object is packaged and how completion is reported. They are silent on the question that actually matters: what should the learner know."
      date="5 February 2026"
      readingTime="6 min read"
      toc={toc}
      related={related}
    >
      <EditorialP>
        Procurement conversations in L&D routinely conflate two very different classes of
        question. The first is a delivery question: is the content SCORM 1.2 or SCORM 2004
        conformant, does it emit xAPI statements, can it be launched from our LMS. The second
        is a knowledge question: is the content the right content, in the right order, for this
        cohort, against this requirement.
      </EditorialP>
      <EditorialP>
        The first class is important. SCORM and xAPI exist because interoperability is a real
        problem, and both specifications solve it well enough for most organisations. The
        second class is the harder one. And it is the one the standards do not, and were never
        intended to, address.
      </EditorialP>

      <EditorialH2 id="sec-1">Two questions, one flag</EditorialH2>
      <EditorialP>
        Standards conformance is a fact about packaging. It says the object will launch, report,
        and interoperate. It says nothing about whether the object teaches the right thing to
        the right learner in the right order. Structure governs the second question. The
        standard does not touch it.
      </EditorialP>
      <EditorialList items={[
        <><strong>SCORM is a packaging spec.</strong> It defines how a learning object is bundled, launched by an LMS, and reports completion. It is silent on content correctness.</>,
        <><strong>xAPI is a telemetry protocol.</strong> It defines how learning events are recorded and moved between systems. It captures what happened. It does not decide what should happen.</>,
        <><strong>The strategy lives above both.</strong> The framework. concepts, relationships, progression, assessment definitions. is what the standards transport is silent on.</>,
      ]} />

      <PullQuote attribution="Knowledge Foundry, Standards Posture Notes">
        Standards conformance is table stakes. The strategy lives one level up, in the framework the packages implement.
      </PullQuote>

      <EditorialH2 id="sec-2">Where the confusion is expensive</EditorialH2>
      <EditorialP>
        In procurement, standards conformance gets used as a proxy for content quality. A
        SCORM-conformant module and a non-conformant one can teach the same subject with wildly
        different fidelity to the underlying requirement. The conformance flag says nothing
        about which is which. Buyers who lean on the flag are buying an interoperability
        guarantee and mistaking it for a knowledge guarantee.
      </EditorialP>
      <EditorialP>
        In audit, the confusion is worse. An organisation asked to demonstrate coverage of a
        specific regulation will sometimes present a list of SCORM packages tagged with the
        regulation's name. The tagging is a claim about the topic of the package, made by
        whoever authored it. It is not a claim, backed by evidence, that the package actually
        covers the regulation's clauses at the depth the regulation requires. A framework would
        make that claim. A SCORM manifest cannot.
      </EditorialP>

      <EditorialAside title="A working mental model">
        <p>
          SCORM and xAPI are the road system. They move learning objects from one place to
          another and record their movement. The framework is the map. It tells you where you
          should be going, why, and whether you got there. A road system without a map is not
          a strategy. It is a way to be efficient about going nowhere in particular.
        </p>
      </EditorialAside>

      <EditorialH2 id="sec-3">Buy for the framework. Not for the wrapper.</EditorialH2>
      <EditorialP>
        When evaluating a training vendor or platform, the disqualifying question is not whether
        the output is SCORM conformant. Assume it is. The qualifying question is whether the
        output is generated from an explicit, reviewable framework the buyer controls — and
        whether every packaged object carries a link back to the framework node it satisfies.
        If the framework is absent, the vendor is selling packaging, however sophisticated.
      </EditorialP>

      <EditorialH2 id="sec-4">A practical corrective</EditorialH2>
      <EditorialP>
        Rewrite the procurement scorecard. Move standards conformance to the pass/fail column
        where it belongs, and replace the middle of the sheet with framework questions: does the
        vendor produce a reviewable framework, can it be inspected before generation, does every
        generated element carry provenance back to a framework node and a source clause. Vendors
        that cannot answer those questions are not selling knowledge. They are selling packaging.
      </EditorialP>
    </EditorialArticle>
  );
}
