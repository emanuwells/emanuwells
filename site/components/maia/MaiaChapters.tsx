"use client";

import {
  maiaIntro,
  maiaLinked,
  maiaInvisible,
  maiaObserve,
  maiaPeople,
  maiaGovernance,
  maiaBackLabel,
} from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PipelineStoryExplorer from "@/components/PipelineStoryExplorer";
import Monitoring from "@/components/sections/Monitoring";
import Infrastructure from "@/components/sections/Infrastructure";
import Team from "@/components/sections/Team";
import Results from "@/components/sections/Results";
import GlassChapter from "@/components/maia/GlassChapter";
import ArchitectureDiagram from "@/components/maia/ArchitectureDiagram";
import { BentoGrid, BentoItem } from "@/components/maia/BentoGrid";
import GlassPanel from "@/components/ui/GlassPanel";
import { SceneLabel, SceneTitle, HeroTitle } from "@/components/ui/Typography";
import SiteFooterLinks from "@/components/layout/SiteFooterLinks";

const BENTO_ACCENTS = [
  "var(--theme-bento-meteo)",
  "var(--theme-bento-turism)",
  "var(--theme-bento-transport)",
  "var(--theme-bento-public)",
  "var(--theme-bento-events)",
  "var(--theme-bento-motivation)",
];

