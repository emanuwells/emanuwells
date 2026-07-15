"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolioNavItems } from "@/lib/content/portfolio";
import { maiaNavItems, maiaBackLabel, maiaDisclaimer } from "@/lib/content/maia";
import { useLang, t } from "@/lib/i18n";
import { HeaderClock } from "@/components/layout/FloatingCategories";
import PersonalMark from "@/components/brand/PersonalMark";
import WellsSearchBar from "@/components/search/WellsSearchBar";

export type HeaderVariant = "portfolio" | "maia";

const EXTRA_NAV = [
  { id: "maia-link", href: "/maia", label: { pt: "Maia", en: "Maia" } },
] as const;

export default function WellsHeader({ variant = "portfolio" }: { variant?: HeaderVariant }) {
  const { lang, toggle } = useLang();
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (variant !== "portfolio" && variant !== "maia") return;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    if (variant !== "portfolio") return;
    const sections = portfolioNavItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [variant]);

  useEffect(() => {
    if (variant !== "maia") return;
    const chapters = maiaNavItems.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      for (const ch of chapters) {
        const rect = ch.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) setActive(ch.id);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const headerClass = `fixed top-0 inset-x-0 z-50 transition-all ${scrolled || variant !== "portfolio" ? "glass-header shadow-sm" : ""}`;

  return (
    <header className={headerClass}>
      {(variant === "maia" || variant === "portfolio") && (
        <div
          className="h-0.5 bg-[var(--theme-accent)] origin-left transition-transform"
          style={{ transform: `scaleX(${progress / 100})`, width: "100%" }}
          aria-hidden
        />
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 min-w-0">
          {variant === "maia" ? (
            <Link href="/" className="text-sm text-[var(--theme-accent)] shrink-0">
              ← {t(maiaBackLabel, lang)}
            </Link>
          ) : (
            <PersonalMark variant="header" href="/" />
          )}
          <HeaderClock />
        </div>

        {variant === "portfolio" && (
          <nav aria-label="Main" className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {portfolioNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`px-2.5 py-1.5 text-sm rounded-md ${active === item.id ? "text-[var(--theme-accent)] bg-[var(--theme-card)]" : "text-[var(--theme-text-muted)]"}`}
              >
                {t(item.label, lang)}
              </button>
            ))}
            {EXTRA_NAV.map((item) => (
              <Link key={item.id} href={item.href} className="px-2.5 py-1.5 text-sm text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]">
                {t(item.label, lang)}
              </Link>
            ))}
          </nav>
        )}

        {variant === "maia" && (
          <nav aria-label="Chapters" className="hidden md:flex gap-1 overflow-x-auto no-scrollbar">
            {maiaNavItems.map((ch) => (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className={`px-2 py-1 text-xs rounded whitespace-nowrap ${active === ch.id ? "text-[var(--theme-accent)]" : "text-[var(--theme-text-muted)]"}`}
              >
                {t(ch.label, lang)}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2 shrink-0">
          <button type="button" onClick={toggle} className="lang-pill" aria-label="Language">
            <span className={lang === "pt" ? "text-[var(--cyber-lime-bright)]" : "text-[var(--cyber-text-muted)]"}>PT</span>
            <span className="text-[var(--cyber-text-muted)]">/</span>
            <span className={lang === "en" ? "text-[var(--cyber-lime-bright)]" : "text-[var(--cyber-text-muted)]"}>EN</span>
          </button>
          {variant === "portfolio" && (
            <button
              type="button"
              className="lg:hidden px-2 py-1 text-sm border border-[var(--theme-glass-border)] rounded-md"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          )}
        </div>
      </div>

      {variant === "maia" && (
        <p className="text-center text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-warn)] pb-2 px-4">
          {t(maiaDisclaimer, lang)}
        </p>
      )}

      {open && variant === "portfolio" && (
        <nav className="lg:hidden border-t border-[var(--theme-glass-border)] px-4 py-3 flex flex-col gap-1">
          {portfolioNavItems.map((item) => (
            <button key={item.id} type="button" className="text-left py-2 text-sm" onClick={() => scrollTo(item.id)}>
              {t(item.label, lang)}
            </button>
          ))}
          <Link href="/maia" className="py-2 text-sm">
            Maia
          </Link>
        </nav>
      )}
    </header>
  );
}

export function WellsHeaderSearchRow() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-4 pt-20">
      <WellsSearchBar />
    </div>
  );
}
