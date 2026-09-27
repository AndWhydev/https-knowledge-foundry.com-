import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Server,
  Database,
  Siren,
  Users,
  FileSearch,
  GitBranch,
  Bug,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { ProseBlock } from "@/components/solution/prose-block";
import { FAQ } from "@/components/solution/faq";
import { Related } from "@/components/solution/related";

export const metadata: Metadata = {
  title: "Security. Threat model, controls, and disclosure",
  description:
    "How Knowledge Foundry is engineered against a stated threat model: encryption, access controls, backups, incident response, and the responsible-disclosure policy.",
};

const threats = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Credential compromise",
    desc: "Mitigated by mandatory MFA for staff, SSO/SAML for customer sign-in, short-lived session tokens, and continuous review of privileged access.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Data exfiltration",
    desc: "Mitigated by principle-of-least-privilege access, per-tenant isolation, egress controls at the VPC boundary, and audit-logged access to production data.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Supply-chain compromise",
    desc: "Mitigated by locked dependency manifests, signed build artefacts, automated vulnerability scanning of dependencies, and infrastructure-as-code review before merge.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Infrastructure compromise",
    desc: "Mitigated by AWS-native hardening, private-network defaults, restricted management planes, and immutable deployment pipelines with signed artefacts.",
  },
  {
    icon: <FileSearch className="h-5 w-5" />,
    title: "Insider misuse",
    desc: "Mitigated by scoped access, session logging on production, mandatory code review, background checks on customer-facing engineering roles, and separation of duties for release.",
  },
  {
    icon: <Bug className="h-5 w-5" />,
    title: "Application-layer vulnerability",
    desc: "Mitigated by static-analysis in CI, dependency scanning, secure-development practices, and a responsible-disclosure programme with a defined intake channel.",
  },
];

const controls = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Encryption in transit",
    desc: "TLS 1.3 across all customer endpoints. HSTS enforced. Modern cipher suites only.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Encryption at rest",
    desc: "AES-256 for databases and object storage. Keys managed in AWS KMS with per-tenant separation. Automatic key rotation.",
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Customer authentication",
    desc: "SSO/SAML 2.0 supported (Okta, Azure AD, Google Workspace). MFA policy inherited from the identity provider. SCIM provisioning available.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Staff access",
    desc: "MFA required. Standing access to production is scoped to a named on-call group. Just-in-time access for support tickets, revoked automatically on ticket closure.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Backups",
    desc: "Automated daily backups with point-in-time recovery for production databases. Encrypted at rest. Restore drills performed on a documented schedule.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Isolation",
    desc: "Per-tenant logical isolation at the application layer, enforced by row-level and object-scope checks. No shared build hosts. Segmented VPCs by environment.",
  },
];

const ir = [
  {
    n: "01",
    title: "Detect",
    desc: "Continuous monitoring on production, application error tracking, and structured audit logs. Alerts route to a named on-call rotation with defined acknowledgement windows.",
  },
  {
    n: "02",
    title: "Contain",
    desc: "An incident commander is assigned. Contain-first. rotate credentials, isolate affected components, halt inbound traffic to affected surfaces if required.",
  },
  {
    n: "03",
    title: "Notify",
    desc: "Material incidents affecting customer data trigger notification within the window defined in the master services agreement. Named security contacts on file are the recipients.",
  },
  {
    n: "04",
    title: "Remediate and review",
    desc: "Root cause is documented. Remediation is tracked to completion. Every material incident produces a written post-incident review, shared with affected customers on request.",
  },
];

