import type { Metadata } from "next";
import { Cal_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const calSans = Cal_Sans({
  variable: "--font-cal-sans",
  weight: "400",
  subsets: ["latin"],
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
