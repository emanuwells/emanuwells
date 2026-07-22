"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_EXPRESSIVE, hoverLift, scaleIn, staggerContainer, useMotionSafe, VIEWPORT_ONCE } from "@/lib/motion";

export function BentoGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  const motionSafe = useMotionSafe();
  if (!motionSafe) {
    return <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>{children}</div>;
  }
  return (
    <motion.div
      className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function BentoItem({
  children,
  className = "",
  accent,
  span = 1,
}: {
  children: ReactNode;
  className?: string;
  accent?: string;
  span?: 1 | 2 | 3;
}) {
  const motionSafe = useMotionSafe();
  const spanClass = span === 2 ? "md:col-span-2" : span === 3 ? "col-span-full" : "";
  const classNames = `glass-card p-5 ${spanClass} ${className}`;
  const style = accent ? { borderLeft: `3px solid ${accent}` } : undefined;

  if (!motionSafe) {
    return (
      <article className={classNames} style={style}>
        {children}
      </article>
    );
  }

  return (
    <motion.article
      className={classNames}
      style={style}
      variants={scaleIn}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPRESSIVE }}
      whileHover={hoverLift}
    >
      {children}
    </motion.article>
  );
}
