"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  floatAnimate,
  floatTransition,
  heroCtas,
  heroSubhead,
  heroWord,
  heroWordContainer,
  hoverCta,
  sectionReveal,
  springHover,
  viewportOnce,
} from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const HEADLINE = ["Semilla"];

export function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <section className="flex min-h-screen items-center px-6 py-20 lg:py-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-1 flex-col items-start">
          <motion.span
            animate={floatAnimate}
            transition={floatTransition}
            className="mb-8 rounded-full bg-white/10 px-4 py-1 text-xs tracking-widest text-[#ededed]"
          >
            Drop 01 — Edición Limitada 40 unidades
          </motion.span>

          <motion.h1
            variants={heroWordContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl font-semibold tracking-tight text-[#ededed] md:text-6xl lg:text-7xl"
          >
            {HEADLINE.map((word) => (
              <motion.span
                key={word}
                variants={heroWord}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={heroSubhead}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-md text-lg leading-relaxed text-neutral-400"
          >
            Ni logos exagerados, ni la misma polo aburrida de siempre.
            Streetwear minimalista con detalles bordados de alta densidad.
          </motion.p>

          <motion.div
            variants={heroCtas}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={hoverCta}
              transition={springHover}
              className="rounded-full bg-[#f5f0e8] px-8 py-4 text-center font-medium text-black"
            >
              Adquirir vía WhatsApp
            </motion.a>
            <motion.a
              href="#specs"
              whileHover={hoverCta}
              transition={springHover}
              className="rounded-full border border-white/20 px-8 py-4 text-center text-[#ededed]"
            >
              Ver especificaciones ↓
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: parallaxY }}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full max-w-md flex-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
              <Image
                src="/mockups/hero-tshirt.jpg"
                alt="Semilla Drop 01 T-shirt"
                fill
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs tracking-wide text-[#ededed] backdrop-blur">
                220-260 g/m² · Algodón Peinado
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
