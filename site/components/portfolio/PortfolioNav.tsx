"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioNavItems } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";

export default function PortfolioNav() {
  const { lang, toggle } = useLang();
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const sections = portfolioNavItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border-soft)] bg-[var(--color-bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-[var(--color-accent)]"
        >
          EW / PORTFOLIO
        </button>

        <nav aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"} className="hidden md:flex items-center gap-1">
          {portfolioNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                active === item.id
                  ? "text-[var(--color-accent)] bg-[var(--color-surface)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {t(item.label, lang)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-[var(--color-text-muted)]"
          >
            <span className={lang === "pt" ? "text-[var(--color-accent)]" : ""}>PT</span>
            <span className="mx-1 text-[var(--color-border)]">/</span>
            <span className={lang === "en" ? "text-[var(--color-accent)]" : ""}>EN</span>
          </button>

          <button
            type="button"
            className="md:hidden px-3 py-1.5 text-sm border border-[var(--color-border)] rounded-md"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (lang === "pt" ? "Fechar" : "Close") : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div ref={menuRef} id="mobile-menu" className="md:hidden border-t border-[var(--color-border-soft)] bg-[var(--color-bg)] px-4 py-3">
          <nav aria-label={lang === "pt" ? "Menu móvel" : "Mobile menu"} className="flex flex-col gap-1">
            {portfolioNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="text-left py-2.5 text-sm text-[var(--color-text)]"
              >
                {t(item.label, lang)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function MaiaCtaLink() {
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
        className="group inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-5 py-3 text-sm font-medium text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors"
      >
        {label}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}
