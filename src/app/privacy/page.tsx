import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy policy",
  description:
    "How Knowledge Foundry collects, uses, discloses and retains personal information under the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
};

const updated = "26 September 2026";

export default function PrivacyPage() {
  return (
    <>
      <Section spacing="compact" className="pt-14 md:pt-20">
        <Container size="narrow">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[12px] font-medium text-[color:var(--color-ink-faint)] font-[family-name:var(--font-jetbrains)] uppercase tracking-[0.1em]">
              <li>
                <Link href="/" className="hover:text-[color:var(--color-forge)]">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>Privacy policy</li>
            </ol>
          </nav>
          <Eyebrow>Legal</Eyebrow>
          <Reveal>
            <h1 className="text-display-1 mt-6 max-w-[22ch]">Privacy policy.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lede mt-6 max-w-[60ch]">
              This policy describes how {site.legal.entity} (&ldquo;Knowledge
              Foundry&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
              personal information, in line with the Australian Privacy Act
              1988 (Cth) and the Australian Privacy Principles (APPs).
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
              <h2>1. Who we are</h2>
              <p>
                {site.legal.entity} is the operator of the Knowledge Foundry
                platform and the {site.url} website. Our contact address for
                privacy inquiries is{" "}
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
              </p>
              <p>
                For inquiries from customers about processing performed under a
                master services agreement, we act as processor on the
                customer&rsquo;s instruction. For inquiries about our own
                collection (for example, from a person who submits our
                demonstration form), we act as controller.
              </p>
            </section>

            <section>
              <h2>2. What information we collect</h2>
              <p>We collect only what we need. In practice this falls into three groups.</p>
              <h3>2.1 Website and contact-form data</h3>
              <ul>
                <li>Name, work email, organization, role, country, and the details you provide in a demonstration request or an email to us.</li>
                <li>Phone number, only if you choose to provide it.</li>
                <li>Basic technical data associated with your visit. IP address, browser type, timestamps, and referring URL. collected via server and analytics logs.</li>
              </ul>
              <h3>2.2 Customer platform data</h3>
              <ul>
                <li>Authentication identifiers for named users a customer authorizes to use the platform.</li>
                <li>Content that customers or their authorized users choose to upload, produce, or store within the platform.</li>
                <li>Operational logs required to run and secure the service.</li>
              </ul>
              <h3>2.3 Business-to-business correspondence</h3>
              <ul>
                <li>Records of inquiries, meetings, proposals, and contracts with customers and prospective customers.</li>
              </ul>
              <p>
                We do not deliberately collect sensitive information (as defined by
                the Privacy Act). If a customer requires the platform to hold
                sensitive information as part of their program content, that is
                addressed in the customer agreement, not this policy.
              </p>
            </section>

            <section>
              <h2>3. How we collect information</h2>
              <ul>
                <li>Directly, when you submit a form, send us an email, or use the platform.</li>
                <li>Automatically, through the operation of the website and the platform.</li>
                <li>From authorized third parties, for example an authentication provider a customer uses for single sign-on.</li>
              </ul>
            </section>

            <section>
              <h2>4. Why we collect it</h2>
              <p>We use personal information for the following purposes.</p>
              <ul>
                <li>To respond to inquiries and schedule demonstrations.</li>
                <li>To provide the platform and support to authorized users.</li>
                <li>To secure the platform, detect misuse, and meet our own legal obligations.</li>
                <li>To send occasional operational and account communications to a customer&rsquo;s designated administrators.</li>
                <li>To improve the platform, using aggregate operational metrics that do not identify individuals.</li>
              </ul>
              <p>
                <strong>We do not sell personal information.</strong> We do not
                pass information collected through the demonstration form to a
                marketing-automation platform, and we do not use it to add you
                to a broadcast mailing list.
              </p>
            </section>

            <section>
              <h2>5. Who we disclose it to</h2>
              <p>We disclose personal information only where necessary and only to the following categories of recipient.</p>
              <ul>
                <li><strong>Named subprocessors</strong> that operate infrastructure or narrowly defined services on our behalf, such as our cloud hosting provider. A summary is on our <Link href="/trust/compliance-posture">compliance-posture page</Link>, and the full register is available on request.</li>
                <li><strong>Professional advisers</strong>, such as legal or accounting advisers, who are bound by confidentiality.</li>
                <li><strong>Regulators, law enforcement, or courts</strong> where required by law.</li>
                <li><strong>A successor entity</strong> in the event of a corporate transaction, subject to continued protection consistent with this policy.</li>
              </ul>
            </section>

            <section>
              <h2>6. Overseas disclosure</h2>
              <p>
                Production customer data for Australian tenants is processed and
                stored in Australia (AWS ap-southeast-2, Sydney). We do not
                routinely replicate customer content overseas.
              </p>
              <p>
                A small number of operational subprocessors, such as
                specific error-tracking or transactional-email providers,
                may process limited technical or contact data outside
                Australia. Where that occurs, we rely on the recipient&rsquo;s
                own privacy protections and, where required, contractual
                clauses. The current subprocessor register lists the relevant
                recipients and jurisdictions.
              </p>
              <p>
                For customer end users in the European Union or the United
                Kingdom, we execute a data-processing agreement incorporating
                the Standard Contractual Clauses where a transfer occurs.
              </p>
            </section>

            <section>
              <h2>7. How long we keep it</h2>
              <p>
                We retain personal information for as long as we have a
                legitimate purpose for holding it. Website and contact-form
                data are retained for the period reasonably needed to respond
                to your inquiry and to maintain a record of that
                correspondence.
              </p>
              <p>
                Customer platform data is retained for the term of the
                customer&rsquo;s agreement and a defined tail described in the
                data-processing agreement. On termination, we support export
                and deletion as agreed with the customer.
              </p>
            </section>

            <section>
              <h2>8. How we protect it</h2>
              <p>
                We apply administrative, technical, and physical safeguards
                appropriate to the sensitivity of the information. These
                include encryption in transit and at rest, per-tenant
                isolation, principle-of-least-privilege access, staff training,
                and monitoring. See our <Link href="/trust/security">security
                page</Link> for a fuller description.
              </p>
            </section>

            <section>
              <h2>9. Your rights</h2>
              <p>Under the Australian Privacy Principles, you may:</p>
              <ul>
                <li>Ask us what personal information we hold about you.</li>
                <li>Ask us to correct information that is inaccurate, out of date, incomplete, or misleading.</li>
                <li>Ask us to delete information we no longer need to hold.</li>
                <li>Make a complaint about how we have handled your information.</li>
              </ul>
              <p>
                Contact us at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
                We aim to acknowledge requests within five business days and to
                substantively respond within thirty days. If you are an
                authorized user of a customer&rsquo;s platform tenancy, please
                raise the request with your customer administrator in the
                first instance; where we are acting as processor we support
                the customer in responding to you.
              </p>
            </section>

            <section>
              <h2>10. Complaints</h2>
              <p>
                If you are dissatisfied with our response to a privacy
                complaint, you may contact the Office of the Australian
                Information Commissioner (OAIC) at{" "}
                <a href="https://www.oaic.gov.au/" target="_blank" rel="noreferrer noopener">
                  oaic.gov.au
                </a>{" "}
                or on 1300 363 992.
              </p>
            </section>

            <section>
              <h2>11. Cookies and analytics</h2>
              <p>
                The website uses a small number of first-party cookies to run
                essential functionality. Aggregate analytics are used to
                understand usage patterns; they do not identify individual
                visitors. Where we run advertising campaigns, we may use
                conversion measurement that fires only after a valid
                demonstration-form submission and does not carry identifying
                content into the ad platform.
              </p>
            </section>

            <section>
              <h2>12. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Material changes
                will be reflected in the &ldquo;last updated&rdquo; date at
                the top of the page. Where a change is material to customers,
                we will notify designated customer administrators directly.
              </p>
            </section>

            <section>
              <h2>13. Contact</h2>
              <p>
                Privacy inquiries:{" "}
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                <br />
                Legal entity: {site.legal.entity} · ABN {site.legal.abn}
              </p>
            </section>
          </article>
        </Container>
      </Section>
    </>
  );
}
