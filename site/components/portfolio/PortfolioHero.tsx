"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, evidence } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import { EASE_OUT_EXPRESSIVE } from "@/lib/motion";
import WellsSearchBar from "@/components/search/WellsSearchBar";
import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";
import TerminalPanel from "@/components/ui/TerminalPanel";
import StatCard from "@/components/ui/StatCard";
import MaiaCtaLink from "./MaiaCtaLink";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPRESSIVE } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function HeroContent({ lang, onProjects }: { lang: "pt" | "en"; onProjects: () => void }) {
  return (
    <>
      <div className="mb-6 hidden sm:block">
        <WellsSearchBar />
      </div>
      <TerminalPanel title="wells@portfolio ~">
        <p className="text-[var(--cyber-cyan)] mb-2 text-sm sm:text-base">&gt; boot sequence</p>
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-[var(--cyber-text)] leading-snug mb-4">
          <TypingText phrases={hero.typingPhrases[lang]} />
        </h1>
        <p className="text-sm sm:text-base text-[var(--cyber-text-muted)] max-w-2xl leading-relaxed">
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
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.05em] text-[var(--cyber-cyan)] mb-4">
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
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col px-4 sm:px-6 pt-24 pb-16 bg-grid overflow-hidden">
      <div className="hero-kenburns" aria-hidden />
      <div className="mx-auto max-w-4xl w-full flex-1 flex flex-col justify-center relative z-10">
        {reduce ? (
          <HeroContent lang={lang} onProjects={() => scrollTo("projects")} />
        ) : (
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <HeroContent lang={lang} onProjects={() => scrollTo("projects")} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
