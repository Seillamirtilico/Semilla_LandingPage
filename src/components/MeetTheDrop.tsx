"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { viewportOnce, easeOut } from "@/lib/motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
} as const;

export function MeetTheDrop() {
  return (
    <section id="meet-the-drop" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest text-neutral-400 uppercase mb-4">
            Drop 01 — Los personajes
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#ededed] mb-4">
            Conoce a los protagonistas.
          </h2>
          <p className="text-neutral-400 text-base">
            Cada prenda tiene una historia.
          </p>
        </motion.div>

        {/* Character Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1: Semilla Spidi */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededed]">
              Semilla Spidi
            </h3>
            
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="my-8"
            >
              <Image
                src="/characters/character-left.png"
                alt="Semilla Spidi"
                width={500}
                height={500}
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </motion.div>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Sí, es Spider-Man. No, no tiene el apartamento ni la novia ni el
              reconocimiento. Tiene el barrio, tiene el traje y tiene más
              problemas de los que pidió. Semilla Spidi no eligió esto — pero
              tampoco lo cambiaría.
            </p>
          </motion.div>

          {/* Card 2: Semilla Ing */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededed]">
              Semilla Ing
            </h3>
            
            <motion.div
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="my-8"
            >
              <Image
                src="/characters/semilla-usb.png"
                alt="Semilla Ing"
                width={512}
                height={512}
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </motion.div>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Siempre ocupado, nunca descansado. Tiene mil proyectos en la
              cabeza y los ojos de alguien que lleva tres días sin dormir bien.
              El USB es su amuleto — no sabe exactamente qué hay guardado ahí,
              pero sin él no sale. Semilla Ing no le teme al futuro. Le teme a
              quedarse atrás.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
