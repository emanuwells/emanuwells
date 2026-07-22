"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { portfolioNavItems } from "@/lib/content/portfolio";
import { maiaNavItems, maiaBackLabel, maiaDisclaimer } from "@/lib/content/maia";
import { useLang, t } from "@/lib/i18n";
import { menuPanel, tapPress } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";
import PersonalMark from "@/components/brand/PersonalMark";

export type HeaderVariant = "portfolio" | "maia";

const EXTRA_NAV = [
  { id: "maia-link", href: "/maia", label: { pt: "Maia", en: "Maia" } },
] as const;

function NavUnderline({ layoutId }: { layoutId: string }) {
  return (
    <motion.span
      layoutId={layoutId}
      className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[var(--theme-accent)]"
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
    />
  );
}

export default function WellsHeader({ variant = "portfolio" }: { variant?: HeaderVariant }) {
  const { lang, toggle } = useLang();
  const reduce = useReducedMotion();
  const menuId = useId();
  const [active, setActive] = useState(variant === "maia" ? "intro" : "hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  const sectionIds = useMemo(
    () => (variant === "maia" ? maiaNavItems.map((i) => i.id) : portfolioNavItems.map((i) => i.id)),
    [variant]
  );
  const underlineId = variant === "maia" ? "maia-nav-underline" : "portfolio-nav-underline";
  const mobileUnderlineId = `${underlineId}-mobile`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  const headerClass = `fixed top-0 inset-x-0 z-50 transition-all border-b border-[var(--theme-glass-border)] ${
    scrolled || variant === "maia" ? "glass-header shadow-sm" : "bg-transparent"
  }`;

  const navBtnClass = (id: string) =>
    `relative px-2.5 py-1.5 text-sm transition-colors ${
      active === id
        ? "text-[var(--theme-accent)]"
        : "text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)]"
    }`;

  const motionNavProps = reduce
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: tapPress,
      };

  return (
    <header className={headerClass}>
      <motion.div
        className="h-0.5 origin-left bg-[var(--theme-accent)]"
        style={reduce ? { scaleX: 0 } : { scaleX: progressScale }}
        aria-hidden
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 min-w-0">
          {variant === "maia" ? (
            <motion.div {...motionNavProps}>
              <Link
                href="/"
                className="text-sm text-[var(--theme-accent)] shrink-0 border-b border-transparent pb-0.5 hover:border-[var(--theme-accent)] transition-colors"
              >
                ← {t(maiaBackLabel, lang)}
              </Link>
            </motion.div>
          ) : (
            <PersonalMark variant="header" href="/" />
          )}
        </div>

        {variant === "portfolio" && (
          <nav aria-label="Principal" className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {portfolioNavItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className={navBtnClass(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                {...motionNavProps}
              >
                {t(item.label, lang)}
                {active === item.id && !reduce && <NavUnderline layoutId={underlineId} />}
              </motion.button>
            ))}
            {EXTRA_NAV.map((item) => (
              <motion.div key={item.id} {...motionNavProps}>
                <Link
                  href={item.href}
                  className="relative px-2.5 py-1.5 text-sm text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)] transition-colors"
                >
                  {t(item.label, lang)}
                </Link>
              </motion.div>
            ))}
          </nav>
        )}

        {variant === "maia" && (
          <nav aria-label="Capítulos" className="hidden md:flex gap-1 overflow-x-auto no-scrollbar flex-1 justify-center">
            {maiaNavItems.map((ch) => (
              <motion.button
                key={ch.id}
                type="button"
                onClick={() => goTo(ch.id)}
                className={`${navBtnClass(ch.id)} text-xs whitespace-nowrap`}
                aria-current={active === ch.id ? "true" : undefined}
                {...motionNavProps}
              >
                {t(ch.label, lang)}
                {active === ch.id && !reduce && <NavUnderline layoutId={underlineId} />}
              </motion.button>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2 shrink-0">
          <motion.button
            type="button"
            onClick={toggle}
            className="lang-pill"
            aria-label={lang === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
            {...motionNavProps}
          >
            <span className={lang === "pt" ? "text-[var(--theme-accent)]" : "text-[var(--theme-text-muted)]"}>
              PT
            </span>
            <span className="text-[var(--theme-text-muted)]">/</span>
            <span className={lang === "en" ? "text-[var(--theme-accent)]" : "text-[var(--theme-text-muted)]"}>
              EN
            </span>
          </motion.button>
          <motion.button
            type="button"
            className={`${variant === "portfolio" ? "lg:hidden" : "md:hidden"} px-2.5 py-1.5 text-sm border border-[var(--theme-glass-border)] rounded-md text-[var(--theme-text)]`}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
            {...motionNavProps}
          >
            {open ? (lang === "pt" ? "Fechar" : "Close") : "Menu"}
          </motion.button>
        </div>
      </div>

      {variant === "maia" && (
        <p className="text-center text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-warn)] pb-2 px-4">
          {t(maiaDisclaimer, lang)}
        </p>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id={menuId}
            key="mobile-nav"
            aria-label={variant === "maia" ? "Capítulos" : "Principal"}
            className={`${variant === "portfolio" ? "lg:hidden" : "md:hidden"} overflow-hidden border-t border-[var(--theme-glass-border)]`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={reduce ? undefined : menuPanel}
          >
            <div className="px-4 py-3 flex flex-col gap-0.5">
              {variant === "portfolio" &&
                portfolioNavItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`relative text-left py-2.5 text-sm ${
                      active === item.id ? "text-[var(--theme-accent)]" : "text-[var(--theme-text)]"
                    }`}
                    onClick={() => goTo(item.id)}
                    aria-current={active === item.id ? "true" : undefined}
                  >
                    {t(item.label, lang)}
                    {active === item.id && !reduce && <NavUnderline layoutId={mobileUnderlineId} />}
                  </button>
                ))}
              {variant === "portfolio" && (
                <Link
                  href="/maia"
                  className="py-2.5 text-sm text-[var(--theme-text)] hover:text-[var(--theme-accent)]"
                  onClick={() => setOpen(false)}
                >
                  Maia
                </Link>
              )}
              {variant === "maia" &&
                maiaNavItems.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    className={`relative text-left py-2.5 text-sm ${
                      active === ch.id ? "text-[var(--theme-accent)]" : "text-[var(--theme-text)]"
                    }`}
                    onClick={() => goTo(ch.id)}
                    aria-current={active === ch.id ? "true" : undefined}
                  >
                    {t(ch.label, lang)}
                    {active === ch.id && !reduce && <NavUnderline layoutId={mobileUnderlineId} />}
                  </button>
                ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
