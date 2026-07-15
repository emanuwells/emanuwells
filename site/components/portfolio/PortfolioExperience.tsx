"use client";

import Link from "next/link";
import { experience } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";
import NeonCard from "@/components/ui/NeonCard";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";

export default function PortfolioExperience() {
  const { lang } = useLang();

  return (
    <Section id="experience">
      <Reveal>
        <Eyebrow>{t(experience.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(experience.title, lang)}</SectionTitle>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-8">{t(experience.intro, lang)}</p>
        <Link
          href="/maia"
          className="inline-flex items-center gap-2 text-sm text-[var(--cyber-cyan-bright)] hover:underline mb-10"
        >
          {t(experience.linkLabel, lang)} →
        </Link>
      </Reveal>

      <Reveal delay={0.08}>
        <NeonCard variant="cyan" className="!p-6 sm:!p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 pb-6 border-b border-[var(--border-subtle)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--cyber-cyan)] bg-[rgba(77,216,232,0.08)] text-lg font-bold text-[var(--cyber-cyan)]">
              M
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-[var(--cyber-text)]">
                {t(experience.title, lang)}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="lime">{lang === "pt" ? "Câmara Municipal" : "City Council"}</Badge>
                <Badge variant="neutral">2020 — {lang === "pt" ? "presente" : "present"}</Badge>
              </div>
            </div>
            <div className="w-full sm:w-40">
              <ProgressBar value={90} color="lime" label="Overall progress" />
            </div>
          </div>

          <div className="space-y-8">
            {experience.milestones.map((milestone, i) => (
              <div key={milestone.title.pt} className="timeline-rail relative pl-6">
                <span
                  className="timeline-node"
                  style={{
                    background: i % 2 === 0 ? "var(--cyber-cyan)" : "var(--cyber-lime)",
                    boxShadow: `0 0 12px ${i % 2 === 0 ? "var(--cyber-cyan)" : "var(--cyber-lime)"}`,
                  }}
                  aria-hidden
                />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-[var(--cyber-text)]">
                      {t(milestone.title, lang)}
                    </h3>
                    <p className="text-sm text-[var(--cyber-text-muted)] mt-1 leading-relaxed">
                      {t(milestone.description, lang)}
                    </p>
                  </div>
                  <div className="w-full sm:w-32 shrink-0">
                    <ProgressBar value={milestone.progress} color={i % 2 === 0 ? "cyan" : "lime"} />
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--cyber-text-muted)] mt-1 text-right">
                      {milestone.progress}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </NeonCard>
      </Reveal>
    </Section>
  );
}
