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
  alternates: { canonical: "/insights/what-verification-really-measures" },
  title: "What verification really measures",
  description:
    "Click through completion is not evidence of competence. What defensible verification requires, and why it matters to regulated organisations.",
};

const toc = [
  { id: "sec-1", label: "Verification is a claim" },
  { id: "sec-2", label: "What completion measures" },
  { id: "sec-3", label: "What the evidence must do" },
  { id: "sec-4", label: "Treat the claim as one" },
];

const related = [
  { eyebrow: "Insight", title: "A primer on hybrid verification", href: "/insights/hybrid-verification-primer" },
  { eyebrow: "Insight", title: "Why training fails audits", href: "/insights/why-training-fails-audits" },
  { eyebrow: "Capability", title: "Verification and trust", href: "/platform/verification-trust" },
];

export default function Page() {
  return (
    <EditorialArticle
      eyebrow="Insight · Verification"
      title="Click through completion is not evidence of competence."
      dek="Verification is a claim about a person. If the claim is that the person can perform, the evidence must be about performance, not about exposure to the material."
      date="19 March 2026"
      readingTime="7 min read"
      toc={toc}
      related={related}
    >
      <EditorialP>
        A verification event is a claim. The organisation asserts, in writing, that a given
        person meets a given standard on a given date. When something goes wrong later (a
        transaction misadvised, a procedure mishandled, a safety critical decision made poorly)
        that claim is the evidence the organisation will be judged against.
      </EditorialP>
      <EditorialP>
        The default verification instrument in most organisations is a completion record from an
        LMS. It shows that a learner opened the module and answered a set of multiple choice
        questions above a threshold. It is easy to produce and easy to audit against itself. It
        also answers a question no one is asking.
      </EditorialP>

      <EditorialH2 id="sec-1">Verification is a claim</EditorialH2>
      <EditorialP>
        Each verification record is a promise the organisation makes to the outside world. The
        promise is not that the learner was present. It is that the learner is capable. The
        record is the evidence behind that promise, and it will be read by someone (a regulator,
        an incident review team, a board) who is not interested in the mechanics of the LMS.
      </EditorialP>
      <EditorialP>
        Structure governs the claim. What the framework says a concept requires as evidence
        determines what the verification instrument has to do. If that upstream decision is
        absent, the instrument default (a multiple choice test) silently becomes the
        organisation's evidentiary posture for each competency it holds.
      </EditorialP>

      <PullQuote attribution="Knowledge Foundry, Verification Design Notes">
        Verification is a claim about a person, made at a specific moment, against a specific standard. The evidence has to be proportionate to the claim.
      </PullQuote>

      <EditorialH2 id="sec-2">What completion actually measures</EditorialH2>
      <EditorialP>
        The failure is not that completion records are wrong. It is that they are being used in
        place of a verification instrument they were never designed to be. The instrument
        measures exposure. The claim being made is about capability. The gap between the two is
        the space in which most training programmes fail their audits.
      </EditorialP>
      <EditorialList items={[
        <><strong>Exposure is not proof.</strong> A completion record shows the learner opened the material. It does not show the concept landed, the behaviour transferred, or the decision would be made correctly under pressure.</>,
        <><strong>Recall is not behaviour.</strong> Multiple choice tests measure recognition in a context that is low stakes and rich in information. The context in which the behaviour is required is neither.</>,
        <><strong>Aggregate scores hide failure.</strong> An eighty per cent pass on a mixed bank of questions can mean the learner mastered the trivial items and missed the safety critical ones. The record does not distinguish.</>,
      ]} />

      <EditorialH2 id="sec-3">What the evidence must do</EditorialH2>
      <EditorialP>
        Real verification begins by naming, for each competency, what evidence would justify the
        claim. For an advice conversation, the evidence is a structured scenario judged against
        a defined rubric. For a clinical procedure, the evidence is observed performance to a
        checklist, signed by a supervisor with the authority to sign it. For a safety critical
        operation, the evidence is a combination of scenarios that put the operator under pressure
        and field observation.
      </EditorialP>
      <EditorialP>
        The instrument, in each case, is different from a multiple choice test. The record it
        produces is different. Crucially, the framework that specifies the evidence is named
        upstream, at the level of the concept, not improvised downstream at the level of the
        assessment.
      </EditorialP>

      <EditorialAside title="A useful diagnostic">
        <p>
          Name a single competency your organisation holds. Ask what evidence you would present
          if that competency were the subject of an incident review tomorrow. If the honest
          answer is a completion record and a percentage score, the programme is asserting a
          claim its evidence cannot support.
        </p>
      </EditorialAside>

      <EditorialH2 id="sec-4">If verification is a claim, treat it as one</EditorialH2>
      <EditorialP>
        Not more content. Not another quiz appended to the module. The corrective move is to
        redesign the verification instrument so the record it produces is evidence about the
        question that will actually be asked. Each verification record is traceable to the
        framework node behind it, and each node names the evidence its claim requires. Do that
        upstream, and the downstream defence is a query. Skip it, and the defence is a narrative
        assembled the week the regulator arrives.
      </EditorialP>
    </EditorialArticle>
  );
}
