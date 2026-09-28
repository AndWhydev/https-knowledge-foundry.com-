export type SiteEntry = {
  title: string;
  href: string;
  group: "Home" | "Platform" | "Programs" | "Industries" | "Case studies" | "Insights" | "Trust" | "Company" | "Legal";
  keywords?: string;
};

export const siteIndex: SiteEntry[] = [
  { group: "Home", title: "Home", href: "/", keywords: "structured knowledge deliberate instruction" },

  { group: "Platform", title: "Platform overview", href: "/platform" },
  { group: "Platform", title: "See it work", href: "/platform/see-it-work" },
  { group: "Platform", title: "Framework Intelligence", href: "/platform/framework-intelligence", keywords: "structure concepts relationships" },
  { group: "Platform", title: "Gap Analysis", href: "/platform/gap-analysis", keywords: "missing coverage validation" },
  { group: "Platform", title: "Remediation", href: "/platform/remediation", keywords: "close gaps content enhancement" },
  { group: "Platform", title: "Knowledge Transformation", href: "/platform/knowledge-transformation" },
  { group: "Platform", title: "Verification & Trust", href: "/platform/verification-trust", keywords: "capability confirmation" },
  { group: "Platform", title: "Knowledge Governance", href: "/platform/knowledge-governance", keywords: "ownership review drift" },
  { group: "Platform", title: "Standards & Accreditation", href: "/platform/standards-accreditation" },
  { group: "Platform", title: "Audit & Evidence", href: "/platform/audit-evidence", keywords: "audit trail exportable pack regulator" },
  { group: "Platform", title: "Enterprise Learning Modernization", href: "/platform/enterprise-learning-modernisation" },
  { group: "Platform", title: "Integrations", href: "/platform/integrations" },
  { group: "Platform", title: "Technical overview", href: "/platform/technical-overview" },

  { group: "Programs", title: "All programs", href: "/programs" },
  { group: "Programs", title: "Educational programs", href: "/programs/educational" },
  { group: "Programs", title: "Compliance programs", href: "/programs/compliance" },
  { group: "Programs", title: "Product enablement", href: "/programs/product-enablement" },
  { group: "Programs", title: "Operational procedures", href: "/programs/operational-procedures" },
  { group: "Programs", title: "Hybrid verification", href: "/programs/hybrid-verification" },

  { group: "Industries", title: "All industries", href: "/industries" },
  { group: "Industries", title: "Financial services", href: "/industries/financial-services", keywords: "SEC FINRA OCC FinCEN DORA CBUAE DFSA FSA APRA ASIC licensing" },
  { group: "Industries", title: "Healthcare & life sciences", href: "/industries/healthcare-life-sciences", keywords: "FDA Joint Commission DHA MHLW PMDA AHPRA TGA NSQHS clinical" },
  { group: "Industries", title: "Energy & resources", href: "/industries/energy-resources", keywords: "ISO 45001 OSHA MSHA OSHAD safety-critical" },
  { group: "Industries", title: "Government & defense", href: "/industries/government-defence", keywords: "NIST CMMC ITAR NIS2 PSPF ISM cleared defense" },
  { group: "Industries", title: "Professional services", href: "/industries/professional-services", keywords: "CPD CPE AICPA ICAEW CA CPA law engineers" },
  { group: "Industries", title: "Higher education", href: "/industries/higher-education", keywords: "ESG EQF CAA NIAD-QE TEQSA AQF accreditation" },

  { group: "Case studies", title: "All case studies", href: "/case-studies" },
  { group: "Case studies", title: "Regulated financial services", href: "/case-studies/regulated-financial-services" },
  { group: "Case studies", title: "National healthcare operator", href: "/case-studies/national-healthcare-operator" },
  { group: "Case studies", title: "Critical infrastructure", href: "/case-studies/critical-infrastructure" },

  { group: "Insights", title: "All insights", href: "/insights" },
  { group: "Insights", title: "Knowledge structure before content", href: "/insights/knowledge-structure-before-content" },
  { group: "Insights", title: "What verification really measures", href: "/insights/what-verification-really-measures" },
  { group: "Insights", title: "Why training fails audits", href: "/insights/why-training-fails-audits" },
  { group: "Insights", title: "SCORM is a transport, not a strategy", href: "/insights/scorm-is-a-transport-not-a-strategy" },
  { group: "Insights", title: "Knowledge drift and how to detect it", href: "/insights/knowledge-drift-and-how-to-detect-it" },
  { group: "Insights", title: "Framework-first methodology", href: "/insights/framework-first-methodology" },
  { group: "Insights", title: "Hybrid verification primer", href: "/insights/hybrid-verification-primer" },
  { group: "Insights", title: "AI-generated content and compliance risk", href: "/insights/ai-generated-content-and-compliance-risk" },

  { group: "Trust", title: "Trust center", href: "/trust" },
  { group: "Trust", title: "Security", href: "/trust/security" },
  { group: "Trust", title: "Compliance posture", href: "/trust/compliance-posture" },

  { group: "Company", title: "Learn: regulations, guides, glossary", href: "/learn", keywords: "OSHA HIPAA FINRA BSA AML GDPR EU AI Act NIS2 DORA UAE PDPL DFSA Japan APPI AUSTRAC APRA ISO SCORM xAPI competency framework glossary guides regulations" },
  { group: "Company", title: "About", href: "/about" },
  { group: "Company", title: "Who this is for", href: "/who-can-use-this" },
  { group: "Company", title: "Request a demonstration", href: "/demonstration", keywords: "demo book contact" },

  { group: "Legal", title: "Privacy policy", href: "/privacy" },
  { group: "Legal", title: "Terms", href: "/terms" },
  { group: "Legal", title: "Accessibility statement", href: "/accessibility-statement" },
];
