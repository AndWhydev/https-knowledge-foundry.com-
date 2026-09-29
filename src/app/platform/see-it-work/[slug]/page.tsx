import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/solution/cta-band";
import { VideoPlayer } from "@/components/video/video-player";
import { VideoLibrary } from "@/components/video/video-library";
import { clock, getTranscript, getVideo, isoDuration, nextVideo, videoHref, videos } from "@/lib/videos";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const v = getVideo((await params).slug);
  if (!v) return {};
  return {
    alternates: { canonical: videoHref(v) },
    title: `${v.title} (video)`,
    description: v.description,
    openGraph: {
      type: "video.other",
      title: `${v.title}: Knowledge Foundry explainer`,
      description: v.tagline,
      images: [{ url: v.poster, width: 1280, height: 720 }],
      videos: [{ url: v.src, type: "video/mp4", width: 1280, height: 720 }],
    },
  };
}

const label = "text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)]";

export default async function WatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const v = getVideo((await params).slug);
  if (!v) notFound();
  const next = nextVideo(v.slug);
  const transcript = getTranscript(v.slug);
  const url = `${site.url}${videoHref(v)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${url}#video`,
        name: `${v.title}: Knowledge Foundry explainer`,
        description: v.summary,
        thumbnailUrl: [v.poster],
        uploadDate: v.uploadDate,
        duration: isoDuration(v.seconds),
        contentUrl: v.src,
        embedUrl: url,
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#organization` },
        ...(transcript ? { transcript: transcript.paragraphs.map((p) => p.text).join(" ") } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Platform", item: `${site.url}/platform` },
          { "@type": "ListItem", position: 2, name: "See it work", item: `${site.url}/platform/see-it-work` },
          { "@type": "ListItem", position: 3, name: v.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[color:var(--color-canvas-warm)] pt-10 md:pt-14 pb-12">
        <Container>
          <nav aria-label="Breadcrumb" className={`${label} text-[color:var(--color-ink-muted)] mb-6`}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/platform" className="hover:text-[color:var(--color-forge)]">Platform</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/platform/see-it-work" className="hover:text-[color:var(--color-forge)]">See it work</Link>
              </li>
            </ol>
          </nav>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12 items-start">
            <div>
              <VideoPlayer
                src={v.src}
                poster={v.poster}
                title={v.title}
                next={next ? { title: next.title, href: videoHref(next) } : undefined}
              />
            </div>
            <div>
              <div className={`${label} text-[color:var(--color-forge)] mb-3`}>
                {v.chapter} · {clock(v.seconds)}
              </div>
              <h1 className="text-[32px] md:text-[42px] leading-[1.05] font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[color:var(--color-ink)]">
                {v.title}
              </h1>
              <p className="mt-3 text-[17px] leading-[1.55] text-[color:var(--color-ink-soft)]">{v.tagline}</p>
              <p className="mt-5 text-[15.5px] leading-[1.7] text-[color:var(--color-ink-muted)]">{v.summary}</p>
              {next && (
                <Link href={videoHref(next)} className="mt-6 inline-flex items-center gap-2 py-2 text-[14px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-forge)]">
                  <span className="border-b border-current pb-0.5">Next: {next.title}</span>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {transcript && (
        <section className="py-12 md:py-16" aria-labelledby="transcript">
          <Container size="narrow">
            <h2 id="transcript" className="text-[26px] md:text-[30px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)]">
              Transcript
            </h2>
            <p className="mt-2 mb-8 text-[14px] text-[color:var(--color-ink-faint)]">
              Generated from the video&apos;s narration and lightly edited for readability.
            </p>
            <div className="space-y-5">
              {transcript.paragraphs.map((p) => (
                <p key={p.start} className="grid grid-cols-[3.25rem_1fr] gap-3 text-[16px] leading-[1.7] text-[color:var(--color-ink-soft)]">
                  <span className={`${label} tracking-[0.06em] pt-1.5 text-[color:var(--color-ink-faint)]`}>{clock(p.start)}</span>
                  <span>{p.text}</span>
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-[color:var(--color-hairline-strong)] bg-white py-12 md:py-16">
        <Container>
          <h2 className="mb-8 text-[26px] md:text-[30px] font-[family-name:var(--font-display)] font-semibold tracking-tight text-[color:var(--color-ink)]">
            More explainers
          </h2>
          <VideoLibrary exclude={v.slug} />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
