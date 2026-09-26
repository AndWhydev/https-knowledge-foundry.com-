import type { Metadata } from "next";
import { Fingerprint, Eye, ClipboardCheck } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "What verification really measures — Knowledge Foundry",
  description:
    "Click-through completion is not evidence of competence. What real verification requires and why it matters to regulated organisations.",
};

const supporting = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Exposure is not proof",
    desc: "A completion record shows that a learner opened the material. It does not show that the concept landed, that the behaviour transferred, or that the decision would be made correctly under pressure.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Recall is not behaviour",
    desc: "Multiple choice tests measure recognition in a low-stakes, information-rich context. The context in which the behaviour is required is neither.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Real verification is triangulated",
    desc: "Competence is inferred, not observed directly. Defensible verification triangulates it — from knowledge, from applied judgement, from observed performance, and from supervisory sign-off.",
  },
];

const related = [
  { eyebrow: "Verification", title: "A primer on hybrid verification", desc: "What hybrid verification is, why it works, and where it does not.", href: "/insights/hybrid-verification-primer" },
  { eyebrow: "Audit", title: "Why training fails audits", desc: "Audit failures trace back to structure, not to content quality.", href: "/insights/why-training-fails-audits" },
  { eyebrow: "Methodology", title: "Knowledge structure before content", desc: "Writing before structure is the root cause of training failure.", href: "/insights/knowledge-structure-before-content" },
];

export default function WhatVerificationReallyMeasuresPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Verification"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "What verification really measures", href: "/insights/what-verification-really-measures" },
        ]}
        title={<>Click-through completion is not <span className="text-[color:var(--color-forge)]">evidence of competence.</span></>}
        lede="Verification is a claim about a person. If the claim is that a person can perform, the evidence must be about performance — not about exposure to the material."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>March 2026</span>
            <span aria-hidden>·</span>
            <span>7 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Verification</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="A completion record answers the wrong question.">
        <p>
          A verification event is a claim. The organisation asserts, in writing, that a given
          person meets a given standard on a given date. When something goes wrong later — a
          transaction misadvised, a procedure mishandled, a safety-critical decision made poorly
          — that claim is the evidence the organisation will be judged against.
        </p>
        <p>
          The default verification instrument in most organisations is a completion record from an
          LMS. The record shows that a learner opened the module and answered a set of multiple
          choice questions above a threshold. It is easy to produce and easy to audit against
          itself. It also answers a question no one is asking. The question the regulator, the
          incident review, or the board is asking is whether the person could, at the moment of
          the decision, do the thing. A completion record is not evidence about that question.
          It is evidence about a different question, addressed to nobody.
        </p>
        <p>
          The failure is not that completion records are wrong. It is that they are being used
          in place of a verification instrument they were never designed to be. The instrument
          measures exposure. The claim being made is about capability. The gap between the two
          is the space in which most training programmes fail their audits.
        </p>
        <p>
          Real verification begins by naming, for each competency, what evidence would justify
          the claim. For an advice conversation, the evidence is a structured scenario judged
          against a defined rubric. For a clinical procedure, the evidence is observed
          performance to a checklist, signed by a supervisor with the authority to sign it. For
          a safety-critical operation, the evidence is a combination of decision-under-pressure
          scenarios and field observation. For a policy adherence question, the evidence is a
          decision made in a situation constructed to test that specific adherence, not a
          recognition of the correct answer among four distractors.
        </p>
        <p>
          The instrument, in each case, is different from a multiple choice test. The record it
          produces is different. And crucially, the framework that specifies the evidence is
          named upstream, at the level of the concept, not improvised downstream at the level of
          the assessment.
        </p>
        <p>
          <strong>Verification is a claim about a person, made at a specific moment, against a
          specific standard.</strong> If the evidence behind the claim is not appropriate to the
          claim, the claim is not defensible. If the evidence is appropriate, the claim is. The
          discipline is not in the assessment tool. It is in the framework that specifies what
          evidence the claim requires.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Three propositions"
        title="What the evidence has to do to count."
        features={supporting}
        columns={3}
        tone="warm"
      />

      <ProseBlock variant="single" eyebrow="So what" title="If verification is a claim, treat it as one.">
        <p>
          A useful test for any verification programme is to name, for a single competency, what
          evidence the organisation would present if that competency were the subject of an
          incident review. If the answer is a completion record and a percentage score, the
          programme is asserting a claim its evidence cannot support. The corrective move is not
          more content. It is to redesign the verification instrument so that the record it
          produces is evidence about the question that will actually be asked.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="See defensible verification"
        title="Bring a competency you would need to defend."
        lede="Forty-five minutes on a competency your organisation would have to justify to a regulator or a board. You leave with the framework, the verification instrument, and a candid view on where your current evidence would hold up."
      />
    </>
  );
}
