import type { Metadata } from "next";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { ProcessSteps } from "@/components/solution/process-steps";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";

export const metadata: Metadata = {
  title: "Case study — Safety-critical operations training at a critical infrastructure operator",
  description:
    "Anonymised case study. An Australian critical infrastructure operator replaced pass-and-click training with a hybrid verification programme built on a framework derived from safety case documentation and ISO 45001.",
};

const steps = [
  {
    n: "01",
    title: "Framework from safety case and operational procedure",
    desc: "The safety case, ISO 45001 management system elements, task risk assessments, and operational procedures were ingested. The Foundry proposed a competency framework mapped directly to the behaviours the safety case assumed to be in place.",
  },
  {
    n: "02",
    title: "Coverage and precursor mapping",
    desc: "Existing training was compared against the framework. Precursor behaviours identified in the post-incident review were located in the framework — and, notably, several were absent from the existing training entirely.",
  },
  {
    n: "03",
    title: "Hybrid verification programme",
    desc: "Verification was rebuilt as a hybrid programme: instructed learning, situational judgement scenarios, observed performance in the field, and supervisor sign-off. Each verification event produced structured evidence attached to the framework node it validated.",
  },
  {
    n: "04",
    title: "Six-month post-implementation review",
    desc: "Six months after rollout, the operator reviewed pass rates on hybrid verification and, independently, incident precursor rates in operations. Both metrics were traced to specific framework nodes, giving the safety function a mechanism to see where training was and was not moving behaviour.",
  },
];

const related = [
  {
    eyebrow: "Adjacent sector",
    title: "Tier-1 financial institution",
    desc: "RG146 rebuild after an APRA thematic review flagged evidence gaps.",
    href: "/case-studies/regulated-financial-services",
  },
  {
    eyebrow: "Adjacent sector",
    title: "National hospital operator",
    desc: "Clinical procedure library consolidation with credentialing tie-in.",
    href: "/case-studies/national-healthcare-operator",
  },
  {
    eyebrow: "Capability",
    title: "Verification and trust",
    desc: "Hybrid verification methods that confirm capability rather than exposure.",
    href: "/platform/verification-trust",
  },
];

export default function CriticalInfrastructureCasePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Case study · Critical infrastructure"
        breadcrumb={[
          { label: "Case studies", href: "/case-studies" },
          { label: "Critical infrastructure operator", href: "/case-studies/critical-infrastructure" },
        ]}
        title={<>When the safety case assumed <span className="text-[color:var(--color-forge)]">behaviours the training did not teach.</span></>}
        lede="An Australian critical infrastructure operator replaced pass-and-click training with a hybrid verification programme derived from its safety case, operational procedures, and ISO 45001 management system."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "See all case studies", href: "/case-studies" }}
      />

      <ProseBlock eyebrow="The situation" title="A post-incident review that named the training.">
        <p>
          The trigger was not a fine and it was not a regulator. It was an incident, and the
          post-incident review that followed. The review found no single cause, as reviews of
          this kind rarely do. It found a chain of small deviations that, individually, would
          have been considered acceptable practice by the crews involved. Collectively, they
          were not.
        </p>
        <p>
          The review's most uncomfortable finding was structural. The safety case assumed
          specific operator behaviours — micro-decisions at defined points in the task. Those
          behaviours were not taught anywhere in the training programme. Operators had learned
          the procedure and passed the assessment. The assessment had not been designed to
          verify the behaviours the safety case relied on.
        </p>
        <p>
          The operator's training was not deficient in the ordinary sense. It was deficient in
          the sense that it was not connected to the framework that the safety case implied. The
          engagement began by making that framework explicit.
        </p>
      </ProseBlock>

      <ProseBlock eyebrow="The framework work" title="Draw the framework the safety case already assumes.">
        <p>
          Every safety case implies a competency framework. It names the behaviours that the risk
          controls depend on. Historically, that implied framework had never been made explicit
          on this site. The Foundry ingested the safety case, task risk assessments, operational
          procedures, and the ISO 45001 elements that governed them, and proposed the framework
          those documents together implied.
        </p>
        <p>
          Coverage of the existing training was then measured against the framework. Some
          framework nodes were fully covered. Some were partially covered. Several — including
          two of the precursor behaviours the post-incident review had named — were not covered
          at all. The gap was not a training gap in isolation. It was a gap between the safety
          case and the training system that was supposed to enact it.
        </p>
        <p>
          Verification was rebuilt from the framework outwards. The programme became hybrid by
          design: instructed content, situational judgement scenarios that exercised the
          precursor behaviours specifically, observed performance in the field, and structured
          supervisor sign-off. Every verification event carried a Foundry Hash back to the
          framework node and the safety case clause behind it.
        </p>
      </ProseBlock>

      <ProcessSteps
        eyebrow="How Knowledge Foundry was applied"
        title="Framework, gap, hybrid verification, follow-up."
        lede="The safety case became the source of the framework. The framework became the source of the verification. Every verification event produced evidence traceable back to the safety case clause that made it necessary."
        steps={steps}
      />

      <ProseBlock eyebrow="The outcome" title="Verification that moved behaviour, and the data to see it.">
        <p>
          Illustrative figures from the six-month follow-up:<sup>*</sup> pass rate on the hybrid
          verification programme — the more stringent verification — rose above the pass rate
          the previous pass-and-click assessment had recorded on the same population, driven by
          repeat exposure to the situational judgement material. Independently, the incident
          precursor rate for the two behaviours specifically targeted by the redesigned
          verification fell over the follow-up window.
        </p>
        <p>
          The more important shift, according to the operator's safety function, was epistemic.
          For the first time, the training system produced data that could be read against the
          safety case. When behaviour drifted, the framework showed where. When behaviour
          improved, the framework showed why.
        </p>
        <p className="!text-[12px] !leading-[1.7] text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)] pt-4 border-t border-[color:var(--color-hairline)]">
          <sup>*</sup> Figures shown are illustrative and reflect a typical range for engagements of
          this profile. Actual programme metrics are shared under NDA on request.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent engagements and capabilities." items={related} />

      <CtaBand
        eyebrow="A framework for your safety case"
        title="Bring the behaviours your safety case relies on."
        lede="Forty-five minutes with your safety and training leads. The Foundry proposes the competency framework your safety case already implies, and shows you which nodes your current training does not yet cover."
      />
    </>
  );
}
