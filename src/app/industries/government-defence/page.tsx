import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  ScrollText,
  FileCheck2,
  Users,
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
  title: "Government & Defence — Cleared workforce enablement with auditable evidence",
  description:
    "IRAP-conscious deployment, cleared workforce training, and export-control-adjacent instruction. Every module, every assessment, every decision — exportable evidence.",
};

const capabilities = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "IRAP-conscious deployment",
    desc: "Deployment posture accommodates protected environments and data-residency requirements. Assessment and technical documentation support agency IRAP review as part of onboarding.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Cleared workforce enablement",
    desc: "Programmes structured for cleared personnel — mandatory security training, protective marking handling, insider-threat awareness — with role-tagged coverage and evidenced completion.",
  },
  {
    icon: <ScrollText className="h-5 w-5" />,
    title: "Policy-to-instruction traceability",
    desc: "PSPF, ISM, and agency-specific policy documents parsed at clause level. Every module, every assessment, every scenario traces to the policy control it exists to serve.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Export-control-adjacent training",
    desc: "For programmes that touch export-controlled technical data — DTC obligations, ITAR-adjacent workflows — the framework enforces authorship boundaries and evidences access-limited delivery.",
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "External-review evidence",
    desc: "For ANAO performance audits, parliamentary review, or joint-force interoperability assessments, evidence exports in a coherent, versioned form that survives external scrutiny.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Multi-classification variants",
    desc: "Where the same programme runs across classifications or across coalition partners, variants live on one framework — governance stays central, environment-specific expression is controlled.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the policy stack",
    desc: "PSPF, ISM, agency-specific policy, and operational directives are ingested and parsed at clause level, with provenance retained across the chain.",
  },
  {
    n: "02",
    title: "Structure by role and clearance",
    desc: "Obligations, controls, and training expectations are tagged to specific roles and clearance levels. Coverage is measurable at the level accountability sits.",
  },
  {
    n: "03",
    title: "Construct the framework",
    desc: "A structured framework is proposed, reviewed by your security, learning, and capability leads, and approved before instruction and verification are generated.",
  },
  {
    n: "04",
    title: "Evidence for external review",
    desc: "Coverage, verification history, sign-off chains, and version records export in a form ready for ANAO review, parliamentary reporting, or joint-force interoperability assessment.",
  },
];

const faq = [
  {
    q: "Does the Foundry hold IRAP assessment or Australian security clearances?",
    a: "The Foundry does not represent itself as IRAP-assessed and does not hold agency security clearances on the platform's behalf. Deployment posture, data-residency options, and controls are documented for IRAP assessor review as part of agency onboarding, and enterprise engagements include security due diligence appropriate to the classification of the material involved.",
  },
  {
    q: "Can this support training that touches export-controlled technical data?",
    a: "Where programmes touch export-controlled data — Defence Trade Controls Act obligations or ITAR-adjacent workflows — the framework enforces authorship boundaries and controls delivery to access-authorised individuals. The evidence trail supports external review by the relevant export-control authority.",
  },
  {
    q: "How does the platform support PSPF and ISM alignment?",
    a: "PSPF and ISM controls are parsed at clause level, and the framework encodes which roles are accountable for which controls. Instruction and assessment are generated to satisfy the specific control, and coverage is exportable per control, per role, per environment.",
  },
  {
    q: "What happens with a machinery-of-government change or a policy update?",
    a: "When source documents update — a PSPF revision, an ISM update, an agency policy change, a machinery-of-government reshuffle — the system re-parses the source and diffs against the existing framework. Affected obligations and modules are surfaced explicitly so remediation is targeted, not wholesale.",
  },
  {
    q: "Can the platform be deployed in a protected environment?",
    a: "Deployment options are discussed on a per-agency basis and are covered in the Technical Overview. Protected-environment deployment, sovereign hosting, and offline delivery arrangements are considered as part of engagement scoping.",
  },
];

const related = [
  {
    eyebrow: "Program",
    title: "Compliance programs",
    desc: "The program model for translating policy instruments — including PSPF, ISM, and agency directives — into structured behavioural adherence.",
    href: "/programs/compliance",
  },
  {
    eyebrow: "Capability",
    title: "Audit & evidence",
    desc: "How evidence packs are constructed, versioned, and exported for external review — including ANAO performance audit and parliamentary scrutiny.",
    href: "/platform/audit-evidence",
  },
  {
    eyebrow: "Capability",
    title: "Standards & accreditation",
    desc: "How alignment to external standards and policy instruments is treated as a first-class output — not a compliance afterthought.",
    href: "/platform/standards-accreditation",
  },
];

export default function GovernmentDefencePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Industry · Government & Defence"
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: "Government & defence", href: "/industries/government-defence" },
        ]}
        title={
          <>
            Cleared. Evidenced. <span className="text-[color:var(--color-forge)]">Defensible</span>.
          </>
        }
        lede="PSPF, ISM, and agency-specific policy translated into structured instruction. Cleared workforce training with role-tagged coverage and evidence that survives external review."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<AnimatedEditorial src="editorial-governance.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Public accountability demands more than completion records."
      >
        <p>
          Government and defence training is scrutinised by ANAO performance audit, by
          parliamentary committee, by joint-force interoperability assessment, and by internal
          agency review. A completion register does not answer the questions those reviews ask.
          A framework — tied to policy, tagged to roles, evidenced at the individual level — does.
        </p>
        <p>
          The Foundry treats PSPF, the ISM, agency-specific policy, and operational directives
          as sources of structural obligation. Frameworks encode who must know what, to what
          standard, with what evidence. Programme output is downstream of the framework, and the
          framework is what survives external scrutiny.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves for government and defence"
        title="Policy-anchored, evidence-first workforce enablement."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From policy stack to defensible evidence."
        lede="Structure precedes instruction. Only once your security, learning, and capability leads have approved the framework does the platform generate the material that satisfies it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Evidence prepared for the review you have not yet been notified of."
      >
        <p>
          Frameworks aligned to PSPF, ISM, and agency-specific policy. Programmes that satisfy
          them, per role, per clearance, per environment. Verification that survives external
          audit. Evidence packs that reconstruct every decision — who trained on what, when, to
          what threshold, with what sign-off.
        </p>
        <p>
          When ANAO or parliamentary scrutiny arrives, the artefact is a framework — not a
          defence rebuilt from a completion register.
        </p>
      </ProseBlock>

      <FAQ title="How government and defence engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a policy instrument"
        title="See your obligations structure themselves."
        lede="Send us a policy instrument, an operational directive, or a training obligation your cleared workforce is accountable for. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
