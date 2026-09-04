import type { Transition, Variants } from "framer-motion";

export const easeOut = "easeOut" as const;

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const heroWordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const heroSubhead: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.7, ease: easeOut },
  },
};

export const heroCtas: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.7, duration: 0.7, ease: easeOut },
  },
};

export const viewportOnce = { once: true } as const;

export const floatTransition: Transition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};

export const floatAnimate = { y: [0, -8, 0] };

export const springHover: Transition = {
  type: "spring",
  stiffness: 300,
};

export const hoverCard = { scale: 1.03 };
export const hoverCta = { scale: 1.05 };

export const hoverCtaGlow = {
  scale: 1.05,
  boxShadow: "0 0 40px rgba(245,240,232,0.3)",
};
