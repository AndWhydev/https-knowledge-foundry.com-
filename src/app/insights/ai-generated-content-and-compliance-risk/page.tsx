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
  title: "AI-generated content and compliance risk — Knowledge Foundry",
  description:
    "The provenance problem in AI-generated training. Why cryptographic evidence — Foundry Hash, Master Integrity Root, Forensic Revision Chain — matters for regulated buyers.",
};

const toc = [
  { id: "sec-1", label: "The wrong debate" },
  { id: "sec-2", label: "Why generation magnifies the problem" },
  { id: "sec-3", label: "What integrity has to do" },
  { id: "sec-4", label: "Buy provenance, or buy the incident" },
];

const related = [
  { eyebrow: "Insight", title: "Why training fails audits", href: "/insights/why-training-fails-audits" },
  { eyebrow: "Insight", title: "Knowledge drift, and how to detect it", href: "/insights/knowledge-drift-and-how-to-detect-it" },
  { eyebrow: "Capability", title: "Audit evidence", href: "/platform/audit-evidence" },
];

export default function Page() {
  return (
    <EditorialArticle
      eyebrow="Insight · Provenance"
      title="AI-generated compliance content has a provenance problem."
      dek="A regulator does not care whether content was authored by a human or a model. It cares whether the organisation can substantiate every claim. Provenance is what makes substantiation possible."
      date="18 December 2025"
      readingTime="9 min read"
      toc={toc}
      related={related}
    >
      <EditorialP>
        A great deal of public debate about AI-generated compliance content circles the wrong
        question. Whether content was drafted by a subject-matter expert, a contractor, or a
        model is largely irrelevant to a regulator. The question the regulator asks is
        different, older, and harder: can the organisation substantiate the claim that this
        content correctly reflects the requirement it purports to teach, on the date it was
        delivered, to the cohort it was delivered to.
      </EditorialP>
      <EditorialP>
        Human-authored content has always had a provenance problem. It has just been quiet
        about it. An author wrote a paragraph, in their head; the paragraph made it into a
        module; the reasoning behind it lived in the author, not in the artefact; the author
        left; the reasoning left with them. Substantiation, in this world, is a narrative
        reconstruction after the fact.
      </EditorialP>

      <EditorialH2 id="sec-1">The wrong debate</EditorialH2>
      <EditorialP>
        The debate that gets most airtime — human versus model as author — is not the debate a
        regulator would recognise. Regulators do not ask who typed the sentence. They ask
        whether the organisation can produce, on demand, the chain from source clause to
        delivered content, and identify every hand and every model in between.
      </EditorialP>

      <PullQuote attribution="Knowledge Foundry, Integrity Notes">
        Speed without provenance is a liability. Provenance is the only thing that makes speed defensible.
      </PullQuote>

      <EditorialH2 id="sec-2">Why generation magnifies the problem</EditorialH2>
      <EditorialP>
        Model-generated content magnifies the human-authored provenance problem by an order of
        magnitude. Volume goes up. Speed goes up. The reasoning behind each generated element is
        opaque by default — buried in a prompt, a system message, and a set of weights the buyer
        cannot inspect. If a regulator or an incident review asks why a specific paragraph
        exists in a specific module, the honest answer, in most current AI-authoring workflows,
        is <em>we don't know</em>. The organisation authored the paragraph without knowing why.
        That is a worse posture than the human-authored baseline it replaced.
      </EditorialP>

      <EditorialH2 id="sec-3">What integrity has to do</EditorialH2>
      <EditorialP>
        The corrective is not to slow down or to prohibit generation. It is to require, of any
        generation system used for compliance content, that generation be bound to structure and
        provenance at the moment it occurs. Every generated element must carry a cryptographic
        link back to the framework node it satisfies, the source clause behind the node, and the
        human reviewer who approved the generation. That link must be verifiable independently
        — by an auditor, by an incident review team, by the organisation itself — without
        trusting the vendor's assertions.
      </EditorialP>
      <EditorialList items={[
        <><strong>Foundry Hash.</strong> A cryptographic hash bound to each generated element at the moment of generation. The hash pins the content to the framework node, the source clause, and the reviewer sign-off behind it.</>,
        <><strong>Master Integrity Root.</strong> A single root of trust for the programme. Any tampering downstream — a paragraph quietly edited, a source citation swapped — invalidates the root. Integrity is verifiable in one query.</>,
        <><strong>Forensic Revision Chain.</strong> Every revision is chained, signed, and timestamped. The chain answers, without ambiguity, what changed, when, why, and on whose authority.</>,
      ]} />

      <EditorialAside title="On what the cryptography is actually for">
        <p>
          The point is not the cryptography as such. The point is the epistemic posture the
          cryptography enforces. Provenance stops being a promise the organisation makes to
          itself and becomes a property of the artefact — inspectable by any party with the
          right to ask, without reliance on vendor goodwill.
        </p>
      </EditorialAside>

      <EditorialH2 id="sec-4">Buy provenance, or buy the next incident</EditorialH2>
      <EditorialP>
        For any regulated buyer evaluating a generation-capable training platform, the
        disqualifying question is not whether the platform can generate content. Most can. The
        disqualifying question is whether the platform can, on demand, substantiate every
        generated element against a specific framework node, a specific source clause, and a
        specific approver — without relying on the vendor's word. If the answer is no, the buyer
        is accepting an evidentiary posture worse than the human-authored baseline. If the
        answer is yes, and the substantiation is cryptographic rather than narrative, the buyer
        is in a better evidentiary posture than they have ever been.
      </EditorialP>
    </EditorialArticle>
  );
}
