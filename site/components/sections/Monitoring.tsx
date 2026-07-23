"use client";

import { useState } from "react";
import { useLang, t } from "@/lib/i18n";
import { monitoring } from "@/lib/content";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import NeonCard from "@/components/ui/NeonCard";
import TerminalPanel from "@/components/ui/TerminalPanel";
import ProgressBar from "@/components/ui/ProgressBar";

const endpoints = ["GET /api/health.php", "GET /api/overseer.php", "GET /v1/read/overview"];

const SLIDE_COUNT = 3;

function MiniLineChart() {
  return (
    <div className="h-24 flex items-end gap-1" aria-hidden>
      {[40, 55, 48, 62, 58, 72, 68, 80].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{
            height: `${h}%`,
            background: `linear-gradient(180deg, var(--positive-green), var(--cyber-cyan))`,
          }}
        />
      ))}
    </div>
  );
}

function MiniHeatmap() {
  const colors = ["var(--heat-blue)", "var(--heat-yellow)", "var(--heat-red)"];
  return (
    <div className="grid grid-cols-6 gap-1 h-24" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="rounded-sm"
          style={{ background: colors[i % 3], opacity: 0.4 + (i % 4) * 0.15 }}
        />
      ))}
    </div>
  );
}

function MiniGauge() {
  return (
    <div className="relative h-24 flex items-center justify-center" aria-hidden>
      <div
        className="w-32 h-16 rounded-t-full border-4 border-transparent"
        style={{
          borderTopColor: "var(--cyber-cyan)",
          borderRightColor: "var(--positive-green)",
          borderLeftColor: "var(--cyber-cyan)",
        }}
      />
      <span className="absolute bottom-2 font-[family-name:var(--font-mono)] text-lg text-[var(--positive-green)]">
        99.98%
      </span>
    </div>
  );
}

const slides = [MiniLineChart, MiniHeatmap, MiniGauge];

export default function Monitoring() {
  const { lang } = useLang();
  const [activeSlide, setActiveSlide] = useState(0);
  const SlideVisual = slides[activeSlide];

  return (
    <Section id="maia-monitoring" wide>
      <div className="max-w-6xl mx-auto">
        <Eyebrow>{t(monitoring.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(monitoring.title, lang)}</SectionTitle>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-10">{t(monitoring.intro, lang)}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          {monitoring.cards.map((card, i) => (
            <NeonCard
              key={card.name}
              variant={i === 0 ? "cyan" : i === 1 ? "magenta" : "gradient"}
              className="!p-5 sm:!p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[var(--positive-green)] shadow-[0_0_8px_var(--positive-green)]" />
                <h3 className="text-base sm:text-lg font-semibold">{card.name}</h3>
              </div>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--cyber-cyan)] mb-3">
                {t(card.tagline, lang)}
              </p>
              {i === activeSlide && <SlideVisual />}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 mt-3">
                {t(card.description, lang)}
              </p>
              <ProgressBar value={75 + i * 8} color={i === 1 ? "magenta" : "cyan"} />
            </NeonCard>
          ))}
        </div>

        <div className="carousel-dots" role="tablist" aria-label={lang === "pt" ? "Dashboards" : "Dashboards"}>
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activeSlide === i}
              className={`carousel-dot ${activeSlide === i ? "carousel-dot--active" : ""}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <TerminalPanel title="observability@maia" className="mt-10">
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
