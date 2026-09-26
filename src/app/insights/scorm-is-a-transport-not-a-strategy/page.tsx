import type { Metadata } from "next";
import { Package, Route, Layers3 } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "SCORM is a transport, not a strategy — Knowledge Foundry",
  description:
    "SCORM and xAPI describe delivery. They do not say what a learner should know. Confusing the two produces confident vendors and undefended programmes.",
};

const supporting = [
  {
    icon: <Package className="h-5 w-5" />,
    title: "SCORM is a packaging spec",
    desc: "It defines how a learning object is bundled, launched by an LMS, and reports completion. It says nothing about whether the object teaches the right thing to the right learner in the right order.",
  },
  {
    icon: <Route className="h-5 w-5" />,
    title: "xAPI is a telemetry protocol",
    desc: "It defines how learning events are recorded and moved between systems. It captures what happened. It does not decide what should happen, or what the events mean.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "The strategy lives above both",
    desc: "The framework — concepts, relationships, progression, assessment definitions — is what the standards transport is silent on. Standards conformance is table stakes. Strategy is the framework.",
  },
];

const related = [
  { eyebrow: "Methodology", title: "Knowledge structure before content", desc: "Writing before structure is the root cause of training failure.", href: "/insights/knowledge-structure-before-content" },
  { eyebrow: "Methodology", title: "The four-move methodology, in depth", desc: "Interpret. Structure. Produce. Deliver.", href: "/insights/framework-first-methodology" },
  { eyebrow: "Audit", title: "Why training fails audits", desc: "Audit failures trace to structure, not to content.", href: "/insights/why-training-fails-audits" },
];

export default function ScormIsATransportPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insight · Standards"
        breadcrumb={[
          { label: "Insights", href: "/insights" },
          { label: "SCORM is a transport, not a strategy", href: "/insights/scorm-is-a-transport-not-a-strategy" },
        ]}
        title={<>SCORM is a transport. <span className="text-[color:var(--color-forge)]">Not a strategy.</span></>}
        lede="SCORM and xAPI describe how a learning object is packaged and how completion is reported. They are silent on the question that actually matters: what should the learner know."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "All insights", href: "/insights" }}
      />

      <Section spacing="compact">
        <Container size="narrow">
          <div className="flex items-center gap-3 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            <span>February 2026</span>
            <span aria-hidden>·</span>
            <span>6 min read</span>
            <span aria-hidden>·</span>
            <span className="text-[color:var(--color-forge)]">Standards</span>
          </div>
        </Container>
      </Section>

      <ProseBlock variant="single" eyebrow="The argument" title="Standards conformance is not a knowledge decision.">
        <p>
          Procurement conversations in L&D routinely conflate two very different classes of
          question. The first is a delivery question: is the content SCORM 1.2 or SCORM 2004
          conformant, does it emit xAPI statements, can it be launched from our LMS. The second
          is a knowledge question: is the content the right content, in the right order, for
          this cohort, against this requirement.
        </p>
        <p>
          The first class of question is important. SCORM and xAPI exist because
          interoperability is a real problem, and both specifications solve it well enough for
          most organisations. The second class of question is the harder one. And the second
          class is the one the standards do not, and were never intended to, address.
        </p>
        <p>
          The confusion becomes expensive in two places. In procurement, standards conformance
          gets used as a proxy for content quality. A SCORM-conformant module and a
          non-conformant one can teach the same subject with wildly different fidelity to the
          underlying requirement. The conformance flag says nothing about which is which.
          Buyers who lean on the flag are buying an interoperability guarantee and mistaking it
          for a knowledge guarantee.
        </p>
        <p>
          In audit, the confusion is worse. An organisation asked to demonstrate coverage of a
          specific regulation will sometimes present a list of SCORM packages tagged with the
          regulation's name. The tagging is a claim about the topic of the package, made by
          whoever authored it. It is not a claim, backed by evidence, that the package actually
          covers the regulation's clauses at the depth the regulation requires. A framework
          would make that claim. A SCORM manifest cannot.
        </p>
        <p>
          A useful mental model: SCORM and xAPI are the road system. They move learning objects
          from one place to another and record their movement. The framework is the map. It
          tells you where you should be going, why, and whether you got there. A road system
          without a map is not a strategy. It is a way to be efficient about going nowhere in
          particular.
        </p>
        <p>
          <strong>Standards conformance is table stakes. The strategy lives one level up, in
          the framework the packages implement.</strong> Organisations that select vendors on
          conformance alone end up with libraries that ship cleanly and audit poorly.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Three distinctions"
        title="What each layer is and is not."
        features={supporting}
        columns={3}
        tone="warm"
      />

      <ProseBlock variant="single" eyebrow="So what" title="Buy for the framework. Not for the wrapper.">
        <p>
          When evaluating a training vendor or platform, the disqualifying question is not
          whether the output is SCORM conformant. Assume it is. The qualifying question is
          whether the output is generated from an explicit, reviewable framework the buyer
          controls — and whether every packaged object carries a link back to the framework
          node it satisfies. If the framework is absent, the vendor is selling packaging,
          however sophisticated. The knowledge decisions are still being made by the author,
          silently, one paragraph at a time.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent arguments." items={related} />

      <CtaBand
        eyebrow="See the framework, not just the package"
        title="Bring a subject and a delivery constraint."
        lede="Forty-five minutes on your source material. The Foundry proposes the framework, and shows how any delivery standard — SCORM, xAPI, or plain HTML — becomes a rendering choice rather than a strategy."
      />
    </>
  );
}
