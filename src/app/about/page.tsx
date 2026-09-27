import type { Metadata } from "next";
import { Layers3, ShieldCheck, GitBranch, Cpu, Compass } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProseBlock } from "@/components/solution/prose-block";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About. Knowledge Foundry",
  description:
    "Knowledge Foundry builds governed knowledge architecture for organisations that must defend how their programmes are made. We believe structure governs everything downstream.",
};

const principles = [
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Structure should be explicit",
    desc: "A framework is not a slide about a framework. It is a structured, inspectable object. nodes, relationships, provenance. that a human can review and a system can enforce.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Instruction should be governed, not improvised",
    desc: "Every lesson is compiled against an approved framework. Wording changes without structural approval do not ship. Structure is the release gate.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Automation should operate within human-defined boundaries",
    desc: "The system proposes, drafts, and validates. A named human owner approves. There is no end-to-end automation, by design.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Integrity should be verifiable, not assumed",
    desc: "Every block has a lineage. to the source that requires it, the framework node that governs it, and the review that approved it. Provenance is a first-class object.",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Delivery should be deliberate, not automatic",
    desc: "Release is a decision. Version identity, cohort scope, and evidence obligations are set by a human at the moment a programme is put into use.",
  },
];

export default function AboutPage() {
  return (
    <>
      <TopicHeader
        eyebrow="About"
        breadcrumb={[{ label: "About", href: "/about" }]}
        title={
          <>
            Structure governs{" "}
            <span className="text-[color:var(--color-forge)]">everything downstream.</span>
          </>
        }
        lede="Knowledge Foundry is a governed knowledge architecture for organisations whose programmes must be defensible — to a regulator, to an accreditor, to their own board. We were built for the environments where a lesson is not enough. The framework is the asset."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "Read our voice", href: "/insights" }}
      />

      <ProseBlock eyebrow="The problem observed" title="Volume increased. Structure did not.">
        <p>
          Across compliance, product enablement, clinical education, and
          operational training, one pattern repeated. Content was being
          produced at unprecedented speed — slides, manuals, videos,
          AI-generated lessons — while the underlying structure of what was
          being taught remained implicit, fragmented, or missing entirely.
        </p>
        <p>
          The result was recognisable: programmes that read well in isolation
          but referenced concepts not yet introduced, assessments that drifted
          from their objectives, revision histories that no one could
          reconstruct, and audits that could not be answered with a file.
        </p>
        <p>
          The core problem was never a lack of content. It was the absence of a
          structured knowledge architecture to ground it.
        </p>
      </ProseBlock>

      <ProseBlock
        eyebrow="The approach taken"
        title="Separate structure from wording. Approve structure first."
      >
        <p>
          Knowledge Foundry was built on a single premise: structure must
          precede instruction. Rather than generate content first and organise
          it afterward, the platform treats knowledge structure as a
          first-class artefact — the object that is reviewed, approved,
          versioned, and audited. Instruction is compiled against that
          structure, not the other way around.
        </p>
        <p>
          Automation was introduced carefully. It is not designed to replace
          the subject-matter expert, the compliance lead, or the accreditation
          reviewer. It is designed to operationalise their methodology so it
          can be repeated at scale without losing integrity.
        </p>
        <p>
          Human oversight remains where it matters: framework approval,
          structural editing, review decisions, and release.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="What we believe"
        title="Five principles we will not compromise."
        lede="These are not marketing points. They are constraints on the system. Where a customer requirement pulls against one of them, we say so."
        features={principles}
        columns={3}
      />

      <ProseBlock eyebrow="Our opinionated stance" title="Structure is not optional in high-stakes environments.">
        <p>
          In sectors where a wrong answer has consequences — clinical
          practice, financial licensing, safety-critical operations, regulated
          product use — a structured foundation is the only defensible way to
          guarantee that a learner has been taught what they need to know, in
          the right order, and can be shown to have demonstrated it.
        </p>
        <p>
          <strong>Knowledge Foundry is not a lesson builder.</strong> It is a
          structured knowledge infrastructure. If what you need is a faster
          slide deck, the market has that. If what you need is a defensible
          programme, that is what we build.
        </p>
      </ProseBlock>

      <Section className="bg-[color:var(--color-canvas-warm)]">
        <Container size="narrow">
          <Eyebrow>Contact</Eyebrow>
          <Reveal>
            <h2 className="text-display-2 mt-5">Where to reach us.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 grid md:grid-cols-2 gap-8 text-[15px] leading-[1.7] text-[color:var(--color-ink-soft)]">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-2">
                  General
                </div>
                <p className="text-[color:var(--color-ink)] font-semibold">
                  <a href={`mailto:${site.contact.email}`} className="hover:text-[color:var(--color-forge)]">
                    {site.contact.email}
                  </a>
                </p>
                <p className="mt-2 text-[color:var(--color-ink-muted)]">
                  For introductions, partnerships, and general enquiries.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-2">
                  Security
                </div>
                <p className="text-[color:var(--color-ink)] font-semibold">
                  <a href="mailto:security@knowledge-foundry.com" className="hover:text-[color:var(--color-forge)]">
                    security@knowledge-foundry.com
                  </a>
                </p>
                <p className="mt-2 text-[color:var(--color-ink-muted)]">
                  For responsible disclosure and security enquiries.
                </p>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-2">
                  Legal entity
                </div>
                <p className="text-[color:var(--color-ink)] font-semibold">{site.legal.entity}</p>
                <p className="mt-2 text-[color:var(--color-ink-muted)]">
                  ABN {site.legal.abn}
                </p>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-2">
                  Response time
                </div>
                <p className="text-[color:var(--color-ink)] font-semibold">One business day</p>
                <p className="mt-2 text-[color:var(--color-ink-muted)]">
                  For demonstration requests received on business days in the Australian Eastern time zone.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Experience the structure"
        title="Bring a subject. Leave with a framework."
        lede="A 45-minute working session on a real subject you own. You see the platform operate on your material, and you keep the framework it produces — yours to review, revise, and defend."
      />
    </>
  );
}
