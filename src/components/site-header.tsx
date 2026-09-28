"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

const megaKeys = ["platform", "programs", "industries"] as const;
type MegaKey = (typeof megaKeys)[number];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[color:var(--color-hairline)]"
          : "bg-white/0 border-b border-transparent",
      )}
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">
        <div className="flex h-16 md:h-[72px] items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="Knowledge Foundry home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-0 xl:gap-1" aria-label="Primary">
            {megaKeys.map((key) => {
              const section = nav[key];
              const active = openMega === key;
              return (
                <button
                  key={key}
                  onMouseEnter={() => setOpenMega(key)}
                  onFocus={() => setOpenMega(key)}
                  className={cn(
                    "inline-flex items-center gap-1 px-2 xl:px-3 h-9 rounded text-[13.5px] font-medium whitespace-nowrap transition-colors",
                    "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]",
                    active && "text-[color:var(--color-ink)]",
                  )}
                  aria-expanded={active}
                >
                  {section.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      active && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
            <Link
              href={nav.caseStudies.href}
              onMouseEnter={() => setOpenMega(null)}
              className="px-2 xl:px-3 h-9 inline-flex items-center rounded text-[13.5px] font-medium whitespace-nowrap text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
            >
              {nav.caseStudies.label}
            </Link>
            <Link
              href={nav.insights.href}
              onMouseEnter={() => setOpenMega(null)}
              className="px-2 xl:px-3 h-9 inline-flex items-center rounded text-[13.5px] font-medium whitespace-nowrap text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
            >
              {nav.insights.label}
            </Link>
            <Link
              href={nav.about.href}
              onMouseEnter={() => setOpenMega(null)}
              className="px-2 xl:px-3 h-9 inline-flex items-center rounded text-[13.5px] font-medium whitespace-nowrap text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
            >
              {nav.about.label}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/demonstration" size="sm" variant="primary" arrow>
              Request a demonstration
            </Button>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {openMega && (
          <motion.div
            key={openMega}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-0 right-0 top-full hidden lg:block bg-white border-b border-[color:var(--color-hairline)] shadow-[0_24px_48px_-20px_rgba(18,20,26,0.12)]"
            onMouseEnter={() => setOpenMega(openMega)}
          >
            <div className="mx-auto max-w-[1440px] px-8 xl:px-12 py-10">
              <div className="grid grid-cols-[220px_1fr] gap-12">
                <div>
                  <div className="text-eyebrow mb-3">{nav[openMega].label}</div>
                  <p className="text-[13px] text-[color:var(--color-ink-muted)] leading-relaxed">
                    {openMega === "platform" && "The system that turns subjects into structured learning."}
                    {openMega === "programs" && "Purpose-built for the outcomes your organisation is accountable for."}
                    {openMega === "industries" && "Regulated, evidenced, and audit-ready in your sector."}
                  </p>
                  <Link
                    href={nav[openMega].href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-forge)] hover:text-[color:var(--color-forge-hot)]"
                  >
                    Overview
                    <span aria-hidden>→</span>
                  </Link>
                </div>
                <div
                  className={cn(
                    "grid gap-8",
                    (nav[openMega].groups.length as number) >= 3 ? "grid-cols-3" : "grid-cols-2",
                  )}
                >
                  {nav[openMega].groups.map((group) => (
                    <div key={group.heading}>
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-ink-faint)] mb-4">
                        {group.heading}
                      </h3>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="group block -mx-2 px-2 py-1.5 rounded hover:bg-[color:var(--color-canvas-tint)] transition-colors"
                              onClick={() => setOpenMega(null)}
                            >
                              <div className="text-[13.5px] font-medium text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)] transition-colors">
                                {item.label}
                              </div>
                              <div className="text-[12px] text-[color:var(--color-ink-muted)] leading-snug mt-0.5">
                                {item.desc}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-[color:var(--color-hairline)]"
          >
            <div className="px-5 py-6 space-y-6 max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain">
              {megaKeys.map((key) => (
                <div key={key}>
                  <Link
                    href={nav[key].href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-[16px] font-semibold text-[color:var(--color-ink)]"
                  >
                    {nav[key].label}
                  </Link>
                  <ul className="mt-1">
                    {nav[key].groups[0].items.slice(0, 5).map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 text-[15px] text-[color:var(--color-ink-muted)]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-4 border-t border-[color:var(--color-hairline)] space-y-1">
                {[nav.caseStudies, nav.insights, nav.about].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[16px] font-semibold text-[color:var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button href="/demonstration" variant="primary" size="lg" arrow className="w-full">
                Request a demonstration
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
