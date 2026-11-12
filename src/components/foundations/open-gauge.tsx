"use client";

import { Gauge } from "@/components/charts/gauge";
import { publicShare } from "@/content/foundations";

/** Share of Foundations pages readable without signing in. */
export function OpenGauge() {
  return (
    <div className="w-full max-w-[440px]">
      <Gauge
        value={publicShare()}
        centerValue={publicShare()}
        suffix="%"
        defaultLabel="pages open to all"
        spacing={25}
        inactiveFillOpacity={0.35}
        minWidth={180}
        useGradient
      />
    </div>
  );
}
