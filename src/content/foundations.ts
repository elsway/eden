/**
 * Evo Foundations: topic structure and page counts from a crawl of the source
 * site (2026-11-12). Summaries are paraphrased, not copied.
 */

export type TopicGroup = "Identity" | "Layout" | "Interaction";

export interface FoundationTopic {
  readonly slug: string;
  readonly title: string;
  readonly group: TopicGroup;
  readonly summary: string;
  /** Public subpages found under the topic. */
  readonly publicPages: number;
  /** Subpages that redirect to sign-in. */
  readonly gatedPages: number;
  readonly subpages: readonly string[];
}

export const FOUNDATION_TOPICS: readonly FoundationTopic[] = [
  {
    slug: "color",
    title: "Color",
    group: "Identity",
    summary: "A vibrant palette that signals eBay is for everyone, tuned separately for product, marketing and illustration.",
    publicPages: 6,
    gatedPages: 0,
    subpages: ["Using color", "In product", "In marketing", "In illustration", "Best practices", "Showcase"],
  },
  {
    slug: "typography",
    title: "Typography",
    group: "Identity",
    summary: "Market Sans sets the voice: bold but approachable, balancing the loudness of color and imagery.",
    publicPages: 5,
    gatedPages: 0,
    subpages: ["Using type", "In digital", "In print", "Best practices", "Showcase"],
  },
  {
    slug: "iconography",
    title: "Iconography",
    group: "Identity",
    summary: "A shared icon library plus rules for confirmation indicators and when an icon earns its place.",
    publicPages: 6,
    gatedPages: 1,
    subpages: ["Our icons", "Icon library", "Using icons", "Confirmation indicators", "Best practices", "Showcase"],
  },
  {
    slug: "logo",
    title: "Logo",
    group: "Identity",
    summary: "The colorful signature: how to place the logo and tagline so they stay recognisable everywhere.",
    publicPages: 3,
    gatedPages: 0,
    subpages: ["Using our logo", "Using our tagline", "Showcase"],
  },
  {
    slug: "illustration",
    title: "Illustration",
    group: "Identity",
    summary: "Illustrations bridge product language and lifestyle imagery. Use the library; don't draw your own.",
    publicPages: 5,
    gatedPages: 0,
    subpages: ["Using illustration", "Visual tone", "Sizing and placement", "Best practices", "Showcase"],
  },
  {
    slug: "photography",
    title: "Photography",
    group: "Identity",
    summary: "Real people and real moments, shot out in the world rather than on manicured sets.",
    publicPages: 3,
    gatedPages: 1,
    subpages: ["Image types", "Visual tone", "Showcase"],
  },
  {
    slug: "layout-in-product",
    title: "Layout in product",
    group: "Layout",
    summary: "A responsive grid with uniform, masonry and mosaic patterns plus fixed image ratios.",
    publicPages: 5,
    gatedPages: 0,
    subpages: ["Responsive layout", "Uniform", "Masonry", "Mosaic", "Image ratio"],
  },
  {
    slug: "layout-in-marketing",
    title: "Layout in marketing",
    group: "Layout",
    summary: "A modular grid built from stacks, flexible enough for campaigns of any shape.",
    publicPages: 1,
    gatedPages: 0,
    subpages: ["Stacks"],
  },
  {
    slug: "object-styles-in-product",
    title: "Object styles in product",
    group: "Layout",
    summary: "Shared shapes and treatments that tell people which elements behave alike.",
    publicPages: 0,
    gatedPages: 0,
    subpages: [],
  },
  {
    slug: "object-styles-in-marketing",
    title: "Object styles in marketing",
    group: "Layout",
    summary: "The same structural cues, adapted for brand and campaign surfaces.",
    publicPages: 0,
    gatedPages: 0,
    subpages: [],
  },
  {
    slug: "motion",
    title: "Motion",
    group: "Interaction",
    summary: "Motion that feels effortless: easing, depth and volume used to tell a story, not decorate.",
    publicPages: 8,
    gatedPages: 1,
    subpages: ["In product", "In marketing", "Product transitions", "Expressive animation", "Depth", "Volume", "Layout in motion", "Typography in motion"],
  },
  {
    slug: "interaction-levels",
    title: "Interaction levels",
    group: "Interaction",
    summary: "Keep interactions simple and direct, with emphasis matched to importance.",
    publicPages: 0,
    gatedPages: 0,
    subpages: [],
  },
  {
    slug: "interaction-states",
    title: "Interaction states",
    group: "Interaction",
    summary: "How a component shows hover, press, focus and disabled in response to people.",
    publicPages: 0,
    gatedPages: 0,
    subpages: [],
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    group: "Interaction",
    summary: "Inclusive by default, backed by the Include plugin for checking designs as you go.",
    publicPages: 1,
    gatedPages: 0,
    subpages: ["Include plugin"],
  },
];

/** Page totals for /foundations measured by the crawl (HTTP 200 vs redirect to sign-in). */
export const CRAWL_TOTALS = { publicPages: 57, gatedPages: 8 } as const;

export const TOPIC_GROUPS: readonly TopicGroup[] = ["Identity", "Layout", "Interaction"];

export function publicShare(): number {
  const { publicPages, gatedPages } = CRAWL_TOTALS;
  return Math.round((publicPages / (publicPages + gatedPages)) * 100);
}
