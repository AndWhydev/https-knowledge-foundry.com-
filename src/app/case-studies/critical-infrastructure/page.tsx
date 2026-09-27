import type { Metadata } from "next";
import {
  CaseStudy,
  Chapter,
  OutcomeStats,
  CaseQuote,
  type CaseChapter,
} from "@/components/layouts/case-narrative";

export const metadata: Metadata = {
  title: "Case study. Safety-critical operations training at a critical infrastructure operator",
  description:
    "After a post-incident review named the training, an Australian critical infrastructure operator rebuilt verification from the framework its safety case had always implied.",
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
      sector="Critical infrastructure"
      title="When the safety case assumed behaviours the training did not teach."
      dek="An Australian critical infrastructure operator replaced pass-and-click assessment with a hybrid verification programme drawn from the framework its safety case already implied."
      chapters={chapters}
    >
      <Chapter n="01" label={chapters[0].label} id="situation" title="A post-incident review that named the training.">
        <p>
          The trigger was not a fine and it was not a regulator. It was an incident, and the
          post-incident review that followed. The review found no single cause, as reviews of this
          kind rarely do. It found a chain of small deviations that, individually, would have been
          considered acceptable practice by the crews involved. Collectively, they were not.
        </p>
        <p>
          The review&rsquo;s most uncomfortable finding was structural. The safety case — the
          document that justified the site&rsquo;s licence to operate — assumed specific operator
          behaviours. Micro-decisions at defined points in the task. Those behaviours were not
          taught anywhere in the training programme. Operators had learned the procedure and
          passed the assessment. The assessment had never been designed to verify the behaviours
          the safety case relied on.
        </p>
        <p>
          The operator&rsquo;s training was not deficient in the ordinary sense. It was deficient
          in the sense that it was not connected to the framework the safety case implied.
          Rewriting the training against the same missing structure would have produced the same
          disconnect, more efficiently.
        </p>
      </Chapter>

      <Chapter n="02" label={chapters[1].label} id="framework" title="Draw the framework the safety case already assumes." tone="warm">
        <p>
          Every safety case implies a competency framework. It names the behaviours that the risk
          controls depend on. Historically, that implied framework had never been made explicit on
          this site. The Foundry ingested the safety case, task risk assessments, operational
          procedures, and the ISO 45001 management system elements that governed them, and
          proposed the competency framework those documents together implied.
        </p>
        <p>
          Coverage of the existing training was measured against that framework. Some nodes were
          fully covered. Some were partially covered. Several — including two of the precursor
          behaviours the post-incident review had specifically named — were not covered at all.
          The gap was not a training gap in isolation. It was a gap between the safety case and
          the training system that was supposed to enact it.
        </p>

        <CaseQuote attribution="General manager, safety and assurance, Australian critical infrastructure operator">
          We had been assuring ourselves against training. We should have been assuring ourselves
          against the framework the safety case relies on. Once that was explicit, the gap was
          undeniable.
        </CaseQuote>

        <p>
          Verification was rebuilt from the framework outwards. The programme became hybrid by
          design: instructed content, situational-judgement scenarios that exercised the precursor
          behaviours specifically, observed performance in the field, and structured supervisor
          sign-off. Every verification event carried a Foundry Hash back to the framework node and
          the safety case clause behind it. Every sign-off was auditable to the risk control it
          served.
        </p>
      </Chapter>

      <Chapter n="03" label={chapters[2].label} id="outcome" title="Verification that moved behaviour, and the data to see it." tone="ink">
        <p>
          Six months after rollout, the operator reviewed hybrid verification pass rates alongside
          incident precursor rates in operations. Pass rates on the more stringent hybrid
          programme rose above the pass rate the previous pass-and-click assessment had recorded
          on the same population, driven by repeat exposure to the situational-judgement material.
          Independently, the incident precursor rate for the two behaviours specifically targeted
          by the redesigned verification fell over the follow-up window.
        </p>
        <p>
          The more important shift, according to the safety function, was epistemic. For the first
          time, the training system produced data that could be read against the safety case. When
          behaviour drifted, the framework showed where. When behaviour improved, the framework
          showed why.
        </p>

        <OutcomeStats
          items={[
            { value: 100, suffix: "%", label: "of safety-case-implied competencies mapped to explicit framework nodes" },
            { value: 2, label: "precursor behaviours from the post-incident review closed under hybrid verification" },
            { value: 6, suffix: " mo", label: "post-implementation review confirming precursor rate decline" },
          ]}
          footnote="Illustrative outcomes drawn from typical engagement patterns; specific programme figures shared under NDA on request."
        />
      </Chapter>

      <Chapter n="04" label={chapters[3].label} id="meaning" title="A safety case without an explicit framework is a promise without a witness.">
        <p>
          Every operator with a safety case is already carrying a competency framework. It is
          either explicit — auditable, traceable, and the source of verification — or implicit,
          hidden in the assumptions of the risk assessment. Implicit frameworks fail silently. The
          failure is not visible until a post-incident review makes it visible, and by then the
          question is no longer whether the training worked. It is whether the safety case was
          ever enactable.
        </p>
        <p>
          Making the framework explicit is not a documentation exercise. It is the mechanism by
          which a safety case becomes something an operator can defend, measure, and improve. For
          any Australian operator under ISO 45001 and an accepted safety case, this is not a
          training question. It is an assurance question.
        </p>
      </Chapter>
    </CaseStudy>
  );
}
