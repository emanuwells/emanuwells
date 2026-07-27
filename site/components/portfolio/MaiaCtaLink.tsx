"use client";

import Link from "next/link";
import { maiaPageLabel } from "@/lib/content/portfolio";
import { useLang, t } from "@/lib/i18n";

export default function MaiaCtaLink() {
  const { lang } = useLang();

  return (
    <Link
      href="/maia"
      className="group inline-flex items-center gap-2 rounded-[999px] border border-[var(--cyber-cyan)] px-5 py-2.5 text-sm font-semibold text-[var(--cyber-cyan-bright)] bg-transparent hover:bg-[rgba(77,216,232,0.08)] shadow-[var(--cyber-glow-cyan)] transition-all hover:shadow-[0_0_16px_var(--cyber-cyan-glow)]"
    >
      {t(maiaPageLabel, lang)}
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
