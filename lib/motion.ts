import { useReducedMotion } from "framer-motion";

export const EASE_OUT_EXPRESSIVE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_STANDARD = [0.4, 0, 1, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: EASE_OUT_EXPRESSIVE },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: EASE_OUT_EXPRESSIVE },
  },
};

export function useMotionSafe() {
  return !useReducedMotion();
}
