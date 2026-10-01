import type { Metadata } from "next";
import Link from "next/link";
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
  alternates: { canonical: "/industries/financial-services" },
  title: "Financial services compliance training",
  description:
    "Prudential, licensing, product knowledge, and conduct obligations mapped at clause level, with evidence structured for supervisory review and internal audit.",
};

const capabilities = [
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Frameworks aligned to ICT resilience",
    desc: "Information security training and role responsibilities mapped to the clauses of DORA, the NYDFS Cybersecurity Regulation, the Japan FSA cybersecurity guidelines, APRA CPS 234, and comparable regimes, from asset identification through incident response, with evidence surfaced per role.",
  },
  {
    icon: <UserCog className="h-5 w-5" />,
    title: "Competency structure for licensed roles",
    desc: "Product knowledge for licensed roles structured against qualification regimes such as the MiFID II knowledge and competence guidelines, FINRA registration and continuing education, JSDA sales representative qualifications in Japan, and ASIC RG146. Progression, assessment, and continuing training are traceable to the specific competency each role must demonstrate.",
  },
  {
    icon: <Banknote className="h-5 w-5" />,
    title: "Variants for product knowledge",
    desc: "One approved framework produces product training appropriate to role for relationship managers, advisers, mortgage brokers, and treasury staff, without duplicating the underlying product taxonomy.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Conduct and design obligations",
    desc: "Suitability and best interest rules such as SEC Regulation Best Interest, product governance and distribution requirements, and breach reporting expectations translated into behavioral instruction and scenario based validation.",
  },
  {
    icon: <FileSearch2 className="h-5 w-5" />,
    title: "Evidence ready for attestation",
    desc: "Where senior management certifications, board attestations, or supervisory reviews require evidence of trained and competent staff, the platform exports the framework, coverage, and assessment history in a coherent pack.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Regulatory change diff",
    desc: "When prudential standards, regulatory rulebooks and guidance, or product specific rules update, the system parses the source again and surfaces each affected obligation, control, and module.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ingest the instruments",
    desc: "Prudential standards, regulatory rulebooks and guidance, licensing conditions, and internal policy are ingested and parsed at clause level, with provenance retained.",
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
    desc: "Training is delivered through your existing LMS. Evidence (framework version, coverage, assessment history, sign offs) accumulates in a form ready for supervisory review or internal audit.",
  },
];

const faq = [
  {
    q: "How does this help us with an information security attestation?",
    a: "Regimes such as DORA, the NYDFS Cybersecurity Regulation, the Japan FSA cybersecurity guidelines, and APRA CPS 234 expect staff in specified roles to be trained and capable of fulfilling their information security responsibilities. The framework encodes those responsibilities per role, produces training and assessment against them, and evidences competency at the individual level. When senior management or the board signs an annual certification or attestation, the underlying evidence is a structured artifact, not a promise from L&D.",
  },
  {
    q: "Can you support initial and continuing competency across licensed roles and product tiers?",
    a: "Yes. The framework can encode qualification and continuing education requirements per product category and per role, whether they come from the MiFID II guidelines, FINRA, the JSDA, ASIC, or the DFSA. Initial competency, ongoing CPD, and knowledge refresh for product changes all draw from the same framework, and evidence is exportable in the format your registration or licensing compliance function requires.",
  },
  {
    q: "We are subject to overlapping regimes: prudential, conduct, exchange rules, and internal risk policy. How does the platform handle that?",
    a: "One framework can carry multiple regimes and surface conflicts, redundancies, and orphaned clauses. Where a role sits under overlapping obligations (a licensed executive who is also accountable under an information security regime) the framework produces one coherent program that satisfies both, rather than two overlapping courses.",
  },
  {
    q: "Do you make claims about certification by financial regulators?",
    a: "No. The Foundry produces evidence structured against the instruments of regulators such as the ECB, Banco de Portugal and the CMVM, the SEC and FINRA, the Japan FSA, APRA and ASIC, the CBUAE, and the DFSA. It does not represent itself as certified or approved by any of them. Technical security posture and deployment considerations are covered in the Technical Overview, and supplier due diligence is expected as part of enterprise engagement.",
  },
  {
    q: "Where does this sit alongside our existing LMS and HRIS?",
    a: "The Foundry produces the framework and generates the programs. Delivery typically runs through your existing LMS via SCORM or xAPI, and role mappings and completion states integrate with your HRIS. The Foundry becomes your source of framework truth. Delivery and identity stay where they are.",
  },
];

const related = [
  {
    eyebrow: "Program",
    title: "Compliance programs",
    desc: "The program model for translating regulatory instruments into structured behavioral adherence at the resolution of a clause.",
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
            Training that survives a <span className="text-[color:var(--color-forge)]">supervisory</span> review.
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
          Supervisors in the European Union, the United States, Japan, Australia, and the UAE
          increasingly expect individual accountability, information security capability, and
          operational resilience training to be evidenced at the individual level, not attested
          to at the enterprise level and left there. Supervision of licensed competence, product
          distribution, and conduct obligations is likewise increasingly driven by documents. The market for excuses is closing.
        </p>
        <p>
          The Foundry treats each prudential standard, regulatory guide, and internal policy as
          a source of structural obligation. Frameworks encode who must know what, to what
          standard, with what evidence. Program output is downstream of the framework, and
          the framework is what defends the program.
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
        title="From instrument to program ready for attestation."
        lede="Structure precedes instruction. Only once your compliance and risk owners have approved the framework does the system generate the material that satisfies it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Evidence you can hand to a regulator without rewriting it first."
      >
        <p>
          Frameworks that map to specific prudential clauses and regulatory guides. Programs
          that satisfy them, per role, per product line, per jurisdiction. Assessment that
          measures the competency the licensee must demonstrate. Evidence packs that reconstruct
          each decision. Who trained on what, when, to what threshold, and with what sign off.
        </p>
        <p>
          When the board is asked to attest, the underlying artifact is not a completion report.
          It is a framework, a coverage map, an assessment record, and a sign off chain. All
          exportable, all defensible.
        </p>
        <p>
          Plain language guides to instruments that often sit in scope:{" "}
          <Link href="/regulations/dora-ict-security-awareness-training">DORA ICT security awareness</Link>,{" "}
          <Link href="/regulations/portugal-aml-law-training-requirements">AML training under Portuguese Law 83/2017</Link>,{" "}
          <Link href="/regulations/finra-continuing-education-requirements">FINRA continuing education</Link>,{" "}
          <Link href="/regulations/bsa-aml-training-requirements">Bank Secrecy Act AML training</Link>,{" "}
          <Link href="/regulations/japan-fsa-aml-cft-guidelines-training">the Japan FSA AML/CFT guidelines</Link>,{" "}
          <Link href="/regulations/apra-cps-234-security-awareness-training">APRA CPS 234</Link>, and{" "}
          <Link href="/regulations/asic-rg-146-training-requirements">ASIC RG 146</Link>.
        </p>
      </ProseBlock>

      <FAQ title="How financial services engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring an obligation"
        title="See your standards become a program."
        lede="Send us a prudential standard, a regulatory guide, or an internal policy your licensed workforce is accountable for. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
