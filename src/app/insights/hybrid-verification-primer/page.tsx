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
  alternates: { canonical: "/insights/hybrid-verification-primer" },
  title: "A primer on hybrid verification",
  description:
    "What hybrid verification is, why it produces defensible evidence, and where it is the wrong instrument. A practical primer for compliance and L&D leaders.",
};

const toc = [
  { id: "sec-1", label: "Not a proprietary methodology" },
  { id: "sec-2", label: "What goes into the mix" },
  { id: "sec-3", label: "Where it is the wrong tool" },
  { id: "sec-4", label: "Design against the claim" },
];

const related = [
  { eyebrow: "Insight", title: "What verification really measures", href: "/insights/what-verification-really-measures" },
  { eyebrow: "Insight", title: "The four move methodology, in depth", href: "/insights/framework-first-methodology" },
  { eyebrow: "Capability", title: "Verification and trust", href: "/platform/verification-trust" },
];

export default function Page() {
  return (
    <EditorialArticle
      eyebrow="Insight · Verification"
      title="Hybrid verification, without the mystique."
      dek="A practical primer on what hybrid verification is, why it produces defensible evidence, and where it is the wrong instrument to reach for."
      date="8 January 2026"
      readingTime="8 min read"
      toc={toc}
      related={related}
    >
      <EditorialP>
        Hybrid verification is not a proprietary methodology. It is a description of how serious
        organizations verify serious things. Aviation, medicine, and the trades have been
        running hybrid verification for decades. Knowledge tests, simulator hours, observed
        procedures, and supervisor sign off, combined and cross referenced. The insight is not
        the mix. It is the reason the mix exists: no single instrument can, on its own,
        substantiate the claim that a person is competent to act.
      </EditorialP>
      <EditorialP>
        Corporate compliance training has largely defaulted to one instrument: the completion
        record, sometimes with a multiple choice test attached. The claim being made (that a
        person is qualified to advise a client, operate critical infrastructure, or perform a
        clinical procedure) is enormous. The evidence being offered is thin.
      </EditorialP>

      <EditorialH2 id="sec-1">Not a proprietary methodology</EditorialH2>
      <EditorialP>
        The regulated domains that hybrid verification comes from did not invent it as a
        product. They arrived at it because verification using a single instrument kept producing
        certifications that failed on contact with the work. Structure governs the mix. The
        framework names, per competency, what claim is being made and what evidence would
        substantiate it. The instruments are chosen against that specification, not against a
        default.
      </EditorialP>

      <PullQuote attribution="Knowledge Foundry, Verification Design Notes">
        Hybrid verification is the appropriate response to a serious claim. The design work is deciding, node by node, which claims are serious.
      </PullQuote>

      <EditorialH2 id="sec-2">What goes into the mix</EditorialH2>
      <EditorialP>
        A hybrid verification event is a composition. The composition is decided at the level of
        the framework node, not at the level of the assessment. Each component contributes a
        distinct kind of evidence, and each becomes part of a record that survives audit.
      </EditorialP>
      <EditorialList items={[
        <><strong>Knowledge component.</strong> Structured assessment of the concepts the framework requires, embedded in scenario. Not a bank of decontextualized multiple choice items, and not a proxy for competence on its own.</>,
        <><strong>Applied judgment component.</strong> Situational scenarios that require the learner to make a decision in context, judged against a rubric derived from the framework rather than from author intuition.</>,
        <><strong>Observed performance component.</strong> Where the competency is behavioral or safety critical, a structured observation event, driven by a checklist, signed by a supervisor with the authority to sign.</>,
      ]} />

      <EditorialH2 id="sec-3">Where it is the wrong instrument</EditorialH2>
      <EditorialP>
        Hybrid verification is not free, and applying it indiscriminately produces a program
        disproportionate to its own risk profile. A concept that is genuinely low stakes (a
        general awareness item, orientation content, a change notification) does not need
        observed performance. A knowledge acknowledgment, appropriately structured, is often
        sufficient. The judgment about which instruments a given node requires is itself a
        decision at the framework level. It is made once, at the level of the concept, and it
        is reviewable.
      </EditorialP>

      <EditorialAside title="On proportionality">
        <p>
          The failure mode to avoid is the opposite of the industry's current one. Verifying
          everything as if it were safety critical. The result is a verification program too
          expensive to sustain, which erodes back toward click through within eighteen months.
          The point of design at the framework level is proportionality. The claim, the instrument,
          and the cost matched at the node.
        </p>
      </EditorialAside>

      <EditorialH2 id="sec-4">Design against the claim</EditorialH2>
      <EditorialP>
        The composite record (knowledge score, judgment score, observation sign off, cohort,
        date, framework node, source clause) is the evidence the organization will present if
        the verification is ever contested. It is proportionate to the claim. It is traceable.
        It is not manufactured after an incident. It exists at the moment of verification, and
        it survives audit.
      </EditorialP>
    </EditorialArticle>
  );
}
