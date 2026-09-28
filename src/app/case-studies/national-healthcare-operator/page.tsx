import type { Metadata } from "next";
import {
  CaseStudy,
  Chapter,
  OutcomeStats,
  CaseQuote,
  type CaseChapter,
} from "@/components/layouts/case-narrative";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies/national-healthcare-operator" },
  title: "Case study: national hospital operator",
  description:
    "A national private hospital operator consolidated 400+ SOPs across 30+ sites into one governed framework, with per site variance modeled explicitly.",
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
      sector="Healthcare"
      title="Four hundred SOPs, thirty sites, one framework."
      dek="A national private hospital operator stopped treating drift as a documentation problem and started treating it as a structural one. Legitimate variance was preserved. Accidental variance was named."
      chapters={chapters}
    >
      <Chapter n="01" label={chapters[0].label} id="situation" title="Each site quietly authoring its own procedure library.">
        <p>
          The operator, a national private hospital group of more than thirty sites, ran over
          four hundred documented clinical procedures. Nominally, procedures were shared across
          the network. In practice, each site had been quietly maintaining local variants for
          years. Some variance was legitimate: an equipment set, a jurisdictional rule, a patient
          population characteristic. Most variance was accident, or the fingerprint of a clinical
          lead who had since left.
        </p>
        <p>
          Compounding the problem, credentialing evidence lived somewhere else entirely. Clinician
          credentials were recorded in a mix of PDF, spreadsheet, and legacy HR platform. When a
          credentialing audit under the NSQHS Standards asked which clinicians were credentialed
          to perform which procedure at which site on which date, the answer required
          reconstruction. Reconstruction typically took weeks. Occasionally the answer was simply
          unavailable.
        </p>
        <p>
          The operator did not need faster reconstruction. It needed a system in which the
          question was answerable by design. That was the mandate.
        </p>
      </Chapter>

      <Chapter n="02" label={chapters[1].label} id="framework" title="Consolidate the intent. Model the variance." tone="warm">
        <p>
          The engagement did not begin with a plan to write four hundred new procedures. It began
          with a harder question: what is the canonical procedure the network intends to run.
          Canonical intent was extracted from clinical governance policy, the NSQHS Standards, and
          the operator&rsquo;s own procedural authorities into a framework the clinical governance
          committee could review as a single object rather than as four hundred separate documents.
        </p>
        <p>
          Once the canonical framework was approved, the interesting work began. Each site&rsquo;s
          local variant was compared to the framework. Each deviation was classified as legitimate
          variance (kept, with an explicit justification node attached), obsolete variance
          (removed), or drift (regenerated to match). For the first time, the operator could
          answer whether two sites were doing the same procedure differently on purpose or by
          accident.
        </p>

        <CaseQuote attribution="Chief clinical governance officer, national private hospital operator">
          We stopped debating which site had the right SOP. We started debating whether the
          variance was justified. That is a completely different meeting.
        </CaseQuote>

        <p>
          Credentialing was then attached to the framework at the procedure level. A credential
          requirement became an attribute of the procedure, not a document filed elsewhere. Each
          verification event (a credentialing decision, a competency sign off, a recredentialing
          date) was traceable back to the specific framework node it authorized, and the NSQHS
          standard that made it necessary.
        </p>
      </Chapter>

      <Chapter n="03" label={chapters[2].label} id="outcome" title="Consistency without erasure. Audit in hours." tone="ink">
        <p>
          The clinical governance committee gained something the previous state had made
          impossible. It could see, at a glance, where the network agreed with itself, where it
          disagreed, and, critically, why. Consistency was achieved without flattening the
          legitimate reasons sites differ.
        </p>
        <p>
          The credentialing audit that had previously required three weeks of manual
          reconstruction became a report the platform produced in hours. The auditors received a
          coverage matrix, a credential state per clinician at date of procedure, and a full
          provenance chain from procedure to standard to sign off.
        </p>

        <OutcomeStats
          items={[
            { value: 30, suffix: "+", label: "sites brought to framework parity with legitimate variance preserved" },
            { value: 400, suffix: "+", label: "SOPs regenerated against a single canonical framework" },
            { value: 4, suffix: " hrs", label: "to produce a credentialing audit pack (previously about three weeks)" },
          ]}
          footnote="Illustrative outcomes drawn from typical engagement patterns. Specific program figures shared under NDA on request."
        />
      </Chapter>

      <Chapter n="04" label={chapters[3].label} id="meaning" title="Variance is not the enemy. Unnamed variance is.">
        <p>
          Clinical operators running many sites tend to run one of two failure modes. Either they enforce
          national consistency and quietly override the legitimate reasons a particular site
          operates differently, or they let sites author locally and lose the ability to defend the
          network as a network. The approach that begins with the framework removes the false choice.
          Sites keep the variance that is clinically justified. The network loses only the drift it
          had never intended.
        </p>
        <p>
          For any operator carrying NSQHS credentialing exposure across a distributed network,
          the question is not how quickly the next audit can be assembled. It is whether the audit
          is something that has to be assembled at all.
        </p>
      </Chapter>
    </CaseStudy>
  );
}
