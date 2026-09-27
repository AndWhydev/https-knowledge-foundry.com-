import type { Metadata } from "next";
import {
  Briefcase,
  BookMarked,
  Users,
  Scale,
  BadgeCheck,
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
  title: "Professional Services. CPD architecture and firm-wide technical uplift",
  description:
    "Structured CPD, firm-wide technical uplift, and sector-standard alignment for accounting, legal, engineering, and consulting practices. Evidence, not attendance.",
};

const capabilities = [
  {
    icon: <BookMarked className="h-5 w-5" />,
    title: "CPD architecture",
    desc: "CPD programmes structured to professional-body expectations. CA ANZ, CPA, Law Societies, Engineers Australia. with hours, categories, and outcome mapping evidenced per practitioner.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Firm-wide technical uplift",
    desc: "New methodology, new standard, or new regulation rolled out consistently across offices and grades. One framework, role-appropriate variants, evidence of coverage per practice group.",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Sector standard alignment",
    desc: "Alignment to sector standards. auditing standards, ethical rulings, code of conduct, technical guidelines. encoded at clause level and evidenced through instruction and assessment.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Client-obligation training",
    desc: "For engagements requiring evidence that staff are trained to a client's sector obligations, the framework can encode client-specific requirements and export evidence tied to the engagement.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Grade-based progression",
    desc: "Technical competency mapped to grade. analyst, senior, manager, partner. with progression thresholds defined at the framework level, not left to individual reviewer discretion.",
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Practice-quality evidence",
    desc: "For practice-quality reviews and professional-body inspections, coverage, verification, and CPD evidence export in a form ready for external review. not manufactured after the notice arrives.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret the standard",
    desc: "Professional-body CPD expectations, sector standards, ethical rulings, and internal methodology are ingested and parsed at clause level.",
  },
  {
    n: "02",
    title: "Structure by role and grade",
    desc: "Competencies and CPD obligations are tagged to specific practice roles and grades. Progression thresholds are defined per grade, not per module.",
  },
  {
    n: "03",
    title: "Construct the framework",
    desc: "A firm-wide technical framework is proposed. Your professional standards lead reviews and approves before instruction, verification, and CPD evidence are generated.",
  },
  {
    n: "04",
    title: "Evidence per practitioner",
    desc: "CPD records, technical uplift coverage, and grade-progression evidence are exportable per practitioner, per practice group, and per engagement.",
  },
];

const faq = [
  {
    q: "How does the platform support CPD across multiple professional bodies?",
    a: "The framework can encode CPD expectations from multiple bodies concurrently. for example, CA ANZ and CPA obligations for an accounting practice, or Law Society and specialist accreditation obligations for a legal practice. One programme can satisfy multiple regimes, and evidence exports in the format each body expects.",
  },
  {
    q: "Can this replace our internal methodology training?",
    a: "The Foundry does not replace the methodology. It structures it. Your practice retains ownership of the methodology as source; the framework encodes what practitioners at each grade must know, apply, and demonstrate; and programmes are generated to fit. When the methodology updates, the framework updates and downstream programmes regenerate.",
  },
  {
    q: "How does this handle multi-office and multi-jurisdiction consistency?",
    a: "One approved framework can carry office-specific or jurisdictional variants without duplicating the underlying competency model. The technical standard remains consistent; local regulatory and market variations are inspectable branches on the framework.",
  },
  {
    q: "What about client engagements that require evidenced training on a client-specific matter?",
    a: "Where an engagement requires evidence that the team is trained to the client's sector, standard, or system, the framework can encode client-specific requirements. Evidence of coverage and verification exports in a form ready to attach to the engagement file.",
  },
  {
    q: "Can this evidence be used in a practice-quality review by our professional body?",
    a: "Yes. Coverage, verification history, sign-off chains, and CPD records are exportable in a coherent, versioned form suitable for practice-quality review. The framework itself is the primary artefact; the evidence pack is its supporting record.",
  },
];

const related = [
  {
    eyebrow: "Program",
    title: "Educational programs",
    desc: "The program model for structured technical learning. progression designed, assessment integrated, competency measurable.",
    href: "/programs/educational",
  },
  {
    eyebrow: "Program",
    title: "Hybrid verification",
    desc: "For grade-progression decisions and specialist accreditation pathways, where verified capability is the decision. not participation.",
    href: "/programs/hybrid-verification",
  },
  {
    eyebrow: "Capability",
    title: "Knowledge transformation",
    desc: "The platform capability that turns firm methodology, technical guidance, and internal know-how into a coherent, versioned knowledge system.",
    href: "/platform/knowledge-transformation",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Industry · Professional Services"
        breadcrumb={[
          { label: "Industries", href: "/industries" },
          { label: "Professional services", href: "/industries/professional-services" },
        ]}
        title={
          <>
            CPD is <span className="text-[color:var(--color-forge)]">evidence</span>. Not attendance.
          </>
        }
        lede="Structured CPD, firm-wide technical uplift, and sector-standard alignment for accounting, legal, engineering, and consulting practices. One framework. Multiple bodies. Evidence per practitioner."
        secondaryCta={{ label: "See educational programs", href: "/programs/educational" }}
        visual={<AnimatedEditorial src="editorial-evidence.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Practice-quality reviews audit backwards from the evidence."
      >
        <p>
          Professional-body inspections, practice-quality reviews, and internal partner
          committees ask the same question in different words: how do we know practitioners at
          this grade, in this practice, on this engagement, were competent to perform the work?
          A CPD hours register does not answer that question. A framework, an assessment record,
          and a grade-progression decision chain do.
        </p>
        <p>
          The Foundry treats professional standards, sector guidance, and firm methodology as
          sources of structural obligation. Frameworks encode what practitioners at each grade
          must know, apply, and demonstrate. Programmes generate to fit. Evidence accumulates
          per practitioner — not per training event.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves for professional services"
        title="Firm-wide technical discipline, evidenced."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="From standard to grade-progression evidence."
        lede="Structure precedes instruction. Only once your professional standards lead has approved the framework does the platform generate the material and CPD evidence that satisfies it."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Evidence a practice-quality reviewer will accept without follow-up."
      >
        <p>
          Frameworks aligned to professional-body CPD, sector standards, and firm methodology.
          Programmes that satisfy them, per grade, per practice, per office. Verification that
          survives external inspection. CPD evidence per practitioner ready for annual
          professional-body reporting.
        </p>
        <p>
          When the practice-quality reviewer arrives, the artefact you present is a framework —
          not a defence reconstructed from an LMS.
        </p>
      </ProseBlock>

      <FAQ title="How professional services engagements work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring a methodology"
        title="See your firm-wide technical model take shape."
        lede="Send us your methodology, a technical guideline, or a CPD obligation your practitioners are accountable for. In 45 minutes on your material, you leave with the framework the Foundry produces."
      />
    </>
  );
}
