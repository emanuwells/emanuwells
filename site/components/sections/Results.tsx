"use client";

import { useLang, t } from "@/lib/i18n";
import { results } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";

export default function Results() {
  const { lang } = useLang();

  return (
    <Section id="maia-results">
      <Eyebrow>{t(results.eyebrow, lang)}</Eyebrow>
      <SectionTitle>{t(results.title, lang)}</SectionTitle>
      <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-14">{t(results.intro, lang)}</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 font-[family-name:var(--font-mono)]">
        {results.metrics.map((metric) => (
          <div key={metric.label.pt}>
            <div className="text-3xl sm:text-4xl text-[var(--color-accent)]">{metric.value}</div>
            <div className="text-xs text-[var(--color-text-dim)] mt-2 leading-snug">
              {t(metric.label, lang)}
            </div>
          </div>
        ))}
      </div>

      <ul className="space-y-4 max-w-2xl">
        {results.highlights[lang].map((h) => (
          <li key={h} className="flex gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <span className="text-[var(--color-accent-2)] shrink-0">▸</span>
            {h}
          </li>
        ))}
      </ul>
    </Section>
  );
}
