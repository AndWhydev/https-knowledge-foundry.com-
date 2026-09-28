import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { TopicHeader } from "@/components/solution/topic-header";
import { CtaBand } from "@/components/solution/cta-band";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/insights" },
  title: "Insights on structured training",
  description:
    "Long form articles on framework first design, hybrid verification, audit defense, and the provenance problem in AI generated compliance training.",
};

type Article = {
  href: string;
  topic: string;
  title: string;
  dek: string;
  date: string;
  read: string;
};

const articles: Article[] = [
  {
    href: "/insights/knowledge-structure-before-content",
    topic: "Methodology",
    title: "Knowledge structure comes before content.",
    dek: "Writing before structure is the root cause of training failure. Structural literacy is the missing skill in L&D.",
    date: "March 2026",
    read: "6 min",
  },
  {
    href: "/insights/what-verification-really-measures",
    topic: "Verification",
    title: "What verification really measures.",
    dek: "Click through completion is not evidence of competence. What real verification actually requires.",
    date: "March 2026",
    read: "7 min",
  },
  {
    href: "/insights/why-training-fails-audits",
    topic: "Audit",
    title: "Why training fails audits.",
    dek: "Audit failures trace back to knowledge structure, not content quality. The case for design that begins with audit.",
    date: "February 2026",
    read: "8 min",
  },
  {
    href: "/insights/scorm-is-a-transport-not-a-strategy",
    topic: "Standards",
    title: "SCORM is a transport, not a strategy.",
    dek: "SCORM and xAPI describe delivery. They do not say what a learner should know. Confusing the two is expensive.",
    date: "February 2026",
    read: "6 min",
  },
  {
    href: "/insights/knowledge-drift-and-how-to-detect-it",
    topic: "Governance",
    title: "Knowledge drift, and how to detect it.",
    dek: "What knowledge drift is, why it happens silently, and how design that begins with the framework surfaces it before an auditor does.",
    date: "January 2026",
    read: "7 min",
  },
  {
    href: "/insights/framework-first-methodology",
    topic: "Methodology",
    title: "The four move methodology, in depth.",
    dek: "Interpret. Structure. Produce. Deliver. The rationale for each move, not the marketing.",
    date: "January 2026",
    read: "9 min",
  },
  {
    href: "/insights/hybrid-verification-primer",
    topic: "Verification",
    title: "A primer on hybrid verification.",
    dek: "What hybrid verification is, why it works, and where it does not. A practical primer for compliance and L&D leaders.",
    date: "January 2026",
    read: "8 min",
  },
  {
    href: "/insights/ai-generated-content-and-compliance-risk",
    topic: "Provenance",
    title: "AI generated content and compliance risk.",
    dek: "The provenance problem. Why cryptographic evidence (Foundry Hash, Master Integrity Root, Forensic Revision Chain) matters for regulated buyers.",
    date: "December 2025",
    read: "9 min",
  },
];

const topics = ["All", "Methodology", "Verification", "Audit", "Governance", "Standards", "Provenance"];

export default function InsightsIndexPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Insights"
        breadcrumb={[{ label: "Insights", href: "/insights" }]}
        title={<>Long form arguments for the <span className="text-[color:var(--color-forge)]">discipline of structured knowledge.</span></>}
        lede="Working papers, methodology notes, and explanations written for auditors, from the team building Knowledge Foundry. Written for senior compliance, L&D, and risk owners in regulated organizations."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "See case studies", href: "/case-studies" }}
      />

      <Section>
        <Container>
          <div className="mb-10 flex items-center gap-2 flex-wrap">
            {topics.map((t, i) => (
              <button
                key={t}
                type="button"
                className={`inline-flex items-center h-9 px-4 text-[12px] font-medium font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.12em] rounded-full border transition-colors ${
                  i === 0
                    ? "bg-[color:var(--color-ink)] border-[color:var(--color-ink)] text-white"
                    : "bg-white border-[color:var(--color-hairline-strong)] text-[color:var(--color-ink-muted)] hover:border-[color:var(--color-ink)] hover:text-[color:var(--color-ink)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <RevealStagger className="grid md:grid-cols-2 gap-4">
            {articles.map((a) => (
              <RevealItem key={a.href}>
                <Link
                  href={a.href}
                  className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8 hover:border-[color:var(--color-ink-soft)] transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-center gap-3 mb-4 text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)]">
                    <span className="text-[color:var(--color-forge)]">{a.topic}</span>
                    <span aria-hidden className="text-[color:var(--color-ink-faint)]">·</span>
                    <span className="text-[color:var(--color-ink-faint)]">{a.date}</span>
                    <span aria-hidden className="text-[color:var(--color-ink-faint)]">·</span>
                    <span className="text-[color:var(--color-ink-faint)]">{a.read}</span>
                  </div>
                  <h3 className="text-[22px] font-[family-name:var(--font-display)] font-semibold tracking-tight mb-3 group-hover:text-[color:var(--color-forge)] transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[14.5px] text-[color:var(--color-ink-soft)] leading-[1.6] flex-1">
                    {a.dek}
                  </p>
                  <div className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium">
                    Read the piece
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <div className="mt-16 rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-warm)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-[560px]">
              <Eyebrow>Working papers on request</Eyebrow>
              <Reveal>
                <h3 className="text-[22px] mt-4 font-[family-name:var(--font-display)] font-semibold tracking-tight">
                  Deeper technical papers are shared under NDA.
                </h3>
              </Reveal>
              <p className="text-[14px] text-[color:var(--color-ink-muted)] mt-3 leading-[1.65]">
                Detailed methodology, integrity architecture, and provenance model documents are
                made available to prospective clients on request.
              </p>
            </div>
            <Link
              href="/demonstration"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-forge)] hover:text-[color:var(--color-forge-hot)]"
            >
              Request access
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="From reading to seeing"
        title="Bring a subject. Leave with a framework."
        lede="A 45 minute working session with the Foundry on your source material. You see the arguments made in these pieces enacted on your own subject."
      />
    </>
  );
}
