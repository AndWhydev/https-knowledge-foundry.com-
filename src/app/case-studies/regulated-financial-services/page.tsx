import type { Metadata } from "next";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { ProcessSteps } from "@/components/solution/process-steps";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";

export const metadata: Metadata = {
  title: "Case study — RG146 refresh at a tier-1 Australian financial institution",
  description:
    "Anonymised case study. A tier-1 Australian financial institution rebuilt its RG146 and AFSL licensee training on Knowledge Foundry after a thematic review flagged evidence gaps.",
};

const steps = [
  {
    n: "01",
    title: "Framework rebuild",
    desc: "Source policies, ASIC RG146 knowledge requirements, and internal AFSL licensee obligations were ingested into the Foundry. The system proposed a framework — concept nodes, prerequisite chains, assessment definitions — signed off by the head of licensee training before any content was touched.",
  },
  {
    n: "02",
    title: "Gap analysis against legacy library",
    desc: "The approved framework was compared against seven years of existing training modules. Missing coverage, duplicated coverage, and contradictory coverage were surfaced as three distinct classes of finding, each traceable to the source clause that implied them.",
  },
  {
    n: "03",
    title: "Governed regeneration",
    desc: "Content was regenerated to fit the framework, module by module, under a two-reviewer approval gate. Every regenerated element carried a Foundry Hash back to the framework node it satisfied and to the source clause behind it.",
  },
  {
    n: "04",
    title: "Evidence pack on demand",
    desc: "Regulator-facing evidence packs — coverage matrix, provenance chain, revision history, sign-off log — became generation-time artefacts rather than a project undertaken in the weeks before an audit.",
  },
];

const related = [
  {
    eyebrow: "Adjacent sector",
    title: "National healthcare operator",
    desc: "Framework-first rebuild of a clinical procedure library across thirty-plus sites.",
    href: "/case-studies/national-healthcare-operator",
  },
  {
    eyebrow: "Adjacent sector",
    title: "Critical infrastructure operator",
    desc: "Safety-critical operations training with hybrid verification.",
    href: "/case-studies/critical-infrastructure",
  },
  {
    eyebrow: "Capability",
    title: "Audit and evidence",
    desc: "How the platform produces regulator-ready evidence as a first-class output.",
    href: "/platform/audit-evidence",
  },
];

export default function RegulatedFinancialServicesCasePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Case study · Financial services"
        breadcrumb={[
          { label: "Case studies", href: "/case-studies" },
          { label: "Tier-1 financial institution", href: "/case-studies/regulated-financial-services" },
        ]}
        title={<>Rebuilding an RG146 programme <span className="text-[color:var(--color-forge)]">from the framework up.</span></>}
        lede="A tier-1 Australian financial institution replaced a decade of contractor-authored licensee training with a governed framework. Content was regenerated only after the framework was signed."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "See all case studies", href: "/case-studies" }}
      />

      <ProseBlock eyebrow="The situation" title="Legacy training authored by rotating hands.">
        <p>
          Over roughly seven years, the institution's RG146 and AFSL licensee training had been
          maintained by successive cohorts of external contractors. Each cohort inherited the last,
          extended it, and left. No cohort had authored the framework. There was no framework.
          There was a library of modules that had accumulated the way sediment accumulates.
        </p>
        <p>
          The drift was invisible until it wasn't. An APRA thematic review, focused on adviser
          conduct and licensee obligations, asked the questions that structured programmes are
          built to answer. How do you know your training covers this requirement. Where is the
          evidence that this cohort met that obligation. Which module changed after this
          regulatory update, and when. The answers took weeks to assemble and, in several cases,
          could not be assembled at all.
        </p>
        <p>
          The finding was not a fine. It was a request for a remediation plan. That request became
          the mandate for a different kind of platform.
        </p>
      </ProseBlock>

      <ProseBlock eyebrow="The framework work" title="Structure the subject before rewriting a line.">
        <p>
          The temptation, presented with an evidence-gap finding, is to write more content faster.
          The institution resisted it. The engagement began by ignoring the existing library
          entirely and building a framework from source: ASIC RG146 knowledge requirements, the
          licensee's own AFSL obligations, product disclosure requirements, and internal conduct
          policy.
        </p>
        <p>
          The Foundry proposed a framework of concept nodes, prerequisite chains, and assessment
          definitions. The head of licensee training and two nominated subject-matter experts
          revised it over three working sessions. Nothing downstream was permitted to run until
          the framework was signed.
        </p>
        <p>
          The framework then did the work that had never been done. It was compared to the
          existing library. The library's coverage of the framework was quantified. Every gap
          identified was traceable to the source clause that made it a gap. For the first time,
          the institution could name — in the language of the regulator — what was missing.
        </p>
      </ProseBlock>

      <ProcessSteps
        eyebrow="How Knowledge Foundry was applied"
        title="Four moves, one governed loop."
        lede="Each move was gated by human sign-off. Nothing generated downstream of an unapproved framework. Nothing published downstream of an unreviewed change."
        steps={steps}
      />

      <ProseBlock eyebrow="The outcome" title="Cycle time down. Coverage complete. Evidence on tap.">
        <p>
          Illustrative figures from the engagement:<sup>*</sup> author cycle time on new modules
          reduced by roughly <strong>forty percent</strong> against the previous contractor
          baseline. Framework coverage of the approved requirement set reached
          <strong> one hundred percent</strong> before regeneration was declared complete.
          Regulator-facing evidence packs — coverage matrix, provenance, revisions, sign-off
          history — moved from a multi-week project to an artefact produced in
          <strong> hours</strong>.
        </p>
        <p>
          The more consequential change was quieter. The institution now had a framework object
          it owned. Contractor rotation stopped being an integrity risk, because contractors were
          no longer the source of truth. The framework was.
        </p>
        <p className="!text-[12px] !leading-[1.7] text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)] pt-4 border-t border-[color:var(--color-hairline)]">
          <sup>*</sup> Figures shown are illustrative and reflect a typical range for engagements of
          this profile. Actual programme metrics are shared under NDA on request.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent engagements and capabilities." items={related} />

      <CtaBand
        eyebrow="A framework for your own obligations"
        title="Bring your RG146 or licensee programme."
        lede="Forty-five minutes on your source. You leave with a framework proposal drawn from your own obligations documents, and a candid view on where the current library holds up and where it does not."
      />
    </>
  );
}
