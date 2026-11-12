"use client";

import { Bar } from "@/components/charts/bar";
import { BarChart } from "@/components/charts/bar-chart";
import { BarYAxis } from "@/components/charts/bar-y-axis";
import { Grid } from "@/components/charts/grid";
import { ChartTooltip } from "@/components/charts/tooltip";
import { FOUNDATION_TOPICS } from "@/content/foundations";

const SHORT_LABEL: Record<string, string> = {
  "layout-in-product": "Layout",
  "layout-in-marketing": "Mktg layout",
  accessibility: "Access.",
  illustration: "Illustration",
  photography: "Photo",
  iconography: "Icons",
  typography: "Type",
};

const data = FOUNDATION_TOPICS.filter((t) => t.publicPages + t.gatedPages > 0)
  .map((t) => ({ topic: SHORT_LABEL[t.slug] ?? t.title, open: t.publicPages, gated: t.gatedPages }))
  .sort((a, b) => b.open + b.gated - (a.open + a.gated));

/** Guide pages per Foundation topic, split by public vs sign-in only. Horizontal so labels never collide. */
export function CoverageChart() {
  return (
    <BarChart
      data={data}
      xDataKey="topic"
      orientation="horizontal"
      aspectRatio="1.7 / 1"
      className="max-sm:!aspect-[1/1]"
      margin={{ left: 92 }}
      stacked
      stackGap={2}
    >
      <Grid vertical />
      <Bar dataKey="open" fill="var(--chart-line-primary)" lineCap={4} />
      <Bar dataKey="gated" fill="var(--chart-line-secondary)" lineCap={4} />
      <BarYAxis />
      <ChartTooltip />
    </BarChart>
  );
}
