"use client";

import { useLang, t } from "@/lib/i18n";
import { monitoring } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";

const endpoints = ["GET /api/health.php", "GET /api/overseer.php", "GET /v1/read/overview"];

export default function Monitoring() {
  const { lang } = useLang();

  return (
    <Section id="maia-monitoring">
      <Eyebrow>{t(monitoring.eyebrow, lang)}</Eyebrow>
      <SectionTitle>{t(monitoring.title, lang)}</SectionTitle>
      <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-14">{t(monitoring.intro, lang)}</p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {monitoring.cards.map((card) => (
          <div
            key={card.name}
            className="rounded-lg border border-[var(--color-border-soft)] bg-[var(--color-surface)]/40 p-7"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ok)] pulse-soft" />
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{card.name}</h3>
            </div>
            <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)] mb-4">
              {t(card.tagline, lang)}
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
              {t(card.description, lang)}
            </p>
            <ul className="space-y-2">
              {card.points[lang].map((point) => (
                <li key={point} className="text-sm text-[var(--color-text-muted)] flex gap-2">
                  <span className="text-[var(--color-text-dim)]">—</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-[var(--color-border-soft)] bg-[var(--color-surface-2)] p-6">
        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase text-[var(--color-text-dim)] mb-3">
          {t(monitoring.exampleLabel, lang)}
        </p>
        <div className="space-y-1.5">
          {endpoints.map((ep) => (
            <p key={ep} className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)]">$</span> {ep}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
