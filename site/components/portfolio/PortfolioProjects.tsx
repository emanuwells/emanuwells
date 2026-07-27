"use client";

import { projects } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";
import TechTag from "@/components/ui/TechTag";
import NeonCard from "@/components/ui/NeonCard";

export default function PortfolioProjects() {
  const { lang } = useLang();

  return (
    <Section id="projects">
      <Reveal>
        <Eyebrow>{t(projects.eyebrow, lang)}</Eyebrow>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-balance mb-5">
          {t(projects.title, lang)}
        </h2>
        <p className="text-[var(--theme-text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
          {t(projects.intro, lang)}
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <NeonCard
              variant={i % 2 === 0 ? "cyan" : "lime"}
              className="h-full flex flex-col !p-6 sm:!p-7"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-semibold tracking-tight">
                  {t(item.name, lang)}
                </h3>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span
                    className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border ${
                      item.kind === "hobby"
                        ? "text-[var(--theme-text-muted)] border-[var(--border-subtle)]"
                        : "text-[var(--cyber-cyan)] border-[var(--cyber-cyan)]/30"
                    }`}
                  >
                    {t(projects.kindLabels[item.kind], lang)}
                  </span>
                  {item.isPrivate && (
                    <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-[var(--color-warn)] border border-[var(--color-warn)]/30 px-2.5 py-1 rounded">
                      {t(projects.privateLabel, lang)}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm sm:text-[0.95rem] text-[var(--theme-text-muted)] leading-relaxed mb-5 flex-1">
                {t(item.description, lang)}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--cyber-cyan)] mb-2">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-3 border-t border-[var(--border-subtle)]">
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--cyber-cyan-bright)] hover:underline"
                  >
                    GitHub ↗
                  </a>
                )}
                {item.id === "wells-os" && (
                  <a
                    href="https://wells-os.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--theme-text-muted)] hover:text-[var(--cyber-cyan)]"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </NeonCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
