import type { Metadata } from "next";
import {
  FileCheck2,
  Database,
  Globe2,
  Clock,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProseBlock } from "@/components/solution/prose-block";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Related } from "@/components/solution/related";

export const metadata: Metadata = {
  alternates: { canonical: "/trust/compliance-posture" },
  title: "Compliance posture and data handling",
  description:
    "How Knowledge Foundry handles data: subprocessors, data processing agreement, retention, residency, and alignment to the Australian Privacy Act.",
};

const handling = [
  {
    icon: <Database className="h-5 w-5" />,
    title: "What we process",
    desc: "Source documents you upload, framework artifacts produced from them, generated instructional content, review history, evidence artifacts, and account metadata for the users you authorize.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Lawful basis",
    desc: "Processing is performed on the instruction of the customer as data controller under the master services agreement. We act as data processor. Purpose is bounded to service delivery.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Residency",
    desc: "Australian customers: production data in AWS ap-southeast-2 (Sydney). No routine replication across borders. Alternate residency is available on request for regulated deployments.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Retention",
    desc: "Content is retained for the term of the customer agreement plus a defined tail. On termination, data is exported on request and then deleted in line with the schedule in the DPA.",
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "Deletion",
    desc: "Deletion initiated by the customer is honored on documented workflows. Full tenant deletion propagates to backups on the backup cycle schedule, with a written completion notice on request.",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "No model training",
    desc: "We do not use customer content to train third party foundation models. Where generative components are used, prompts and outputs remain within the customer's tenancy boundary.",
  },
];

const subprocessors = [
  {
    name: "Amazon Web Services",
    purpose: "Cloud infrastructure. Compute, storage, database, key management.",
    region: "ap-southeast-2 (Sydney) for AU tenants",
  },
  {
    name: "Application observability provider",
    purpose: "Performance monitoring and error tracking, with PII scrubbed at source",
    region: "AU or EU regions per customer requirement",
  },
  {
    name: "Transactional email provider",
    purpose: "Account and workflow notifications only, not marketing",
    region: "Standard contractual clauses in force where applicable",
  },
  {
    name: "Customer support ticketing",
    purpose: "Inbound support requests raised by customer administrators",
    region: "Hosted in Australia where the vendor offers it",
  },
];

const related = [
  {
    eyebrow: "Trust",
    title: "Trust Center overview",
    desc: "The full posture at a glance: security, compliance, and data handling.",
    href: "/trust",
  },
  {
    eyebrow: "Trust",
    title: "Security",
    desc: "Threat model, controls, incident response, and responsible disclosure.",
    href: "/trust/security",
  },
  {
    eyebrow: "Legal",
    title: "Privacy policy",
    desc: "How we handle personal information under the Australian Privacy Principles.",
    href: "/privacy",
  },
];

export default function CompliancePosturePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Trust · Compliance posture"
        breadcrumb={[
          { label: "Trust", href: "/trust" },
          { label: "Compliance posture", href: "/trust/compliance-posture" },
        ]}
        title={
          <>
            The paperwork behind{" "}
            <span className="text-[color:var(--color-forge)]">the platform.</span>
          </>
        }
        lede="Data handling, subprocessors, privacy program, DPA, retention, residency, and cross border transfers, described in one place, in the terms your procurement, privacy, and legal teams already use."
        primaryCta={{ label: "Request DPA and subprocessor register", href: "/demonstration" }}
        secondaryCta={{ label: "Read the privacy policy", href: "/privacy" }}
      />

      <FeatureGrid
        eyebrow="Data handling"
        title="What we hold, why we hold it, and where it lives."
        features={handling}
        columns={3}
      />

      <Section className="bg-[color:var(--color-canvas-warm)]">
        <Container>
          <div className="mb-12 max-w-[720px]">
            <Eyebrow>Subprocessors</Eyebrow>
            <Reveal>
              <h2 className="text-display-2 mt-5">Who processes data on our behalf.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lede mt-5">
                Named subprocessors are listed below. The full register (including
                legal entity, jurisdiction, and processing purpose) is provided to
                prospective customers on request. Material changes are notified to
                customers in line with the DPA.
              </p>
            </Reveal>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1.4fr] bg-[color:var(--color-canvas-tint)] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-soft)]">
              <div>Subprocessor</div>
              <div>Purpose</div>
              <div>Region / notes</div>
            </div>
            <div className="divide-y divide-[color:var(--color-hairline)]">
              {subprocessors.map((s) => (
                <div key={s.name} className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1.4fr] px-6 py-5 gap-2 md:gap-6 text-[14px] leading-[1.55]">
                  <div className="font-semibold text-[color:var(--color-ink)]">{s.name}</div>
                  <div className="text-[color:var(--color-ink-soft)]">{s.purpose}</div>
                  <div className="text-[color:var(--color-ink-muted)]">{s.region}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ProseBlock
        eyebrow="Privacy program"
        title="How the privacy program is run in practice."
      >
        <p>
          Our privacy program is operated under the Australian Privacy Act
          1988 and the Australian Privacy Principles. A named privacy contact
          receives requests from customers and, where relevant, from data
          subjects on customers' behalf. Requests to access, correct, or delete
          personal information are triaged against a documented workflow with
          defined response windows.
        </p>
        <p>
          For customers whose end users reside in the European Union or the
          United Kingdom, we execute a data processing agreement incorporating
          the Standard Contractual Clauses where a transfer occurs. Where
          possible, EU/UK customer data is processed in a region that avoids the
          transfer altogether.
        </p>
      </ProseBlock>

      <ProseBlock eyebrow="Data processing agreement" title="What the DPA covers.">
        <p>
          Our DPA is available on request and can be executed alongside the
          master services agreement. It covers the controller/processor
          relationship, subprocessor authorization, security obligations, breach
          notification, mechanisms for cross border transfers, audit rights, and
          deletion or return of data on termination.
        </p>
        <p>
          For regulated Australian customers, additional operating obligations
          (including those relevant to APRA CPS 234) can be reflected in
          schedules to the master services agreement. Customer legal and
          procurement teams should raise specific requirements during
          contracting.
        </p>
      </ProseBlock>

      <ProseBlock eyebrow="Retention and deletion" title="How long we hold data.">
        <p>
          Customer content is retained for the term of the customer agreement.
          On termination, the customer may request a full structured export for
          a defined window, after which data is deleted from primary systems on
          a documented schedule. Deletion propagates through backups on the
          backup cycle interval. A written completion notice is available on
          request.
        </p>
        <p>
          Aggregate operational metrics that do not contain customer content or
          personal information may be retained for purposes of platform
          integrity beyond the customer term.
        </p>
      </ProseBlock>

      <ProseBlock
        eyebrow="Australian Privacy Act alignment"
        title="How the platform maps to the APPs."
      >
        <p>
          The Knowledge Foundry platform, and our operational practices around
          it, are designed to support customer obligations under the Australian
          Privacy Principles. Collection is limited to what the service
          requires. Notice is provided through the customer facing privacy
          policy and, for direct interactions, at the point of collection.
          Access, correction, and complaint handling are documented and time
          bound.
        </p>
        <p>
          Where customer end users reside overseas, the customer remains the
          controller and determines the legal basis for processing. We support
          the customer's obligations with the documented residency, DPA, and
          subprocessor register described above.
        </p>
      </ProseBlock>

      <Related items={related} />
    </>
  );
}
