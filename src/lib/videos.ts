import fs from "node:fs";
import path from "node:path";

/**
 * The "See it work" explainer videos. Files live in Vercel Blob (store
 * knowledge-foundry-videos); transcripts are generated from the audio and
 * stored in src/content/videos/<slug>.json.
 */

export type Chapter = "Start here" | "See it work" | "Trust and control" | "Prove value" | "Go deeper";

export const chapters: Chapter[] = ["Start here", "See it work", "Trust and control", "Prove value", "Go deeper"];

export type Video = {
  slug: string;
  chapter: Chapter;
  title: string;
  /** One line, from the original page. */
  tagline: string;
  /** 40 to 70 word factual summary of what the video covers. */
  summary: string;
  /** Meta description, 120 to 158 characters. */
  description: string;
  seconds: number;
  src: string;
  poster: string;
  /** Date the file was first published on knowledge-foundry.com. */
  uploadDate: string;
};

const BLOB = "https://rqcietw1qdjalibj.public.blob.vercel-storage.com/videos/see-it-work";

export const videos: Video[] = [
  {
    slug: "platform-overview",
    chapter: "Start here",
    title: "Platform overview",
    tagline: "What Knowledge Foundry does, and the business outcomes it creates.",
    summary: "Explains Knowledge Foundry as an operating cycle for turning knowledge trapped in experts and documents into structured learning. Covers its four pillars: producing programs from a brief and a source document, assuring them through human review and sign-off, evidencing them with an audit pack, and measuring cohort uptake and activity after publish.",
    description: "An overview of Knowledge Foundry: how it produces, assures, evidences, and measures learning built from your documents. Includes the full video transcript.",
    seconds: 427,
    src: `${BLOB}/01-knowledge-foundry-LuwNNyXP3I0vPZAbkUxe0xEfNR7aRA.mp4`,
    poster: `${BLOB}/posters/01-knowledge-foundry-yNjV3IPn1XIEUY5Q3YtB0lPUUQwtcv.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "before-and-after",
    chapter: "Start here",
    title: "Before and after",
    tagline: "The shift in operating model, in three and a half minutes.",
    summary: "Compares knowledge transfer before and after Knowledge Foundry. Describes the old model of expert dependency, static files, and informal approvals with little visibility, then the new model: producing programs from existing documents, a real review path, evidence kept with each program, and cohort metrics, all managed as a visible portfolio.",
    description: "How Knowledge Foundry shifts knowledge transfer from person risk and scattered files to a managed, evidenced cycle. Watch it or read the full transcript.",
    seconds: 209,
    src: `${BLOB}/07-operating-model-shift-Kp2ucAoOZpWmLvT7CFimiY6a9LYKbb.mp4`,
    poster: `${BLOB}/posters/07-operating-model-shift-XwG0rRV6k0s2MXqMcBMXp7WbL456QD.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "from-a-document-to-live",
    chapter: "See it work",
    title: "From a document to live",
    tagline: "Turn an existing PDF, SOP, or deck into a governed live program.",
    summary: "Shows how a single existing document plus a brief becomes a governed, live learning program in Knowledge Foundry. Explains the fast and guided production paths, why neither auto-publishes, the four assurance steps from review to executive sign-off, and how programs move from building to awaiting publish to live on the home screen.",
    description: "See how one existing document and a brief become a governed, live learning program in Knowledge Foundry, with human review before release. Full transcript.",
    seconds: 324,
    src: `${BLOB}/02-document-to-live-program-GdKNs88V3LbKdUogyX8MeCYHV7JUPc.mp4`,
    poster: `${BLOB}/posters/02-document-to-live-program-tWzOz2oCP4LYGVI2JwsoITbQTfJjs9.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "assurance-and-release",
    chapter: "Trust and control",
    title: "Assurance and release",
    tagline: "Humans still decide what goes live.",
    summary: "Explains how Knowledge Foundry keeps humans in control of release while AI speeds up drafting. Covers the assurance queue and its statuses, why fast and guided programs face the same review, why nothing auto-publishes, how targeted edits loop back into review, and a sample path from draft to executive sign-off to catalog.",
    description: "How Knowledge Foundry keeps humans in charge of what goes live: the assurance queue, review, targeted edits, and executive sign-off. Read the full transcript.",
    seconds: 301,
    src: `${BLOB}/03-assurance-without-losing-speed-cR24GVGxuSvuIBz7DVQm1SFrVfnFUn.mp4`,
    poster: `${BLOB}/posters/03-assurance-without-losing-speed-6HI61x6wwigbVwTpjb7XRcsLzLq1HF.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "audit-evidence-pack",
    chapter: "Trust and control",
    title: "Audit evidence pack",
    tagline: "Explain what was taught and how it was governed, and export it.",
    summary: "Explains the Knowledge Foundry audit pack and how it answers questions asked months after release. Covers learning design evidence, such as structure and how outcomes connect to assessment logic, and governance evidence, such as integrity checks and change history. Also shows exporting a full audit pack or a focused learning design pack.",
    description: "How the Knowledge Foundry audit pack records what a program taught and how it was governed, and how to export it. Watch the video or read the full transcript.",
    seconds: 243,
    src: `${BLOB}/04-audit-evidence-pack-yzrTZlp6AvjCa0xCNIkISfX7iZ5DDW.mp4`,
    poster: `${BLOB}/posters/04-audit-evidence-pack-f0a1f2eI5wUPWe8VGpDsHf1HfXz9mY.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "after-go-live",
    chapter: "Prove value",
    title: "After go-live",
    tagline: "Cohort uptake, operational visibility, and the live portfolio.",
    summary: "Covers what happens after a Knowledge Foundry program goes live. Explains the two Console surfaces: learning, which tracks uptake, cohort progress, learner outcomes, and exports, and oversight, which shows operational activity through enterprise and by person lenses. Also shows how live programs appear on the home screen alongside work still being built.",
    description: "After a program goes live in Knowledge Foundry: cohort uptake in learning, activity in oversight, and the live portfolio. Full transcript included.",
    seconds: 277,
    src: `${BLOB}/05-foundry-after-go-live-lKbicViDwZR2k5GyDP6emt7UTjumZQ.mp4`,
    poster: `${BLOB}/posters/05-foundry-after-go-live-YEqsSHYTD96x1DS9NHpHpTVxQGjj1d.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "learner-experience",
    chapter: "Prove value",
    title: "Learner experience",
    tagline: "What your people actually see and do.",
    summary: "Walks through what learners see and do in a live Knowledge Foundry program. Covers finding and starting courses, structured chapters and lessons built from content blocks, chapter quizzes and reflections, Learner Assist options such as summarize, translate, and listen, and continuing progress through the My Learning profile with notes and past reflections.",
    description: "What learners see and do in a live Knowledge Foundry program, from finding a course to quizzes, Learner Assist, and saved progress. Full transcript included.",
    seconds: 303,
    src: `${BLOB}/06-the-learner-experience-chPKNOVvz4WPIJjq41pcv1dIzV9XIi.mp4`,
    poster: `${BLOB}/posters/06-the-learner-experience-us2iRZUGRdxicyLhcAtH9ooO7XCEv4.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "guided-vs-fast",
    chapter: "Go deeper",
    title: "Guided vs Fast",
    tagline: "Two production tempos. Both can go live.",
    summary: "Explains the two production paths in Knowledge Foundry Studio. Clarifies that fast is not a draft mode: it is an accelerated, more autonomous build that still goes through assurance and sign-off. Guided adds staged human checkpoints during the build. Covers choosing between them based on time pressure, stakeholder sensitivity, and content risk.",
    description: "Guided vs fast in Knowledge Foundry Studio: two production tempos that both lead to live programs after human review. Watch it or read the full transcript.",
    seconds: 212,
    src: `${BLOB}/08-guided-vs-fast-218RXf0exh1yCPLLobRf3tmWPHsjq5.mp4`,
    poster: `${BLOB}/posters/08-guided-vs-fast-Shm97sDSpFbNbg8boPorNfQO3qngp8.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "role-lenses",
    chapter: "Go deeper",
    title: "Role lenses",
    tagline: "One Console, different front doors for mixed stakeholders.",
    summary: "Explains how Knowledge Foundry uses role lenses so producers, reviewers, and HR and L&D leaders share one Console. Describes where each role lands, from the Studio and creator to review and audit to learning and oversight, while everyone works from the same lifecycle shelves and the same produce, assure, evidence, and measure cycle.",
    description: "How Knowledge Foundry role lenses give producers, reviewers, and HR and L&D leaders different front doors to one shared Console. Includes the full transcript.",
    seconds: 337,
    src: `${BLOB}/09-console-role-lenses-v2.mp4`,
    poster: `${BLOB}/posters/09-console-role-lenses-yxD2fMuVWLElc5Noql4F8JtJ7PolsZ.jpg`,
    uploadDate: "2026-07-23",
  },
  {
    slug: "standards-and-scaffold",
    chapter: "Go deeper",
    title: "Standards and Scaffold",
    tagline: "Optional depth. Most programs never need this.",
    summary: "Covers the optional standards library and knowledge scaffold in Knowledge Foundry. Explains that most programs start from a brief and existing documents without them, and that these features are for organizations with formal frameworks or curated packs. Notes they can be skipped, including during guided production, without blocking a program from going live.",
    description: "The optional standards library and knowledge scaffold in Knowledge Foundry, and why most programs never need them. Watch it or read the full transcript.",
    seconds: 170,
    src: `${BLOB}/10-standards-scaffold-my303jgGpRc1vtIYgQgkEURipK62AU.mp4`,
    poster: `${BLOB}/posters/10-standards-scaffold-8TWcE07VDuu6U8CbK14h0lesWcLTPz.jpg`,
    uploadDate: "2026-07-23",
  },
];

export function getVideo(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}

export function nextVideo(slug: string): Video | undefined {
  const i = videos.findIndex((v) => v.slug === slug);
  return i >= 0 ? videos[i + 1] : undefined;
}

export function videoHref(v: Pick<Video, "slug">): string {
  return `/platform/see-it-work/${v.slug}`;
}

/** "7:07" */
export function clock(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** ISO 8601 duration for schema.org: "PT7M7S" */
export function isoDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `PT${m}M${s}S`;
}

export type Transcript = { paragraphs: { start: number; text: string }[] };

export function getTranscript(slug: string): Transcript | null {
  const file = path.join(process.cwd(), "src", "content", "videos", `${slug}.json`);
  return fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, "utf8")) as Transcript) : null;
}
