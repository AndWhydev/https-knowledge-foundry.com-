import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/accessibility-statement" },
  title: "Accessibility statement",
  description:
    "Knowledge Foundry commits to WCAG 2.1 Level AA. This statement sets out our scope, testing methodology, known limitations, and how to give feedback.",
};

const updated = "26 September 2026";

export default function AccessibilityStatementPage() {
  return (
    <>
      <Section spacing="compact" className="pt-14 md:pt-20">
        <Container size="narrow">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[12px] font-medium text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.1em]">
              <li>
                <Link href="/" className="hover:text-[color:var(--color-forge)]">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>Accessibility statement</li>
            </ol>
          </nav>
          <Eyebrow>Legal</Eyebrow>
          <Reveal>
            <h1 className="text-display-1 mt-6 max-w-[22ch]">Accessibility statement.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lede mt-6 max-w-[60ch]">
              Knowledge Foundry commits to conformance with the Web Content
              Accessibility Guidelines (WCAG) 2.1 at Level AA across the
              public website and the customer-facing surfaces of the
              platform.
            </p>
          </Reveal>
          <p className="mt-6 text-[12.5px] font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
            Last updated: {updated}
          </p>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="narrow">
          <article className="space-y-14 text-[15.5px] leading-[1.75] text-[color:var(--color-ink-soft)] [&_h2]:text-[color:var(--color-ink)] [&_h2]:text-[24px] [&_h2]:leading-[1.25] [&_h2]:font-semibold [&_h2]:font-[family-name:var(--font-display)] [&_h2]:tracking-tight [&_h2]:mb-4 [&_h3]:text-[color:var(--color-ink)] [&_h3]:text-[17px] [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-6 [&_strong]:text-[color:var(--color-ink)] [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-[color:var(--color-forge)] [&_a]:underline [&_a]:underline-offset-2">
            <section>
              <h2>1. Committed conformance level</h2>
              <p>
                Our commitment is WCAG 2.1 Level AA. Where a specific surface
                meets a higher standard, we say so on the surface itself
                rather than in a blanket claim here.
              </p>
              <p>
                Accessibility is an ongoing program, not a one-off audit.
                The commitment applies to new work as it ships and to a
                rolling remediation program against existing surfaces.
              </p>
            </section>

            <section>
              <h2>2. Scope</h2>
              <p>This statement covers:</p>
              <ul>
                <li>the public website at {site.url};</li>
                <li>the Studio and Console interfaces used by customers to build and govern programs;</li>
                <li>program content delivered through Knowledge Foundry to end learners.</li>
              </ul>
              <p>
                Customer-authored content displayed within a program
                inherits the platform&rsquo;s accessible presentation shell,
                but the content itself remains the responsibility of the
                customer as the author. The platform provides authoring
                affordances (image alternative text prompts, heading
                structure, semantic block types, color contrast guardrails)
                to support customer conformance.
              </p>
            </section>

            <section>
              <h2>3. Testing methodology</h2>
              <p>Our accessibility program combines the following methods:</p>
              <ul>
                <li>
                  <strong>Automated checks in continuous integration.</strong>{" "}
                  Every pull request runs an automated accessibility check
                  against the changed surfaces. Regressions block merge.
                </li>
                <li>
                  <strong>Manual review against a WCAG 2.1 AA checklist.</strong>{" "}
                  Named engineers walk new surfaces against the WCAG 2.1
                  Level AA success criteria before release.
                </li>
                <li>
                  <strong>Keyboard-only and screen-reader walkthroughs.</strong>{" "}
                  Critical customer flows (sign-in, framework review,
                  release, and evidence export) are exercised without a
                  mouse and with a screen reader before release.
                </li>
                <li>
                  <strong>Independent audit.</strong> We commission
                  independent accessibility audits on a defined cadence and
                  after material changes to the customer-facing surfaces.
                </li>
                <li>
                  <strong>Customer and end-user feedback.</strong> Issues
                  raised by customers, authorized users, or the public are
                  triaged against the same defect workflow as security and
                  reliability issues.
                </li>
              </ul>
            </section>

            <section>
              <h2>4. Known limitations</h2>
              <p>
                We publish known limitations because a statement that claims
                perfect conformance is rarely true. As at the last-updated
                date above, we are actively tracking the following categories
                of issue:
              </p>
              <ul>
                <li>
                  Some legacy editorial pages predate the current design
                  system and are being migrated. During the migration window,
                  a small number of headings may not render with the correct
                  landmark structure.
                </li>
                <li>
                  Complex data visualizations are provided with structured
                  text alternatives, but some interactive tooltips do not yet
                  meet full keyboard equivalence. A keyboard-accessible
                  fallback is exposed in each case.
                </li>
                <li>
                  Third-party embeds (for example, calendar-scheduling
                  widgets on partner pages) may not fully meet our internal
                  standard. Where we cannot bring them to standard, we
                  provide an equivalent contact path.
                </li>
              </ul>
              <p>
                This list is refreshed with each release. If you encounter an
                issue that is not listed, please tell us.
              </p>
            </section>

            <section>
              <h2>5. Feedback and contact</h2>
              <p>
                If something on our site or platform blocks you from doing
                what you came to do, we want to know. Email{" "}
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>{" "}
                with the URL, a short description, and, if you can, the
                device, browser, and assistive technology you were using.
              </p>
              <p>
                We aim to acknowledge accessibility feedback within two
                business days and to substantively respond within ten
                business days. Where a fix requires longer, we will describe
                the workaround available in the interim.
              </p>
            </section>

            <section>
              <h2>6. Formal complaints</h2>
              <p>
                If our response to accessibility feedback does not resolve
                your concern, Australian users may raise a complaint with the
                Australian Human Rights Commission at{" "}
                <a href="https://humanrights.gov.au/" target="_blank" rel="noreferrer noopener">
                  humanrights.gov.au
                </a>
                . Users in other jurisdictions may raise a complaint with the
                relevant national body.
              </p>
            </section>
          </article>
        </Container>
      </Section>
    </>
  );
}
