"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { siteIndex } from "@/lib/site-index";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const groups = Array.from(new Set(siteIndex.map((s) => s.group)));

  return (
    <>
      {/* Trigger button, hidden until desktop where a keyboard shortcut applies */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-[55] items-center gap-2 rounded-full bg-white/95 backdrop-blur border border-[color:var(--color-hairline)] shadow-[var(--shadow-lifted)] px-4 h-11 text-[13px] font-medium text-[color:var(--color-ink)] hover:border-[color:var(--color-ink-soft)] transition-colors"
      >
        <Search className="h-4 w-4" aria-hidden />
        <span>Search</span>
        <kbd className="ml-1 rounded border border-[color:var(--color-hairline-strong)] bg-[color:var(--color-canvas-tint)] px-1.5 py-0.5 text-[10.5px] font-medium text-[color:var(--color-ink-muted)] font-[family-name:var(--font-jetbrains)]">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center pt-[10vh] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[620px] rounded-[var(--radius-lg)] bg-white shadow-[0_30px_80px_-15px_rgba(0,0,0,0.35)] border border-[color:var(--color-hairline)] overflow-hidden"
            >
              <Command loop className="[&_[cmdk-input]]:outline-none">
                <div className="flex items-center gap-3 px-5 border-b border-[color:var(--color-hairline)]">
                  <Search className="h-4 w-4 text-[color:var(--color-ink-faint)]" aria-hidden />
                  <Command.Input
                    placeholder="Search pages, industries, insights…"
                    className="flex-1 h-14 text-[15px] bg-transparent text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-faint)]"
                  />
                  <kbd className="rounded border border-[color:var(--color-hairline-strong)] bg-[color:var(--color-canvas-tint)] px-1.5 py-0.5 text-[10.5px] font-medium text-[color:var(--color-ink-muted)] font-[family-name:var(--font-jetbrains)]">
                    esc
                  </kbd>
                </div>

                <Command.List className="max-h-[420px] overflow-y-auto p-2">
                  <Command.Empty className="px-4 py-8 text-center text-[13.5px] text-[color:var(--color-ink-muted)]">
                    No matches. Try &ldquo;framework&rdquo;, &ldquo;compliance&rdquo;, or &ldquo;demo&rdquo;.
                  </Command.Empty>

                  <Command.Group heading="Actions" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.14em] [&_[cmdk-group-heading]]:text-[color:var(--color-ink-faint)] [&_[cmdk-group-heading]]:font-[family-name:var(--font-jetbrains)]">
                    <PaletteItem onSelect={() => go("/demonstration")} label="Request a demonstration" hint="Open contact form" icon={<Sparkles className="h-3.5 w-3.5" />} highlight />
                    <PaletteItem onSelect={() => go("/platform/see-it-work")} label="See it work" hint="Live walkthrough" />
                    <PaletteItem onSelect={() => go("/platform")} label="Platform overview" hint="How it all fits" />
                  </Command.Group>

                  {groups.map((group) => (
                    <Command.Group
                      key={group}
                      heading={group}
                      className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.14em] [&_[cmdk-group-heading]]:text-[color:var(--color-ink-faint)] [&_[cmdk-group-heading]]:font-[family-name:var(--font-jetbrains)]"
                    >
                      {siteIndex
                        .filter((s) => s.group === group)
                        .map((s) => (
                          <PaletteItem
                            key={s.href}
                            onSelect={() => go(s.href)}
                            label={s.title}
                            hint={s.href}
                            keywords={s.keywords}
                          />
                        ))}
                    </Command.Group>
                  ))}
                </Command.List>

                <div className="px-4 h-10 flex items-center justify-between border-t border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-warm)] text-[11px] text-[color:var(--color-ink-muted)] font-[family-name:var(--font-jetbrains)] tracking-[0.05em]">
                  <span>
                    <kbd className="text-[color:var(--color-ink-soft)]">↑↓</kbd> navigate ·{" "}
                    <kbd className="text-[color:var(--color-ink-soft)]">↵</kbd> select
                  </span>
                  <span className="hidden sm:inline">Knowledge Foundry</span>
                </div>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PaletteItem({
  label,
  hint,
  onSelect,
  icon,
  highlight = false,
  keywords,
}: {
  label: string;
  hint?: string;
  onSelect: () => void;
  icon?: React.ReactNode;
  highlight?: boolean;
  keywords?: string;
}) {
  return (
    <Command.Item
      value={`${label} ${keywords ?? ""}`}
      onSelect={onSelect}
      className="group flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] cursor-pointer text-[color:var(--color-ink)] aria-selected:bg-[color:var(--color-canvas-warm)] aria-selected:text-[color:var(--color-forge)] transition-colors"
    >
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-xs)] ${highlight ? "bg-[color:var(--color-forge)] text-white" : "bg-[color:var(--color-canvas-tint)] text-[color:var(--color-forge)]"}`}>
        {icon ?? <ArrowRight className="h-3.5 w-3.5" />}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-medium truncate">{label}</div>
        {hint && (
          <div className="text-[11.5px] text-[color:var(--color-ink-muted)] truncate font-[family-name:var(--font-jetbrains)] tracking-[0.02em]">
            {hint}
          </div>
        )}
      </div>
      <ArrowRight className="h-3.5 w-3.5 text-[color:var(--color-ink-faint)] group-aria-selected:text-[color:var(--color-forge)] transition-all group-aria-selected:translate-x-0.5" aria-hidden />
    </Command.Item>
  );
}
