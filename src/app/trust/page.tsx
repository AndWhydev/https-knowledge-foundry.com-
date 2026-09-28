import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  Database,
  Users,
  Server,
  FileCheck2,
  KeyRound,
  Siren,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/trust" },
  title: "Trust Center: security and compliance",
  description:
    "How Knowledge Foundry is designed to protect customer data, meet enterprise security expectations, and align to the standards that regulated buyers require.",
};

const posture = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "ISO 27001, aligned",
    desc: "Information security controls are designed against ISO/IEC 27001. Formal certification is in progress. Documentation and audit trail are available to enterprise buyers under NDA.",
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "SOC 2 Type II, in progress",
    desc: "Operating in the observation window against the Trust Services Criteria for Security, Availability, and Confidentiality. Report available to prospective customers upon completion.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "APRA CPS 234, aware",
    desc: "For regulated Australian financial services customers, controls, evidence artifacts, and reporting are designed to support obligations under CPS 234 and to fit inside an environment regulated by APRA.",
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "GDPR, ready by design",
    desc: "Data processing terms, subprocessor register, deletion workflows, and export mechanisms are structured for processing eligible under GDPR where a customer requires them.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "WCAG 2.1 AA",
    desc: "The customer surface (Studio, Console, and delivered programs) is engineered against WCAG 2.1 AA. See our accessibility statement for testing methodology and known limitations.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Data residency in Australia",
    desc: "Production data for Australian customers resides in AWS ap-southeast-2 (Sydney). No routine offshore replication. Residency in other regions is available on request for regulated deployments.",
  },
];

const controls = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Encryption in transit and at rest",
    desc: "TLS 1.3 across all customer facing endpoints. AES-256 encryption at rest for databases and object storage. Keys managed in AWS KMS with separation per tenant.",
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Access model",
    desc: "SSO/SAML for customer sign in, MFA required for staff access, principle of least privilege on internal systems, and isolation per tenant on production data.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Infrastructure",
    desc: "Hosted on AWS, ap-southeast-2 by default. Segmented VPCs. Immutable infrastructure via versioned deployment pipelines. No shared build hosts.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Personnel",
    desc: "Staff access is scoped, logged, and reviewed. Background checks on engineering and support roles that touch customer environments. Security training on hire and annually.",
  },
  {
    icon: <Siren className="h-5 w-5" />,
    title: "Incident response",
    desc: "Documented response playbook with named on call rotation. Customer notification for material incidents is committed to within contractually defined windows.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Backups and recovery",
    desc: "Automated daily backups with point in time recovery, tested restore drills, and documented recovery time and recovery point objectives available under NDA.",
  },
];

const subprocessorsSummary = [
  {
    title: "Cloud infrastructure",
    desc: "Amazon Web Services (ap-southeast-2, Sydney). Hosting, compute, storage, key management. No offshore replication for tenants hosted in Australia.",
  },
  {
    title: "Observability",
    desc: "Application performance monitoring and error tracking. Non customer content only. PII scrubbed at source.",
  },
  {
    title: "Email delivery",
    desc: "Transactional email for account and workflow notifications only. Not used for marketing to end users.",
  },
];

const related = [
  {
    eyebrow: "Deep dive",
    title: "Security",
    desc: "Threat model, controls, encryption, access, backups, incident response, and responsible disclosure.",
    href: "/trust/security",
  },
  {
    eyebrow: "Deep dive",
    title: "Compliance posture",
    desc: "Data handling, subprocessors, privacy program, DPA, retention, residency, and cross-border transfers.",
    href: "/trust/compliance-posture",
  },
  {
    eyebrow: "Legal",
    title: "Privacy policy",
    desc: "How we collect, use, disclose, and retain personal information under the Australian Privacy Act.",
    href: "/privacy",
  },
];

export default function TrustCentrePage() {
  return (
    <>
      <TopicHeader
        eyebrow="Trust Center"
        breadcrumb={[{ label: "Trust", href: "/trust" }]}
        title={
          <>
            The controls behind{" "}
            <span className="text-[color:var(--color-forge)]">a system regulated buyers can adopt.</span>
          </>
        }
        lede="Knowledge Foundry is built for organizations that must defend how their knowledge is produced, stored, and delivered. This page summarizes the security posture, the compliance posture, and the data handling that make the platform adoptable inside a regulated environment. Sub pages provide the detail."
        primaryCta={{ label: "Request our security pack", href: "/demonstration" }}
        secondaryCta={{ label: "Security deep dive", href: "/trust/security" }}
      />

      <FeatureGrid
        eyebrow="Posture at a glance"
        title="What we are, what we are working toward, and how we say it honestly."
        lede="Certifications are named as certified, in progress, or aligned. In progress means the control set is implemented and audited against. The certificate itself is not yet issued."
        features={posture}
        columns={3}
      />

      <FeatureGrid
        eyebrow="Controls"
        title="How the platform is defended."
        features={controls}
        columns={3}
        tone="warm"
      />

      <ProseBlock eyebrow="Data handling" title="Where your data lives, and who touches it.">
        <p>
          Customer data for Australian tenants is processed and stored in AWS
          ap-southeast-2 (Sydney) by default. There is no routine replication to
          overseas regions. Backups are encrypted, held in the same region, and
          retained on a defined schedule.
        </p>
        <p>
          Access to production is limited to a named group of engineers,
          scoped to specific tasks, logged, and reviewed. Support staff do not
          have standing read access to customer content. Access is granted for a
          specific ticket and revoked automatically.
        </p>
        <p>
          <strong>Ownership.</strong> Your source material, frameworks, generated
          content, review history, and evidence artifacts are yours. On exit,
          the full corpus is exportable in structured form. We do not train
          third party models on customer content.
        </p>
      </ProseBlock>

      <Section className="bg-[color:var(--color-canvas-warm)]">
        <Container>
          <div className="mb-12 max-w-[720px]">
            <Eyebrow>Subprocessors</Eyebrow>
            <Reveal>
              <h2 className="text-display-2 mt-5">Who processes data on our behalf.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lede mt-5">
                The current subprocessor register is maintained on the compliance posture
                page and provided in full to prospective customers. Categories at a high level
                are listed below.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-px rounded-[var(--radius-lg)] overflow-hidden bg-[color:var(--color-hairline)]">
            {subprocessorsSummary.map((s) => (
              <div key={s.title} className="bg-white p-8">
                <h3 className="text-[18px] font-semibold tracking-tight font-[family-name:var(--font-display)] mb-3">
                  {s.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ProseBlock eyebrow="Incident response" title="What happens when something goes wrong.">
        <p>
          Each security event is triaged against a documented playbook.
          Material incidents that affect customer data trigger a named on call
          rotation, a designated incident commander, and a written post incident
          review. Customer notification for material incidents is committed to
          within contractually defined windows in the master services agreement.
        </p>
        <p>
          For information on our responsible disclosure program, or to report a
          suspected vulnerability, see the security page. The security contact
          is <strong>security@knowledge-foundry.com</strong>.
        </p>
      </ProseBlock>

      <Related items={related} />

      <CtaBand
        eyebrow="For enterprise procurement"
        title="Request the full security pack."
        lede="A 45 minute working session with our team, plus the security pack, DPA, and subprocessor register under NDA. We reply within one business day."
        ctaLabel="Request the pack"
      />
    </>
  );
}
