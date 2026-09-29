import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { clock, getVideo, videoHref, videos, type Video } from "@/lib/videos";

const featured = ["platform-overview", "from-a-document-to-live", "assurance-and-release"];

/** Homepage entry point to the explainer videos on /platform/see-it-work. */
export function VideoTeaser() {
  const list = featured.map((s) => getVideo(s)).filter((v): v is Video => Boolean(v));
  const minutes = Math.round(videos.reduce((t, v) => t + v.seconds, 0) / 60);

  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <Eyebrow>See it work</Eyebrow>
            <h2 className="text-display-2 mt-5">Knowledge Foundry, explained in minutes.</h2>
            <p className="text-lede mt-5">
              {videos.length} short explainers, {minutes} minutes in total. From a single document to a governed live
              program, human release control, and the audit pack. Each comes with a full transcript.
            </p>
          </div>
          <Link
            href="/platform/see-it-work"
            className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap py-2 text-[15px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]"
          >
            <span className="border-b border-current pb-0.5">Watch all {videos.length} explainers</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {list.map((v, i) => (
            <li key={v.slug}>
              <Link href={videoHref(v)} className="group block">
                <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-warm)]">
                  <Image
                    src={v.poster}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`flex items-center justify-center rounded-full text-white transition-colors ${
                        i === 0 ? "h-14 w-14 bg-[color:var(--color-forge)]" : "h-12 w-12 bg-[color:var(--color-ink)]/80 group-hover:bg-[color:var(--color-forge)]"
                      }`}
                    >
                      <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" aria-hidden />
                    </span>
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-[11px] font-medium tracking-[0.06em] text-white font-[family-name:var(--font-jetbrains)]">
                    {clock(v.seconds)}
                  </span>
                </div>
                <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)] text-[color:var(--color-forge)]">
                  {i === 0 ? "Start here" : v.chapter}
                </div>
                <div className="mt-1 text-[19px] font-semibold tracking-tight font-[family-name:var(--font-display)] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)]">
                  {v.title}
                </div>
                <p className="mt-1 text-[14.5px] leading-[1.55] text-[color:var(--color-ink-muted)]">{v.tagline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
