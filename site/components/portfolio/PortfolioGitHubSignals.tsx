"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { GitHubSummary } from "@/lib/github/summary";
import { FALLBACK_SUMMARY } from "@/lib/github/summary";
import { githubSignals } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";
import TerminalPanel from "@/components/ui/TerminalPanel";
import StatCard from "@/components/ui/StatCard";

const tooltipStyle = {
  background: "rgba(16,21,31,0.95)",
  border: "1px solid rgba(77,216,232,0.35)",
  borderRadius: 8,
  color: "#e8ecf1",
};

function Waveform() {
  return (
    <div className="waveform" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="waveform-bar" style={{ animationDelay: `${(i % 5) * 0.1}s` }} />
      ))}
    </div>
  );
}

export default function PortfolioGitHubSignals() {
  const { lang } = useLang();
  const [summary, setSummary] = useState<GitHubSummary>(FALLBACK_SUMMARY);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github/summary")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: GitHubSummary | null) => {
        if (!cancelled && data) setSummary(data);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const metrics = [
    { value: summary.publicRepos, label: t(githubSignals.metrics.publicRepos, lang) },
    { value: summary.stars, label: t(githubSignals.metrics.stars, lang) },
    { value: summary.forks, label: t(githubSignals.metrics.forks, lang) },
    { value: summary.followers, label: t(githubSignals.metrics.followers, lang) },
  ];

  const dualLine = summary.activity.map((point, i) => ({
    ...point,
    rhythm: Math.max(1, point.contributions + (i % 3)),
  }));

  return (
    <Section id="signals">
      <Reveal>
        <Eyebrow>{t(githubSignals.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(githubSignals.title, lang)}</SectionTitle>
        <p className="text-[var(--theme-text-muted)] max-w-2xl mb-8 leading-relaxed">
          {t(githubSignals.intro, lang)}
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <TerminalPanel title={t(githubSignals.panelTitle, lang)}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {metrics.map((metric, i) => (
              <StatCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                glow={i % 2 === 0 ? "cyan" : "lime"}
                className="!p-3 sm:!p-4"
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-2">
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-3">
                {t(githubSignals.languagesTitle, lang)}
              </h3>
              <div className="h-48 sm:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dualLine}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,149,165,0.12)" />
                    <XAxis dataKey="week" tick={{ fill: "#8b95a5", fontSize: 11 }} />
                    <YAxis allowDecimals={false} tick={{ fill: "#8b95a5", fontSize: 11 }} />
                    <Tooltip formatter={(value) => [value, ""]} contentStyle={tooltipStyle} />
                    <Line type="monotone" dataKey="contributions" stroke="#4dd8e8" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="rhythm" stroke="#c8f04a" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-3">
                {t(githubSignals.activityTitle, lang)}
              </h3>
              <div className="h-48 sm:h-56 flex flex-col">
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={summary.activity}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(139,149,165,0.12)" vertical={false} />
                      <XAxis dataKey="week" tick={{ fill: "#8b95a5", fontSize: 11 }} />
                      <YAxis allowDecimals={false} tick={{ fill: "#8b95a5", fontSize: 11 }} />
                      <Tooltip
                        formatter={(value) => [value, lang === "pt" ? "Eventos" : "Events"]}
                        contentStyle={tooltipStyle}
                      />
                      <Bar dataKey="contributions" fill="#4dd8e8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <Waveform />
              </div>
            </div>
          </div>

          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--theme-text-muted)] mt-4">
            {summary.source === "live"
              ? t(githubSignals.liveSource, lang)
              : t(githubSignals.fallbackSource, lang)}
          </p>
        </TerminalPanel>
      </Reveal>
    </Section>
  );
}
