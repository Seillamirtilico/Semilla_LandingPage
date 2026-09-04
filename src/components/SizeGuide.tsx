"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";

const ROWS = [
  { size: "S", chest: "56", length: "69", shoulders: "52", sleeve: "22.0" },
  { size: "M", chest: "59", length: "72", shoulders: "55", sleeve: "23.5" },
  { size: "L", chest: "62", length: "74", shoulders: "58", sleeve: "25.0" },
  { size: "XL", chest: "65", length: "77", shoulders: "61", sleeve: "26.5" },
] as const;

const COLUMNS = ["Talla", "Pecho", "Largo", "Hombros", "Manga"] as const;

export function SizeGuide() {
  return (
    <section id="tallas" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[#ededed]">
            Guía de tallas.
          </h2>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="bg-white/5">
                    {COLUMNS.map((column, index) => (
                      <th
                        key={column}
                        className={`px-4 py-3 font-medium tracking-wide text-neutral-400 ${
                          index === 0 ? "rounded-l-xl" : ""
                        } ${index === COLUMNS.length - 1 ? "rounded-r-xl" : ""}`}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr
                      key={row.size}
                      className="border-b border-white/5 transition-colors hover:bg-white/5"
                    >
                      <td className="px-4 py-4 font-semibold text-[#ededed]">
                        {row.size}
                      </td>
                      <td className="px-4 py-4 font-mono text-[#f5f0e8]">
                        {row.chest}
                      </td>
                      <td className="px-4 py-4 font-mono text-[#f5f0e8]">
                        {row.length}
                      </td>
                      <td className="px-4 py-4 font-mono text-[#f5f0e8]">
                        {row.shoulders}
                      </td>
                      <td className="px-4 py-4 font-mono text-[#f5f0e8]">
                        {row.sleeve}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-neutral-500">
              * Medidas en centímetros. Tolerancia ±1cm.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
