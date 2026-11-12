import { ArrowUpRight, Lock } from "lucide-react";
import { FOUNDATION_TOPICS, topicUrl, type FoundationTopic } from "@/content/foundations";

const GROUP_DOT: Record<FoundationTopic["group"], string> = {
  Identity: "bg-chart-1",
  Layout: "bg-chart-2",
  Interaction: "bg-chart-3",
};

function TopicCard({ topic }: { readonly topic: FoundationTopic }) {
  const pages = topic.publicPages + 1;
  return (
    <a
      href={topicUrl(topic.slug)}
      target="_blank"
      rel="noopener noreferrer"
      className="group/topic relative mb-4 flex break-inside-avoid flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_0_rgb(0_0_0/0.05)] transition-colors duration-200 hover:border-border-btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <div className="flex items-center gap-2.5">
        <span aria-hidden className={`size-2 rounded-full ${GROUP_DOT[topic.group]}`} />
        <h3 className="text-sm font-semibold">{topic.title}</h3>
        <span className="text-sm text-muted-foreground">{topic.group}</span>
        <ArrowUpRight
          aria-hidden
          className="ml-auto size-4 text-muted-foreground transition-transform group-hover/topic:-translate-y-0.5 group-hover/topic:translate-x-0.5 group-hover/topic:text-foreground"
        />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{topic.summary}</p>
      <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        {pages} {pages === 1 ? "page" : "pages"}
        {topic.gatedPages > 0 ? (
          <span className="inline-flex items-center gap-1 text-chart-2">
            <Lock aria-hidden className="size-3" />+{topic.gatedPages} sign-in
          </span>
        ) : null}
      </p>
    </a>
  );
}

/** All Foundation topics as a masonry wall, the layout bklit.com uses for testimonials. */
export function TopicIndex() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {FOUNDATION_TOPICS.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </div>
  );
}
