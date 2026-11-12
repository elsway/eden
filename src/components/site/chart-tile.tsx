import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChartTileProps {
  readonly label: string;
  readonly href: string;
  readonly linkLabel: string;
  readonly className?: string;
  readonly children: ReactNode;
}

const PILL =
  "inline-flex h-7 items-center gap-1 rounded-lg border border-border-btn bg-background/80 px-2.5 text-xs font-medium backdrop-blur-sm";

// Corner pills sit hidden until hover or keyboard focus, as on bklit.com's chart wall.
const REVEAL =
  "opacity-0 translate-y-1.5 transition-[opacity,transform] duration-200 group-hover/tile:opacity-100 group-hover/tile:translate-y-0 group-focus-within/tile:opacity-100 group-focus-within/tile:translate-y-0 motion-reduce:transition-none";

/** bklit.com chart tile: muted shell (4px) around a bordered panel, chart centred with a tall top inset. */
export function ChartTile({ label, href, linkLabel, className, children }: ChartTileProps) {
  return (
    <figure className={cn("group/tile relative col-span-full flex min-w-0 flex-col rounded-2xl bg-surface-card p-1", className)}>
      <div className="relative flex-1 rounded-xl border border-border bg-background shadow-[0_1px_2px_0_rgb(0_0_0/0.05)]">
        <figcaption className={cn("absolute left-3 top-3 z-10", REVEAL)}>
          <span className={PILL}>{label}</span>
        </figcaption>
        <div className={cn("absolute right-3 top-3 z-10", REVEAL)}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={cn(PILL, "hover:bg-white/[0.06]")}>
            {linkLabel}
            <ArrowUpRight aria-hidden className="size-3 text-muted-foreground" />
          </a>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-5 pt-14 sm:p-6 sm:pt-14 md:p-8 md:pt-16">
          <div className="flex size-full max-h-full min-w-0 items-center justify-center">{children}</div>
        </div>
      </div>
    </figure>
  );
}
