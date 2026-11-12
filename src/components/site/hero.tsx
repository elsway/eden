import { CRAWL_TOTALS, FOUNDATION_TOPICS } from "@/content/foundations";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="mx-auto w-full max-w-[1336px] px-4 pb-14 pt-16 md:pt-24 lg:px-6">
      <h1
        id="hero-heading"
        className="max-w-[16ch] text-[2.75rem] font-bold leading-[1] tracking-tight text-balance md:text-[3.75rem]"
      >
        The building blocks, charted
      </h1>
      <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
        Every Foundation in eBay&apos;s Evo system (color, type, layout, motion and more) mapped into live,
        inspectable charts. Start here, then go deep in the Playbook.
      </p>
      <div className="mt-8 flex flex-wrap gap-2.5">
        <a
          href="#topics"
          className="inline-flex h-9 items-center rounded-[10px] border border-primary bg-primary px-[13px] text-sm font-medium text-primary-foreground shadow-[inset_0_1px_0_0_rgb(255_255_255/0.16)] transition-transform active:scale-[0.98]"
        >
          Explore topics
        </a>
        <a
          href="#color"
          className="inline-flex h-9 items-center rounded-[10px] border border-border-btn bg-surface-btn px-[13px] text-sm font-medium transition-colors hover:bg-white/[0.06] active:scale-[0.98]"
        >
          See the palette
        </a>
      </div>
      <p className="mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-wider text-muted-foreground">
        Source: eBay Playbook // Foundations
        <br />
        {FOUNDATION_TOPICS.length} topics · {CRAWL_TOTALS.publicPages} public pages
      </p>
    </section>
  );
}
