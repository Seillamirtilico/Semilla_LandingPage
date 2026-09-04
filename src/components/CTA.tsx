"use client";

import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import {
  hoverCtaGlow,
  sectionReveal,
  springHover,
  viewportOnce,
} from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section
      id="comprar"
      className="px-6 py-32"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(245,240,232,0.05) 0%, transparent 70%)",
      }}
    >
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-[#ededed] md:text-5xl">
          40 unidades. Ni una más.
        </h2>
        <p className="mt-4 text-lg text-neutral-400">
          Una vez se acaben, se acaban.
        </p>
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={hoverCtaGlow}
          transition={springHover}
          className="mt-10 rounded-full bg-[#f5f0e8] px-12 py-5 text-lg font-semibold text-black"
        >
          Comprar por WhatsApp →
        </motion.a>
        <p className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
          <Lock className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
          Compra directa. Sin intermediarios.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-neutral-400">
            🚚 Envío gratis en Bogotá
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-neutral-400">
            💳 Pago contra entrega
          </span>
        </div>
      </motion.div>
    </section>
  );
}
