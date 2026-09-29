export const site = {
  name: "Knowledge Foundry",
  tagline: "Structured knowledge. Deliberate instruction.",
  description:
    "Knowledge Foundry turns subjects, documents, and requirements into structured learning systems. Define first. Write second.",
  url: "https://knowledge-foundry.com",
  legal: {
    entity: "Knowledge Foundry Pty Ltd",
    abn: "—",
  },
  contact: {
    email: "hello@knowledge-foundry.com",
  },
} as const;

export const nav = {
  platform: {
    label: "Platform",
    href: "/platform",
    groups: [
      {
        heading: "The system",
        items: [
          { label: "Platform overview", href: "/platform", desc: "How Knowledge Foundry works end to end" },
          { label: "See it work", href: "/platform/see-it-work", desc: "Ten short explainer videos" },
          { label: "Technical overview", href: "/platform/technical-overview", desc: "Architecture, models, and delivery" },
        ],
      },
      {
        heading: "Capabilities",
        items: [
          { label: "Framework Intelligence", href: "/platform/framework-intelligence", desc: "Structure before content" },
          { label: "Gap analysis", href: "/platform/gap-analysis", desc: "Find what is missing" },
          { label: "Remediation", href: "/platform/remediation", desc: "Close gaps at scale" },
          { label: "Knowledge transformation", href: "/platform/knowledge-transformation", desc: "Turn source into system" },
          { label: "Verification & trust", href: "/platform/verification-trust", desc: "Prove competence, not completion" },
        ],
      },
      {
        heading: "Governance",
        items: [
          { label: "Knowledge governance", href: "/platform/knowledge-governance", desc: "Ownership, review, versioning" },
          { label: "Standards & accreditation", href: "/platform/standards-accreditation", desc: "Alignment as a first-class output" },
          { label: "Audit & evidence", href: "/platform/audit-evidence", desc: "Exportable proof on demand" },
          { label: "Enterprise learning modernization", href: "/platform/enterprise-learning-modernisation", desc: "Retire what is failing you" },
          { label: "Integrations", href: "/platform/integrations", desc: "Fit into the systems you have" },
        ],
      },
    ],
  },
  programs: {
    label: "Programs",
    href: "/programs",
    groups: [
      {
        heading: "By program type",
        items: [
          { label: "Educational programs", href: "/programs/educational", desc: "Structured for understanding, not attendance" },
          { label: "Compliance programs", href: "/programs/compliance", desc: "Aligned to policies and required behaviors" },
          { label: "Product enablement", href: "/programs/product-enablement", desc: "Guided learning for tools and software" },
          { label: "Operational procedures", href: "/programs/operational-procedures", desc: "Repeatable, consistent task instruction" },
          { label: "Hybrid verification", href: "/programs/hybrid-verification", desc: "Learning plus capability confirmation" },
        ],
      },
    ],
  },
  industries: {
    label: "Industries",
    href: "/industries",
    groups: [
      {
        heading: "Regulated & high-consequence",
        items: [
          { label: "Financial services", href: "/industries/financial-services", desc: "Prudential, conduct, licensing" },
          { label: "Healthcare & life sciences", href: "/industries/healthcare-life-sciences", desc: "Clinical, credentialing, CPD" },
          { label: "Energy & resources", href: "/industries/energy-resources", desc: "Safety-critical operations" },
          { label: "Government & defense", href: "/industries/government-defence", desc: "Cleared, audited, evidenced" },
          { label: "Professional services", href: "/industries/professional-services", desc: "CPD and firm-wide expertise" },
          { label: "Higher education", href: "/industries/higher-education", desc: "Accreditation and outcomes" },
        ],
      },
    ],
  },
  caseStudies: { label: "Case studies", href: "/case-studies" },
  insights: { label: "Insights", href: "/insights" },
  about: { label: "About", href: "/about" },
} as const;
