/** WCAG 2.x relative luminance and contrast ratio. */

const HEX_PATTERN = /^#?([0-9a-f]{6})$/i;

function channel(value: number): number {
  const c = value / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

export function luminance(hex: string): number {
  const match = HEX_PATTERN.exec(hex.trim());
  if (!match) throw new Error(`Invalid hex color: ${hex}`);
  const n = Number.parseInt(match[1], 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(channel);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** Smallest WCAG level met for normal-size text. */
export function wcagLevel(ratio: number): "AAA" | "AA" | "AA large" | "Fail" {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA large";
  return "Fail";
}
