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
  title: "Knowledge drift, and how to detect it. Knowledge Foundry",
  description:
    "What knowledge drift is, why it happens silently, and how design that begins with the framework surfaces it before an auditor does.",
};

const toc = [
  { id: "sec-1", label: "Drift is a condition" },
  { id: "sec-2", label: "Three forms it takes" },
  { id: "sec-3", label: "Why libraries cannot see it" },
  { id: "sec-4", label: "From detection to adjudication" },
];

const related = [
  { eyebrow: "Insight", title: "The four move methodology, in depth", href: "/insights/framework first-methodology" },
  { eyebrow: "Insight", title: "AI generated content and compliance risk", href: "/insights/ai-generated-content-and-compliance-risk" },
  { eyebrow: "Capability", title: "Knowledge governance", href: "/platform/knowledge-governance" },
];

export default function Page() {
  return (
    <EditorialArticle
      eyebrow="Insight · Governance"
      title="Knowledge drift is silent by default."
      dek="Training libraries do not fail suddenly. They drift quietly, over years, until an auditor asks a question the library was once able to answer and no longer can."
      date="22 January 2026"
      readingTime="7 min read"
      toc={toc}
      related={related}
    >
      <EditorialP>
        Each mature training library drifts. It is not a matter of author negligence. It is a
        natural consequence of authoring content, over years, against sources that themselves
        change and against operational practice that itself changes. The failure is not that
        drift occurs. The failure is that most libraries have no mechanism to see it occurring.
      </EditorialP>
      <EditorialP>
        When drift is finally noticed, it is usually by someone external. An auditor, an
        incident review, a regulator's question the library cannot answer. By then the
        divergence has been feeding operational decisions for months or years. The corrective
        cost is not the cost of updating a module. It is the cost of reconstructing a defensible
        position after the fact.
      </EditorialP>

      <EditorialH2 id="sec-1">Drift is a condition, not an event</EditorialH2>
      <EditorialP>
        Libraries do not fail suddenly. They accumulate small divergences from the sources and
        the practice they once tracked. Each divergence, on its own, is negligible. In
        aggregate, over time, they produce a library that no longer says what the organisation
        would want it to say, without anyone having authored the change.
      </EditorialP>

      <PullQuote attribution="Knowledge Foundry, Governance Notes">
        Drift is inevitable. Undetected drift is a design choice.
      </PullQuote>

      <EditorialH2 id="sec-2">Three forms drift takes</EditorialH2>
      <EditorialP>
        Not one phenomenon. Three. Each has a different source, a different pace, and a
        different signature. All three are invisible in a library organised as content.
      </EditorialP>
      <EditorialList items={[
        <><strong>Source drift.</strong> The regulation, standard, or policy changes. If the library has no link back to the source, the drift is invisible until a human notices, which is usually late.</>,
        <><strong>Interpretation drift.</strong> Different authors, at different times, interpret the same source clause differently. Two modules end up teaching subtly conflicting things. Learners see the conflict. Authors do not.</>,
        <><strong>Practice drift.</strong> Operational practice quietly diverges from documented procedure. Trainers, drawing on practice, teach what people do, not what the procedure says. The gap widens with each cohort.</>,
      ]} />

      <EditorialH2 id="sec-3">Why libraries organised as content cannot see it</EditorialH2>
      <EditorialP>
        Structure governs detection. All three forms of drift are invisible in a library
        organised as content, because there is nothing to compare a module against. The source
        it once satisfied has no explicit link to it. A human review can find drift, but only by
        reading the library end to end against the sources end to end, and only if the reviewer
        is competent to spot the divergences. This kind of review is rare, expensive, and by the
        time it happens the drift has usually already produced an operational consequence
        somewhere upstream.
      </EditorialP>

      <EditorialAside title="On the economics of manual review">
        <p>
          A full library reread against source is not a light exercise. For a mature enterprise
          library, it is a programme lasting many quarters with specialist reviewers. Most L&D
          functions cannot fund it on any regular cadence, which is why, in practice, drift is
          discovered by auditors rather than by the organisations that own the libraries.
        </p>
      </EditorialAside>

      <EditorialH2 id="sec-4">From detection to adjudication</EditorialH2>
      <EditorialP>
        Design that begins with the framework changes the detection problem. Each framework node
        is tied to the source clause that implies it. Each content asset is tied to the node it
        satisfies. When the source changes, the change is a diff against the framework, not a
        diff against a document nobody has time to reread. Nodes that require review light up.
        Content assets tied to those nodes are flagged. Drift stops being something a human has
        to notice. It becomes something the system reports, and something a human has to decide
        about. That inversion, from detection to adjudication, is the point.
      </EditorialP>
    </EditorialArticle>
  );
}
