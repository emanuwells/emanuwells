"use client";

import { useLang, t } from "@/lib/i18n";
import { team } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";

export default function Team() {
  const { lang } = useLang();

  return (
    <Section id="maia-team">
      <div className="mb-10 max-w-3xl">
        <Eyebrow>{t(team.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(team.title, lang)}</SectionTitle>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)]">
          {t(team.intro, lang)}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.projects.map((project) => (
          <div
            key={project.name.pt}
            className="rounded-lg border border-[var(--color-border-soft)] bg-[var(--color-surface)]/40 p-6 sm:p-7"
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-semibold mb-3 tracking-tight">
              {t(project.name, lang)}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t(project.description, lang)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
