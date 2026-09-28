import type { Metadata } from "next";
import {
  CaseStudy,
  Chapter,
  OutcomeStats,
  CaseQuote,
  type CaseChapter,
} from "@/components/layouts/case-narrative";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies/regulated-financial-services" },
  title: "Case study: tier 1 bank RG146 refresh",
  description:
    "How a tier 1 Australian bank rebuilt its RG146 and AFSL licensee training on a governed framework after an APRA thematic review flagged evidence gaps.",
};

const chapters: CaseChapter[] = [
  { n: "01", label: "The situation", id: "situation" },
  { n: "02", label: "The framework work", id: "framework" },
  { n: "03", label: "The outcome", id: "outcome" },
  { n: "04", label: "What it means", id: "meaning" },
];

export default function Page() {
  return (
    <CaseStudy
      sector="Financial services"
      title="A tier 1 bank rebuilt its RG146 program from the framework up."
      dek="After an APRA thematic review flagged evidence gaps, a tier 1 Australian institution stopped rewriting modules and started rewriting the underlying structure. The library came second."
      chapters={chapters}
    >
      <Chapter n="01" label={chapters[0].label} id="situation" title="A library that had accumulated like sediment.">
        <p>
          The institution, a tier 1 Australian bank with a nationwide network of authorized
          representatives, had spent close to seven years maintaining its RG146 and AFSL licensee
          training through successive cohorts of external contractors. Each cohort inherited the
          last, extended what was there, and moved on. No cohort had ever authored a framework.
          There was no framework. There was a library of modules that had accumulated the way
          sediment accumulates.
        </p>
        <p>
          The drift was invisible until it was not. An APRA thematic review on adviser conduct and
          licensee obligations asked the questions that a structured program is built to answer.
          How do you know your training covers this particular knowledge requirement. Where is the
          evidence that this cohort met that obligation. Which module was updated after this
          regulatory change, and when. Answers took weeks to assemble. In several cases they could
          not be assembled at all.
        </p>
        <p>
          The finding was not a fine. It was a request for a remediation plan, delivered against a
          calendar. That request became the mandate for a different kind of platform, and, as it
          turned out, a different way of thinking about the program entirely.
        </p>
        <p>
          The temptation, presented with a finding of coverage gaps, is to write more content faster.
          The head of licensee training resisted it. Faster authoring against an unnamed structure
          would produce the same problem in a shorter cycle.
        </p>
      </Chapter>

      <Chapter n="02" label={chapters[1].label} id="framework" title="Structure the subject before rewriting a line." tone="warm">
        <p>
          The engagement began by ignoring the existing library entirely. The Foundry ingested the
          sources that actually governed the program: ASIC RG146 knowledge requirements, the
          licensee&rsquo;s own AFSL obligations, product disclosure requirements, and the internal
          conduct policy that sat above all of it. From those sources it proposed a framework of
          concept nodes, prerequisite chains, and assessment definitions. A single object the
          licensee&rsquo;s subject matter experts could review and revise.
        </p>
        <p>
          Three working sessions later, the framework was signed. Nothing downstream of that
          signature was permitted to run against an unapproved structure. This is the discipline the
          platform is built around, where the framework comes first. Structure governs content, not
          the other way around.
        </p>

        <CaseQuote attribution="Head of licensee training, tier 1 Australian bank">
          For the first time we could name what was missing in the regulator&rsquo;s own language,
          rather than in ours. That single change reset the conversation with APRA.
        </CaseQuote>

        <p>
          Only then did the platform look at the seven year library. The approved framework was
          compared against each existing module. Coverage was quantified. Where the framework was
          met, where it was met twice under different names, and where a clause implied coverage
          that had never been written. Regeneration then proceeded module by module under a
          two reviewer approval gate, with each regenerated element carrying a Foundry Hash back to
          the framework node it satisfied and to the source clause behind it. Each artifact was
          traceable, by design, to the obligation that made it necessary.
        </p>
      </Chapter>

      <Chapter n="03" label={chapters[2].label} id="outcome" title="Cycle time down. Coverage complete. Evidence on tap." tone="ink">
        <p>
          The program completed regeneration inside the remediation window agreed with the
          regulator, without expanding the authoring team. Author cycle time fell against the
          previous contractor baseline. Requirement coverage against the approved framework reached
          parity before regeneration was declared complete. Evidence packs that had previously
          been assembled by hand in the weeks before an audit became an artifact produced at
          generation time.
        </p>
        <p>
          More consequentially, the institution now owned a framework object. Contractor rotation
          stopped being an integrity risk, because contractors were no longer the source of truth.
          The framework was.
        </p>

        <OutcomeStats
          items={[
            { value: 40, suffix: "%", label: "reduction in author cycle time against the contractor baseline" },
            { value: 100, suffix: "%", label: "framework coverage of the approved RG146 requirement set" },
            { value: 4, suffix: " hrs", label: "to generate an evidence pack ready for the regulator (previously weeks)" },
          ]}
          footnote="Illustrative outcomes drawn from typical engagement patterns. Specific program figures shared under NDA on request."
        />
      </Chapter>

      <Chapter n="04" label={chapters[3].label} id="meaning" title="What this shows about remediation that begins with the framework.">
        <p>
          The instinct after a thematic finding is to write faster. The instinct is wrong. Coverage
          gaps and evidence gaps are almost never authoring problems. They are structural problems
          that surface at the authoring layer. Writing more content against an unnamed framework
          produces the same gap on a shorter cycle.
        </p>
        <p>
          The alternative (build the framework from source, sign it, then regenerate against it)
          is slower for the first fortnight and materially faster for every fortnight after. It also
          produces something the previous state could not: a program whose evidence is a report,
          not a project.
        </p>
        <p>
          Any Australian licensee sitting inside a remediation calendar, or wanting to avoid the
          next one, is looking at the same question. Not who authored the last module. Who authors
          the framework the modules answer to.
        </p>
      </Chapter>
    </CaseStudy>
  );
}
