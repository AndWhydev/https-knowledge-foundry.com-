import Image from "next/image";
import { cn } from "@/lib/cn";

const captions: Record<string, { alt: string; width: number; height: number }> = {
  "editorial-hero.png": { alt: "Isometric pyramid of dark charcoal cubes with a molten orange cube at the apex. Knowledge Foundry framework visualisation.", width: 1792, height: 1024 },
  "editorial-blueprint.png": { alt: "Grid of dark charcoal cubes on cream architectural blueprint, with three cubes glowing molten orange: a knowledge framework schematic.", width: 1792, height: 1024 },
  "editorial-transformation.png": { alt: "Stack of dark charcoal document blocks transforming into an interconnected network of floating cubes, illustrating knowledge transformation.", width: 1792, height: 1024 },
  "editorial-governance.png": { alt: "Isometric dashboard tiles rendered as physical charcoal objects with data visualisations, one glowing orange, illustrating knowledge governance.", width: 1792, height: 1024 },
  "editorial-evidence.png": { alt: "Archival grid of dark charcoal document blocks with orange seals and a magnifying glass, illustrating audit and evidence.", width: 1792, height: 1024 },
};

export function EditorialStill({
  src,
  className,
  priority = false,
  sizes = "(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw",
}: {
  src: keyof typeof captions;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const meta = captions[src];
  return (
    <div className={cn("relative overflow-hidden rounded-[var(--radius-lg)] bg-[color:var(--color-canvas-warm)]", className)}>
      <Image
        src={`/media/${src}`}
        alt={meta.alt}
        width={meta.width}
        height={meta.height}
        priority={priority}
        sizes={sizes}
        className="w-full h-auto"
      />
    </div>
  );
}
