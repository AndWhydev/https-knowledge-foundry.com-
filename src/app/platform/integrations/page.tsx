import type { Metadata } from "next";
import {
  Puzzle,
  Package,
  Cloud,
  Cable,
  Boxes,
  KeyRound,
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
  title: "Integrations & Delivery. Fit your environment, or become it",
  description:
    "Integrate into an existing LMS via SCORM, structured HTML, JSON, or API. Or deploy a complete white-label delivery environment. The structural integrity of the programme travels either way.",
};

const capabilities = [
  {
    icon: <Package className="h-5 w-5" />,
    title: "SCORM 1.2 export",
    desc: "Structured programmes export to SCORM 1.2 packages for deployment into any conformant enterprise LMS. no manual reconstruction required.",
  },
  {
    icon: <Cable className="h-5 w-5" />,
    title: "API-driven delivery",
    desc: "The Foundry is API-first and multi-tenant. Programmes, blocks, provenance, and integrity data are accessible programmatically for bespoke delivery layers.",
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Structured HTML and JSON",
    desc: "Full structured HTML packages and JSON structure with provenance exports preserve dependencies, validation points, and integrity in any environment.",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "White-label LMS",
    desc: "Complete delivery environment on your domain, with your branding and access controls. Studio authoring, review queue, analytics, and role management included.",
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Identity and access",
    desc: "SAML, OIDC, and enterprise identity providers integrate cleanly. Role-based access, license management, and multi-tenant isolation are first-class.",
  },
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: "Sits alongside, not replaces",
    desc: "Existing LMS, HRIS, content stores, and identity providers remain. The Foundry is a source of truth for structure and integrity. not a rip-and-replace demand.",
  },
];

const steps = [
  {
    n: "01",
    title: "Generate to deploy",
    desc: "Fastest path. immediate structured deployment for rapid content needs. Suitable when the review gate lives elsewhere in your process.",
  },
  {
    n: "02",
    title: "Generate to review to deploy",
    desc: "Balanced path. human-in-the-loop review through the mandatory Review Queue prior to final release. Default operating model for most environments.",
  },
  {
    n: "03",
    title: "Generate to export to integrate",
    desc: "Flexible path. external delivery to third-party ecosystems via SCORM, structured HTML, JSON, or API. Structural integrity travels with the export.",
  },
];

const faq = [
  {
    q: "We already run a large enterprise LMS. Do we have to replace it?",
    a: "No. Knowledge Foundry integrates into your existing environment via SCORM 1.2, structured HTML, JSON, or API. Programmes deploy in standardised formats aligned to enterprise LMS expectations. No rebuilding. No forklift. The Foundry becomes the source of truth for structure and integrity; the LMS remains the delivery surface.",
  },
  {
    q: "Which LMS platforms are supported?",
    a: "Any SCORM 1.2 conformant LMS. which covers the majority of enterprise deployments. Native LearnPress deployment is supported for organisations using the white-label path. Custom LMS environments are supported via structured HTML and API integration.",
  },
  {
    q: "What happens to integrity when a programme leaves the Foundry?",
    a: "Foundry Hash values travel with the exported programme. Recipients. LMS platforms, downstream systems, auditors. can independently confirm that what they received matches what was released. Integrity does not degrade at the export boundary.",
  },
  {
    q: "Can we deploy without an LMS at all?",
    a: "Yes. The white-label LMS is a complete delivery environment. Studio authoring, review queue, compliance dashboard, standards manager, analytics and telemetry, learner enhancement tools, and role and license management. deployed on your domain with your branding. Suitable when no incumbent LMS exists or when full control is a requirement.",
  },
  {
    q: "How are revisions handled once a programme is deployed to an external LMS?",
    a: "Regeneration can occur at the course, module, lesson, or block level without affecting adjacent content. Revisions do not automatically push live. a manual sync is required after regeneration, so release remains controlled. Every deployed version is identified by immutable course hash.",
  },
  {
    q: "Is API access production-ready?",
    a: "Yes. The API is production-grade, multi-tenant, and covers programme lifecycle operations, block-level access, provenance retrieval, and integrity verification. It is the same interface the platform uses internally. Full documentation is available under a mutual non-disclosure agreement.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Verification & Trust",
    desc: "Foundry Hash and Master Integrity Root. the integrity guarantees that survive export to any environment.",
    href: "/platform/verification-trust",
  },
  {
    eyebrow: "Technical",
    title: "Technical overview",
    desc: "Architecture, delivery models, and data-residency. the technical shape of what you would deploy.",
    href: "/platform/technical-overview",
  },
  {
    eyebrow: "Adjacent",
    title: "Enterprise modernisation",
    desc: "When integration serves a larger modernisation of an existing learning ecosystem.",
    href: "/platform/enterprise-learning-modernisation",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Enterprise · Integrations & Delivery"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Integrations", href: "/platform/integrations" },
        ]}
        title={
          <>
            Fit your environment,{" "}
            <span className="text-[color:var(--color-forge)]">or become</span> it.
          </>
        }
        lede="Knowledge Foundry is built to integrate into the systems you already run — or to become the delivery environment itself. Structural integrity is preserved either way. The choice is deployment shape, not integrity trade-off."
        secondaryCta={{ label: "See it work", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-integrations.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Two paths. Both preserve the structure that makes the programme defensible."
      >
        <p>
          Most organisations fall into one of two categories: those with an
          established LMS that must not be disrupted, and those that need a
          complete, high-integrity delivery environment of their own. Knowledge
          Foundry supports both, and the choice is genuinely a choice — neither
          path compromises structure, provenance, or integrity.
        </p>
        <p>
          <strong>Path one:</strong> integrate into your existing environment via
          SCORM, structured HTML, JSON, or API. No rebuilding.{" "}
          <strong>Path two:</strong> deploy the white-label LMS — a complete
          structured learning stack on your domain, with your branding. Both
          paths route programmes through the same authoring, review, and
          governance discipline behind them.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six integration primitives"
        title="Exports, APIs, identity, tenancy — enterprise-shaped by default."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="Three deployment tempos"
        title="Generate. Review. Export. Choose the rhythm."
        lede="The same authoring and governance discipline supports fast, balanced, and flexible deployment shapes — each with the human review gates that make release deliberate."
        steps={steps}
        tone="canvas"
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Delivery that matches your environment, not the other way around."
      >
        <p>
          Programmes deploy in the format your environment expects. Version
          precision is guaranteed by immutable course hash identity. Structural
          integrity — logic, dependencies, validation points — remains
          functional in your chosen delivery surface without degradation. The
          Foundry is the source of truth; the delivery environment is the
          expression.
        </p>
        <p>
          <strong>Your domain. Your branding. Your access controls.</strong> Or:
          your existing LMS, unchanged, with structured programmes deploying
          into it cleanly. Either way, the programme that reaches learners is
          the programme that was approved for release.
        </p>
      </ProseBlock>

      <FAQ title="How Integrations & Delivery work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Tell us about your delivery environment"
        title="See integration on your own stack."
        lede="Whether you are integrating into an established LMS or launching a new branded delivery environment, we align structured generation to your release process. 45 minutes; concrete recommendations; no obligation."
        ctaLabel="Discuss integration requirements"
      />
    </>
  );
}
