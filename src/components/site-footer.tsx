import Link from "next/link";
import { Logo } from "@/components/logo";
import { site, nav } from "@/lib/site";
import { ArrowUpRight, Plus } from "lucide-react";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "See it work", href: "/platform/see-it-work" },
      { label: "Framework Intelligence", href: "/platform/framework-intelligence" },
      { label: "Gap analysis", href: "/platform/gap-analysis" },
      { label: "Remediation", href: "/platform/remediation" },
      { label: "Knowledge transformation", href: "/platform/knowledge-transformation" },
      { label: "Verification & trust", href: "/platform/verification-trust" },
      { label: "Governance", href: "/platform/knowledge-governance" },
      { label: "Standards & accreditation", href: "/platform/standards-accreditation" },
      { label: "Audit & evidence", href: "/platform/audit-evidence" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "Technical overview", href: "/platform/technical-overview" },
    ],
  },
  {
    heading: "Programs",
    links: nav.programs.groups[0].items.map((i) => ({ label: i.label, href: i.href })),
  },
  {
    heading: "Industries",
    links: nav.industries.groups[0].items.map((i) => ({ label: i.label, href: i.href })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Who this is for", href: "/who-can-use-this" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "Trust center", href: "/trust" },
      { label: "Contact", href: "/demonstration" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 md:mt-24 border-t border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-warm)]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">
        {/* CTA strip: desktop only; on phones every sales page already ends with its own CTA directly above */}
        <div className="hidden lg:block py-24 border-b border-[color:var(--color-hairline)]">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-end">
            <div>
              <div className="text-eyebrow mb-4">Structured knowledge. Deliberate instruction.</div>
              <h2 className="text-display-2 max-w-[16ch]">
                Define what should exist, before writing what does.
              </h2>
            </div>
            <div className="md:pl-6">
              <p className="text-lede mb-6 max-w-[46ch]">
                A 45-minute walkthrough with our team, mapped to a subject or programme you own. No slideware.
              </p>
              <Link
                href="/demonstration"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)] transition-colors"
              >
                <span className="border-b border-current pb-0.5">Request a demonstration</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        {/* Nav grid */}
        <div className="py-12 md:py-14 grid lg:grid-cols-[1.4fr_repeat(4,1fr)] gap-10">
          <div>
            <Logo />
            <p className="mt-5 text-[13.5px] text-[color:var(--color-ink-muted)] leading-relaxed max-w-[36ch]">
              {site.description}
            </p>
          </div>
          {/* Phones and tablets: collapsible groups, so the footer is not three screens of links */}
          <div className="lg:hidden border-t border-[color:var(--color-hairline)]">
            {footerLinks.map((group) => (
              <details key={group.heading} className="group border-b border-[color:var(--color-hairline)]">
                <summary className="flex items-center justify-between py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[15px] font-semibold text-[color:var(--color-ink)]">
                  {group.heading}
                  <Plus className="h-4 w-4 text-[color:var(--color-ink-faint)] transition-transform group-open:rotate-45" aria-hidden />
                </summary>
                <ul className="pb-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2.5 text-[15px] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-forge)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          {footerLinks.map((group) => (
            <div key={group.heading} className="hidden lg:block">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-ink-faint)] mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-forge)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal strip */}
        <div className="py-6 lg:pb-24 border-t border-[color:var(--color-hairline)] flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] text-[color:var(--color-ink-faint)]">
          <div>
            © {new Date().getFullYear()} {site.legal.entity}. All rights reserved.
            {site.legal.abn && site.legal.abn !== "—" && ` ABN ${site.legal.abn}.`}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 [&>a]:py-1.5">
            <Link href="/privacy" className="hover:text-[color:var(--color-ink)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[color:var(--color-ink)]">Terms</Link>
            <Link href="/accessibility-statement" className="hover:text-[color:var(--color-ink)]">Accessibility</Link>
            <Link href="/trust" className="hover:text-[color:var(--color-ink)]">Trust center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
