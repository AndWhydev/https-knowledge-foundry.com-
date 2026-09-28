import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of use",
  description:
    "The terms that govern use of the Knowledge Foundry website. Customer use of the platform is governed separately by the master services agreement.",
};

const updated = "26 September 2026";

export default function TermsPage() {
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
              <li>Terms of use</li>
            </ol>
          </nav>
          <Eyebrow>Legal</Eyebrow>
          <Reveal>
            <h1 className="text-display-1 mt-6 max-w-[22ch]">Terms of use.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lede mt-6 max-w-[60ch]">
              These terms govern your use of {site.url} (the &ldquo;site&rdquo;).
              They are not the customer contract for the Knowledge Foundry
              platform; that is a separate master services agreement (MSA).
              Where these terms and an executed MSA cover the same subject
              matter, the MSA prevails for platform use.
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
              <h2>1. Who these terms are between</h2>
              <p>
                The site is operated by {site.legal.entity} (&ldquo;Knowledge
                Foundry&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
                accessing or using the site you agree to these terms. If you
                do not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2>2. What the site is for</h2>
              <p>
                The site provides information about Knowledge Foundry and its
                platform, receives enquiries, and hosts editorial material. It
                is not the platform itself, and nothing on the site is an
                offer, warranty, or contractual commitment except for those
                obligations set out in a signed agreement between us.
              </p>
            </section>

            <section>
              <h2>3. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>use the site in a way that breaches any law or the rights of any person;</li>
                <li>attempt to gain unauthorised access to, probe, or interfere with the site or its supporting infrastructure;</li>
                <li>submit content through forms or contact channels that is unlawful, deceptive, or infringes another party&rsquo;s rights;</li>
                <li>scrape, harvest, or bulk-download the site&rsquo;s content by automated means without our prior written consent;</li>
                <li>use the site to distribute malware, run denial-of-service activity, or otherwise degrade its availability.</li>
              </ul>
              <p>
                Good-faith security research is covered by our responsible-disclosure
                programme. See the <Link href="/trust/security">security page</Link>.
              </p>
            </section>

            <section>
              <h2>4. Intellectual property</h2>
              <p>
                The site, its content (including text, structure, code,
                imagery, and marks), and the Knowledge Foundry name and logo
                are owned by us or our licensors and are protected by
                copyright, trade-mark, and other laws. You may access and read
                the site for lawful purposes and reproduce short extracts for
                personal, internal, or editorial reference with attribution to
                Knowledge Foundry and a link to the source page.
              </p>
              <p>
                All other use, including republication, adaptation, or use
                for training machine-learning systems, requires our prior
                written consent.
              </p>
            </section>

            <section>
              <h2>5. Content you submit</h2>
              <p>
                If you submit information to us through a form, an email, or
                any other channel, you confirm that you are entitled to
                provide it and that it is accurate to the best of your
                knowledge. We handle personal information you submit in line
                with our <Link href="/privacy">privacy policy</Link>.
              </p>
              <p>
                Where you submit material as part of a demonstration request
                (for example, an attached policy document), you grant us a
                limited, non-exclusive licence to use that material for the
                purpose of preparing and delivering the requested session and
                for no other purpose. We do not retain a right to reuse
                submitted material in our own products or publications.
              </p>
            </section>

            <section>
              <h2>6. Third-party links</h2>
              <p>
                The site may link to third-party resources for reference. We
                do not control those resources and are not responsible for
                their content, availability, or handling of your information.
              </p>
            </section>

            <section>
              <h2>7. Disclaimers</h2>
              <p>
                The site is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis. To the maximum extent permitted by
                law, and other than any non-excludable consumer guarantees
                under the Australian Consumer Law, we make no warranties about
                the site&rsquo;s accuracy, completeness, availability, or
                fitness for a particular purpose.
              </p>
              <p>
                Content on the site, including editorial pages, technical
                overviews, and product descriptions, is provided for general
                information. It is not legal, regulatory, clinical, or
                professional advice, and it does not create a professional
                relationship between you and us.
              </p>
            </section>

            <section>
              <h2>8. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, we exclude liability
                for indirect, consequential, or special loss, and for loss of
                revenue, profit, goodwill, or data, arising out of or in
                connection with your use of the site. Nothing in these terms
                limits any liability that cannot be limited by law, including
                under the Australian Consumer Law.
              </p>
              <p>
                Where liability cannot be excluded but can be limited, our
                total aggregate liability arising out of or in connection with
                the site is limited to AUD 100.
              </p>
            </section>

            <section>
              <h2>9. Changes to the site and these terms</h2>
              <p>
                We may change the site at any time without notice. We may
                update these terms from time to time; the updated version is
                effective when posted. Material changes will be reflected in
                the &ldquo;last updated&rdquo; date at the top of this page.
                Your continued use of the site after an update constitutes
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2>10. Governing law and jurisdiction</h2>
              <p>
                These terms are governed by the laws of New South Wales,
                Australia. Each party submits to the exclusive jurisdiction of
                the courts of New South Wales and the courts able to hear
                appeals from them.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>
                Questions about these terms:{" "}
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
