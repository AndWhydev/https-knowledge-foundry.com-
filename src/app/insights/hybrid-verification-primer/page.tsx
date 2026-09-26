import type { Metadata } from "next";
import { Brain, HandshakeIcon, ClipboardCheck } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "A primer on hybrid verification — Knowledge Foundry",
  description:
    "What hybrid verification is, why it works, and where it does not. A practical primer for compliance and L&D leaders in regulated organisations.",
};

const supporting = [
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Knowledge component",
    desc: "Structured, scenario-embedded assessment of the concepts the framework requires. Not a bank of decontextualised multiple choice items, and not a proxy for competence on its own.",
  },
  {
    icon: <HandshakeIcon className="h-5 w-5" />,
    title: "Applied judgement component",
    desc: "Situational scenarios that require the learner to make a decision in context, judged against a rubric derived from the framework — not from author intuition.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Observed performance component",
    desc: "Where the competency is behavioural or safety-critical, a structured observation event, checklist-driven, signed by a supervisor with the authority to sign.",
  },
];

const related = [
  { eyebrow: "Verification", title: "What verification really measures", desc: "Why click-through completion is not evidence of competence.", href: "/insights/what-verification-really-measures" },
  { eyebrow: "Methodology", title: "The four-move methodology, in depth", desc: "Where verification fits in the sequence.", href: "/insights/framework-first-methodology" },
  { eyebrow: "Audit", title: "Why training fails audits", desc: "Audit findings are structural, and verification is where structure shows.", href: "/insights/why-training-fails-audits" },
];

export default function HybridVerificationPrimerPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Verification"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "Hybrid verification primer", href: "/insights/hybrid-verification-primer" },
        ]}
        title={<>Hybrid verification, <span className="text-[color:var(--color-forge)]">without the mystique.</span></>}
        lede="A practical primer on what hybrid verification is, why it produces defensible evidence, and where it is the wrong instrument to reach for."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>January 2026</span>
            <span aria-hidden>·</span>
            <span>8 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Verification</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="Verification instruments are chosen for the claim, not for convenience.">
        <p>
          Hybrid verification is not a proprietary methodology. It is a description of how
          serious organisations verify serious things. Aviation, medicine, and the trades have
          been running hybrid verification for decades — knowledge tests, simulator hours,
          observed procedures, and supervisor sign-off, combined and cross-referenced. The
          insight is not the mix. It is the reason the mix exists: no single instrument can, on
          its own, substantiate the claim that a person is competent to act.
        </p>
        <p>
          Corporate compliance training has largely defaulted to one instrument: the completion
          record, sometimes with a multiple choice test attached. The claim being made — that a
          person is qualified to advise a client, operate a piece of critical infrastructure, or
          perform a clinical procedure — is enormous. The evidence being offered is thin. In
          most cases, no auditor would ever accept an equivalent evidentiary standard in the
          domain they came from. The equivalence gets tolerated in training because it has been
          normalised, not because it is defensible.
        </p>
        <p>
          Hybrid verification, done well, restores proportion. The programme decides, at the
          level of the framework node, what claim it is asserting about the learner. It then
          selects, per node, the verification instruments appropriate to that claim. A concept
          that is genuinely a knowledge question — recognising a regulation, identifying a
          category of product — is verified with a structured knowledge instrument. A concept
          that is a judgement question — how to handle a complaint that touches multiple
          policies, how to prioritise conflicting safety instructions — is verified with a
          situational judgement instrument, judged against a framework-derived rubric. A concept
          that is behavioural — an actual procedure performed on actual equipment — is verified
          with observed performance, signed by an accountable person.
        </p>
        <p>
          The composite record — knowledge score, judgement score, observation sign-off, cohort,
          date, framework node, source clause — is the evidence the organisation will present
          if the verification is ever contested. It is proportionate to the claim. It is
          traceable. It is not manufactured after an incident. It exists at the moment of
          verification, and it survives audit.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Three components"
        title="What goes into a hybrid verification event."
        features={supporting}
        columns={3}
        tone="warm"
      />

      <ProseBlock variant="single" eyebrow="Where it is the wrong instrument" title="Not every competency needs the full stack.">
        <p>
          Hybrid verification is not free, and applying it indiscriminately produces a programme
          that is disproportionate to its own risk profile. A concept that is genuinely low-stakes
          — a general awareness item, a piece of orientation content, a change notification — does
          not need observed performance. A knowledge acknowledgement, appropriately structured, is
          often sufficient. The judgement about which instruments a given node requires is itself
          a framework-level decision. It is made once, at the level of the concept, and it is
          reviewable.
        </p>
        <p>
          The failure mode to avoid is the opposite of the industry's current one: verifying
          everything as if it were safety-critical. The result is a verification programme too
          expensive to sustain, which erodes back toward click-through within eighteen months.
          The point of framework-level design is proportionality. The claim, the instrument, and
          the cost are matched at the node.
        </p>
        <p>
          <strong>Hybrid verification is the appropriate response to a serious claim.</strong>
          The design work is deciding, node by node, which claims are serious.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="Design verification against the claim"
        title="Bring a competency you would need to defend."
        lede="Forty-five minutes on a competency that would face scrutiny in your industry. The Foundry proposes the framework node, the appropriate instruments, and the evidence structure the claim requires."
      />
    </>
  );
}
