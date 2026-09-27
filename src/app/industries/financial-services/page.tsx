import type { Metadata } from "next";
import {
  Banknote,
  Scale,
  ShieldCheck,
  UserCog,
  FileSearch2,
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
  title: "Financial Services. APRA, ASIC, and licensing training that defends itself",
  description:
    "CPS 234, RG146, product knowledge, and conduct obligations mapped at clause level. Programme evidence structured for APRA review, ASIC surveillance, and internal audit.",
};

const capabilities = [
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Frameworks aligned to CPS 234",
    desc: "Information security training and role responsibilities mapped to APRA CPS 234 clauses, from information asset identification through incident response, with evidence surfaced per role.",
  },
  {
    icon: <UserCog className="h-5 w-5" />,
    title: "Competency structure for RG146",
    desc: "Product knowledge for licensed roles structured against ASIC RG146 tier requirements. Progression, assessment, and continuing training are traceable to the specific competency the licensee must demonstrate.",
  },
  {
    icon: <Banknote className="h-5 w-5" />,
    title: "Variants for product knowledge",
    desc: "One approved framework produces product training appropriate to role for relationship managers, advisers, mortgage brokers, and treasury staff, without duplicating the underlying product taxonomy.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Conduct and design obligations",
    desc: "Design and Distribution Obligations, breach reporting expectations, and FSC aligned conduct standards translated into behavioural instruction and scenario based validation.",
  },
  {
    icon: <FileSearch2 className="h-5 w-5" />,
    title: "Evidence ready for attestation",
    desc: "Where CPS 220 or CPS 230 attestations require evidence of trained and competent staff, the platform exports the framework, coverage, and assessment history in a coherent pack.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Regulatory change diff",
    desc: "When APRA prudential standards, ASIC information sheets, or product specific rules update, the system parses the source again and surfaces each affected obligation, control, and module.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ingest the instruments",
    desc: "APRA prudential standards, ASIC regulatory guides, licensing conditions, and internal policy are ingested and parsed at clause level, with provenance retained.",
  },
  {
    n: "02",
    title: "Map to roles",
    desc: "Obligations are tagged to specific regulated roles (advisers, brokers, executives, product owners) with competency thresholds defined per role.",
  },
  {
    n: "03",
    title: "Construct the framework",
    desc: "A compliance and product knowledge framework is proposed. Your risk, compliance, and L&D leads review and approve before instruction is generated.",
  },
  {
    n: "04",
    title: "Evidence continuously",
    desc: "Training is delivered through your existing LMS. Evidence (framework version, coverage, assessment history, sign offs) accumulates in a form ready for APRA review or internal audit.",
  },
];

const faq = [
  {
    q: "How does this help us with a CPS 234 attestation?",
    a: "CPS 234 requires that individuals in specified roles have the capability to fulfil their information security responsibilities. The framework encodes those responsibilities per role, produces training and assessment against them, and evidences competency at the individual level. When the board signs the annual attestation, the underlying evidence is a structured artefact, not a promise from L&D.",
  },
  {
    q: "Can you support RG146 initial and continuing competency across product tiers?",
    a: "Yes. The framework can encode Tier 1 and Tier 2 requirements per product category and per role. Initial competency, ongoing CPD, and knowledge refresh for product changes all draw from the same framework, and evidence is exportable in the format your licensee register or AFSL compliance function requires.",
  },
  {
    q: "We are subject to overlapping regimes: APRA, ASIC, ASX, and internal risk policy. How does the platform handle that?",
    a: "One framework can carry multiple regimes and surface conflicts, redundancies, and orphaned clauses. Where a role sits under overlapping obligations (a licensed executive who is also a CPS 234 accountable person) the framework produces one coherent programme that satisfies both, rather than two overlapping courses.",
  },
  {
    q: "Do you make claims about certification against APRA or ASIC standards?",
    a: "No. The Foundry produces evidence structured against APRA and ASIC instruments. It does not represent itself as APRA or ASIC certified. Technical security posture and deployment considerations are covered in the Technical Overview, and supplier due diligence is expected as part of enterprise engagement.",
  },
  {
    q: "Where does this sit alongside our existing LMS and HRIS?",
    a: "The Foundry produces the framework and generates the programmes. Delivery typically runs through your existing LMS via SCORM or xAPI, and role mappings and completion states integrate with your HRIS. The Foundry becomes your source of framework truth. Delivery and identity stay where they are.",
  },
];

const related = [
  {
    eyebrow: "Program",
    title: "Compliance programs",
    desc: "The program model for translating regulatory instruments into structured behavioural adherence at the resolution of a clause.",
    href: "/programs/compliance",
  },
  {
    eyebrow: "Program",
    title: "Hybrid verification",
    desc: "Where licensed roles require demonstrable competency rather than acknowledged awareness, verification pairs with the compliance framework.",
    href: "/programs/hybrid-verification",
  },
  {
    eyebrow: "Capability",
    title: "Standards & accreditation",
    desc: "The platform capability that governs alignment to external standards as a first class output, not a compliance afterthought.",
    href: "/platform/standards-accreditation",
  },
];

export default function FinancialServicesPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Industry · Financial Services"
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: "Financial services", href: "/industries/financial-services" },
        ]}
        title={
          <>
            Training that survives an <span className="text-[color:var(--color-forge)]">APRA</span> review.
          </>
        }
        lede="Prudential obligations, licensing requirements, and product knowledge structured at clause level. Each module ties to the standard it exists to serve, and the evidence exports as a file when regulators ask."
        secondaryCta={{ label: "See the compliance model", href: "/programs/compliance" }}
        visual={<AnimatedEditorial src="editorial-blueprint.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Prudential expectation is rising. Slide decks are not."
      >
        <p>
          APRA has signalled repeatedly that individual accountability, information security
          capability, and operational resilience training must be evidenced at the individual
          level, not attested to at the enterprise level and left there. ASIC surveillance of
          licensee competence, product distribution, and conduct obligations is likewise
          increasingly driven by documents. The market for excuses is closing.
        </p>
        <p>
          The Foundry treats each prudential standard, regulatory guide, and internal policy as
          a source of structural obligation. Frameworks encode who must know what, to what
          standard, with what evidence. Programme output is downstream of the framework, and
          the framework is what defends the programme.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves for financial services"
        title="Regulatory adherence that begins with the framework."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From instrument to programme ready for attestation."
        lede="Structure precedes instruction. Only once your compliance and risk owners have approved the framework does the system generate the material that satisfies it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Evidence you can hand to a regulator without rewriting it first."
      >
        <p>
          Frameworks that map to specific prudential clauses and regulatory guides. Programmes
          that satisfy them, per role, per product line, per jurisdiction. Assessment that
          measures the competency the licensee must demonstrate. Evidence packs that reconstruct
          each decision. Who trained on what, when, to what threshold, and with what sign off.
        </p>
        <p>
          When the board is asked to attest, the underlying artefact is not a completion report.
          It is a framework, a coverage map, an assessment record, and a sign off chain. All
          exportable, all defensible.
        </p>
      </ProseBlock>

      <FAQ title="How financial services engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring an obligation"
        title="See your standards become a programme."
        lede="Send us a prudential standard, a regulatory guide, or an internal policy your licensed workforce is accountable for. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
