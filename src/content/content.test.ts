import { describe, expect, test } from "vitest";
import { EVO_PALETTE } from "./evo-palette";
import { CRAWL_TOTALS, FOUNDATION_TOPICS, publicShare, TOPIC_GROUPS } from "./foundations";

describe("foundation topics", () => {
  test("there are 14 topics with unique slugs", () => {
    const slugs = FOUNDATION_TOPICS.map((t) => t.slug);
    expect(slugs).toHaveLength(14);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test("every topic belongs to a known group", () => {
    for (const topic of FOUNDATION_TOPICS) expect(TOPIC_GROUPS).toContain(topic.group);
  });

  test("subpage list length matches the public page count", () => {
    for (const topic of FOUNDATION_TOPICS) expect(topic.subpages).toHaveLength(topic.publicPages);
  });

  test("public share rounds 57 of 65 pages to 88%", () => {
    expect(CRAWL_TOTALS).toEqual({ publicPages: 57, gatedPages: 8 });
    expect(publicShare()).toBe(88);
  });
});

describe("evo palette", () => {
  test("16 families, every tone a 6-digit hex", () => {
    expect(EVO_PALETTE).toHaveLength(16);
    for (const fam of EVO_PALETTE) {
      for (const tone of fam.tones) expect(tone.hex).toMatch(/^#[0-9A-F]{6}$/);
    }
  });

  test("every family defines a 500 tone", () => {
    for (const fam of EVO_PALETTE) expect(fam.tones.some((t) => t.step === 500)).toBe(true);
  });
});
