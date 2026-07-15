"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { maiaNavItems, maiaDisclaimer, maiaBackLabel } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";

export default function MaiaNav() {
  const { lang, toggle } = useLang();
  const [active, setActive] = useState(maiaNavItems[0].id);

  useEffect(() => {
    const sections = maiaNavItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const progress = maiaNavItems.findIndex((i) => i.id === active) + 1;
  const progressPct = Math.round((progress / maiaNavItems.length) * 100);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border-soft)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <Link href="/" className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-accent)] hover:underline">
            ← {t(maiaBackLabel, lang)}
          </Link>
          <p className="hidden sm:block text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-text-dim)] max-w-md text-center">
            {t(maiaDisclaimer, lang)}
          </p>
          <button type="button" onClick={toggle} className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
            <span className={lang === "pt" ? "text-[var(--color-accent)]" : ""}>PT</span>/<span className={lang === "en" ? "text-[var(--color-accent)]" : ""}>EN</span>
          </button>
        </div>
        <div className="h-1 rounded-full bg-[var(--color-surface)] overflow-hidden mb-2" aria-hidden>
          <div className="h-full bg-[var(--color-accent)] transition-all duration-300" style={{ width: `${progressPct}%` }} />
        </div>
        <nav aria-label={lang === "pt" ? "Capítulos Maia" : "Maia chapters"} className="flex gap-1 overflow-x-auto no-scrollbar">
          {maiaNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`shrink-0 px-3 py-1 text-xs rounded-full border transition-colors ${
                active === item.id
                  ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                  : "border-[var(--color-border)] text-[var(--color-text-dim)]"
              }`}
            >
              {t(item.label, lang)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
