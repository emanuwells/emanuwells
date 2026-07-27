"use client";

import { about, contact } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import { ageFromBirthdate, EMANUEL_BIRTHDATE } from "@/lib/age";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function PortfolioAbout() {
  const { lang } = useLang();
  const age = ageFromBirthdate(EMANUEL_BIRTHDATE);
  const intro = t(about.introTemplate, lang).replace("{age}", String(age));

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
          <p className="text-base sm:text-[1.05rem] leading-relaxed text-[var(--color-text-muted)]">
            {intro}
          </p>
          <p className="text-base sm:text-[1.05rem] leading-relaxed text-[var(--color-text-muted)]">
            {t(about.networks, lang)}
          </p>
          <p className="text-base sm:text-[1.05rem] leading-relaxed text-[var(--color-text-muted)]">
            {t(about.selfTaughtBefore, lang)}
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--cyber-cyan-bright)] hover:underline"
            >
              emanuwells
            </a>
            .
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
