"use client";

import { Gauge } from "@/components/charts/gauge";
import { CRAWL_TOTALS, publicShare } from "@/content/foundations";

/** Share of Foundations pages readable without signing in. */
export function OpenGauge() {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <Gauge
        value={publicShare()}
        centerValue={publicShare()}
        suffix="%"
        minWidth={180}
        defaultLabel="Open to everyone"
        spacing={25}
        inactiveFillOpacity={0.35}
        useGradient
      />
      <p className="text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {CRAWL_TOTALS.publicPages} public · {CRAWL_TOTALS.gatedPages} sign-in only
      </p>
    </div>
  );
}
