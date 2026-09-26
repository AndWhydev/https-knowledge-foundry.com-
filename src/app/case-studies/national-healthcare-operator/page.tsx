import type { Metadata } from "next";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { ProcessSteps } from "@/components/solution/process-steps";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";

export const metadata: Metadata = {
  title: "Case study — Clinical procedure library at a national hospital operator",
  description:
    "Anonymised case study. A national private hospital operator consolidated 400+ SOPs across 30+ sites into a single governed framework with per-site variance modelled explicitly.",
};

const steps = [
  {
    n: "01",
    title: "Framework from clinical governance source",
    desc: "Clinical governance policy, National Safety and Quality Health Service Standards, and the operator's own credentialing framework were ingested. A canonical framework for the procedure library was proposed and approved before any per-site material was touched.",
  },
  {
    n: "02",
    title: "Per-site variance modelled explicitly",
    desc: "Sites do differ, and legitimately so — equipment sets, patient profiles, and jurisdictional rules vary. The framework represented site-level variance as a first-class concept, not as accidental drift. Each variant node was traceable to the reason it existed.",
  },
  {
    n: "03",
    title: "SOP regeneration under credentialing tie-in",
    desc: "SOPs were regenerated against the framework with credential requirements attached at the procedure level. A clinician's credential state, procedure by procedure, became queryable rather than reconstructable.",
  },
  {
    n: "04",
    title: "Audit produced, not assembled",
    desc: "The next credentialing audit was produced from the platform. The evidence pack — coverage, versioning, sign-off, per-clinician credential state at date of procedure — was a report, not a project.",
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
    title: "Critical infrastructure operator",
    desc: "Safety-critical operations training and competency verification.",
    href: "/case-studies/critical-infrastructure",
  },
  {
    eyebrow: "Capability",
    title: "Knowledge governance",
    desc: "Ownership, review cadences, and drift detection built into the system.",
    href: "/platform/knowledge-governance",
  },
];

export default function NationalHealthcareOperatorCasePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Case study · Healthcare"
        breadcrumb={[
          { label: "Case studies", href: "/case-studies" },
          { label: "National hospital operator", href: "/case-studies/national-healthcare-operator" },
        ]}
        title={<>Four hundred SOPs, thirty sites, <span className="text-[color:var(--color-forge)]">one framework.</span></>}
        lede="A national private hospital operator consolidated a drifting procedure library into a single governed framework with per-site variance modelled as a first-class concept."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "See all case studies", href: "/case-studies" }}
      />

      <ProseBlock eyebrow="The situation" title="Every site quietly authoring its own procedure library.">
        <p>
          The operator ran more than four hundred documented clinical procedures across a network
          of over thirty hospital sites. Nominally, procedures were shared. In practice, each
          site had been maintaining local variants for years. Some variance was legitimate — an
          equipment difference, a jurisdictional rule, a patient population characteristic. Most
          variance was accident.
        </p>
        <p>
          Compounding the problem, credentialing evidence lived somewhere else entirely.
          Clinician credentials were recorded in a mix of PDF, spreadsheet, and legacy HR
          system. When a credentialing audit asked which clinicians were credentialed to perform
          which procedure at which site on which date, the answer required reconstruction. The
          reconstruction typically took weeks. Sometimes the answer was unavailable.
        </p>
        <p>
          The operator did not need faster reconstruction. It needed a system in which the
          question was answerable by design.
        </p>
      </ProseBlock>

      <ProseBlock eyebrow="The framework work" title="Consolidate the intent. Model the variance.">
        <p>
          The engagement did not begin with a plan to write four hundred new procedures. It
          began with the harder question: what is the canonical procedure the network intends to
          run. That canonical intent was extracted from clinical governance policy, from the
          NSQHS Standards, and from the operator's own procedural authorities, into a framework
          the clinical governance committee could review as a single object.
        </p>
        <p>
          Once the canonical framework was approved, the interesting work began. Each site's
          local variant was compared to the framework. Every deviation was classified: legitimate
          variance (kept, with an explicit justification node attached), obsolete variance (removed),
          or drift (regenerated to match). For the first time, the operator could answer whether
          two sites were doing the same procedure differently on purpose or by accident.
        </p>
        <p>
          Credentialing was then tied into the framework at the procedure level. A credential
          requirement became an attribute of the procedure, not a document filed elsewhere.
        </p>
      </ProseBlock>

      <ProcessSteps
        eyebrow="How Knowledge Foundry was applied"
        title="Consolidate. Model variance. Regenerate. Tie in credentials."
        lede="A canonical framework was the shared object. Sites did not lose their legitimate variance. They lost the drift they had never intended."
        steps={steps}
      />

      <ProseBlock eyebrow="The outcome" title="Consistency without erasure. Audit in hours.">
        <p>
          Illustrative figures from the engagement:<sup>*</sup> SOP consistency, measured as the
          proportion of nodes in each site's library that resolved to the approved framework
          without deviation, reached parity across all <strong>thirty-plus sites</strong> — with
          legitimate site-level variance preserved and justified rather than erased. A
          credentialing audit that had previously required roughly <strong>three weeks</strong> of
          manual reconstruction was produced from the platform in approximately
          <strong> four hours</strong>.
        </p>
        <p>
          The clinical governance committee gained something the previous state had made
          impossible. It could see, at a glance, where the network agreed with itself, where it
          disagreed, and why.
        </p>
        <p className="!text-[12px] !leading-[1.7] text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)] pt-4 border-t border-[color:var(--color-hairline)]">
          <sup>*</sup> Figures shown are illustrative and reflect a typical range for engagements of
          this profile. Actual programme metrics are shared under NDA on request.
        </p>
      </ProseBlock>

      <Related eyebrow="Continue reading" title="Adjacent engagements and capabilities." items={related} />

      <CtaBand
        eyebrow="A framework for your clinical governance"
        title="Bring a procedure library that has drifted."
        lede="Forty-five minutes with your governance leads on a sample of your SOPs. You leave with the framework the Foundry proposes, and a diagnostic on where site-level variance is legitimate and where it is not."
      />
    </>
  );
}
