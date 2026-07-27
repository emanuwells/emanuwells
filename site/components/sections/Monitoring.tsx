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
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Eyebrow>{t(monitoring.eyebrow, lang)}</Eyebrow>
          <SectionTitle>{t(monitoring.title, lang)}</SectionTitle>
          <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">
            {t(monitoring.intro, lang)}
          </p>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          {monitoring.cards.map((card, i) => (
            <NeonCard
              key={card.name}
              variant={i === 0 ? "cyan" : "magenta"}
              className="!p-5 sm:!p-6"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--positive-green)] shadow-[0_0_8px_var(--positive-green)]" />
                <h3 className="text-base font-semibold sm:text-lg">{card.name}</h3>
              </div>
              <p className="mb-3 font-[family-name:var(--font-mono)] text-xs text-[var(--cyber-cyan)]">
                {t(card.tagline, lang)}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {t(card.description, lang)}
              </p>
              <ul className="space-y-1.5">
                {card.points[lang].map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-muted)] before:mt-1.5 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-[var(--cyber-cyan)] before:content-['']"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </NeonCard>
          ))}
        </div>

        <TerminalPanel title="observability@maia">
          <p className="mb-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--cyber-text-muted)]">
            {t(monitoring.exampleLabel, lang)}
          </p>
          <div className="space-y-1.5">
            {endpoints.map((ep) => (
              <p
                key={ep}
                className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-muted)]"
              >
                <span className="text-[var(--cyber-cyan)]">$</span> {ep}
              </p>
            ))}
          </div>
        </TerminalPanel>
      </div>
    </Section>
  );
}
