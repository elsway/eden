import { ContrastRings } from "@/components/foundations/contrast-rings";
import { CoverageChart } from "@/components/foundations/coverage-chart";
import { OpenGauge } from "@/components/foundations/open-gauge";
import { PaletteGrid } from "@/components/foundations/palette-grid";
import { TopicIndex } from "@/components/foundations/topic-index";
import { ChartTile } from "@/components/site/chart-tile";
import { Divider, FrameRails, HeaderNodes } from "@/components/site/frame";
import { Hero } from "@/components/site/hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { EVO_PALETTE } from "@/content/evo-palette";
import { CRAWL_TOTALS, FOUNDATION_TOPICS } from "@/content/foundations";

const TOPICS_WITH_PAGES = FOUNDATION_TOPICS.filter((t) => t.publicPages + t.gatedPages > 0).length;
const TOTAL_PAGES = CRAWL_TOTALS.publicPages + CRAWL_TOTALS.gatedPages;

export default function HomePage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-clip">
      <FrameRails />
      <SiteHeader />
      <HeaderNodes />
      <main className="flex-1">
        <Hero />
        <Divider />

        {/* Chart wall: 12-col grid, 7+5 then 5+7, matching bklit.com */}
        <section id="charts" aria-label="Foundations in charts" className="relative w-full scroll-mt-16 pb-8 md:pb-12">
          <div className="mx-auto w-full max-w-[1336px] px-4 pt-12 lg:px-6">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 lg:gap-6">
              <ChartTile label="Pages per topic" meta={`${TOPICS_WITH_PAGES} topics · solid public, hatched sign-in`} className="h-[380px] md:col-span-7">
                <CoverageChart />
              </ChartTile>
              <ChartTile label="Open without sign-in" meta={`${CRAWL_TOTALS.publicPages} of ${TOTAL_PAGES} pages`} className="h-[380px] md:col-span-5">
                <OpenGauge />
              </ChartTile>
              <ChartTile label="Contrast on white" meta="500 tones vs AAA 7:1" className="h-[400px] md:col-span-5">
                <ContrastRings />
              </ChartTile>
              <ChartTile label="Evo palette" meta={`${EVO_PALETTE.length} families × 6 tones`} className="h-[400px] md:col-span-7">
                <PaletteGrid />
              </ChartTile>
            </div>
          </div>
        </section>
        <Divider />

        <section id="topics" aria-labelledby="topics-heading" className="relative w-full scroll-mt-16 pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="mx-auto w-full max-w-[1336px] px-4 lg:px-6">
            <h2 id="topics-heading" className="text-balance text-2xl font-bold lg:text-3xl">
              All 14 Foundations
            </h2>
            <p className="text-pretty text-muted-foreground">Grouped by Identity, Layout and Interaction</p>
            <div className="mt-8">
              <TopicIndex />
            </div>
          </div>
        </section>
      </main>
      <Divider />
      <SiteFooter />
    </div>
  );
}
