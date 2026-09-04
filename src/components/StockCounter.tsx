"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const STOCK_CONFIG = {
  total: 40,
  available: 38,
} as const;

export function StockCounter() {
  const stockPercentage = (STOCK_CONFIG.available / STOCK_CONFIG.total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={viewportOnce}
      className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8"
    >
      <p className="text-xs tracking-widest text-neutral-400 uppercase">
        Drop 01 — Unidades disponibles
      </p>
      
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-7xl font-bold font-mono text-[#f5f0e8]">
          {STOCK_CONFIG.available}
        </span>
        <span className="text-2xl text-neutral-500 font-mono">
          / {STOCK_CONFIG.total}
        </span>
      </div>

      <div className="mt-6 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${stockPercentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="h-full bg-[#f5f0e8]"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <span className="text-xs text-neutral-400">🔴 Alta demanda</span>
        <span className="text-xs text-neutral-400">Última actualización: hoy</span>
      </div>

      <p className="mt-4 text-neutral-500 text-xs">
        * El stock se actualiza manualmente. Confirma disponibilidad por WhatsApp.
      </p>
    </motion.div>
  );
}