const disclosureFaq = [
  {
    q: "How do I report a suspected vulnerability?",
    a: "Email security@knowledge-foundry.com. Please include a description of the issue, the affected surface, reproduction steps, and any impact assessment you have made. If the finding is sensitive, request our PGP key in your first email.",
  },
  {
    q: "What is your acknowledgement window?",
    a: "We aim to acknowledge receipt within two business days. Substantive triage response follows within five business days for reports with sufficient detail to reproduce.",
  },
  {
    q: "Do you offer a bug bounty?",
    a: "We do not currently operate a paid bounty programme. We do maintain a public acknowledgements list, with your permission, for researchers who disclose responsibly.",
  },
  {
    q: "What is out of scope?",
    a: "Denial-of-service, social engineering against staff, physical access, and issues that require access to another customer's tenant to reproduce. Report those only if you have observed real-world impact, not hypothetically.",
  },
  {
    q: "Will you take legal action against good-faith researchers?",
    a: "No. provided you act in good faith, do not access data beyond what is necessary to demonstrate the issue, do not exfiltrate data, and give us reasonable time to remediate before public disclosure.",
  },
];

const related = [
  {
    eyebrow: "Trust",
    title: "Trust Centre overview",
    desc: "The full posture summary. security, compliance, data handling.",
    href: "/trust",
  },
  {
    eyebrow: "Trust",
    title: "Compliance posture",
    desc: "Data handling, subprocessors, DPA, retention, residency, and cross-border transfers.",
    href: "/trust/compliance-posture",
  },
  {
    eyebrow: "Legal",
    title: "Privacy policy",
    desc: "How personal information is collected, used, disclosed, and retained.",
    href: "/privacy",
  },
];

export default function SecurityPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Trust · Security"
        breadcrumb={[
          { label: "Trust", href: "/trust" },
          { label: "Security", href: "/trust/security" },
        ]}
        title={
          <>
            Defended by design.{" "}
            <span className="text-[color:var(--color-forge)]">Documented so it can be audited.</span>
          </>
        }
        lede="Security is a discipline, not a claim. This page states the threats we design against, the controls that mitigate them, how we respond when something goes wrong, and how to report a suspected issue."
        primaryCta={{ label: "Contact security team", href: "mailto:security@knowledge-foundry.com" }}
        secondaryCta={{ label: "Back to Trust Centre", href: "/trust" }}
      />

      <FeatureGrid
        eyebrow="Threat model"
        title="What we design against."
        lede="A short, honest threat model — the categories of risk that shape our control choices. Detailed control mappings are provided in the security pack under NDA."
        features={threats}
        columns={3}
      />

      <FeatureGrid
        eyebrow="Controls"
        title="How the platform is defended in practice."
        features={controls}
        columns={3}
        tone="warm"
      />

      <ProcessSteps
        eyebrow="Incident response"
        title="What happens when something goes wrong."
        lede="A defined process, a named on-call rotation, and a written commitment on customer notification. Not improvised."
        steps={ir}
      />

      <ProseBlock eyebrow="Responsible disclosure" title="Report it. We will respond.">
        <p>
          We rely on the security community. If you believe you have found a
          vulnerability in Knowledge Foundry, please report it to
          {" "}
          <strong>security@knowledge-foundry.com</strong>. Reports are triaged by
          a named engineer, not a shared inbox.
        </p>
        <p>
          Please act in good faith: do not access data beyond what is required
          to demonstrate the issue, do not exfiltrate customer content, and
          allow us reasonable time to remediate before public disclosure. In
          return, we commit to acknowledge receipt promptly, keep you informed
          through triage and fix, and not pursue legal action against
          good-faith research conducted under these terms.
        </p>
      </ProseBlock>

      <FAQ title="Reporting and disclosure — practical questions." items={disclosureFaq} />

      <ProseBlock eyebrow="For enterprise procurement" title="The security pack.">
        <p>
          A more detailed control mapping, penetration-test summary, business-continuity
          plan, and incident-response run-book is available to prospective enterprise
          customers under mutual non-disclosure. Request it via a demonstration or by
          emailing <strong>security@knowledge-foundry.com</strong>.
        </p>
      </ProseBlock>

      <Related items={related} />
    </>
  );
}
