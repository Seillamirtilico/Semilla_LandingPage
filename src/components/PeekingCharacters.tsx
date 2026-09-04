"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Visual size balance
 * -------------------
 * Every source PNG is (near) square, but each character fills a different
 * share of its canvas, so identical box sizes read as very different sizes.
 * Measured opaque content, as a fraction of the canvas (w x h):
 *
 *   character-left   (Spidi)   0.618 x 0.814  -> dense, tall   -> smaller box
 *   character-right  (Homie)   0.578 x 0.738  -> lots of margin -> bigger box
 *   semilla-usb      (Ing)     0.714 x 0.732  -> widest fill    -> smaller box
 *   semilla-mujer    (Rockera) 0.603 x 0.718  -> lots of margin -> bigger box
 *   semilla-skinhead (Punk)    0.672 x 0.700  -> baseline
 *   semilla-hoodie   (Hoodie)  0.585 x 0.748  -> lots of margin -> bigger box
 *
 * Each box is scaled by 1 / sqrt(fillW * fillH) against a w-40 (160px)
 * desktop / w-24 (96px) mobile baseline, so the rendered artwork lands on the
 * same perceived footprint for all six.
 */
const SIZE = {
  spidi: "w-23 h-23 md:w-38 md:h-38",
  homie: "w-25 h-25 md:w-42 md:h-42",
  ing: "w-23 h-23 md:w-38 md:h-38",
  rockera: "w-25 h-25 md:w-42 md:h-42",
  punk: "w-24 h-24 md:w-40 md:h-40",
  hoodie: "w-25 h-25 md:w-41 md:h-41",
} as const;

export function PeekingCharacters() {
  const { scrollY } = useScroll();

  const leftParallaxY = useTransform(scrollY, [0, 1000], [0, -60]);
  const rightParallaxY = useTransform(scrollY, [0, 1000], [0, -40]);
  const topLeftParallaxY = useTransform(scrollY, [0, 1000], [0, 50]);
  const topRightParallaxY = useTransform(scrollY, [0, 1000], [0, 40]);

  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVerySmallScreen(window.innerWidth < 320);
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isVerySmallScreen) {
    return null;
  }

  const opacity = isMobile ? "opacity-70" : "opacity-75 md:opacity-85";

  if (isMobile) {
    return (
      <>
        {/* Left Character - Mobile */}
        <motion.div
          initial={{ x: -80, y: 80, opacity: 0 }}
          animate={{ x: -12, y: 12, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className={`fixed bottom-0 left-0 ${SIZE.spidi} ${opacity} pointer-events-none z-0`}
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
              width={224}
              height={224}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Right Character - Mobile */}
        <motion.div
          initial={{ x: 80, y: 80, opacity: 0 }}
          animate={{ x: 12, y: 12, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className={`fixed bottom-0 right-0 ${SIZE.homie} ${opacity} pointer-events-none z-0`}
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
              width={224}
              height={224}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      {/* Left Character - Semilla Spidi */}
      <motion.div
        style={{ y: leftParallaxY }}
        initial={{ x: -140, y: 140, opacity: 0 }}
        animate={{ x: -20, y: 20, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className={`fixed bottom-0 left-0 ${SIZE.spidi} ${opacity} pointer-events-none z-0`}
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
            width={224}
            height={224}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Right Character - Semilla Homie */}
      <motion.div
        style={{ y: rightParallaxY }}
        initial={{ x: 140, y: 140, opacity: 0 }}
        animate={{ x: 20, y: 20, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className={`fixed bottom-0 right-0 ${SIZE.homie} ${opacity} pointer-events-none z-0`}
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
            width={224}
            height={224}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 3 - Semilla Ing - Top Left */}
      <motion.div
        style={{ y: topLeftParallaxY }}
        initial={{ x: -120, y: -120, opacity: 0 }}
        animate={{ x: -15, y: -15, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
        className={`fixed top-0 left-0 ${SIZE.ing} ${opacity} pointer-events-none z-0`}
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
            width={176}
            height={176}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 4 - Semilla Rockera - Top Right */}
      <motion.div
        style={{ y: topRightParallaxY }}
        initial={{ x: 120, y: -120, opacity: 0 }}
        animate={{ x: 15, y: -15, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
        className={`fixed top-0 right-0 ${SIZE.rockera} ${opacity} pointer-events-none z-0`}
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
            width={176}
            height={176}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 5 - Semilla Punk - Middle Left */}
      <motion.div
        initial={{ x: -130, opacity: 0 }}
        animate={{ x: -18, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
        className={`fixed left-0 top-1/2 -translate-y-1/2 ${SIZE.punk} ${opacity} pointer-events-none z-0`}
      >
        <motion.div
          animate={{ x: [-18, -10, -18], rotate: [0, 3, 0] }}
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
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Character 6 - Semilla Hoodie - Middle Right */}
      <motion.div
        initial={{ x: 130, opacity: 0 }}
        animate={{ x: 18, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2.0 }}
        className={`fixed right-0 top-1/2 -translate-y-1/2 ${SIZE.hoodie} ${opacity} pointer-events-none z-0`}
      >
        <motion.div
          animate={{ x: [18, 10, 18], rotate: [0, -3, 0] }}
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
            width={164}
            height={164}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
