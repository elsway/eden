import { ArrowUpRight } from "lucide-react";
import { PLAYBOOK_URL } from "@/content/foundations";

export const REPO_URL = "https://github.com/elsway/eden";

const NAV = [
  { href: "#charts", label: "Charts" },
  { href: "#topics", label: "Topics" },
  { href: `${PLAYBOOK_URL}/foundations`, label: "Playbook", external: true },
] as const;

function GithubMark({ className }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={className} fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/** Mark: four Evo 500 tones as a 2×2 grid, standing in for Bklit's logo glyph. */
function Mark() {
  return (
    <span aria-hidden className="grid size-5 grid-cols-2 gap-[2px]">
      <span className="rounded-[2px] bg-[#0968F6]" />
      <span className="rounded-[2px] bg-[#EEBB04]" />
      <span className="rounded-[2px] bg-[#F02D2D]" />
      <span className="rounded-[2px] bg-[#92C821]" />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 w-full bg-sidebar/80 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border/64">
      <div className="mx-auto grid h-full max-w-[1336px] grid-cols-[auto_1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr] px-4 lg:px-6">
        <a href="#top" className="flex items-center gap-2 whitespace-nowrap text-xl font-bold leading-none sm:text-2xl">
          <Mark />
          <span>
            Foundations <span className="font-normal text-muted-foreground">Hub</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 justify-self-center md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...("external" in item ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex h-8 items-center gap-1 rounded-lg px-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/[0.05] hover:text-foreground"
            >
              {item.label}
              {"external" in item ? <ArrowUpRight aria-hidden className="size-3 text-muted-foreground" /> : null}
            </a>
          ))}
        </nav>
        <div className="flex justify-end">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source on GitHub"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors hover:bg-white/[0.05]"
          >
            <GithubMark className="size-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
