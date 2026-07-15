"use client";

import { useLang, t } from "@/lib/i18n";
import { results } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import NeonCard from "@/components/ui/NeonCard";

export default function Results() {
  const { lang } = useLang();

  return (
    <Section id="maia-results">
      <Eyebrow>{t(results.eyebrow, lang)}</Eyebrow>
      <SectionTitle>{t(results.title, lang)}</SectionTitle>
      <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-14">{t(results.intro, lang)}</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {results.metrics.map((metric) => (
          <NeonCard key={metric.label.pt} variant="gradient" className="text-center !p-4 sm:!p-6">
            <div className="kpi-value">{metric.value}</div>
            <div className="text-xs text-[var(--cyber-text-muted)] mt-2 leading-snug font-[family-name:var(--font-mono)]">
              {t(metric.label, lang)}
            </div>
          </NeonCard>
        ))}
      </div>

      <ul className="space-y-4 max-w-2xl">
        {results.highlights[lang].map((h) => (
          <li key={h} className="flex gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <span className="text-[var(--cyber-cyan)] shrink-0">▸</span>
            {h}
          </li>
        ))}
      </ul>
    </Section>
  );
}
