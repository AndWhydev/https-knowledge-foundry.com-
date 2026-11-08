import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Our custom type-scale utilities set font size, not color. Without this,
// tailwind-merge treats `text-display-2` as a color and drops it whenever a
// color like `text-white` follows, shrinking headings on dark sections.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-1", "display-2", "display-3", "lede", "eyebrow"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
