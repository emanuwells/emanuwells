"use client";

import Image from "next/image";
import {
  maiaIntro,
  maiaVisible,
  maiaInvisible,
  maiaObserve,
  maiaPeople,
  maiaDisclaimer,
} from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import PipelineStoryExplorer from "@/components/PipelineStoryExplorer";
import Monitoring from "@/components/sections/Monitoring";
import Infrastructure from "@/components/sections/Infrastructure";
import Team from "@/components/sections/Team";
import Results from "@/components/sections/Results";
import PulsePanel from "@/components/maia/PulsePanel";
import GlassChapter from "@/components/maia/GlassChapter";
import ArchitectureDiagram from "@/components/maia/ArchitectureDiagram";
import { BentoGrid, BentoItem } from "@/components/maia/BentoGrid";
import GlassPanel from "@/components/ui/GlassPanel";
import { SceneLabel, SceneTitle, HeroTitle } from "@/components/ui/Typography";

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
      <section id="intro" className="maia-hero-bg maia-chapter px-4 sm:px-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full py-16 sm:py-24 relative z-10 flex justify-center">
          <Reveal>
            <div className="glass-card-maia">
              <SceneLabel>{t(maiaIntro.eyebrow, lang)}</SceneLabel>
              <HeroTitle>{t(maiaIntro.title, lang)}</HeroTitle>
              <p className="text-base sm:text-lg text-[var(--cyber-text-muted)] max-w-2xl mt-4 mb-3 mx-auto">
                {t(maiaIntro.subtitle, lang)}
              </p>
              <p className="text-sm text-[var(--cyber-cyan-bright)] max-w-2xl mb-4 mx-auto">{t(maiaIntro.tagline, lang)}</p>
              <p className="maia-editorial-badge inline-block text-xs">{t(maiaDisclaimer, lang)}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <PulsePanel />

      <GlassChapter id="visible" eyebrow={t(maiaVisible.eyebrow, lang)} title={t(maiaVisible.title, lang)}>
        <p className="maia-editorial-badge inline-block mb-8">{t(maiaVisible.editorialNote, lang)}</p>
        <BentoGrid>
          {maiaVisible.items.map((item, i) => (
            <BentoItem key={item.id} accent={BENTO_ACCENTS[i % BENTO_ACCENTS.length]}>
              <div className="relative h-16 mb-3 maia-layer-optional">
                <Image src={item.asset} alt="" fill className="object-contain opacity-90" loading="lazy" sizes="100px" />
              </div>
              <h3 className="font-medium mb-2">{t(item.title, lang)}</h3>
              <p className="text-sm text-[var(--theme-text-muted)]">{t(item.description, lang)}</p>
            </BentoItem>
          ))}
        </BentoGrid>
      </GlassChapter>

      <section id="invisible" className="maia-chapter px-4 sm:px-6 py-16 max-w-6xl mx-auto">
        <GlassPanel className="p-6 sm:p-10 mb-8">
          <SceneLabel>{t(maiaInvisible.eyebrow, lang)}</SceneLabel>
          <SceneTitle>{t(maiaInvisible.title, lang)}</SceneTitle>
          <p className="text-[var(--theme-text-muted)] max-w-2xl mt-4 mb-8">{t(maiaInvisible.intro, lang)}</p>
          <ArchitectureDiagram />
        </GlassPanel>
        <PipelineStoryExplorer />
      </section>

      <section id="observe" className="maia-chapter px-4 sm:px-6 py-12 max-w-6xl mx-auto">
        <div className="mb-8">
          <SceneLabel>{t(maiaObserve.eyebrow, lang)}</SceneLabel>
          <SceneTitle>{t(maiaObserve.title, lang)}</SceneTitle>
        </div>
        <div className="glass-panel p-4 sm:p-6">
          <Monitoring />
          <Infrastructure />
        </div>
      </section>

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
    </>
  );
}
