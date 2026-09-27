import type { Metadata } from "next";
import {
  Factory,
  HardHat,
  ShieldAlert,
  ClipboardCheck,
  Wrench,
  Fingerprint,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { AnimatedEditorial } from "@/components/motion/animated-editorial";

export const metadata: Metadata = {
  title: "Energy & Resources. Safety critical competency, verified by construction",
  description:
    "Alignment to ISO 45001, verification based on competency, and structured operational procedures for high consequence roles. Execution is a property of the system, not of the operator.",
};

const capabilities = [
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Alignment to ISO 45001",
    desc: "Occupational health and safety training structured against ISO 45001 clauses (hazard identification, risk assessment, competency, communication, and continual improvement) with coverage tagged to role.",
  },
  {
    icon: <ShieldAlert className="h-5 w-5" />,
    title: "Verification for safety critical roles",
    desc: "For roles where an error carries irreversible consequences (permit to work, isolation, confined space, high voltage) competency thresholds are defined at the framework level and demonstrably verified.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Execution anchored to procedure",
    desc: "Operational procedures are treated as structured objects: steps, decision points, failure risks, and validation checkpoints, with instruction generated to fit. Consistency across shifts and sites is architectural.",
  },
  {
    icon: <Factory className="h-5 w-5" />,
    title: "Variants specific to a site",
    desc: "One approved framework carries variants for site, plant, or equipment set without duplicating the underlying competency model. Governance stays central. Local variation is inspectable.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Evidence ready for the regulator",
    desc: "For inspection by a state work health and safety regulator, or for internal HSE audit, coverage, verification history, and sign off chains export as a coherent pack, not a discovery exercise.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Remediation driven by incident",
    desc: "When an incident produces a lesson, the framework is patched at the specific node affected. Downstream instruction regenerates. Retraining evidence attaches to the incident record.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the safety case",
    desc: "Safety management system documents, alignment to ISO 45001, procedural standards, and licence conditions are ingested and parsed at clause level.",
  },
  {
    n: "02",
    title: "Structure by role and site",
    desc: "Competencies are tagged to specific safety critical roles and to specific sites or asset classes. Thresholds are defined per role, not per module.",
  },
  {
    n: "03",
    title: "Construct the framework",
    desc: "A competency and procedural framework is proposed. Your HSE, operations, and training leads review and approve before instruction and verification are generated.",
  },
  {
    n: "04",
    title: "Evidence competency continuously",
    desc: "Verification history, refresh cycles, and retraining driven by incidents accumulate as evidence. When the regulator or the executive committee asks, the answer is a report.",
  },
];

const faq = [
  {
    q: "How does this support ISO 45001 certification maintenance?",
    a: "The framework encodes ISO 45001 clauses relevant to competency, communication, and operational control, and traces each module and verification checkpoint back to the specific clause it satisfies. Under surveillance audit, the artefact you present is a framework with coverage at the level of the clause, not a defence assembled after the audit notice arrives.",
  },
  {
    q: "Can this handle verification based on competency for high consequence roles like permit issuers or isolation authorities?",
    a: "Yes. High consequence roles are exactly where the hybrid verification model applies most strongly. Competency thresholds are defined at the framework level, applied assessment measures behaviour under realistic constraint, and certification decisions carry a full audit chain of assessment attempts, threshold logic, and reviewer sign off.",
  },
  {
    q: "We operate multiple sites with different equipment and different jurisdictional requirements. Can one framework cover them?",
    a: "Yes. The framework can carry variants specific to a site or jurisdiction without duplicating the underlying competency model. Where a step differs (equipment specific to a site, a licence condition specific to a state) the variant is a branch on the framework, not a fork of the whole system.",
  },
  {
    q: "How does the platform handle procedural change following an incident?",
    a: "When a lesson emerges from an incident, the framework is patched at the specific structural node affected. Downstream instruction regenerates against the update. Retraining evidence (who, when, to what threshold) attaches directly to the incident record for governance review.",
  },
  {
    q: "Does the platform claim ISO 45001 certification itself?",
    a: "No. The Foundry produces evidence structured against ISO 45001 clauses. It does not represent itself as ISO 45001 certified in its own right. Technical, deployment, and data handling posture is covered in the Technical Overview and confirmed through supplier due diligence.",
  },
];

const related = [
  {
    eyebrow: "Program",
    title: "Operational procedures",
    desc: "The program model for turning tasks and workflows into repeatable, verifiable execution. Anchored to structure, not to tribal knowledge.",
    href: "/programs/operational-procedures",
  },
  {
    eyebrow: "Program",
    title: "Hybrid verification",
    desc: "For safety critical competency, where exposure is not proof and certification decisions must be demonstrably defensible.",
    href: "/programs/hybrid-verification",
  },
  {
    eyebrow: "Capability",
    title: "Knowledge governance",
    desc: "The platform capability that governs ownership, review cadences, and drift detection for programmes that must stay current with plant, procedure, and law.",
    href: "/platform/knowledge-governance",
  },
];

export default function EnergyResourcesPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Industry · Energy & Resources"
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: "Energy & resources", href: "/industries/energy-resources" },
        ]}
        title={
          <>
            Consistency is a property of the <span className="text-[color:var(--color-forge)]">system</span>.
          </>
        }
        lede="Safety critical operations turned into structured, verifiable competency. Procedures anchored to frameworks. Verification anchored to procedures. Evidence anchored to verification."
        secondaryCta={{ label: "See operational procedures", href: "/programs/operational-procedures" }}
        visual={<AnimatedEditorial src="editorial-infrastructure.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Execution cannot rely on the memory of the person on shift."
      >
        <p>
          In energy generation, mining, oil and gas, and heavy resource operations, procedural
          drift produces incidents. Watching someone else, reading informal instructions, and
          relying on prior experience are common. The consequences, when the system fails,
          are neither reversible nor contained. When a coroner or a regulator asks how competency
          was assured, "we trained them" is not an answer. "Here is the framework, the assessment,
          and the sign off chain" is.
        </p>
        <p>
          The Foundry treats safety management systems and operational procedures as sources of
          structural obligation. Frameworks encode who must be competent to do what, to what
          threshold, with what evidence. Programmes generate to fit. Consistency is architectural.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves for energy and resources"
        title="Safety critical competency, by construction."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From safety case to verified competency."
        lede="Structure precedes instruction. Only once your HSE and operations leaders have approved the framework does the platform generate the material and verification that satisfies it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Evidence that survives a regulator visit and an incident review."
      >
        <p>
          Frameworks aligned to ISO 45001 and to your own safety management system. Competency
          verification for safety critical roles that carries an exportable audit chain.
          Operational procedures where consistency does not depend on who is on shift.
          Remediation driven by incidents that ties framework updates directly to the lesson learned.
        </p>
        <p>
          The programme defends itself. So does the certification decision that flows from it.
        </p>
      </ProseBlock>

      <FAQ title="How energy and resources engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a safety case"
        title="See your competency model take shape."
        lede="Send us a safety management document, an operational procedure, or a competency requirement for a safety critical role. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
