import type { Metadata } from "next";
import {
  ShieldCheck,
  GraduationCap,
  Stethoscope,
  HardHat,
  Users,
  Scale,
  Briefcase,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { CtaBand } from "@/components/solution/cta-band";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/who-can-use-this" },
  title: "Who this is for. Buyer profiles",
  description:
    "Knowledge Foundry is built for senior owners of programmes that must be defensible. Compliance leads, L&D directors, chief risk officers, chief medical officers, heads of clinical education, safety, and talent.",
};

const personas = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Head of Compliance",
    role: "You own the answer to 'how do you know this programme covers what the regulator expects?'",
    outcomes: [
      "Coverage against policy clauses, standards, and legislation. Mapped, not asserted.",
      "Version identity and revision history that survives an audit",
      "Evidence artefacts you can produce on demand, not reconstruct after the fact",
    ],
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Director of Learning & Development",
    role: "You own the enterprise learning system and are being asked to modernise without breaking what already works.",
    outcomes: [
      "Structured programmes across compliance, product, and operational domains",
      "Frameworks that outlive any single course or vendor engagement",
      "A defensible position for AI in your production pipeline. Bounded, reviewed, and cited.",
    ],
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Chief Risk Officer",
    role: "You need to demonstrate that operational and conduct risk controls include competent people, not only tested systems.",
    outcomes: [
      "A traceable path from a control obligation to the learning that operationalises it",
      "Assessment defined against risk, not against the shape of a slide deck",
      "Governance evidence that maps to your existing risk framework",
    ],
  },
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Chief Medical Officer",
    role: "You are accountable for the standard of care delivered by a workforce that is credentialled, credentialled again, and credentialled at scale.",
    outcomes: [
      "Clinical education aligned to scope of practice, competencies, and accreditation criteria",
      "Programme coverage decoupled from individual decisions about course authoring",
      "Evidence artefacts suitable for AHPRA, college, and jurisdictional review",
    ],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Head of Clinical Education",
    role: "You translate policy, protocol, and college requirements into training that clinicians will actually complete and pass.",
    outcomes: [
      "Frameworks built from your protocols, not authored around them",
      "Progression and prerequisites that match how the domain is practised",
      "Verification designed against evidence of competence, not attendance",
    ],
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Head of Safety",
    role: "You are accountable for training that stands up to incident review, regulator investigation, and internal assurance.",
    outcomes: [
      "Instruction at task level linked to the procedure, standard, or hazard that requires it",
      "Assessment aligned to observable behaviour, not recall of a slide",
      "Revision history that survives an incident review timeline",
    ],
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Head of Talent",
    role: "You are building capability at scale across the organisation and cannot afford drift between what is taught and what is required.",
    outcomes: [
      "Capability frameworks with lineage to role, function, and business objective",
      "Consistency across programmes. Same concept, same definition, same assessment.",
      "A shared substrate that survives leadership change and vendor churn",
    ],
  },
];

const notFor = [
  {
    title: "Small startups without a compliance or governance function",
    desc: "If you have fewer than a hundred learners and no formal governance obligation, the platform's control surface will read as overhead. There are simpler tools that will serve you better.",
  },
  {
    title: "Individual instructors and solo authors",
    desc: "The platform assumes review by many owners, versioned release, and evidence obligations. Solo authors of single courses will not use most of it, and the pricing will not make sense.",
  },
  {
    title: "Buyers looking for a faster slide deck",
    desc: "If the objective is to produce more course shaped content more quickly, the platform is the wrong choice. It produces frameworks first, and instruction is compiled against them. That is a discipline, not a shortcut.",
  },
  {
    title: "Teams looking to eliminate review by subject matter experts",
    desc: "Knowledge Foundry proposes. A human approves. If the expected outcome is generation from end to end without review, we are the wrong vendor and will say so.",
  },
];

export default function WhoCanUseThisPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Who this is for"
        breadcrumb={[{ label: "Who this is for", href: "/who-can-use-this" }]}
        title={
          <>
            Built for the people who{" "}
            <span className="text-[color:var(--color-forge)]">answer the audit.</span>
          </>
        }
        lede="Knowledge Foundry is built for senior owners of programmes that must be defensible. If the phrase 'how do you know?' arrives at your desk, this is for you. If it does not, there are simpler tools that will serve you better."
        primaryCta={{ label: "Request a demonstration", href: "/demonstration" }}
        secondaryCta={{ label: "See the platform", href: "/platform" }}
      />

      <Section>
        <Container>
          <div className="max-w-[720px] mb-14">
            <Eyebrow>Who this is for</Eyebrow>
            <Reveal>
              <h2 className="text-display-2 mt-5">Seven roles the platform is built around.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lede mt-5">
                Titles vary between organisations. What is consistent is the accountability: you own
                a programme that must be defensible, and you cannot rely on the phrase &ldquo;we
                covered that in a slide&rdquo;.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid md:grid-cols-2 gap-4">
            {personas.map((p) => (
              <RevealItem key={p.title}>
                <article className="h-full rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[color:var(--color-canvas-tint)] text-[color:var(--color-forge)]">
                      {p.icon}
                    </span>
                    <h3 className="text-[20px] font-semibold tracking-tight font-[family-name:var(--font-display)]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[14.5px] leading-[1.65] text-[color:var(--color-ink-soft)] mb-5">
                    {p.role}
                  </p>
                  <ul className="space-y-2.5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)]">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--color-forge)]" aria-hidden />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <ProseBlock
        eyebrow="A shared shape"
        title="What the seven roles have in common."
      >
        <p>
          They are accountable for something that must hold up under review.
          Not a course, not a completion rate. A programme, a capability, a
          licence, a standard of care. They live inside organisations where
          &ldquo;we ran a session on that&rdquo; is not a sufficient answer.
        </p>
        <p>
          They are typically senior, short of time, and technically literate about
          their domain if not always about learning systems. They are asked to
          buy carefully, deploy cautiously, and defend their choices to a
          board, a regulator, or an accreditor. The platform is opinionated in
          ways that match that shape of accountability.
        </p>
      </ProseBlock>

      <Section className="bg-[color:var(--color-canvas-warm)]">
        <Container>
          <div className="max-w-[720px] mb-12">
            <Eyebrow>Who this is not for</Eyebrow>
            <Reveal>
              <h2 className="text-display-2 mt-5">
                When to choose something else.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lede mt-5">
                We would rather tell you now than three months into a
                procurement conversation. If you recognise your organisation in
                the profiles below, the platform is not the right fit.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {notFor.map((n) => (
              <div key={n.title} className="rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8">
                <div className="flex items-start gap-3 mb-3">
                  <XCircle className="h-5 w-5 mt-0.5 shrink-0 text-[color:var(--color-ink-faint)]" aria-hidden />
                  <h3 className="text-[18px] font-semibold tracking-tight font-[family-name:var(--font-display)]">
                    {n.title}
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.65] text-[color:var(--color-ink-muted)] pl-8">
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="If this sounds like you"
        title="Bring a subject you already own."
        lede="A 45 minute working session on a real programme, policy, or standard you are accountable for. You see the platform operate on your material, and you keep the framework it produces."
      />
    </>
  );
}
