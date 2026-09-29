import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { chapters, clock, videoHref, videos } from "@/lib/videos";

const label = "text-[11px] font-medium uppercase tracking-[0.14em] font-[family-name:var(--font-jetbrains)]";

/** All explainers grouped by chapter; each card opens the video's watch page. */
export function VideoLibrary({ exclude }: { exclude?: string }) {
  return (
    <div className="space-y-12">
      {chapters.map((chapter) => {
        const list = videos.filter((v) => v.chapter === chapter && v.slug !== exclude);
        if (list.length === 0) return null;
        return (
          <section key={chapter} aria-labelledby={`chapter-${chapter}`}>
            <h3 id={`chapter-${chapter}`} className={`${label} text-[color:var(--color-forge)] mb-4`}>
              {chapter}
            </h3>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((v) => (
                <li key={v.slug}>
                  <Link href={videoHref(v)} className="group block">
                    <div className="relative aspect-video overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--color-hairline)] bg-[color:var(--color-canvas-warm)]">
                      <Image
                        src={v.poster}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-ink)]/80 text-white transition-colors group-hover:bg-[color:var(--color-forge)]">
                          <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" aria-hidden />
                        </span>
                      </span>
                      <span className={`absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-white ${label} tracking-[0.06em]`}>
                        {clock(v.seconds)}
                      </span>
                    </div>
                    <div className="mt-3 text-[17px] font-semibold tracking-tight font-[family-name:var(--font-display)] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-forge)]">
                      {v.title}
                    </div>
                    <p className="mt-1 text-[14.5px] leading-[1.55] text-[color:var(--color-ink-muted)]">{v.tagline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
