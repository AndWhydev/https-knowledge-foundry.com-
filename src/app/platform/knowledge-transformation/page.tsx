import type { Metadata } from "next";
import {
  BookOpen,
  Lightbulb,
  UserSquare2,
  Network,
  Layers,
  Recycle,
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
  title: "Knowledge Transformation — Turn raw knowledge into structured capability",
  description:
    "Documents, expertise, methodologies, and research become a coherent, governable knowledge system. Structure before content — regardless of where the knowledge originates.",
};

const capabilities = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Static sources",
    desc: "Policies, procedures, manuals, standards, and reports carry institutional value. The system maps and restructures them into active knowledge — not another PDF folder.",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Fluid sources",
    desc: "New methodologies, current research, and fresh initiatives are formalised into teachable structures without waiting for a documentation project.",
  },
  {
    icon: <UserSquare2 className="h-5 w-5" />,
    title: "Human sources",
    desc: "Subject-matter expertise that lives in individual memory is captured deliberately — protection against institutional amnesia at the individual level.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "Abstract sources",
    desc: "Capability models, competency frameworks, and industry standards become the deep foundation for downstream curriculum, evaluation, and validation.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "One source, multiple outcomes",
    desc: "A single structured framework produces multiple tailored programmes — educational, compliance, enablement, operational — without duplication of intent.",
  },
  {
    icon: <Recycle className="h-5 w-5" />,
    title: "Preservation over replacement",
    desc: "The objective is not to replace existing knowledge. It is to make knowledge significantly easier to understand, maintain, share, and apply.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ingest the inputs",
    desc: "Documents, expertise, methodologies, standards, or research are read as source material. Provenance is preserved from the first touch.",
  },
  {
    n: "02",
    title: "Establish understanding",
    desc: "The system constructs the structural blueprint — concepts, relationships, dependencies, outcomes, assessments, learning pathways.",
  },
  {
    n: "03",
    title: "Approve the framework",
    desc: "The structural asset is reviewed and approved by a named owner. Nothing generates downstream until the blueprint is signed off.",
  },
  {
    n: "04",
    title: "Produce the ecosystem",
    desc: "Learning assets, assessments, and evidence artefacts are generated to fit the approved structure — coherent by construction.",
  },
];

const faq = [
  {
    q: "What counts as a 'source' the system can transform?",
    a: "Almost any authored artefact and any structured elicitation of expertise. Policies, procedures, manuals, standards, research papers, SOPs, product documentation, and structured interviews with subject matter experts all qualify. If it can be read or transcribed, it can enter the transformation flow.",
  },
  {
    q: "We have knowledge that only exists in one person's head. Can that be transformed?",
    a: "Yes, and this is often the highest-value input. The platform supports structured elicitation — a guided capture flow that turns expert reasoning into concept nodes, decisions, and evidence. What was single-point-of-failure knowledge becomes a governed asset the organisation owns.",
  },
  {
    q: "How is this different from a knowledge base or a wiki?",
    a: "A wiki stores what someone wrote. Knowledge Transformation produces a structured object — concepts, relationships, dependencies, outcomes — that can generate multiple downstream artefacts consistently. The wiki is the storage; the transformed knowledge is the operating model.",
  },
  {
    q: "Can one framework serve compliance, education, and enablement at the same time?",
    a: "Yes. That is the point of separating structure from content. One approved framework can produce a compliance programme for auditors, an educational programme for learners, and an enablement programme for practitioners — each tailored, all traceable to the same source of truth.",
  },
  {
    q: "What happens when the source material updates?",
    a: "Change propagates through the framework, and the framework flags every downstream artefact that referenced the changed source. You choose what to regenerate, when. Drift is visible before it becomes damage.",
  },
];

const related = [
  {
    eyebrow: "Foundation",
    title: "Framework Intelligence",
    desc: "The framework is the object of record. Every transformation begins here.",
    href: "/platform/framework-intelligence",
  },
  {
    eyebrow: "Adjacent",
    title: "Enterprise learning modernisation",
    desc: "When transformation applies at scale across a legacy library, this is the operating model.",
    href: "/platform/enterprise-learning-modernisation",
  },
  {
    eyebrow: "Governance",
    title: "Knowledge governance",
    desc: "Ownership, cadence, and release control for the knowledge system you just built.",
    href: "/platform/knowledge-governance",
  },
];

export default function KnowledgeTransformationPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Capability · Knowledge Transformation"
        breadcrumb={[
          { label: "Platform", href: "/platform" },
          { label: "Knowledge Transformation", href: "/platform/knowledge-transformation" },
        ]}
        title={
          <>
            Turn knowledge into{" "}
            <span className="text-[color:var(--color-forge)]">capability</span>.
          </>
        }
        lede="Knowledge exists in many forms — documented policies, tacit expertise, emerging research, abstract competency models. Regardless of origin, it must be structured before it can be consistently taught, assessed, verified, and applied."
        secondaryCta={{ label: "See it work", href: "/platform/see-it-work" }}
        visual={<AnimatedEditorial src="editorial-transformation.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock
        eyebrow="Why this matters"
        title="Knowledge creates value when it can be understood, shared, and applied."
      >
        <p>
          Learning development does not begin with content. It begins with
          knowledge. Sometimes that knowledge is already documented safely inside
          formal materials. Other times it lives only in the working memory of a
          handful of specialists, or in the notes and diagrams that never made it
          into a document at all.
        </p>
        <p>
          Knowledge Foundry unifies both tracks. Whether the starting point is an
          operating model or an unwritten methodology, the destination is the
          same: <strong>a reliable, structured baseline</strong> the organisation
          can teach from, audit against, and continue to improve.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Where knowledge begins"
        title="Four source archetypes. One transformation discipline."
        lede="Static, fluid, human, or abstract — the platform treats each as a legitimate starting point for a structured knowledge asset."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="The transformation arc"
        title="Ingest. Understand. Approve. Produce."
        lede="Structure precedes content at every step. The framework is the asset. Content is an expression of that asset."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="A knowledge system, not a folder of documents."
      >
        <p>
          The output of transformation is not a library. It is a governable
          system: concepts, relationships, and outcomes on one axis; learning
          assets, assessments, and evidence on the other; provenance connecting
          the two.
        </p>
        <p>
          <strong>Duplication reduces</strong> because one structure serves many
          expressions. <strong>Expertise is preserved</strong> because tacit
          knowledge is captured as structure, not as prose.{" "}
          <strong>Consistency improves</strong> because every downstream artefact
          derives from the same source of truth.{" "}
          <strong>Development accelerates</strong> because the hard part —
          deciding what should exist — is done once, deliberately, up front.
        </p>
      </ProseBlock>

      <FAQ
        title="How Knowledge Transformation works, in detail."
        items={faq}
      />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring us a subject"
        title="See raw knowledge become structured capability."
        lede="Send us a document set, a methodology, or a subject that only lives in an expert's head. We spend 45 minutes with the Foundry on your material, and you leave with the transformed framework — yours to keep."
      />
    </>
  );
}
