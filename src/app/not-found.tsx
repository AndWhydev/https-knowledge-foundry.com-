import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section spacing="loose">
      <Container size="narrow">
        <div className="text-center">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="text-display-1 mt-6">This page has no framework.</h1>
          <p className="text-lede mt-6 max-w-[46ch] mx-auto">
            The page you asked for does not exist, or has been retired without a
            redirect. Try the platform overview, or head back to the home page.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="/" variant="primary" size="lg" arrow>
              Back to home
            </Button>
            <Button href="/platform" variant="secondary" size="lg">
              Explore the platform
            </Button>
          </div>
          <div className="mt-16 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { title: "Platform overview", href: "/platform" },
              { title: "Programs", href: "/programs" },
              { title: "Industries", href: "/industries" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="p-5 rounded-[var(--radius-md)] border border-[color:var(--color-hairline)] hover:border-[color:var(--color-ink-soft)] transition-colors"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)] mb-2">Try</div>
                <div className="text-[15px] font-semibold">{l.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
