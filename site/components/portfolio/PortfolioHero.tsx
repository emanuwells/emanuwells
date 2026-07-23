"use client";

import { motion } from "framer-motion";
import { hero, evidence } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import { fadeUp, staggerContainer, useMotionSafe } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";
import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";
import TerminalPanel from "@/components/ui/TerminalPanel";
import StatCard from "@/components/ui/StatCard";
import MaiaCtaLink from "./MaiaCtaLink";

function HeroContent({ lang, onProjects }: { lang: "pt" | "en"; onProjects: () => void }) {
  return (
    <>
      <TerminalPanel title="emanuwells@portfolio ~">
        <p className="text-[var(--theme-accent)] mb-2 text-sm sm:text-base">&gt; boot sequence</p>
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-[var(--theme-text)] leading-snug mb-4">
          <TypingText phrases={hero.typingPhrases[lang]} />
        </h1>
        <p className="text-sm sm:text-base text-[var(--theme-text-muted)] max-w-2xl leading-relaxed">
          {t(hero.subtitle, lang)}
        </p>
      </TerminalPanel>
      <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 mb-10">
        <Button type="button" variant="primary" onClick={onProjects}>
          {t(hero.ctaProjects, lang)}
        </Button>
        <MaiaCtaLink />
        <a href="https://wells-os.vercel.app" target="_blank" rel="noreferrer">
          <Button type="button" variant="tertiary" className="!inline-flex">
            {lang === "pt" ? "Conhecer o WELLS_OS" : "Explore WELLS_OS"} ↗
          </Button>
        </a>
      </div>
      <div>
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.05em] text-[var(--theme-accent)] mb-4">
          {t(evidence.eyebrow, lang)}
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {evidence.items.map((ev, i) => (
            <StatCard
              key={ev.value}
              value={ev.value}
              label={t(ev.label, lang)}
              glow={i % 2 === 0 ? "cyan" : "lime"}
            />
          ))}
        </dl>
      </div>
    </>
  );
}

export default function PortfolioHero() {
  const { lang } = useLang();
  const motionSafe = useMotionSafe();

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col px-4 sm:px-6 pt-24 pb-16 bg-grid overflow-hidden">
      <div className="hero-kenburns" aria-hidden />
      <div className="mx-auto max-w-4xl w-full flex-1 flex flex-col justify-center relative z-10">
        {motionSafe ? (
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <HeroContent lang={lang} onProjects={() => scrollToSection("projects")} />
            </motion.div>
          </motion.div>
        ) : (
          <HeroContent lang={lang} onProjects={() => scrollToSection("projects")} />
        )}
      </div>
    </section>
  );
}
