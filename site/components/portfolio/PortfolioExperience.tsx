"use client";

import Link from "next/link";
import { experience } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function PortfolioExperience() {
  const { lang } = useLang();

  return (
    <Section id="experience">
      <Reveal>
        <Eyebrow>{t(experience.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(experience.title, lang)}</SectionTitle>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-8">{t(experience.intro, lang)}</p>
        <Link
          href="/maia"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
        >
          {t(experience.linkLabel, lang)} →
        </Link>
      </Reveal>
    </Section>
  );
}
