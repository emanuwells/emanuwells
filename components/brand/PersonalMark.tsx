"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function PersonalMark({
  variant = "header",
  href = "/",
}: {
  variant?: "header" | "hero";
  href?: string;
}) {
  const reduceMotion = useReducedMotion();
  const mark = (
    <span className={`wells-brand wells-brand--${variant}`} aria-label="emanuwells">
      <span className="wells-brand-glow" aria-hidden />
      <span className="wells-brand-lockup">
        <span className={`wells-brand-title ${reduceMotion ? "" : "wells-brand-title--animated"}`}>
          <span className="wells-brand-well">emanu</span>
          <span className="wells-brand-os">wells</span>
        </span>
      </span>
    </span>
  );

  const linkedMark = (
    <Link href={href} className="wells-logo-link">
      {mark}
    </Link>
  );

  if (reduceMotion || variant === "header") return linkedMark;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {linkedMark}
    </motion.div>
  );
}
