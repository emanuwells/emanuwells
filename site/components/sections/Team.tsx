"use client";

import { useLang, t } from "@/lib/i18n";
import { team } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";

export default function Team() {
  const { lang } = useLang();

  return (
    <Section id="maia-team">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <div>
          <Eyebrow>{t(team.eyebrow, lang)}</Eyebrow>
          <SectionTitle>{t(team.title, lang)}</SectionTitle>
          <p className="text-[var(--color-text-muted)] leading-relaxed max-w-xl">{t(team.intro, lang)}</p>
        </div>
        <div className="font-[family-name:var(--font-mono)] shrink-0">
          <div className="text-4xl text-[var(--color-accent)]">4</div>
          <div className="text-xs text-[var(--color-text-dim)] mt-1">{t(team.statLabel, lang)}</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {team.projects.map((project) => (
          <div
            key={project.name.pt}
            className="rounded-lg border border-[var(--color-border-soft)] bg-[var(--color-surface)]/40 p-6"
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2">
              {t(project.name, lang)}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{t(project.description, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
