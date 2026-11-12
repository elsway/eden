import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceCardProps {
  readonly title: string;
  readonly eyebrow: string;
  readonly caption?: string;
  readonly className?: string;
  readonly children: ReactNode;
}

/** Bklit's two-layer card: a 2.9% white shell with 4px padding around an inset panel. */
export function SurfaceCard({ title, eyebrow, caption, className, children }: SurfaceCardProps) {
  return (
    <article className={cn("group/card min-w-0 rounded-[18px] bg-surface-card p-1", className)}>
      <div className="flex h-full flex-col rounded-[14px] border border-border bg-background/60 p-4 transition-colors sm:p-5 duration-300 group-hover/card:border-border-btn">
        <header className="mb-4 flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{eyebrow}</span>
        </header>
        <div className="flex-1">{children}</div>
        {caption ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{caption}</p> : null}
      </div>
    </article>
  );
}
