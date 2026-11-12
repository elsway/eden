import { describe, expect, test } from "vitest";
import { contrastRatio, luminance, wcagLevel } from "./contrast";

describe("contrast", () => {
  test("black on white is the maximum 21:1", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
  });

  test("ratio is symmetric", () => {
    expect(contrastRatio("#0968F6", "#FFFFFF")).toBeCloseTo(contrastRatio("#FFFFFF", "#0968F6"), 10);
  });

  test("Evo Blue 500 on white passes AA but not AAA", () => {
    const ratio = contrastRatio("#0968F6", "#FFFFFF");
    expect(ratio).toBeGreaterThan(4.5);
    expect(wcagLevel(ratio)).toBe("AA");
  });

  test("accepts hex without a leading hash", () => {
    expect(luminance("FFFFFF")).toBeCloseTo(1, 5);
  });

  test("throws on malformed hex", () => {
    expect(() => luminance("#FFF")).toThrow("Invalid hex color");
  });

  test.each([
    [7, "AAA"],
    [4.5, "AA"],
    [3, "AA large"],
    [2.9, "Fail"],
  ] as const)("ratio %s maps to %s", (ratio, level) => {
    expect(wcagLevel(ratio)).toBe(level);
  });
});
