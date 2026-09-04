"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="border-t border-white/5 px-6 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center text-xs tracking-wide text-neutral-500 md:flex-row md:justify-between md:text-left">
        <p>Semilla © 2026</p>
        <p>Drop 01 — 40 unidades · Bogotá, Colombia</p>
        <p>Hecho a mano.</p>
      </div>
    </motion.footer>
  );
}
