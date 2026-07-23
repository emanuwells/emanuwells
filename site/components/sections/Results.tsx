"use client";

import { useLang, t } from "@/lib/i18n";
import { results } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import StatCard from "@/components/ui/StatCard";

export default function Results() {
  const { lang } = useLang();

  return (
    <Section id="maia-results">
      <Eyebrow>{t(results.eyebrow, lang)}</Eyebrow>
      <SectionTitle>{t(results.title, lang)}</SectionTitle>
      <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-14">{t(results.intro, lang)}</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {results.metrics.map((metric) => (
          <StatCard key={metric.label.pt} value={metric.value} label={t(metric.label, lang)} glow="magenta" />
        ))}
      </div>

      <ul className="space-y-4 max-w-2xl">
        {results.highlights[lang].map((h) => (
          <li key={h} className="flex gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <span className="text-[var(--cyber-magenta)] shrink-0">▸</span>
            {h}
          </li>
        ))}
      </ul>
    </Section>
  );
}
