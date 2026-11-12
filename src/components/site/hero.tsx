import { CRAWL_TOTALS, FOUNDATION_TOPICS } from "@/content/foundations";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative w-full pt-16">
      <div className="mx-auto w-full max-w-[1336px] px-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:px-6">
        <div className="flex min-w-0 flex-col justify-center py-6 text-left sm:py-8 md:py-10 lg:py-12">
          <div className="flex min-h-0 flex-col gap-4 sm:gap-6">
            <h1
              id="hero-heading"
              className="max-w-3xl text-balance text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            >
              eBay&apos;s design foundations, charted
            </h1>
            <div className="flex flex-wrap gap-2">
              <a
                href="#topics"
                className="inline-flex h-9 items-center rounded-[10px] border border-primary bg-primary px-[13px] text-sm font-medium text-primary-foreground shadow-[inset_0_1px_0_0_rgb(255_255_255/0.16),0_1px_2px_0_rgb(0_0_0/0.3)] transition-[transform,background-color] hover:bg-primary/90 active:scale-[0.98]"
              >
                Explore topics
              </a>
              <a
                href="#charts"
                className="inline-flex h-9 items-center rounded-[10px] border border-border-btn bg-surface-btn px-[13px] text-sm font-medium transition-[transform,background-color] hover:bg-white/[0.06] active:scale-[0.98]"
              >
                See {FOUNDATION_TOPICS.length} topics charted
              </a>
            </div>
            <p className="font-mono text-[11px] uppercase leading-6 tracking-wider text-muted-foreground">
              eBay Playbook // Foundations · {CRAWL_TOTALS.publicPages} public pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
