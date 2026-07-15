"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function MaiaCtaLink() {
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const label = lang === "pt" ? "Descobrir o trabalho na Maia" : "Discover the Maia work";

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: -12 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/maia"
        className="group inline-flex items-center gap-2 rounded-lg border border-[var(--theme-accent)]/40 bg-[var(--theme-card)] px-5 py-3 text-sm font-medium text-[var(--theme-accent)] hover:bg-[var(--theme-card-hover)] transition-colors"
      >
        {label}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}
