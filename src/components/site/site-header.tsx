import { ArrowUpRight } from "lucide-react";
import { PLAYBOOK_URL } from "@/content/foundations";

const NAV = [
  { href: "#coverage", label: "Coverage" },
  { href: "#color", label: "Color" },
  { href: "#topics", label: "Topics" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-divider bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1336px] items-center justify-between px-4 lg:px-6">
        <a href="#top" className="flex items-baseline gap-1.5 text-[17px] font-semibold tracking-tight">
          Foundations
          <span className="font-mono text-[10px] font-normal uppercase tracking-widest text-muted-foreground">hub</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm sm:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-foreground/80 transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`${PLAYBOOK_URL}/foundations`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center gap-1 rounded-[10px] border border-border-btn bg-surface-btn px-3 text-[13px] font-medium transition-colors hover:bg-white/[0.06]"
        >
          Playbook
          <ArrowUpRight aria-hidden className="size-3.5 text-muted-foreground" />
        </a>
      </div>
    </header>
  );
}
