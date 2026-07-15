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
import NeonCard from "@/components/ui/NeonCard";

const DEV_QUOTES = [
  {
    text: {
      pt: "Há poucas coisas mais frustrantes do que depurar código. Não seria mais rápido se simplesmente não criássemos os bugs?",
      en: "There are few things more frustrating than debugging. Wouldn't it be quicker if we just didn't create the bugs in the first place?",
    },
    author: "Martin Fowler",
  },
  {
    text: {
      pt: "Qualquer tolo consegue escrever código que um computador entende. Bons programadores escrevem código que humanos entendem.",
      en: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    author: "Martin Fowler",
  },
  {
    text: {
      pt: "A simplicidade é pré-requisito para fiabilidade.",
      en: "Simplicity is prerequisite for reliability.",
    },
    author: "Edsger W. Dijkstra",
  },
];

const tooltipStyle = {
  background: "rgba(7,17,31,0.95)",
  border: "1px solid rgba(34,211,238,0.35)",
  borderRadius: 8,
  color: "#f8fafc",
};

export default function PortfolioGitHubSignals() {
  const { lang } = useLang();
  const [summary, setSummary] = useState<GitHubSummary>(FALLBACK_SUMMARY);
  const [quoteIndex, setQuoteIndex] = useState(0);

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setQuoteIndex((current) => (current + 1) % DEV_QUOTES.length);
    }, 8000);
    return () => window.clearInterval(timer);
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

  const quote = DEV_QUOTES[quoteIndex];

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
        <TerminalPanel title={t(githubSignals.systemPulse, lang)}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {metrics.map((metric, i) => (
              <NeonCard key={metric.label} variant={i % 2 === 0 ? "cyan" : "lime"} className="!p-3 sm:!p-4">
                <p className="font-[family-name:var(--font-mono)] text-xl sm:text-2xl text-[var(--cyber-cyan-bright)]">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs text-[var(--cyber-text-muted)] mt-1">{metric.label}</p>
              </NeonCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--cyber-cyan)] mb-3">
                {t(githubSignals.languagesTitle, lang)}
              </h3>
              <div className="h-48 sm:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dualLine}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.12)" />
                    <XAxis dataKey="week" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <YAxis allowDecimals={false} tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip formatter={(value) => [value, ""]} contentStyle={tooltipStyle} />
                    <Line type="monotone" dataKey="contributions" stroke="#22d3ee" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="rhythm" stroke="#a3e635" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--cyber-cyan)] mb-3">
                {t(githubSignals.activityTitle, lang)}
              </h3>
              <div className="h-48 sm:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={summary.activity}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.12)" vertical={false} />
                    <XAxis dataKey="week" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <YAxis allowDecimals={false} tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip formatter={(value) => [value, lang === "pt" ? "Eventos" : "Events"]} contentStyle={tooltipStyle} />
                    <Bar dataKey="contributions" fill="#22d3ee" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(34,211,238,0.15)] pt-4">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--cyber-cyan)] mb-2">
              {t(githubSignals.quoteTitle, lang)}
            </p>
            <blockquote className="text-sm sm:text-base text-[var(--cyber-text)] italic leading-relaxed">
              &ldquo;{t(quote.text, lang)}&rdquo;
            </blockquote>
            <p className="text-xs text-[var(--cyber-text-muted)] mt-2 text-right">— {quote.author}</p>
          </div>

          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--cyber-text-muted)] mt-4">
            {summary.source === "live"
              ? t(githubSignals.liveSource, lang)
              : t(githubSignals.fallbackSource, lang)}
          </p>
        </TerminalPanel>
      </Reveal>
    </Section>
  );
}
