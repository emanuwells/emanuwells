"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { slideInX, useMotionSafe, VIEWPORT_ONCE } from "@/lib/motion";

export default function MaiaCtaLink() {
  const { lang } = useLang();
  const motionSafe = useMotionSafe();
  const label = lang === "pt" ? "Descobrir o trabalho na Maia" : "Discover the Maia work";

  const link = (
    <Link
      href="/maia"
      className="group inline-flex items-center gap-2 rounded-[999px] border border-[var(--cyber-cyan)] px-5 py-2.5 text-sm font-semibold text-[var(--cyber-cyan-bright)] bg-transparent hover:bg-[rgba(77,216,232,0.08)] shadow-[var(--cyber-glow-cyan)] transition-all hover:shadow-[0_0_16px_var(--cyber-cyan-glow)]"
    >
      {label}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );

  if (!motionSafe) return link;

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} variants={slideInX}>
      {link}
    </motion.div>
  );
}
