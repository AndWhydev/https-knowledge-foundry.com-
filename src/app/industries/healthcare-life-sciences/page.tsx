import type { Metadata } from "next";
import {
  HeartPulse,
  Stethoscope,
  ClipboardCheck,
  BadgeCheck,
  Pill,
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
  title: "Healthcare & Life Sciences. Clinical governance and credentialing, evidenced",
  description:
    "Clinical governance, credentialing, AHPRA CPD, and TGA advertising rules mapped to structured programmes. Competency verified, evidence exportable, ready for audit by design.",
};

const capabilities = [
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Clinical governance alignment",
    desc: "Programmes structured against the National Safety and Quality Health Service Standards and jurisdictional clinical governance frameworks, with instruction traced to each specific criterion.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Credentialing and scope",
    desc: "Credentialing pathways based on role and mapped to defined scope of practice. Verification checkpoints produce defensible evidence of competency at the moment scope is granted, extended, or restored.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "CPD architecture for AHPRA",
    desc: "Continuing professional development programmes structured to National Board standards, with self reflection, assessment, and outcome mapping produced as evidence rather than as narrative.",
  },
  {
    icon: <Pill className="h-5 w-5" />,
    title: "Product training conscious of TGA rules",
    desc: "Training on products and therapeutic goods authored against TGA advertising, product information, and Consumer Medicine Information constraints, so promotional material and educational material are cleanly separated.",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Adverse event and incident capture",
    desc: "Where lessons must be learned from clinical incidents, remediation loops tie framework updates to specific events and evidence what was retrained, when, and to what threshold.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Consistency across many sites",
    desc: "One approved framework produces consistent programmes across hospitals, clinics, or laboratories while carrying variants specific to a site where local governance requires them.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the governance",
    desc: "Clinical governance frameworks, professional standards, TGA guidance, and internal credentialing policy are ingested and parsed at the level of the criterion.",
  },
  {
    n: "02",
    title: "Structure by role",
    desc: "Obligations and scope are attached to specific credentialed roles (clinicians, nurses, allied health, laboratory scientists, medical affairs) with thresholds per role.",
  },
  {
    n: "03",
    title: "Construct the framework",
    desc: "A framework for clinical or product training is proposed, reviewed by your clinical governance lead, and approved before instruction and assessment are generated.",
  },
  {
    n: "04",
    title: "Evidence competency",
    desc: "Credentialing records, CPD evidence, and retraining driven by incidents are exportable in the format your governance committee, accreditor, or National Board requires.",
  },
];

const faq = [
  {
    q: "Can this support NSQHS Standards accreditation cycles?",
    a: "Yes. Frameworks can encode alignment to specific NSQHS Standards criteria, and instruction, verification, and evidence flow from that alignment. When accreditation review approaches, the artefact you present is a framework with coverage at the level of the clause, not a folder of course completion records.",
  },
  {
    q: "How does this fit with AHPRA National Board CPD requirements?",
    a: "The Foundry produces CPD programmes structured to National Board expectations (categories, hours, reflective components, and outcome mapping) and evidences each practitioner's participation and assessment. CPD evidence exports in a form ready for annual registration renewal and audit.",
  },
  {
    q: "We are subject to TGA advertising rules for therapeutic goods training. How does the platform manage the boundary?",
    a: "The framework encodes the distinction between promotional and educational material at the level of the module, and TGA constraints (including Product Information, Consumer Medicine Information, and obligations from the advertising code) are treated as authorship rules during generation. Where a module would breach an advertising rule, generation is blocked and the reviewer is notified.",
  },
  {
    q: "Do you make claims about TGA or AHPRA certification of the platform itself?",
    a: "No. The Foundry produces evidence structured against TGA guidance and AHPRA standards. It does not represent itself as TGA or AHPRA certified. Deployment posture, data residency, and health record handling are covered in the Technical Overview and confirmed through supplier due diligence.",
  },
  {
    q: "Can we tie retraining directly to an adverse event or incident review?",
    a: "Yes. When a clinical incident produces a lesson, the framework can be patched at the specific structural node affected, and downstream instruction regenerates against the update. Retraining evidence (who, when, to what threshold) attaches to the incident record for governance committee review.",
  },
];

const related = [
  {
    eyebrow: "Program",
    title: "Hybrid verification",
    desc: "The program model for defensible credentialing and clinical competency. Where exposure is not proof.",
    href: "/programs/hybrid-verification",
  },
  {
    eyebrow: "Program",
    title: "Compliance programs",
    desc: "For therapeutic goods, medical devices, and regulated clinical workflows requiring behavioural adherence at the resolution of a clause.",
    href: "/programs/compliance",
  },
  {
    eyebrow: "Capability",
    title: "Audit & evidence",
    desc: "The platform capability that governs how evidence packs are constructed, versioned, and exported for external review.",
    href: "/platform/audit-evidence",
  },
];

export default function HealthcareLifeSciencesPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Industry · Healthcare & Life Sciences"
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: "Healthcare & life sciences", href: "/industries/healthcare-life-sciences" },
        ]}
        title={
          <>
            Clinical governance is <span className="text-[color:var(--color-forge)]">structural</span>, not narrative.
          </>
        }
        lede="Clinical governance frameworks, credentialing pathways, AHPRA CPD, and product training conscious of TGA rules. All structured against the criterion, verified against the role, and evidenced for the accreditor."
        secondaryCta={{ label: "See hybrid verification", href: "/programs/hybrid-verification" }}
        visual={<AnimatedEditorial src="editorial-hero.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Credentialing decisions are audited backwards."
      >
        <p>
          When a scope of practice decision is questioned by a coroner, by a governance
          committee, or by a National Board, the question is always the same. How did you know the
          practitioner was competent to do this? A completion certificate does not answer that
          question. A framework, an assessment record, and a threshold decision do.
        </p>
        <p>
          The Foundry treats clinical governance frameworks and professional standards as
          sources of structural obligation. Frameworks encode who must be credentialed for what,
          to what standard, with what evidence. Programmes generate to fit. Evidence
          accumulates by design, not by the memory of the credentialing officer.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves for healthcare and life sciences"
        title="From governance to credentialing to evidence."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From governance instrument to credentialed workforce."
        lede="Structure precedes instruction. Only once your clinical governance lead has approved the framework does the platform generate the material and validation that satisfies it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Evidence a governance committee will accept without follow up."
      >
        <p>
          Frameworks aligned to National Safety and Quality Health Service Standards, TGA
          guidance, and National Board CPD expectations. Credentialing pathways with defensible
          verification. Product training that does not breach advertising rules. Retraining driven
          by incidents that attaches to the incident record.
        </p>
        <p>
          When the accreditor arrives, the artefact you present is a framework, not a defence
          reconstructed from an LMS export.
        </p>
      </ProseBlock>

      <FAQ title="How healthcare and life sciences engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a criterion"
        title="See your governance become a programme."
        lede="Send us a governance framework, a credentialing policy, or a training obligation for therapeutic goods. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
