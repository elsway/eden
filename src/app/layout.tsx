import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Cal Sans 2 variable (calcom/sans v2.011, OFL): the same face bklit.com ships.
const calSans = localFont({
  src: "./fonts/CalSansVF.woff2",
  variable: "--font-cal-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foundations Hub",
  description: "eBay Evo Foundations, laid out with Bklit UI charts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`dark ${calSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
