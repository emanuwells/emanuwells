"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

export default function SectionNavFab({ sectionIds }: { sectionIds: string[] }) {
  const reduce = useReducedMotion();
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = ids.indexOf(e.target.id);
          if (idx >= 0) setActiveIndex(idx);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids]);

  if (ids.length === 0) return null;

  const goTop = () => {
    if (reduce) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    const next = Math.min(activeIndex + 1, ids.length - 1);
    if (next === activeIndex && activeIndex === ids.length - 1) {
      goTop();
      return;
    }
    scrollToSection(ids[next]);
  };

  const atEnd = activeIndex >= ids.length - 1;

  return (
    <div
      className={`section-nav-fab fixed z-40 flex flex-col gap-2 transition-opacity duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="navigation"
      aria-label="Navegação entre secções"
    >
      <button
        type="button"
        onClick={goTop}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--theme-glass-border)] bg-[color-mix(in_oklab,var(--theme-bg)_82%,transparent)] text-[var(--theme-text)] shadow-[var(--cyber-glow-cyan)] backdrop-blur-md transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
        aria-label="Voltar ao início"
      >
        <ChevronUp size={20} aria-hidden />
      </button>
      <button
        type="button"
        onClick={goNext}
        disabled={atEnd}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--theme-glass-border)] bg-[color-mix(in_oklab,var(--theme-bg)_82%,transparent)] text-[var(--theme-text)] shadow-[var(--cyber-glow-cyan)] backdrop-blur-md transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)] disabled:opacity-35 disabled:pointer-events-none"
        aria-label={atEnd ? "Última secção" : "Secção seguinte"}
      >
        <ChevronDown size={20} aria-hidden />
      </button>
    </div>
  );
}
