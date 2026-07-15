"use client";

import { useLang, t } from "@/lib/i18n";
import { monitoring } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import NeonCard from "@/components/ui/NeonCard";
import TerminalPanel from "@/components/ui/TerminalPanel";

const endpoints = ["GET /api/health.php", "GET /api/overseer.php", "GET /v1/read/overview"];

export default function Monitoring() {
  const { lang } = useLang();

  return (
    <Section id="maia-monitoring" wide>
      <div className="max-w-6xl mx-auto">
        <Eyebrow>{t(monitoring.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(monitoring.title, lang)}</SectionTitle>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-10">{t(monitoring.intro, lang)}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {monitoring.cards.map((card, i) => (
            <NeonCard key={card.name} variant={i === 0 ? "cyan" : i === 1 ? "lime" : "gradient"} className="!p-5 sm:!p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[var(--cyber-lime)] shadow-[0_0_8px_#84cc16]" />
                <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-semibold">{card.name}</h3>
              </div>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--cyber-cyan)] mb-3">
                {t(card.tagline, lang)}
              </p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                {t(card.description, lang)}
              </p>
              <ul className="space-y-1.5">
                {card.points[lang].map((point) => (
                  <li key={point} className="text-xs sm:text-sm text-[var(--color-text-muted)] flex gap-2">
                    <span className="text-[var(--cyber-cyan)]">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </NeonCard>
          ))}
        </div>

        <TerminalPanel title="observability@maia">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase text-[var(--cyber-text-muted)] mb-3">
            {t(monitoring.exampleLabel, lang)}
          </p>
          <div className="space-y-1.5">
            {endpoints.map((ep) => (
              <p key={ep} className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)]">
                <span className="text-[var(--cyber-cyan)]">$</span> {ep}
              </p>
            ))}
          </div>
        </TerminalPanel>
      </div>
    </Section>
  );
}
