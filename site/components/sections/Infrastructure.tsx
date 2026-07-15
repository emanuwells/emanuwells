"use client";

import { useLang, t } from "@/lib/i18n";
import { infrastructure } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";

export default function Infrastructure() {
  const { lang } = useLang();

  return (
    <Section id="maia-infra">
      <Eyebrow>{t(infrastructure.eyebrow, lang)}</Eyebrow>
      <SectionTitle>{t(infrastructure.title, lang)}</SectionTitle>
      <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-14">
        {t(infrastructure.intro, lang)}
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {infrastructure.points.map((point, i) => (
          <div key={point.title.pt} className="relative pl-5">
            <span
              className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full"
              style={{ background: i === 0 ? "var(--color-accent)" : i === 1 ? "var(--color-accent-2)" : "var(--color-text-dim)" }}
            />
            <h3 className="font-[family-name:var(--font-display)] text-base font-semibold mb-2">
              {t(point.title, lang)}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{t(point.description, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
