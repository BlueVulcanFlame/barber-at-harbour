import type { Metadata } from "next";
import { DM_Serif_Display, Inter, UnifrakturCook } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const unifraktur = UnifrakturCook({
  variable: "--font-unifraktur",
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Barber @ the Harbour — Wyndham Harbour, Werribee South",
  description:
    "Sam's barber shop on the harbour. Old-school cuts and clean lines, since 2018. Walk in, sit down, fresh cut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} ${unifraktur.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