export default function MaiaChapters() {
  const { lang } = useLang();

  return (
    <>
      <section
        id="intro"
        className="maia-hero-bg maia-chapter px-4 sm:px-6 flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto w-full py-20 sm:py-28 relative z-10">
          <Reveal soft>
            <div className="text-center sm:text-left">
              <SceneLabel>{t(maiaIntro.eyebrow, lang)}</SceneLabel>
              <HeroTitle className="!text-[clamp(2.35rem,6.5vw,4.35rem)] !leading-[1.05] !tracking-[-0.04em] mt-4">
                {t(maiaIntro.title, lang)}
              </HeroTitle>
              <p className="text-base sm:text-xl text-[var(--cyber-text-muted)] max-w-2xl mt-6 mb-3 leading-relaxed">
                {t(maiaIntro.subtitle, lang)}
              </p>
              <p className="text-sm sm:text-base text-[var(--cyber-cyan-bright)] max-w-2xl mb-6">
                {t(maiaIntro.tagline, lang)}
              </p>
              <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                <a
                  href="#linked"
                  className="inline-flex items-center justify-center rounded-[999px] border border-[var(--cyber-lime)] bg-[var(--cyber-lime)] px-5 py-2.5 text-sm font-semibold text-[#0a0e17] transition hover:-translate-y-px hover:shadow-[0_0_16px_var(--cyber-lime-glow)]"
                >
                  {lang === "pt" ? "Ver o que já está ligado" : "See what is already linked"}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GlassChapter
        id="linked"
        eyebrow={t(maiaLinked.eyebrow, lang)}
        title={t(maiaLinked.title, lang)}
      >
        <p className="text-[var(--theme-text-muted)] max-w-2xl mb-8">
          {t(maiaLinked.intro, lang)}
        </p>
        <BentoGrid>
          {maiaLinked.items.map((item, i) => (
            <BentoItem key={item.id} accent={BENTO_ACCENTS[i % BENTO_ACCENTS.length]}>
              <h3 className="font-medium mb-2">{t(item.title, lang)}</h3>
              <p className="text-sm text-[var(--theme-text-muted)]">
                {t(item.description, lang)}
              </p>
            </BentoItem>
          ))}
        </BentoGrid>
      </GlassChapter>

      <section id="invisible" className="maia-chapter px-4 sm:px-6 py-16 max-w-6xl mx-auto">
        <GlassPanel className="p-6 sm:p-10 mb-8">
          <SceneLabel>{t(maiaInvisible.eyebrow, lang)}</SceneLabel>
          <SceneTitle>{t(maiaInvisible.title, lang)}</SceneTitle>
          <p className="text-[var(--theme-text-muted)] max-w-2xl mt-4 mb-8">
            {t(maiaInvisible.intro, lang)}
          </p>
          <ArchitectureDiagram />
        </GlassPanel>
        <PipelineStoryExplorer />
      </section>

      <section id="observe" className="maia-chapter px-4 sm:px-6 py-12 max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <SceneLabel>{t(maiaObserve.eyebrow, lang)}</SceneLabel>
          <SceneTitle>{t(maiaObserve.title, lang)}</SceneTitle>
        </div>
        <div className="glass-panel p-4 sm:p-6">
          <Monitoring />
          <Infrastructure />
        </div>
      </section>

      <GlassChapter
        id="governance"
        eyebrow={t(maiaGovernance.eyebrow, lang)}
        title={t(maiaGovernance.title, lang)}
      >
        <p className="text-[var(--theme-text-muted)] max-w-2xl mb-8">
          {t(maiaGovernance.intro, lang)}
        </p>
        <BentoGrid>
          {maiaGovernance.items.map((item, i) => (
            <BentoItem key={item.id} accent={BENTO_ACCENTS[i % BENTO_ACCENTS.length]}>
              <h3 className="font-medium mb-2">{t(item.title, lang)}</h3>
              <p className="text-sm text-[var(--theme-text-muted)]">
                {t(item.description, lang)}
              </p>
            </BentoItem>
          ))}
        </BentoGrid>
        <div className="mt-10 space-y-4">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
            {t(maiaGovernance.portals.title, lang)}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <GlassPanel className="p-5">
              <a
                href={maiaGovernance.portals.openData.href}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--cyber-cyan-bright)] hover:underline font-medium"
              >
                {t(maiaGovernance.portals.openData.label, lang)} ↗
              </a>
              <p className="text-sm text-[var(--theme-text-muted)] mt-2">
                {t(maiaGovernance.portals.openData.note, lang)}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--theme-text-muted)] mt-2">
                {maiaGovernance.portals.openData.href}
              </p>
            </GlassPanel>
            <GlassPanel className="p-5">
              <p className="font-medium">{t(maiaGovernance.portals.internal.label, lang)}</p>
              <p className="text-sm text-[var(--theme-text-muted)] mt-2">
                {t(maiaGovernance.portals.internal.note, lang)}
              </p>
            </GlassPanel>
          </div>
        </div>
      </GlassChapter>

      <section id="people" className="maia-chapter px-4 sm:px-6 py-12 max-w-6xl mx-auto">
        <div className="mb-8">
          <SceneLabel>{t(maiaPeople.eyebrow, lang)}</SceneLabel>
          <SceneTitle>{t(maiaPeople.title, lang)}</SceneTitle>
        </div>
        <Team />
        <Results />
        <BentoGrid className="mt-10">
          {maiaPeople.nextSteps[lang].map((step, i) => (
            <BentoItem key={step} accent={BENTO_ACCENTS[i % BENTO_ACCENTS.length]}>
              <p className="text-sm text-[var(--theme-text-muted)]">{step}</p>
            </BentoItem>
          ))}
        </BentoGrid>
      </section>

      <section className="px-4 sm:px-6 py-16 max-w-6xl mx-auto border-t border-[var(--line)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <p className="text-[var(--theme-text-muted)] max-w-md text-sm leading-relaxed">
            {lang === "pt"
              ? "Queres voltar ao portefólio e ver o resto do trabalho?"
              : "Want to return to the portfolio and see the rest of the work?"}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[999px] border border-[var(--cyber-cyan)] px-5 py-2.5 text-sm font-semibold text-[var(--cyber-cyan-bright)] transition hover:bg-[rgba(77,216,232,0.08)]"
          >
            ← {t(maiaBackLabel, lang)}
          </Link>
        </div>
        <SiteFooterLinks />
      </section>
    </>
  );
}
