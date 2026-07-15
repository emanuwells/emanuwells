"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_EXPRESSIVE } from "@/lib/motion";

export function BentoGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>{children}</div>;
  }
  return (
    <motion.div
      className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
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
  const reduce = useReducedMotion();
  const spanClass = span === 2 ? "md:col-span-2" : span === 3 ? "col-span-full" : "";
  const classNames = `glass-card p-5 ${spanClass} ${className}`;
  const style = accent ? { borderLeft: `3px solid ${accent}` } : undefined;

  if (reduce) {
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
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE_OUT_EXPRESSIVE } },
      }}
      whileHover={{ y: -3 }}
    >
      {children}
    </motion.article>
  );
}
