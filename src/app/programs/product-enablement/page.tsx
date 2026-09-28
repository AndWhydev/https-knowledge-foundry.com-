import type { Metadata } from "next";
import {
  Boxes,
  Workflow,
  AlertTriangle,
  UserCog,
  BookOpenCheck,
  Rocket,
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
  alternates: { canonical: "/programs/product-enablement" },
  title: "Product enablement training",
  description:
    "Product documentation transformed into structured learning, with capabilities, dependencies and failure modes taught in the order the product requires.",
};

const capabilities = [
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Capability extraction",
    desc: "Core product capabilities, feature dependencies, and configuration surfaces are extracted from your documentation and modelled as a structured object, rather than left implicit in a manual.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Mapping critical workflows",
    desc: "The sequences that matter (onboarding, configuration, integration, escalation) are identified and taught explicitly, not left to the user to reconstruct from a knowledge base.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Misuse prevention",
    desc: "Common failure modes, operations sensitive to risk, and pathways prone to error are surfaced during framework construction and reinforced with proportional instructional emphasis.",
  },
  {
    icon: <UserCog className="h-5 w-5" />,
    title: "Variants tailored to role",
    desc: "One approved framework produces adapted programmes for internal engineers, implementation specialists, sales engineers, customer success, and end users, without diverging from source truth.",
  },
  {
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Terminology faithful to source",
    desc: "Preserved terminology, imagery aware of context, and traceable lineage mean the programme cannot drift from the product it teaches. When the product changes, the programme knows.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Regeneration aligned to release",
    desc: "When a feature ships, the framework diffs against the new documentation and regenerates only the affected blocks. No full rewrites. No stale onboarding.",
  },
];

const steps = [
  {
    n: "01",
    title: "Interpret documentation",
    desc: "User manuals, release notes, technical documentation, and knowledge base articles are ingested and read for capabilities, dependencies, and failure modes.",
  },
  {
    n: "02",
    title: "Construct the framework",
    desc: "A structured enablement model is proposed: capabilities, workflows, operations sensitive to risk, role tracks, and validation checkpoints. Reviewable before generation.",
  },
  {
    n: "03",
    title: "Generate role tracks",
    desc: "Instruction is produced per audience (engineer, implementer, seller, customer, partner) from the same framework. Depth and vocabulary adapt. Source truth does not.",
  },
  {
    n: "04",
    title: "Version with the product",
    desc: "When releases ship, the system parses documentation again, diffs against the framework, and surfaces exactly which blocks need regeneration. Enablement stays current.",
  },
];

const faq = [
  {
    q: "How is this different from a knowledge base or a documentation portal?",
    a: "A knowledge base assumes the user knows what to look for. The Foundry starts one level up. It extracts, from the same source documentation, the structure the user must acquire to use the product correctly, and generates guided instruction to build that structure. The knowledge base remains a reference. The enablement programme is the path.",
  },
  {
    q: "Can we generate distinct programmes for internal teams and external customers?",
    a: "Yes. One approved framework can produce an internal engineering programme, an implementation partner track, a sales engineer briefing, and an end user onboarding, each with depth appropriate to the role. The underlying capability model stays identical. The instructional expression adapts.",
  },
  {
    q: "What happens when the product ships a breaking change?",
    a: "The system parses your updated documentation again, compares it against the approved framework, and surfaces each capability, workflow, and dependency affected. The framework owner approves the diff, and the platform regenerates only the affected instructional blocks. Prior versions remain accessible for cohorts still on older releases.",
  },
  {
    q: "Do you replace our technical writers?",
    a: "No. Technical writers still own the source documentation. What changes is what happens downstream of it. Instead of writing a separate onboarding course, a separate certification programme, and separate partner materials by hand, they maintain the source and the Foundry produces the enablement outputs against it.",
  },
  {
    q: "Can this support hardware and industrial systems, or is it software only?",
    a: "It is agnostic to capability. Wherever the product has documented operations, configurable states, and failure modes (hardware, industrial systems, medical devices, or software) the same framework discipline applies.",
  },
];

const related = [
  {
    eyebrow: "Adjacent",
    title: "Operational procedures",
    desc: "Where the product produces a workflow the user must execute repeatedly, operational procedures pair with product enablement.",
    href: "/programs/operational-procedures",
  },
  {
    eyebrow: "Foundation",
    title: "Knowledge transformation",
    desc: "The broader arc from scattered documentation into a coherent, versioned knowledge system that outlives any single release.",
    href: "/platform/knowledge-transformation",
  },
  {
    eyebrow: "Sector",
    title: "Financial services",
    desc: "Product knowledge for relationship managers under RG146 licensing. Evidenced against the standard.",
    href: "/industries/financial-services",
  },
];

export default function ProductEnablementPage() {
  return (
    <>
      <TopicHeader
        eyebrow="Program · Product Enablement"
        breadcrumb={[
          { label: "Programs", href: "/programs" },
          { label: "Product enablement", href: "/programs/product-enablement" },
        ]}
        title={
          <>
            Structure governs product <span className="text-[color:var(--color-forge)]">mastery</span>.
          </>
        }
        lede="The Foundry transforms product documentation into structured learning systems aligned to correct use, safe operation, and measurable proficiency. Documentation informs. Structure enables."
        secondaryCta={{ label: "See the platform", href: "/platform" }}
        visual={<AnimatedEditorial src="editorial-modernisation.png" parallax={20} float={false} sizes="(min-width: 1024px) 520px, 90vw" />}
      />

      <ProseBlock eyebrow="Why this matters" title="Documentation does not guarantee correct use.">
        <p>
          Most products are supported by user manuals, release notes, and knowledge bases.
          Artefacts written for reference, not for progression. Enablement driven by manuals
          produces information overload, fragmented understanding, workflow confusion, and
          increased liability when misconfiguration causes harm. The failure is not documentation.
          The failure is the assumption that documentation, in itself, produces capability.
        </p>
        <p>
          The Foundry treats the product as a structured object (capabilities, dependencies,
          failure modes) and generates instruction that builds the mental model the user needs
          to operate the product safely and correctly. Documentation remains the reference.
          Enablement becomes the path.
        </p>
      </ProseBlock>

      <FeatureGrid
        eyebrow="Six moves inside product enablement"
        title="From documentation to structured mastery."
        features={capabilities}
        columns={3}
      />

      <ProcessSteps
        eyebrow="How it runs"
        title="Interpret. Structure. Generate. Version."
        lede="Enablement is not a one time programme. It is a system that stays aligned to the product as it ships. When the product changes, the enablement knows."
        steps={steps}
      />

      <ProseBlock
        eyebrow="What you get out"
        title="Faster onboarding. Fewer support tickets. Correct configuration."
      >
        <p>
          Organisations gain faster onboarding, reduced configuration error, lower support
          burden, higher feature adoption, and a scalable enablement architecture that does not
          rebuild itself with each release. Users gain clear workflow understanding, structured
          feature progression, and confidence in configuration.
        </p>
        <p>
          The outcome is not exposure to product features. The outcome is correct, confident
          product use. Measurable at the role level and evidenced against the source documentation
          it derives from.
        </p>
      </ProseBlock>

      <FAQ title="How product enablement programmes work, in detail." items={faq} />
      <Related items={related} />
      <CtaBand
        eyebrow="Bring your product"
        title="See your documentation become a programme."
        lede="Send us your product documentation, a manual, or a release brief. In 45 minutes with the Foundry on your material, you leave with the enablement framework it produces."
        ctaLabel="Start with your product documentation"
      />
    </>
  );
}
