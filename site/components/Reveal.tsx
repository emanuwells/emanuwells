"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { EASE_OUT_EXPRESSIVE, VIEWPORT_ONCE, fadeUp, riseSoft, useMotionSafe } from "@/lib/motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  soft = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  soft?: boolean;
}) {
  const motionSafe = useMotionSafe();

  if (!motionSafe) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      custom={delay}
      variants={soft ? riseSoft : fadeUp}
      transition={{ duration: soft ? 0.6 : 0.55, delay, ease: EASE_OUT_EXPRESSIVE }}
    >
      {children}
    </motion.div>
  );
}
