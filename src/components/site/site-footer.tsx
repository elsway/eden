import { FOUNDATION_TOPICS, PLAYBOOK_URL, TOPIC_GROUPS, topicUrl } from "@/content/foundations";
import { REPO_URL } from "./site-header";

const SOURCES = [
  { label: "eBay Playbook", href: PLAYBOOK_URL },
  { label: "Bklit UI", href: "https://bklit.com" },
  { label: "GitHub", href: REPO_URL },
] as const;

const LINK = "text-sm text-muted-foreground transition-colors hover:text-foreground";

/** bklit.com footer: brand block left, link columns right. */
export function SiteFooter() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto grid max-w-[1336px] gap-10 px-4 py-12 md:grid-cols-[1.4fr_repeat(4,1fr)] lg:px-6">
        <div>
          <p className="text-lg font-bold">
            Foundations <span className="font-normal text-muted-foreground">Hub</span>
          </p>
          <p className="mt-2 max-w-[28ch] text-sm text-muted-foreground">
            eBay Evo Foundations content, presented with Bklit UI charts.
          </p>
        </div>
        {TOPIC_GROUPS.map((group) => (
          <nav key={group} aria-label={`${group} topics`}>
            <p className="text-sm font-medium">{group}</p>
            <ul className="mt-3 grid gap-2">
              {FOUNDATION_TOPICS.filter((t) => t.group === group).map((t) => (
                <li key={t.slug}>
                  <a href={topicUrl(t.slug)} target="_blank" rel="noopener noreferrer" className={LINK}>
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <nav aria-label="Sources">
          <p className="text-sm font-medium">Sources</p>
          <ul className="mt-3 grid gap-2">
            {SOURCES.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
