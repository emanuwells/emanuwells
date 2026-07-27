"use client";

import { about } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function PortfolioAbout() {
  const { lang } = useLang();

  return (
    <Section id="about">
      <Reveal>
        <Eyebrow>{t(about.eyebrow, lang)}</Eyebrow>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-[var(--theme-text)]">
          {t(about.title, lang)}
        </h2>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-xl sm:text-2xl font-medium leading-snug tracking-tight text-[var(--theme-text)]">
          {t(about.lead, lang)}
        </p>
        <div className="mt-8 max-w-2xl space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.pt}
              className="text-base sm:text-[1.05rem] leading-relaxed text-[var(--color-text-muted)]"
            >
              {t(paragraph, lang)}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
