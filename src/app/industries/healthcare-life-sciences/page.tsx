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
  alternates: { canonical: "/industries/healthcare-life-sciences" },
  title: "Healthcare and life sciences training",
  description:
    "Clinical governance, credentialing, CPD, and promotional rules for medicines and devices mapped to structured programs, with verified competency.",
};

const capabilities = [
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Clinical governance alignment",
    desc: "Programs structured against hospital accreditation standards (The Joint Commission, Joint Commission International, the NSQHS Standards) and local clinical governance frameworks, with instruction traced to each specific criterion.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Credentialing and scope",
    desc: "Credentialing pathways based on role and mapped to defined scope of practice. Verification checkpoints produce defensible evidence of competency at the moment scope is granted, extended, or restored.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "CPD architecture for licensing bodies",
    desc: "Continuing professional development and continuing medical education programs structured to the requirements of licensing bodies such as US state medical boards, the DHA and DOH in the UAE, and AHPRA, with self reflection, assessment, and outcome mapping produced as evidence rather than as narrative.",
  },
  {
    icon: <Pill className="h-5 w-5" />,
    title: "Product training within promotional rules",
    desc: "Training on medicines and medical devices authored against promotional and labeling rules (FDA rules in the US, the PMD Act in Japan, EU advertising rules, TGA rules in Australia), so promotional material and educational material are cleanly separated.",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Adverse event and incident capture",
    desc: "Where lessons must be learned from clinical incidents, remediation loops tie framework updates to specific events and evidence what was retrained, when, and to what threshold.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Consistency across many sites",
    desc: "One approved framework produces consistent programs across hospitals, clinics, or laboratories while carrying variants specific to a site where local governance requires them.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the governance",
    desc: "Clinical governance frameworks, professional standards, regulator guidance on medicines and devices, and internal credentialing policy are ingested and parsed at the level of the criterion.",
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
    desc: "Credentialing records, CPD evidence, and retraining driven by incidents are exportable in the format your governance committee, accreditor, or licensing body requires.",
  },
];

const faq = [
  {
    q: "Can this support hospital accreditation cycles?",
    a: "Yes. Frameworks can encode alignment to specific accreditation criteria, whether from The Joint Commission, Joint Commission International, or the NSQHS Standards, and instruction, verification, and evidence flow from that alignment. When accreditation review approaches, the artifact you present is a framework with coverage at the level of the clause, not a folder of course completion records.",
  },
  {
    q: "How does this fit with CPD and license renewal requirements?",
    a: "The Foundry produces CPD programs structured to licensing body expectations (categories, hours or credits, reflective components, and outcome mapping) and evidences each practitioner's participation and assessment. CPD evidence exports in a form ready for license renewal and audit.",
  },
  {
    q: "We are subject to promotional rules for medicines and devices. How does the platform manage the boundary?",
    a: "The framework encodes the distinction between promotional and educational material at the level of the module, and regulatory constraints (including approved labeling, product and patient information, and obligations under the applicable advertising codes) are treated as authorship rules during generation. Where a module would breach an advertising rule, generation is blocked and the reviewer is notified.",
  },
  {
    q: "Do you make claims about regulator certification of the platform itself?",
    a: "No. The Foundry produces evidence structured against guidance and standards from bodies such as the FDA, the MHLW, the DHA, the TGA, and AHPRA. It does not represent itself as certified or approved by any of them. Deployment posture, data residency, and health record handling are covered in the Technical Overview and confirmed through supplier due diligence.",
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
    desc: "For medicines, medical devices, and regulated clinical workflows requiring behavioral adherence at the resolution of a clause.",
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
        lede="Clinical governance frameworks, credentialing pathways, CPD for licensed practitioners, and product training within promotional rules. All structured against the criterion, verified against the role, and evidenced for the accreditor."
        secondaryCta={{ label: "See hybrid verification", href: "/programs/hybrid-verification" }}
        visual={<AnimatedEditorial src="editorial-hero.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Credentialing decisions are audited backwards."
      >
        <p>
          When a scope of practice decision is questioned by a coroner, by a governance
          committee, or by a licensing board, the question is always the same. How did you know the
          practitioner was competent to do this? A completion certificate does not answer that
          question. A framework, an assessment record, and a threshold decision do.
        </p>
        <p>
          The Foundry treats clinical governance frameworks and professional standards as
          sources of structural obligation. Frameworks encode who must be credentialed for what,
          to what standard, with what evidence. Programs generate to fit. Evidence
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
          Frameworks aligned to hospital accreditation standards, regulator guidance on
          medicines and devices, and licensing body CPD expectations. Credentialing pathways with defensible
          verification. Product training that does not breach advertising rules. Retraining driven
          by incidents that attaches to the incident record.
        </p>
        <p>
          When the accreditor arrives, the artifact you present is a framework, not a defense
          reconstructed from an LMS export.
        </p>
      </ProseBlock>

      <FAQ title="How healthcare and life sciences engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a criterion"
        title="See your governance become a program."
        lede="Send us a governance framework, a credentialing policy, or a training obligation for medicines or devices. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
