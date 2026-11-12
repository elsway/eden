import { cn } from "@/lib/utils";

/*
 * bklit.com page frame: 1px rails 12px outside the 1336px container, and 8px square
 * nodes where horizontal rules cross them. Rails sit off-canvas below ~1360px wide, as on Bklit.
 */

const CONTAINER = "mx-auto w-full max-w-[1336px] px-4 lg:px-6";

const NODE =
  "before:absolute before:-left-[11.5px] before:z-1 before:-ml-1 before:size-2 before:rounded-[2px] before:border before:border-border before:bg-popover before:shadow-[0_1px_2px_0_rgb(0_0_0/0.05)] " +
  "after:absolute after:-right-[11.5px] after:z-1 after:-mr-1 after:size-2 after:rounded-[2px] after:border after:border-border after:bg-background after:shadow-[0_1px_2px_0_rgb(0_0_0/0.05)]";

/** Full-height rails; place inside a `relative` wrapper that spans the page. */
export function FrameRails() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-40">
      <div
        className={cn(
          CONTAINER,
          "relative h-full before:absolute before:inset-y-0 before:-left-3 before:w-px before:bg-border/64 after:absolute after:inset-y-0 after:-right-3 after:w-px after:bg-border/64",
        )}
      />
    </div>
  );
}

/** Nodes on the header's bottom rule; fixed so they ride with the header. */
export function HeaderNodes() {
  return (
    <div
      aria-hidden
      className={cn(CONTAINER, NODE, "pointer-events-none fixed inset-x-0 top-0 z-50 h-16 before:-bottom-[3.5px] after:-bottom-[3.5px]")}
    />
  );
}

/** Full-bleed section rule with nodes where it meets the rails. */
export function Divider() {
  return (
    <div aria-hidden className="relative">
      <div className="h-px w-full bg-border/64 max-sm:bg-border/48" />
      <div className={cn(CONTAINER, NODE, "pointer-events-none absolute inset-x-0 top-0 z-41 before:-top-[3.5px] after:-top-[3.5px]")} />
    </div>
  );
}
