import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Knowledge Foundry — Industries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
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
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 500,
            background: "radial-gradient(ellipse, rgba(239,103,4,0.20), rgba(239,103,4,0) 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative", fontSize: 22, fontWeight: 600 }}>
          <span style={{ color: "#ffffff" }}>Knowledge</span>
          <span style={{ color: "#ef6704" }}>Foundry</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ef6704",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            Industries
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.02,
              letterSpacing: "-0.028em",
              color: "#ffffff",
              fontWeight: 600,
              maxWidth: 1000,
            }}
          >
            Regulated, evidenced, ready for audit in your sector.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: 15,
            color: "rgba(255,255,255,0.55)",
            position: "relative",
          }}
        >
          <span>APRA · ASIC · TGA · ISO 45001 · PSPF · TEQSA</span>
          <span>knowledge-foundry.com/industries</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
