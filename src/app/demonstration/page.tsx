import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, FileText, Mail } from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProseBlock } from "@/components/solution/prose-block";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { DemonstrationForm } from "./form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/demonstration" },
  title: "Request a demonstration",
  description:
    "Bring a subject. Leave with a framework. A 45 minute working session on a real programme you own. You see the platform operate on your material and keep what it produces.",
};

const bring = [
  {
    title: "A subject or programme you already own",
    desc: "A policy, standard, protocol, procedure, or existing training corpus. It does not need to be tidy. The platform is built to work on messy source.",
  },
  {
    title: "One senior owner in the room",
    desc: "The person accountable for the programme downstream. The session is calibrated to their decisions, not to a generic feature tour.",
  },
  {
    title: "Any structural requirement that must hold",
    desc: "Regulator, accreditor, college, or internal governance obligations. If it must be defensible, bring the paperwork that says so.",
  },
];

const leaveWith = [
  {
    title: "A working framework on your material",
    desc: "The Knowledge Foundry framework produced from your source. Concept nodes, relationships, assessment logic, and provenance links back to the sentence that implies each requirement.",
  },
  {
    title: "The gap picture",
    desc: "Where your existing training covers the framework, where it does not, and where it drifts. The silent holes, in writing.",
  },
  {
    title: "A written summary",
    desc: "A short document that captures what we saw, what would need to be true to adopt the platform, and the honest answer to whether we are the right vendor for you.",
  },
];

export default function DemonstrationPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Request a demonstration"
        breadcrumb={[{ label: "Demonstration", href: "/demonstration" }]}
        title={
          <>
            Bring a subject.{" "}
            <span className="text-[color:var(--color-forge)]">Leave with a framework.</span>
          </>
        }
        lede="A 45 minute working session with our team on a real subject or programme you own. You see the platform operate on your material, and you keep the framework it produces. Reply within one business day, always."
        primaryCta={{ label: "Jump to the form", href: "#request" }}
        secondaryCta={{ label: `Email ${site.contact.email}`, href: `mailto:${site.contact.email}` }}
      />

      <Section spacing="compact">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow>What to bring</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5">Come with real material.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[15px] leading-[1.7] text-[color:var(--color-ink-soft)] mt-6">
                  Generic sessions produce generic results. The demonstration is built around
                  your subject.
                </p>
              </Reveal>
              <ul className="mt-8 space-y-5">
                {bring.map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0 text-[color:var(--color-forge)]" aria-hidden />
                    <div>
                      <div className="text-[15.5px] font-semibold text-[color:var(--color-ink)]">
                        {b.title}
                      </div>
                      <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)] mt-1">
                        {b.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>What you leave with</Eyebrow>
              <Reveal>
                <h2 className="text-display-2 mt-5">A working artefact, yours to keep.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[15px] leading-[1.7] text-[color:var(--color-ink-soft)] mt-6">
                  The output belongs to you whether or not you proceed with the platform.
                </p>
              </Reveal>
              <ul className="mt-8 space-y-5">
                {leaveWith.map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <CheckCircle2 className="h-5 w-5 mt-1 shrink-0 text-[color:var(--color-forge)]" aria-hidden />
                    <div>
                      <div className="text-[15.5px] font-semibold text-[color:var(--color-ink)]">
                        {b.title}
                      </div>
                      <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)] mt-1">
                        {b.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="request" className="bg-[color:var(--color-canvas-warm)]">
        <Container size="narrow">
          <div className="mb-10">
            <Eyebrow>Request the session</Eyebrow>
            <Reveal>
              <h2 className="text-display-2 mt-5">Tell us what you would bring.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-[1.7] text-[color:var(--color-ink-soft)] mt-5">
                A short form. Enough for us to route your enquiry to the right member of the
                team and prepare a session on your actual material. We reply within one
                business day.
              </p>
            </Reveal>
          </div>

          <DemonstrationForm />

          <div className="mt-10 rounded-[var(--radius-md)] border border-[color:var(--color-hairline)] bg-white p-6 text-[13.5px] leading-[1.65] text-[color:var(--color-ink-muted)]">
            <div className="flex items-start gap-3">
              <FileText className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--color-ink-faint)]" aria-hidden />
              <div>
                <div className="text-[color:var(--color-ink)] font-semibold text-[13px] uppercase tracking-[0.08em] font-[family-name:var(--font-jetbrains)] mb-2">
                  Collection notice (Australian Privacy Principle 5)
                </div>
                <p>
                  {site.legal.entity} collects the information above to schedule
                  and prepare your demonstration session, to reply to your
                  enquiry, and to keep a record of that correspondence. We do
                  not pass this information to a marketing automation platform,
                  and we do not use it to add you to a broadcast mailing list.
                  Full detail on how we handle personal information (including
                  storage, retention, access, correction, and complaint
                  handling) is set out in our{" "}
                  <Link href="/privacy" className="text-[color:var(--color-forge)] underline underline-offset-2">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="narrow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8">
              <Mail className="h-5 w-5 text-[color:var(--color-forge)] mb-4" aria-hidden />
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-2">
                Prefer email?
              </div>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-[18px] font-semibold text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)] transition-colors"
              >
                {site.contact.email}
              </a>
              <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)] mt-3">
                Write in your own words. Attach anything relevant. A named member of the team
                will reply.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-white p-8">
              <Clock3 className="h-5 w-5 text-[color:var(--color-forge)] mb-4" aria-hidden />
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-ink-faint)] mb-2">
                Response time
              </div>
              <div className="text-[18px] font-semibold text-[color:var(--color-ink)]">
                One business day
              </div>
              <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-muted)] mt-3">
                Enquiries received on Australian Eastern business days are replied to by close of
                the next business day. Weekend and public holiday enquiries roll to the next
                business day.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <ProseBlock eyebrow="What this session is not" title="A short honesty section.">
        <p>
          This is not a slide walkthrough of our features. It is not a
          time boxed sales call disguised as a demo. It is not a scripted
          product tour that ignores your material.
        </p>
        <p>
          It is a working session with a senior member of our team, using your
          subject, in the platform, producing a framework you keep. If we are
          not the right fit for your programme, we will say so in writing.
        </p>
      </ProseBlock>
    </>
  );
}
