import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEMILLA — Drop 01",
  description:
    "Streetwear minimalista con bordado de alta densidad. Drop 01, edición limitada de 40 unidades. Bogotá.",
  icons: {
    icon: "/logo/logo-pequeno.png",
    shortcut: "/logo/logo-pequeno.png",
    apple: "/logo/logo-pequeno.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0a0a0a] text-[#ededed]">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
