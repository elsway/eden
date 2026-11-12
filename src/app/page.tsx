import type { ReactNode } from "react";
import { ContrastRings } from "@/components/foundations/contrast-rings";
import { CoverageChart } from "@/components/foundations/coverage-chart";
import { OpenGauge } from "@/components/foundations/open-gauge";
import { PaletteGrid } from "@/components/foundations/palette-grid";
import { TopicIndex } from "@/components/foundations/topic-index";
import { Hero } from "@/components/site/hero";
import { SiteHeader } from "@/components/site/site-header";
import { SurfaceCard } from "@/components/site/surface-card";
import { PLAYBOOK_URL } from "@/content/foundations";

const Divider = () => <div aria-hidden className="h-px w-full bg-divider" />;

function Section({ id, title, lede, children }: { id: string; title: string; lede: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto w-full max-w-[1336px] scroll-mt-16 px-4 py-14 md:py-20 lg:px-6">
      <div className="mb-8 max-w-[60ch]">
        <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-muted-foreground">{lede}</p>
      </div>
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Divider />

        <Section
          id="coverage"
          title="Where the guidance lives"
          lede="Guide pages per Foundation topic. Motion and color go deepest; a handful of pages need an eBay sign-in."
        >
          <div className="grid gap-3 lg:grid-cols-3">
            <SurfaceCard
              title="Pages per topic"
              eyebrow="Bar · stacked"
              className="lg:col-span-2"
              caption="Indigo is public; yellow sits behind sign-in."
            >
              <CoverageChart />
            </SurfaceCard>
            <SurfaceCard title="Openness" eyebrow="Gauge">
              <OpenGauge />
            </SurfaceCard>
          </div>
        </Section>
        <Divider />

        <Section
          id="color"
          title="Color, measured"
          lede="Evo's palette spans 16 families. The 500 tones are the loudest. Here's how they hold up as text on white."
        >
          <div className="grid gap-3 lg:grid-cols-5">
            <SurfaceCard
              title="Contrast on white"
              eyebrow="Ring · vs AAA 7:1"
              className="lg:col-span-2"
              caption="Full ring = AAA. Jade and the yellows are for fills and illustration, not body text."
            >
              <ContrastRings />
            </SurfaceCard>
            <SurfaceCard title="The Evo ramp" eyebrow="16 families × 6 tones" className="lg:col-span-3">
              <PaletteGrid />
            </SurfaceCard>
          </div>
        </Section>
        <Divider />

        <Section id="topics" title="All 14 Foundations" lede="Grouped by what they shape. Each card opens the topic in the eBay Playbook.">
          <TopicIndex />
        </Section>
      </main>

      <footer className="border-t border-divider">
        <div className="mx-auto flex max-w-[1336px] flex-col gap-2 px-4 py-8 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:justify-between lg:px-6">
          <span>Interface: Bklit UI · Content: eBay Playbook</span>
          <a href={PLAYBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            playbook.ebay.com ↗
          </a>
        </div>
      </footer>
    </>
  );
}
