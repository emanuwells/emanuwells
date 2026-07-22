import { useReducedMotion, type Transition, type Variants } from "framer-motion";

export const EASE_OUT_EXPRESSIVE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_STANDARD = [0.4, 0, 1, 1] as const;

export const VIEWPORT_ONCE = { once: true, margin: "-60px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: EASE_OUT_EXPRESSIVE },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_OUT_EXPRESSIVE },
  },
};

export const slideInX: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPRESSIVE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: EASE_OUT_EXPRESSIVE },
  },
};

export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT_EXPRESSIVE },
  },
};

export const menuPanel: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.28, ease: EASE_OUT_EXPRESSIVE },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: EASE_IN_STANDARD },
  },
};

export const hoverLift = { y: -3 };
export const tapPress = { scale: 0.98 };

export const springSoft: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 28,
  mass: 0.4,
};

export function useMotionSafe() {
  return !useReducedMotion();
}
