"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { hoverCta, springHover } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 h-16 border-b border-white/5 backdrop-blur-lg transition-colors duration-500",
        scrolled ? "bg-black/85" : "bg-black/60",
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2"
        >
          <Image
  src="/logo/semilla-logo.png"
  alt="Semilla logo"
  width={200}
  height={500}
  className="object-contain"
  style={{ height: "40px", width: "auto" }}
/>
        </a>
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverCta}
          transition={springHover}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#ededed] transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Drop 01 ↗
        </motion.a>
      </div>
    </motion.header>
  );
}
