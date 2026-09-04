"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * Visual size balance
 * -------------------
 * Every source PNG is (near) square, but each character fills a different
 * share of its canvas, so identical box sizes read as very different sizes.
 * Measured opaque content, as a fraction of the canvas (w x h):
 *
 *   character-left   (Spidi)   0.618 x 0.814  -> dense, tall   -> smaller box
 *   character-right  (Homie)   0.578 x 0.738  -> lots of margin -> bigger box
 *   semilla-usb      (Ing)     0.715 x 0.732  -> widest fill    -> smaller box
 *   semilla-mujer    (Rockera) 0.604 x 0.719  -> lots of margin -> bigger box
 *   semilla-skinhead (Punk)    0.674 x 0.701  -> baseline
 *   semilla-hoodie   (Hoodie)  0.586 x 0.760  -> lots of margin -> bigger box
 *
 * Each box is scaled by 1 / sqrt(fillW * fillH) against a baseline, so the
 * rendered artwork lands on the same perceived footprint for all six:
 *
 *   desktop   w-40 (160px) baseline, every character
 *   mobile    w-20 (80px) corners, w-16 (64px) mid-edge
 *
 * All six show at every size. Visibility is CSS-only so the server and client
 * render identical markup; the only cutoff is below 320px, where there is no
 * room left to peek from.
 */
const CHARACTER =
  "fixed pointer-events-none z-0 opacity-70 md:opacity-85 max-[319px]:hidden";

const SIZE = {
  spidi: "w-19 h-19 md:w-38 md:h-38",
  homie: "w-21 h-21 md:w-42 md:h-42",
  ing: "w-19 h-19 md:w-38 md:h-38",
  rockera: "w-21 h-21 md:w-42 md:h-42",
  punk: "w-16 h-16 md:w-40 md:h-40",
  hoodie: "w-16 h-16 md:w-41 md:h-41",
} as const;

export function PeekingCharacters() {
  const { scrollY } = useScroll();

  const leftParallaxY = useTransform(scrollY, [0, 1000], [0, -60]);
  const rightParallaxY = useTransform(scrollY, [0, 1000], [0, -40]);
  const topLeftParallaxY = useTransform(scrollY, [0, 1000], [0, 50]);
  const topRightParallaxY = useTransform(scrollY, [0, 1000], [0, 40]);

  return (
    <>
      {/* Character 1 - Semilla Spidi - Bottom Left */}
      <motion.div
        style={{ y: leftParallaxY }}
        initial={{ x: -140, y: 140, opacity: 0 }}
        animate={{ x: -20, y: 20, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className={`bottom-0 left-0 ${SIZE.spidi} ${CHARACTER}`}
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Image
            src="/characters/character-left.png"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 2 - Semilla Homie - Bottom Right */}
      <motion.div
        style={{ y: rightParallaxY }}
        initial={{ x: 140, y: 140, opacity: 0 }}
        animate={{ x: 20, y: 20, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className={`bottom-0 right-0 ${SIZE.homie} ${CHARACTER}`}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Image
            src="/characters/character-right.png"
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 3 - Semilla Ing - Top Left (below the 64px header) */}
      <motion.div
        style={{ y: topLeftParallaxY }}
        initial={{ x: -120, y: -80, opacity: 0 }}
        animate={{ x: -15, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
        className={`top-16 left-0 ${SIZE.ing} ${CHARACTER}`}
      >
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Image
            src="/characters/semilla-usb.png"
            alt=""
            width={512}
            height={512}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 4 - Semilla Rockera - Top Right (below the 64px header) */}
      <motion.div
        style={{ y: topRightParallaxY }}
        initial={{ x: 120, y: -80, opacity: 0 }}
        animate={{ x: 15, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
        className={`top-16 right-0 ${SIZE.rockera} ${CHARACTER}`}
      >
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <Image
            src="/characters/semilla-mujer.png"
            alt=""
            width={512}
            height={512}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 5 - Semilla Punk - Middle Left */}
      <motion.div
        initial={{ x: -130, opacity: 0 }}
        animate={{ x: -18, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
        className={`left-0 top-1/2 -translate-y-1/2 ${SIZE.punk} ${CHARACTER}`}
      >
        <motion.div
          animate={{ x: [0, 8, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Image
            src="/characters/semilla-skinhead.png"
            alt=""
            width={512}
            height={512}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 6 - Semilla Hoodie - Middle Right */}
      <motion.div
        initial={{ x: 130, opacity: 0 }}
        animate={{ x: 18, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2.0 }}
        className={`right-0 top-1/2 -translate-y-1/2 ${SIZE.hoodie} ${CHARACTER}`}
      >
        <motion.div
          animate={{ x: [0, -8, 0], rotate: [0, -3, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Image
            src="/characters/semilla-hoodie.png"
            alt=""
            width={512}
            height={504}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
