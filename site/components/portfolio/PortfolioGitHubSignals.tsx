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
import { FALLBACK_SUMMARY, languageColor } from "@/lib/github/summary";
import { githubSignals } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";
import GlassPanel from "@/components/ui/GlassPanel";

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

function MetricCard({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="glass-card p-4 min-w-0">
      <p className="font-[family-name:var(--font-mono)] text-2xl text-[var(--theme-text)]">{value}</p>
      <p className="text-xs text-[var(--theme-text-muted)] mt-1">{label}</p>
    </div>
  );
}

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

  const languageData = summary.languages.map((item) => ({
    name: item.name,
    value: item.percentage,
    fill: languageColor(item.name),
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
        <GlassPanel className="p-6 mb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--theme-text-muted)] mt-4">
            {summary.source === "live"
              ? t(githubSignals.liveSource, lang)
              : t(githubSignals.fallbackSource, lang)}
          </p>
        </GlassPanel>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <Reveal delay={0.1}>
          <GlassPanel className="p-6 h-full">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-4">
              {t(githubSignals.languagesTitle, lang)}
            </h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={languageData} layout="vertical" margin={{ left: 8, right: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: "var(--theme-text-muted)", fontSize: 11 }} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={88}
                    tick={{ fill: "var(--theme-text-muted)", fontSize: 11 }}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`, lang === "pt" ? "Repositórios" : "Repositories"]}
                    contentStyle={{
                      background: "rgba(7,17,31,0.95)",
                      border: "1px solid rgba(38,52,73,0.9)",
                      borderRadius: 8,
                      color: "#f8fafc",
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassPanel>
        </Reveal>

        <Reveal delay={0.14}>
          <GlassPanel className="p-6 h-full">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-4">
              {t(githubSignals.activityTitle, lang)}
            </h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={summary.activity} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="week" tick={{ fill: "var(--theme-text-muted)", fontSize: 11 }} />
                  <YAxis allowDecimals={false} tick={{ fill: "var(--theme-text-muted)", fontSize: 11 }} />
                  <Tooltip
                    formatter={(value) => [value, lang === "pt" ? "Eventos" : "Events"]}
                    contentStyle={{
                      background: "rgba(7,17,31,0.95)",
                      border: "1px solid rgba(38,52,73,0.9)",
                      borderRadius: 8,
                      color: "#f8fafc",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="contributions"
                    stroke="#22d3ee"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#67e8f9", stroke: "#34d399", strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassPanel>
        </Reveal>
      </div>

      <Reveal delay={0.18}>
        <GlassPanel className="p-6 border-l-4 border-l-[var(--theme-accent)]">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--theme-accent)] mb-3">
            {t(githubSignals.quoteTitle, lang)}
          </p>
          <blockquote className="text-lg text-[var(--theme-text)] leading-relaxed italic">
            &ldquo;{t(quote.text, lang)}&rdquo;
          </blockquote>
          <p className="text-sm text-[var(--theme-text-muted)] mt-3 text-right">— {quote.author}</p>
        </GlassPanel>
      </Reveal>
    </Section>
  );
}
