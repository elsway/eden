"use client";

import { useState } from "react";
import { Ring } from "@/components/charts/ring";
import { RingChart } from "@/components/charts/ring-chart";
import { EVO_PALETTE, toneOf } from "@/content/evo-palette";
import { contrastRatio, wcagLevel } from "@/lib/contrast";

const FAMILIES = ["Violet", "Lilac", "Blue", "Red", "Jade"] as const;
/** WCAG AAA for body text; a full ring means the tone reaches it. */
const AAA_RATIO = 7;

export const CONTRAST_DATA = FAMILIES.flatMap((name) => {
  const fam = EVO_PALETTE.find((f) => f.name === name);
  const hex = fam ? toneOf(fam, 500) : undefined;
  if (!hex) return [];
  const ratio = contrastRatio(hex, "#FFFFFF");
  return [{ label: `${name} 500`, value: Math.round(ratio * 10) / 10, maxValue: AAA_RATIO, color: hex, level: wcagLevel(ratio) }];
});

/**
 * Contrast of each Evo 500 tone as text on white.
 * Own center label instead of <RingCenter>: Bklit's default sums every ring (meaningless
 * for ratios) and its NumberFlow counter breaks SSR hydration.
 */
export function ContrastRings() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered === null ? null : CONTRAST_DATA[hovered];

  return (
    <div className="relative">
      <RingChart data={CONTRAST_DATA} size={260} strokeWidth={12} ringGap={6} hoveredIndex={hovered} onHoverChange={setHovered}>
        {CONTRAST_DATA.map((item, index) => (
          <Ring key={item.label} index={index} />
        ))}
      </RingChart>
      <div aria-live="polite" className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[28px] font-semibold leading-none tabular-nums">{active ? `${active.value}:1` : "7:1"}</span>
        <span className="mt-1.5 text-xs text-muted-foreground">{active ? `${active.label} · ${active.level}` : "AAA on white"}</span>
      </div>
    </div>
  );
}
