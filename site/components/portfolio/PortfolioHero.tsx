"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, evidence } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import { EASE_OUT_EXPRESSIVE } from "@/lib/motion";
import PersonalMark from "@/components/brand/PersonalMark";
import WellsSearchBar from "@/components/search/WellsSearchBar";
import Button from "@/components/ui/Button";
import { HeroTitle } from "@/components/ui/Typography";
import TypingText from "@/components/ui/TypingText";
import GlassPanel from "@/components/ui/GlassPanel";
import MaiaCtaLink from "./MaiaCtaLink";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPRESSIVE } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function PortfolioHero() {
  const { lang } = useLang();
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const inner = (
    <>
      <div className="mb-6">
        <PersonalMark variant="hero" />
      </div>
      <div className="mb-8">
        <WellsSearchBar />
      </div>
      <HeroTitle>
        <TypingText phrases={hero.typingPhrases[lang]} />
      </HeroTitle>
      <p className="text-lg text-[var(--theme-text-muted)] max-w-2xl leading-relaxed mt-8 mb-10">
        {t(hero.subtitle, lang)}
      </p>
      <div className="flex flex-wrap gap-4 mb-12">
        <Button type="button" onClick={() => scrollTo("projects")}>
          {t(hero.ctaProjects, lang)}
        </Button>
        <MaiaCtaLink />
        <a href="https://wells-os.vercel.app" target="_blank" rel="noreferrer" className="text-sm self-center text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)]">
          {lang === "pt" ? "Conhecer o WELLS_OS" : "Explore WELLS_OS"} ↗
        </a>
      </div>
      <GlassPanel className="p-6">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--theme-text-muted)] mb-4">
          {t(evidence.eyebrow, lang)}
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-[family-name:var(--font-mono)]">
          {evidence.items.map((ev) => (
            <div key={ev.value} className="glass-card p-4">
              <dd className="text-2xl text-[var(--theme-text)]">{ev.value}</dd>
              <dd className="text-xs text-[var(--theme-text-muted)] mt-1">{t(ev.label, lang)}</dd>
            </div>
          ))}
        </dl>
      </GlassPanel>
    </>
  );

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col px-4 sm:px-6 pt-24 pb-16 bg-grid overflow-hidden">
      <div className="hero-kenburns" aria-hidden />
      <div className="mx-auto max-w-4xl w-full flex-1 flex flex-col justify-center relative z-10">
        {reduce ? (
          inner
        ) : (
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="mb-6">
              <PersonalMark variant="hero" />
            </motion.div>
            <motion.div variants={item} className="mb-8">
              <WellsSearchBar />
            </motion.div>
            <motion.div variants={item}>
              <HeroTitle>
                <TypingText phrases={hero.typingPhrases[lang]} />
              </HeroTitle>
            </motion.div>
            <motion.div variants={item}>
              <p className="text-lg text-[var(--theme-text-muted)] max-w-2xl leading-relaxed mt-8 mb-10">
                {t(hero.subtitle, lang)}
              </p>
            </motion.div>
            <motion.div variants={item}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button type="button" onClick={() => scrollTo("projects")}>
                  {t(hero.ctaProjects, lang)}
                </Button>
                <MaiaCtaLink />
                <a href="https://wells-os.vercel.app" target="_blank" rel="noreferrer" className="text-sm self-center text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)]">
                  {lang === "pt" ? "Conhecer o WELLS_OS" : "Explore WELLS_OS"} ↗
                </a>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <GlassPanel className="p-6">
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--theme-text-muted)] mb-4">
                  {t(evidence.eyebrow, lang)}
                </p>
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-[family-name:var(--font-mono)]">
                  {evidence.items.map((ev) => (
                    <div key={ev.value} className="glass-card p-4">
                      <dd className="text-2xl text-[var(--theme-text)]">{ev.value}</dd>
                      <dd className="text-xs text-[var(--theme-text-muted)] mt-1">{t(ev.label, lang)}</dd>
                    </div>
                  ))}
                </dl>
              </GlassPanel>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
