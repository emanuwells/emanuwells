"use client";

import { about } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function PortfolioAbout() {
  const { lang } = useLang();

  return (
    <Section id="about">
      <Reveal>
        <Eyebrow>{t(about.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(about.title, lang)}</SectionTitle>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl">{t(about.intro, lang)}</p>
      </Reveal>
    </Section>
  );
}
