import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

const display = Newsreader({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"] });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ibukun Aluko — Product engineer (Next.js, React Native, AI/ML, Spring Boot)",
  description: "Web and mobile products with AI built in, on Spring Boot backends. Based in Abuja, open to remote roles worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
