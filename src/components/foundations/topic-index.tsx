import { ArrowUpRight, Lock } from "lucide-react";
import { FOUNDATION_TOPICS, TOPIC_GROUPS, topicUrl, type FoundationTopic } from "@/content/foundations";

function TopicCard({ topic }: { readonly topic: FoundationTopic }) {
  const pages = topic.publicPages + 1;
  return (
    <a
      href={topicUrl(topic.slug)}
      target="_blank"
      rel="noopener noreferrer"
      className="group/topic flex h-full flex-col rounded-[14px] border border-border bg-surface-card p-4 transition-[border-color,background-color,transform] duration-200 hover:border-border-btn hover:bg-white/[0.045] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-safe:hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-semibold tracking-tight">{topic.title}</h4>
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/topic:translate-x-0.5 group-hover/topic:-translate-y-0.5 group-hover/topic:text-foreground"
        />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{topic.summary}</p>
      <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {pages} {pages === 1 ? "page" : "pages"}
        {topic.gatedPages > 0 ? (
          <span className="inline-flex items-center gap-1 text-chart-2">
            <Lock aria-hidden className="size-3" />+{topic.gatedPages}
          </span>
        ) : null}
      </p>
    </a>
  );
}

/** Every Foundation topic, grouped as Identity, Layout and Interaction. */
export function TopicIndex() {
  return (
    <div className="grid gap-12">
      {TOPIC_GROUPS.map((group) => {
        const topics = FOUNDATION_TOPICS.filter((t) => t.group === group);
        return (
          <div key={group} className="grid gap-4 md:grid-cols-[180px_1fr]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:pt-4">
              {group} <span className="text-foreground/40">/ {topics.length}</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <TopicCard key={topic.slug} topic={topic} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
