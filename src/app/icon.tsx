import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon rendered from the KF isometric mark — dark cubes + orange apex.
 * Kept small: 64×64 renders cleanly at 16/32/48.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#12141a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 32 32">
          {/* base row */}
          <path d="M4 20 L10 17 L16 20 L10 23 Z" fill="#3a4152" />
          <path d="M10 23 L10 27 L4 24 L4 20 Z" fill="#1a1d24" />
          <path d="M10 23 L16 20 L16 24 L10 27 Z" fill="#2a2f3a" />
          <path d="M16 20 L22 17 L28 20 L22 23 Z" fill="#3a4152" />
          <path d="M22 23 L22 27 L16 24 L16 20 Z" fill="#1a1d24" />
          <path d="M22 23 L28 20 L28 24 L22 27 Z" fill="#2a2f3a" />
          {/* middle */}
          <path d="M10 14 L16 11 L22 14 L16 17 Z" fill="#3a4152" />
          <path d="M16 17 L16 21 L10 18 L10 14 Z" fill="#1a1d24" />
          <path d="M16 17 L22 14 L22 18 L16 21 Z" fill="#2a2f3a" />
          {/* apex — orange */}
          <path d="M13 8 L19 5 L25 8 L19 11 Z" fill="#ef6704" />
          <path d="M19 11 L19 15 L13 12 L13 8 Z" fill="#b64c00" />
          <path d="M19 11 L25 8 L25 12 L19 15 Z" fill="#c74e00" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
