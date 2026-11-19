import type { Metadata } from "next";
import { Barlow, Big_Shoulders, Big_Shoulders_Stencil, Martian_Mono } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({ subsets: ["latin"], variable: "--font-display" });
const stencil = Big_Shoulders_Stencil({ subsets: ["latin"], variable: "--font-stencil" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = Martian_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ibukun Aluko — Product engineer (Next.js, React Native, AI/ML, Spring Boot)",
  description: "Web and mobile products with AI built in, on Spring Boot backends. Based in Abuja, open to remote roles worldwide.",
};

const motionScript = `try{var m=localStorage.getItem("ia-motion");document.documentElement.dataset.motion=m||(matchMedia("(prefers-reduced-motion: reduce)").matches?"off":"on")}catch(e){document.documentElement.dataset.motion="on"}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${stencil.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: motionScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
