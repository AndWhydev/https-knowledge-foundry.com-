import type { Metadata } from "next";
import {
  Banknote,
  HeartPulse,
  Factory,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  ScrollText,
  FileCheck2,
  Users,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { HeroLattice } from "@/components/hero-lattice";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries: regulated sector training",
  description:
    "Financial services, healthcare, energy, government, professional services, and higher education. One architecture across six regulatory contexts.",
};

const industries = [
  {
    icon: <Banknote className="h-5 w-5" />,
    title: "Financial services",
    desc: "Prudential, conduct, and licensing obligations (DORA, the SEC and FINRA, the Japan FSA, APRA, the CBUAE and DFSA) and product knowledge for regulated roles. Program evidence structured against the standard, not adjacent to it.",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Healthcare & life sciences",
    desc: "Hospital accreditation standards, credentialing, CPD for licensed practitioners, and promotional rules for medicines and devices. Mapped to instruction and verified in one architecture.",
  },
  {
    icon: <Factory className="h-5 w-5" />,
    title: "Energy & resources",
    desc: "Safety critical operations, alignment to ISO 45001, and verification based on competency for high consequence roles. Structure governs execution.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Government & defense",
    desc: "Cleared workforce enablement, alignment to NIS2, NIST, ISMAP, the ISM, and other national security frameworks, and auditable evidence for training that must survive external scrutiny.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Professional services",
    desc: "CPD architecture, technical uplift across the firm, and alignment to sector standards for accounting, legal, engineering, and consulting practices.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Higher education",
    desc: "Course architecture aligned to institutional quality standards, outcome mapping, and defensible accreditation evidence, with the framework as the reviewable artifact.",
  },
];

const shared = [
  {
    icon: <ScrollText className="h-5 w-5" />,
    title: "Traceability to regulatory clause",
    desc: "Each module, each assessment, each activity carries provenance to the regulatory clause, standard, or accreditation criterion it exists to serve.",
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "Evidence pack export",
    desc: "For any audit, review, or regulator engagement, the platform exports a coherent evidence pack tied to specific individuals, cohorts, or programs.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Accountability tagged to role",
    desc: "Obligations, controls, and competency thresholds attach to specific roles, not to modules. Coverage is measurable at the level regulators actually ask about.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the regime",
    desc: "The applicable standards, regulatory instruments, and internal policy documents are ingested and parsed at clause level.",
  },
  {
    n: "02",
    title: "Structure the framework",
    desc: "A framework is authored mapping obligations to roles, controls, and required evidence. Reviewed and approved by your compliance or accreditation owner.",
  },
  {
    n: "03",
    title: "Produce the program",
    desc: "Instruction, assessment, and verification are generated to fit the framework. Each element traces to a specific requirement in the source.",
  },
  {
    n: "04",
    title: "Evidence the outcome",
    desc: "For audit, accreditation review, or board reporting, the platform exports coherent evidence tied to individuals, cohorts, and framework versions.",
  },
];

const faq = [
  {
    q: "Is the platform certified against any of these standards itself?",
    a: "The Foundry produces evidence structured against standards you are accountable for. It does not claim third party certification against those standards on its own behalf. Technical and security posture (deployment models, data residency, access controls) are covered in the Technical Overview, and enterprise engagements typically include supplier due diligence.",
  },
  {
    q: "How do you handle regulatory change specific to a sector?",
    a: "When source documents update (a revised prudential standard, updated FDA guidance, an ISO revision, a change to accreditation standards) the system parses them again and diffs against the existing framework. Affected obligations, controls, and modules are surfaced explicitly so remediation is targeted, not wholesale.",
  },
  {
    q: "Can one framework carry multiple regulatory regimes?",
    a: "Yes. Where an organization operates under overlapping regimes (a bank under both prudential and conduct supervision, or a healthcare provider subject to both medicines regulation and practitioner licensing) the framework can carry both, surface conflicts, and produce programs appropriate to role without duplicating the underlying knowledge.",
  },
  {
    q: "Does the platform replace our internal compliance, clinical governance, or accreditation function?",
    a: "No. Those functions own the risk posture, the framework, and the sign off. What changes is what they spend time on: structural judgment and edge cases, not authoring instructional material that summarizes standards they already know.",
  },
  {
    q: "Which industry would you recommend we start with if we sit across several?",
    a: "Start with the sector carrying the highest regulatory density or the most pressing external review. Most engagements begin with a single framework covering one regime, then extend as adjacent obligations become ready to structure.",
  },
];

export default function IndustriesIndexPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Industries"
        breadcrumb={[{ label: "Industries", href: "/industries" }]}
        title={
          <>
            Regulated, evidenced, <span className="text-[color:var(--color-forge)]">ready for audit</span> in your sector.
          </>
        }
        lede="Six industry contexts. One architecture. Each program carries provenance to the regulatory clause, standard, or accreditation criterion it exists to serve, and the evidence exports as a file, not a promise."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<HeroLattice className="w-full aspect-square max-w-[480px] mx-auto" />}
      />

      <ProseBlock eyebrow="How to read this" title="Structure governs adherence.">
        <p>
          Enterprise training in regulated sectors fails for the same reasons across each
          industry. Content is written before structure is defined, coverage is assumed rather
          than mapped, and evidence is manufactured after the fact rather than accumulated by
          design. When a prudential review, an FDA inspection, or an accreditation audit arrives, the defense
          is a folder of completion records, not a framework that proves the program covers
          what it should.
        </p>
        <p>
          The Foundry treats each regulatory regime as a source of structural requirements. The
          framework encodes what must be trained, verified, and evidenced. Instruction is
          downstream. The result is a program that defends itself against the standard.
        </p>
        <p>
          The discipline is the same whether the regime is Portuguese, European, American,
          Japanese, or Australian. Each customer&rsquo;s data is held in the region it chooses,
          in Europe, the United States, Japan, or Australia.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six industry contexts"
        title="Different regimes. Same discipline."
        features={industries}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How each industry engagement runs"
        title="Interpret. Structure. Produce. Evidence."
        lede="The sequence does not change with the sector. What changes is which standards are parsed, which roles are tagged, and which evidence formats are exported. The discipline is constant."
        steps={steps}
      />

      <FeatureGrid
        eyebrow="What each industry inherits"
        title="Evidence built in, not bolted on."
        features={shared}
        columns={3}
        tone="warm"
      />

      <FAQ title="How the industry portfolio works." items={faq} />

      <CtaBand
        eyebrow="Bring your regime"
        title="See your standards structure themselves."
        lede="Send us the regulatory instrument, the internal policy, or the accreditation criterion you are accountable for. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
