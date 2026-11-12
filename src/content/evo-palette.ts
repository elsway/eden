/** Evo color palette, extracted from playbook.ebay.com/foundations/color/using-color. */

export interface ColorTone {
  readonly step: number;
  readonly hex: string;
}

export interface ColorFamily {
  readonly name: string;
  readonly tones: readonly ColorTone[];
}

const family = (name: string, tones: Record<number, string>): ColorFamily => ({
  name,
  tones: Object.entries(tones).map(([step, hex]) => ({ step: Number(step), hex })),
});

export const EVO_PALETTE: readonly ColorFamily[] = [
  family("Red", { 200: "#FFDEDE", 300: "#FFA0A0", 400: "#FF5C5C", 500: "#F02D2D", 700: "#570303", 800: "#2A0303" }),
  family("Coral", { 200: "#FFE1D7", 300: "#FFA78A", 400: "#FF6A38", 500: "#F3511B", 700: "#5E1D08", 800: "#2F0E04" }),
  family("Orange", { 200: "#FFEAD3", 300: "#FFC382", 400: "#FF8806", 500: "#EC7303", 700: "#562501", 800: "#2F1604" }),
  family("Marigold", { 200: "#FFF0D3", 300: "#FFD480", 400: "#FFA800", 500: "#E99A02", 700: "#562F01", 800: "#2F1B04" }),
  family("Yellow", { 200: "#FFF8D5", 300: "#FFE58A", 400: "#FFBD14", 500: "#EEBB04", 700: "#553B06", 800: "#312102" }),
  family("Dijon", { 200: "#FCF9DE", 300: "#FAEF8A", 400: "#F6E016", 500: "#E8D20C", 700: "#524500", 800: "#2E2400" }),
  family("Avocado", { 200: "#F8FCDE", 300: "#E9F5A0", 400: "#E3F13C", 500: "#C1D737", 700: "#4E4E0C", 800: "#282306" }),
  family("Green", { 200: "#F0FCE1", 400: "#AAED56", 500: "#92C821", 700: "#345110" }),
  family("Kiwi", { 200: "#E0FAE0", 400: "#4CE160", 500: "#3CC14E", 700: "#1B561A", 800: "#0C310D" }),
  family("Jade", { 200: "#D8F8EE", 400: "#1ED49E", 500: "#17C28F", 700: "#055743", 800: "#002B20" }),
  family("Teal", { 200: "#D7F4F6", 400: "#44CCD5", 500: "#1BBFCA", 700: "#07465A" }),
  family("Indigo", { 200: "#D3EFFE", 400: "#0AA7FF", 500: "#0099F0", 700: "#003C66", 800: "#01193D" }),
  family("Blue", { 200: "#D4E5FE", 400: "#4D93FC", 500: "#0968F6", 700: "#002A69", 800: "#19133A" }),
  family("Violet", { 200: "#E2DDFD", 400: "#836BFF", 500: "#583AEE", 700: "#271A68", 800: "#20092B" }),
  family("Lilac", { 200: "#EFDDFD", 400: "#B56BF0", 500: "#8935CB", 700: "#3E135F", 800: "#2F041E" }),
  family("Pink", { 200: "#FCDCEC", 300: "#F79CC8", 400: "#F155A0", 500: "#DE458E", 700: "#4B112D", 800: "#360606" }),
];

export function toneOf(fam: ColorFamily, step: number): string | undefined {
  return fam.tones.find((t) => t.step === step)?.hex;
}
