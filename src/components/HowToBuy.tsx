"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { viewportOnce } from "@/lib/motion";

const steps: {
  number: string;
  title: string;
  subtitle: ReactNode;
}[] = [
  {
    number: "01",
    title: "Elige tu talla",
    subtitle: (
      <>
        S, M, L o XL.{" "}
        <a
          href="#tallas"
          className="underline underline-offset-2 text-neutral-300 hover:text-[#f5f0e8] transition-colors"
        >
          Consulta las medidas si tienes dudas.
        </a>
      </>
    ),
  },
  {
    number: "02",
    title: "Escríbenos por WhatsApp",
    subtitle: "Indícanos tu talla y te confirmamos disponibilidad en menos de 2 horas.",
  },
  {
    number: "03",
    title: "Recibe en Bogotá",
    subtitle:
      "Coordinamos la entrega en Bogotá. Envío gratis + pago contra entrega disponible.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
} as const;

export function HowToBuy() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight mb-6 text-[#ededed]">
        ¿Cómo comprar?
      </h2>

      <div className="relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={itemVariants}
            className="relative mb-6 last:mb-0"
          >
            {/* Connector: dot center to next dot center. The last step draws
                none, so the line stops at dot 03 instead of trailing off. */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-4 top-4 -bottom-10 w-px bg-white/10"
                aria-hidden
              />
            )}
            <div className="flex items-start gap-4">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-mono text-sm text-[#f5f0e8]">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-medium text-[#ededed]">{step.title}</h3>
                <p className="text-sm text-neutral-400 mt-1">{step.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-8 block w-full rounded-full bg-[#f5f0e8] text-black font-medium py-4 text-center"
      >
        Comprar ahora →
      </motion.a>
    </motion.div>
  );
}
