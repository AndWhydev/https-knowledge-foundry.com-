import type { Metadata } from "next";
import { TopicHeader } from "@/components/solution/topic-header";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { VideoPlayer } from "@/components/video/video-player";
import { VideoLibrary } from "@/components/video/video-library";
import { clock, getVideo, videoHref, videos } from "@/lib/videos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/platform/see-it-work" },
  title: "See it work: explainer videos",
  description:
    "Ten short narrated explainers on what Knowledge Foundry does, from document to live program, human release control, and audit evidence. With transcripts.",
};

const steps = [
  {
    n: "01",
    title: "Start with the overview",
    desc: "About seven minutes. The whole operating cycle (produce, assure, evidence, measure) in one sitting.",
  },
  {
    n: "02",
    title: "Jump to the question you care about",
    desc: "Each explainer is scoped to a single concern: release control, evidence, learner experience, or production tempo. Watch what applies.",
  },
  {
    n: "03",
    title: "Bring your own material to a working session",
    desc: "The explainers describe the platform. The working session shows it on your content. 45 minutes. You keep whatever the Foundry produces.",
  },
];

const faq = [
  {
    q: "Are these recordings of the live product?",
    a: "No. They are short illustrated explainers with narration. They explain how the platform works and the outcomes it supports, in business terms rather than technical ones. To see the product itself operating, request a working session on your own material.",
  },
  {
    q: "Do we need to watch all of them?",
    a: "No. The platform overview covers the whole operating cycle in about seven minutes. Each other explainer is scoped to a single concern, and every one has a full transcript on its own page if you prefer to read.",
  },
  {
    q: "Are the explainers relevant if we run a heavily regulated environment?",
    a: "Yes. Assurance and release, Audit evidence pack, and Standards and Scaffold are written for regulated evaluation. They cover the review queue, human sign off before anything goes live, and the audit pack that records what a program teaches and who approved it.",
  },
  {
    q: "Can we get a demonstration on our own subject rather than the sample material?",
    a: "Yes, and this is the recommended next step. A working session runs 45 minutes on a real subject or program you own. You watch the Foundry interpret, structure, and produce on your material, and you keep the framework it creates. No obligation.",
  },
  {
    q: "What if we want a deeper technical walkthrough than these explainers cover?",
    a: "Technical evaluations covering the Semantic Compiler, cryptographic hashing protocols, traceability at block level, and deployment topology are conducted under a mutual non-disclosure agreement. Request a technical evaluation and the depth adjusts to the questions you need answered.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "The platform overview",
    desc: "The full shape of the system. Read the eight capabilities that the explainers describe.",
    href: "/platform",
  },
  {
    eyebrow: "Adjacent",
    title: "Framework Intelligence",
    desc: "The starting move in the operating cycle. Structure before wording, framework before content.",
    href: "/platform/framework-intelligence",
  },
  {
    eyebrow: "Technical",
    title: "Technical overview",
    desc: "For evaluators who want the architecture behind the demonstrations, not just the demonstrations.",
    href: "/platform/technical-overview",
  },
];

export default function SeeItWorkPage() {
  const featured = getVideo("platform-overview")!;
  const second = getVideo("before-and-after")!;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Knowledge Foundry explainer videos",
    itemListElement: videos.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}${videoHref(v)}`,
      name: `${v.title} (${clock(v.seconds)})`,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TopicHeader
        eyebrow="See It Work"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "See it work", href: "/platform/see-it-work" },
        ]}
        title={
          <>
            Knowledge Foundry,{" "}
            <span className="text-[color:var(--color-forge)]">on camera</span>.
          </>
        }
        lede="Ten short narrated explainers on what the platform does, focused on business outcomes rather than the technology under the hood. Start with the overview, or jump to the question you care about."
        secondaryCta={{ label: "Read the platform overview", href: "/platform" }}
        visual={
          <VideoPlayer
            src={featured.src}
            poster={featured.poster}
            title={featured.title}
            next={{ title: second.title, href: videoHref(second) }}
          />
        }
      />

      <ProseBlock
        eyebrow="How to use this page"
        title="Ten focused explainers. Each answers one concern."
      >
        <p>
          Each explainer takes one question a senior evaluator tends to ask
          (how a document becomes a live program, who decides what goes live,
          what evidence exists afterward) and answers it in a few minutes, in
          business terms. Every video has its own page with a full transcript.
        </p>
        <p>
          If you have fifteen minutes, watch the platform overview and Before
          and after. If you have an hour, pick the explainers that map to your
          evaluation criteria. If you have a subject of your own, skip ahead and
          book a working session. The demonstration you actually want is the
          one on your material.
        </p>
      </ProseBlock>

      <Section>
        <Container>
          <div className="mb-10 max-w-[720px]">
            <Eyebrow>All ten explainers</Eyebrow>
            <h2 className="text-display-2 mt-5">Overview, production, control, evidence, and depth.</h2>
            <p className="text-lede mt-5">
              {videos.length} videos, {Math.round(videos.reduce((t, v) => t + v.seconds, 0) / 60)} minutes in total. Each opens on its own page with the full transcript.
            </p>
          </div>
          <VideoLibrary />
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="How to watch this page"
        title="Overview. Deep dive. Working session."
        lede="Progressive disclosure. The explainers answer the general questions so the working session can focus on the specific ones."
        steps={steps}
        tone="canvas"
      />

      <ProseBlock
        eyebrow="What the explainers will not do"
        title="No fabricated case studies. No manufactured testimonials. No competitor teardowns."
      >
        <p>
          The explainers describe the platform&apos;s operating cycle. There are
          no client names, no invented metrics, and no side by side comparisons
          designed to make Knowledge Foundry look good by making something else
          look bad.
        </p>
        <p>
          For the specific behavior on your material (your subject, your
          standards, your delivery environment), the working session is the
          shorter path than any video could be.
        </p>
      </ProseBlock>

      <FAQ title="Common questions about the explainers." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring us your subject"
        title="Skip the videos. See the Foundry on your material."
        lede="A 45 minute working session on a subject or program you own. You watch the Foundry interpret, structure, and produce, and you keep the framework it creates."
      />
    </>
  );
}
