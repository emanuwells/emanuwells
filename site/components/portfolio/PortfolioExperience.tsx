"use client";

import Link from "next/link";
import { experience } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";
import NeonCard from "@/components/ui/NeonCard";

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
          <div className="space-y-8">
            {experience.milestones.map((milestone) => (
              <div key={milestone.title.pt} className="timeline-rail relative pl-6">
                <span className="timeline-node" aria-hidden />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--cyber-text)]">
                      {t(milestone.title, lang)}
                    </h3>
                    <p className="text-sm text-[var(--cyber-text-muted)] mt-1 leading-relaxed">
                      {t(milestone.description, lang)}
                    </p>
                  </div>
                  <div className="w-full sm:w-32 shrink-0">
                    <div className="health-bar" role="presentation">
                      <div className="health-bar__fill" style={{ width: `${milestone.progress}%` }} />
                    </div>
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
