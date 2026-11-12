"use client";

import { useState } from "react";
import { Ring } from "@/components/charts/ring";
import { RingChart } from "@/components/charts/ring-chart";
import { EVO_PALETTE, toneOf } from "@/content/evo-palette";
import { contrastRatio, wcagLevel } from "@/lib/contrast";

const FAMILIES = ["Violet", "Lilac", "Blue", "Red", "Jade"] as const;
/** WCAG AAA for body text; rings are measured against it. */
const AAA_RATIO = 7;

export const CONTRAST_DATA = FAMILIES.flatMap((name) => {
  const fam = EVO_PALETTE.find((f) => f.name === name);
  const hex = fam ? toneOf(fam, 500) : undefined;
  if (!hex) return [];
  const ratio = contrastRatio(hex, "#FFFFFF");
  return [{ label: `${name} 500`, value: Math.round(ratio * 10) / 10, maxValue: AAA_RATIO, color: hex, level: wcagLevel(ratio) }];
});

/**
 * Contrast of each 500 tone on white, as a share of the AAA target.
 * Uses its own center label instead of <RingCenter>: Bklit's default center sums every
 * ring (meaningless for ratios) and its NumberFlow counter breaks SSR hydration.
 */
export function ContrastRings() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered === null ? null : CONTRAST_DATA[hovered];

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row lg:flex-col xl:flex-row">
      <div className="relative shrink-0">
        <RingChart data={CONTRAST_DATA} size={220} strokeWidth={11} ringGap={5} hoveredIndex={hovered} onHoverChange={setHovered}>
          {CONTRAST_DATA.map((item, index) => (
            <Ring key={item.label} index={index} />
          ))}
        </RingChart>
        <div aria-live="polite" className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl tabular-nums">{active ? `${active.value}:1` : "7:1"}</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {active ? active.level : "AAA target"}
          </span>
        </div>
      </div>
      <ul className="grid w-full gap-1.5 text-sm">
        {CONTRAST_DATA.map((item, index) => (
          <li
            key={item.label}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center justify-between gap-3 rounded-md px-1.5 py-0.5 transition-colors data-[active=true]:bg-white/[0.05]"
            data-active={hovered === index}
          >
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span aria-hidden className="size-2.5 rounded-full" style={{ background: item.color }} />
              {item.label}
            </span>
            <span className="text-right font-mono text-xs text-muted-foreground">
              {item.value}:1 · {item.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
