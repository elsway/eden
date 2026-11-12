"use client";

import { Bar } from "@/components/charts/bar";
import { BarChart } from "@/components/charts/bar-chart";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { BarYAxis } from "@/components/charts/bar-y-axis";
import { Grid } from "@/components/charts/grid";
import { PatternPreset } from "@/components/charts/pattern-preset";
import { ChartTooltip } from "@/components/charts/tooltip";
import { FOUNDATION_TOPICS } from "@/content/foundations";

const SHORT_LABEL: Record<string, string> = {
  "layout-in-product": "Layout",
  "layout-in-marketing": "Mktg",
  accessibility: "A11y",
  illustration: "Illus.",
  photography: "Photo",
  iconography: "Icons",
  typography: "Type",
};

const data = FOUNDATION_TOPICS.filter((t) => t.publicPages + t.gatedPages > 0)
  .map((t) => ({ topic: SHORT_LABEL[t.slug] ?? t.title, public: t.publicPages, signIn: t.gatedPages }))
  .sort((a, b) => b.public + b.signIn - (a.public + a.signIn));

// A plain element array, not a wrapper component: BarChart inspects its direct children for <Bar>.
const SERIES = [
  <PatternPreset key="hatch" id="gated-hatch" preset="diagonal-up" color="var(--chart-2)" />,
  <Bar key="public" dataKey="public" fill="var(--chart-line-primary)" lineCap="round" />,
  <Bar key="signIn" dataKey="signIn" fill="url(#gated-hatch)" stroke="var(--chart-2)" lineCap="round" />,
  <ChartTooltip key="tooltip" />,
];

/** Guide pages per Foundation topic: solid = public, hatched = sign-in only. */
export function CoverageChart() {
  return (
    <>
      <div className="hidden w-full md:block">
        <BarChart data={data} xDataKey="topic" aspectRatio="5 / 2" barGap={0.55} stacked stackGap={3}>
          <Grid horizontal />
          {SERIES}
          <BarXAxis showAllLabels />
        </BarChart>
      </div>
      <div className="w-full md:hidden">
        <BarChart data={data} xDataKey="topic" orientation="horizontal" aspectRatio="1 / 1" margin={{ left: 52 }} stacked stackGap={3}>
          <Grid vertical />
          {SERIES}
          <BarYAxis />
        </BarChart>
      </div>
    </>
  );
}
