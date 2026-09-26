import type { Metadata } from "next";
import { Fingerprint, KeyRound, FileLock2 } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "AI-generated content and compliance risk — Knowledge Foundry",
  description:
    "The provenance problem in AI-generated training. Why cryptographic evidence — Foundry Hash, Master Integrity Root, Forensic Revision Chain — matters for regulated buyers.",
};

const supporting = [
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Foundry Hash",
    desc: "A cryptographic hash bound to each generated element at the moment of generation. The hash pins the content to the framework node, the source clause, and the reviewer sign-off behind it.",
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Master Integrity Root",
    desc: "A single root of trust for the programme. Any tampering downstream — a paragraph quietly edited, a source citation swapped — invalidates the root. Integrity is verifiable in one query.",
  },
  {
    icon: <FileLock2 className="h-5 w-5" />,
    title: "Forensic Revision Chain",
    desc: "Every revision is chained, signed, and timestamped. The chain answers, without ambiguity, what changed, when, why, and on whose authority. Reconstruction of the audit narrative is a query.",
  },
];

const related = [
  { eyebrow: "Audit", title: "Why training fails audits", desc: "Audit failures are structural. So is the response.", href: "/insights/why-training-fails-audits" },
  { eyebrow: "Governance", title: "Knowledge drift, and how to detect it", desc: "Provenance is what makes drift discoverable.", href: "/insights/knowledge-drift-and-how-to-detect-it" },
  { eyebrow: "Standards", title: "SCORM is a transport, not a strategy", desc: "Packaging conformance is not a provenance guarantee.", href: "/insights/scorm-is-a-transport-not-a-strategy" },
];

export default function AIGeneratedComplianceRiskPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Provenance"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "AI-generated content and compliance risk", href: "/insights/ai-generated-content-and-compliance-risk" },
        ]}
        title={<>AI-generated compliance content has a <span className="text-[color:var(--color-forge)]">provenance problem.</span></>}
        lede="A regulator does not care whether content was authored by a human or a model. It cares whether the organisation can substantiate every claim. Provenance is what makes substantiation possible."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>December 2025</span>
            <span aria-hidden>·</span>
            <span>9 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Provenance</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="The regulator's question is not who wrote it. It is where it came from.">
        <p>
          A great deal of public debate about AI-generated compliance content circles the wrong
          question. Whether content was drafted by a subject-matter expert, a contractor, or a
          model is largely irrelevant to a regulator. The question the regulator asks is
          different, older, and harder: can the organisation substantiate the claim that this
          content correctly reflects the requirement it purports to teach, on the date it was
          delivered, to the cohort it was delivered to.
        </p>
        <p>
          Human-authored content has always had a provenance problem. It has just been quiet
          about it. An author wrote a paragraph, in their head; the paragraph made it into a
          module; the reasoning behind it lived in the author, not in the artefact; the author
          left; the reasoning left with them. Substantiation, in this world, is a narrative
          reconstruction after the fact. Regulators tolerate it because the alternative — no
          narrative at all — is worse. But narrative substantiation is fragile.
        </p>
        <p>
          Model-generated content magnifies the problem by an order of magnitude. Volume goes
          up. Speed goes up. The reasoning behind each generated element is opaque by default —
          buried in a prompt, a system message, and a set of weights the buyer cannot inspect.
          If a regulator or an incident review asks why a specific paragraph exists in a
          specific module, the honest answer, in most current AI-authoring workflows, is "we
          don't know." The organisation authored the paragraph without knowing why. That is a
          worse posture than the human-authored baseline it replaced.
        </p>
        <p>
          The corrective is not to slow down or to prohibit generation. It is to require, of any
          generation system used for compliance content, that generation be bound to structure
          and provenance at the moment it occurs. Every generated element must carry a
          cryptographic link back to the framework node it satisfies, the source clause behind
          the node, and the human reviewer who approved the generation. That link must be
          verifiable independently — by an auditor, by an incident review team, by the
          organisation itself — without trusting the vendor's assertions.
        </p>
        <p>
          This is what the Foundry's integrity architecture is for. The Foundry Hash pins each
          element to its framework node and source at generation time. The Master Integrity Root
          establishes a verifiable root of trust for the programme. The Forensic Revision Chain
          records every subsequent change, chained and signed, so that the lineage from source
          clause to delivered content — including every revision, every approver, every
          timestamp — is reconstructible at any moment, by any party with the right to ask.
        </p>
        <p>
          The point is not the cryptography. The point is the epistemic posture the cryptography
          enforces. Provenance stops being a promise the organisation makes to itself and
          becomes a property of the artefact.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Three integrity primitives"
        title="What binds a generated element to its provenance."
        features={supporting}
        columns={3}
        tone="warm"
      />

      <ProseBlock variant="single" eyebrow="So what" title="Buy provenance, or buy the next incident.">
        <p>
          For any regulated buyer evaluating a generation-capable training platform, the
          disqualifying question is not whether the platform can generate content. Most can.
          The disqualifying question is whether the platform can, on demand, substantiate every
          generated element against a specific framework node, a specific source clause, and a
          specific approver — without relying on the vendor's word. If the answer is no, the
          buyer is accepting an evidentiary posture worse than the human-authored baseline. If
          the answer is yes, and the substantiation is cryptographic rather than narrative, the
          buyer is in a better evidentiary posture than they have ever been.
        </p>
        <p>
          <strong>Speed without provenance is a liability. Provenance is the only thing that
          makes speed defensible.</strong>
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="See provenance in operation"
        title="Bring a subject and a regulator's question."
        lede="Forty-five minutes on your source material. The Foundry generates against it, and shows the full provenance chain — framework node, source clause, reviewer sign-off, integrity hash — on every element it produces."
      />
    </>
  );
}
