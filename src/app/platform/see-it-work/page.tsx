import type { Metadata } from "next";
import {
  PlayCircle,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  LineChart,
  UserSquare2,
  SplitSquareHorizontal,
  Users,
  Ruler,
  Sparkles,
} from "lucide-react";
import { TopicHeader } from "@/components/solution/topic-header";
import { FeatureGrid } from "@/components/solution/feature-grid";
import { ProcessSteps } from "@/components/solution/process-steps";
import { FAQ } from "@/components/solution/faq";
import { CtaBand } from "@/components/solution/cta-band";
import { ProseBlock } from "@/components/solution/prose-block";
import { Related } from "@/components/solution/related";
import { AnimatedEditorial } from "@/components/motion/animated-editorial";

export const metadata: Metadata = {
  alternates: { canonical: "/platform/see-it-work" },
  title: "See it work: platform walkthroughs",
  description:
    "Short walkthroughs of what Knowledge Foundry does, anchored to business outcomes rather than the technology. Start with the overview or pick a question.",
};

const walkthroughs = [
  {
    icon: <PlayCircle className="h-5 w-5" />,
    title: "Platform overview",
    desc: "Six to nine minutes. What Knowledge Foundry does and the business outcomes it creates. Start here if you want the whole shape in one sitting.",
  },
  {
    icon: <SplitSquareHorizontal className="h-5 w-5" />,
    title: "Before and after",
    desc: "Two to three minutes. The shift in operating model, from content first to structure first, in under three minutes.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "From a document to live",
    desc: "Four to six minutes. An existing PDF, SOP, or slide deck becomes a governed live programme. Start to finish, on real material.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Assurance and release",
    desc: "Three to five minutes. The Review Queue, human approval, and the hard line between generation and publication. Humans still decide what goes live.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Audit evidence pack",
    desc: "Three to four minutes. What was taught, how it was governed, and how the evidence exports for external scrutiny.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "After go live",
    desc: "Three to four minutes. Cohort uptake, operational visibility, and the live portfolio view once programmes are in production.",
  },
  {
    icon: <UserSquare2 className="h-5 w-5" />,
    title: "Learner experience",
    desc: "Three to five minutes. What your people actually see and do. The delivery surface, not the authoring surface.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Guided versus fast",
    desc: "Two to three minutes. Two production tempos, both able to go live. When to choose which.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Role lenses",
    desc: "Four to five minutes. One Console, different front doors. How L&D, compliance, and subject matter experts see the same programme differently.",
  },
  {
    icon: <Ruler className="h-5 w-5" />,
    title: "Standards and scaffold",
    desc: "Two to three minutes. Optional depth for programmes aligned to a standard. Most programmes never need this. The ones that do, need it absolutely.",
  },
];

const steps = [
  {
    n: "01",
    title: "Start with the overview",
    desc: "Six to nine minutes. The whole shape (inputs, framework, generation, review, release) in one sitting.",
  },
  {
    n: "02",
    title: "Jump to the question you care about",
    desc: "Each walkthrough is scoped to a single concern: evidence, review, deployment, or learner experience. Watch what applies.",
  },
  {
    n: "03",
    title: "Bring your own material to a working session",
    desc: "The demonstrations are on generic content. The working session is on yours. 45 minutes. You keep whatever the Foundry produces.",
  },
];

const faq = [
  {
    q: "Are these live product tours or edited marketing videos?",
    a: "Live product walkthroughs. Each clip shows the actual platform operating on real material, not a designed mockup, not a re-enactment. Some editing is applied to remove waiting time and to caption specific screen elements. The system behaviour is unedited.",
  },
  {
    q: "Do we need to watch all of them?",
    a: "No. The Platform Overview covers the whole system in one sitting. Each other walkthrough is scoped to a single concern: review, evidence, learner experience, or deployment shape. Watch the ones that map to your evaluation criteria and skip the rest.",
  },
  {
    q: "Are the walkthroughs relevant if we run a heavily regulated environment?",
    a: "Yes. The Assurance and Release, Audit Evidence Pack, and Standards and Scaffold walkthroughs are specifically for regulated evaluation. They cover the Review Queue, Foundry Hash, Master Integrity Root, and the exportable evidence trail.",
  },
  {
    q: "Can we get a demonstration on our own subject rather than the sample material?",
    a: "Yes, and this is the recommended next step. A working session runs 45 minutes on a real subject or programme you own. You watch the Foundry interpret, structure, and produce on your material, and you keep the framework it creates. No obligation.",
  },
  {
    q: "What if we want a deeper technical walkthrough than these clips cover?",
    a: "Technical evaluations covering the Semantic Compiler, cryptographic hashing protocols, traceability at block level, and deployment topology are conducted under a mutual non-disclosure agreement. Request a technical evaluation and the depth adjusts to the questions you need answered.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "The platform overview",
    desc: "The full shape of the system. Read the eight capabilities that the walkthroughs demonstrate.",
    href: "/platform",
  },
  {
    eyebrow: "Adjacent",
    title: "Framework Intelligence",
    desc: "The starting move in each walkthrough. Structure before wording, framework before content.",
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
  return (
    <>
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
        lede="Short walkthroughs of what the platform does, focused on business outcomes rather than the technology under the hood. Start with the overview, or jump to the question you care about."
        secondaryCta={{ label: "Read the platform overview", href: "/platform" }}
        visual={<AnimatedEditorial src="editorial-hero.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="How to use this page"
        title="Ten focused walkthroughs. Each answers one concern."
      >
        <p>
          Marketing videos describe what a product wants to be. These walkthroughs
          show what Knowledge Foundry actually does, running on real material,
          producing real artefacts, and taking real review decisions. Each clip
          is scoped to a single question a senior evaluator tends to ask.
        </p>
        <p>
          If you have fifteen minutes, watch the Platform Overview and Before and
          After. If you have an hour, pick the walkthroughs that map to your
          evaluation criteria. If you have a subject of your own, skip the
          videos and book a working session. The demonstration you actually
          want is the one on your material.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Ten walkthroughs"
        title="Overview, evidence, learner experience, deployment, governance."
        lede="Each walkthrough is deliberately short. Depth is available on request under a mutual non-disclosure agreement."
        features={walkthroughs}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How to watch this page"
        title="Overview. Deep dive. Working session."
        lede="Progressive disclosure. The walkthroughs answer the general questions so the working session can focus on the specific ones."
        steps={steps}
        tone="canvas"
      />

      <ProseBlock
        eyebrow="What the walkthroughs will not do"
        title="No fabricated case studies. No manufactured testimonials. No competitor teardowns."
      >
        <p>
          The walkthroughs show the platform. They do not show a story about the
          platform. There are no client names, no invented metrics, and no
          side by side comparisons designed to make Knowledge Foundry look good
          by making something else look bad. If you want to know how the system
          behaves, watch it behave.
        </p>
        <p>
          For the specific behaviour on your material (your subject, your
          standards, your delivery environment), the working session is the
          shorter path than any video could be.
        </p>
      </ProseBlock>

      <FAQ title="Common questions about the walkthroughs." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring us your subject"
        title="Skip the videos. See the Foundry on your material."
        lede="A 45 minute working session on a subject or programme you own. You watch the Foundry interpret, structure, and produce, and you keep the framework it creates."
      />
    </>
  );
}
