import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Knowledge Foundry: Structured knowledge. Deliberate instruction.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#12141a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "system-ui, -apple-system, Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient orange glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(239,103,4,0.35), rgba(239,103,4,0) 65%)",
            filter: "blur(30px)",
          }}
        />
        {/* Grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
          <svg width="44" height="44" viewBox="0 0 32 32">
            <path d="M4 20 L10 17 L16 20 L10 23 Z" fill="#3a4152" />
            <path d="M10 23 L10 27 L4 24 L4 20 Z" fill="#1a1d24" />
            <path d="M10 23 L16 20 L16 24 L10 27 Z" fill="#2a2f3a" />
            <path d="M16 20 L22 17 L28 20 L22 23 Z" fill="#3a4152" />
            <path d="M22 23 L22 27 L16 24 L16 20 Z" fill="#1a1d24" />
            <path d="M22 23 L28 20 L28 24 L22 27 Z" fill="#2a2f3a" />
            <path d="M10 14 L16 11 L22 14 L16 17 Z" fill="#3a4152" />
            <path d="M16 17 L16 21 L10 18 L10 14 Z" fill="#1a1d24" />
            <path d="M16 17 L22 14 L22 18 L16 21 Z" fill="#2a2f3a" />
            <path d="M13 8 L19 5 L25 8 L19 11 Z" fill="#ef6704" />
            <path d="M19 11 L19 15 L13 12 L13 8 Z" fill="#b64c00" />
            <path d="M19 11 L25 8 L25 12 L19 15 Z" fill="#c74e00" />
          </svg>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#ffffff" }}>Knowledge</span>
            <span style={{ color: "#ef6704", marginLeft: 8 }}>Foundry</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#ef6704",
              marginBottom: 22,
              fontWeight: 500,
            }}
          >
            Structured knowledge · Deliberate instruction
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 78,
              lineHeight: 1.0,
              letterSpacing: "-0.028em",
              color: "#ffffff",
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            Define what should exist,
            <span style={{ color: "#ef6704", marginLeft: 18 }}>
              before writing what does.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              marginTop: 28,
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Knowledge Foundry turns subjects, documents, and requirements into
            structured learning systems: reviewable, aligned to your standards, ready for audit.
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span>Framework Intelligence</span>
            <span>Verification & Trust</span>
            <span>Audit & Evidence</span>
          </div>
          <div>knowledge-foundry.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
