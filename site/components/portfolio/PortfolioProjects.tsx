"use client";

import { projects } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";
import TechTag from "@/components/ui/TechTag";
import NeonCard from "@/components/ui/NeonCard";

export default function PortfolioProjects() {
  const { lang } = useLang();

  return (
    <Section id="projects">
      <Reveal>
        <Eyebrow>{t(projects.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(projects.title, lang)}</SectionTitle>
        <p className="text-[var(--theme-text-muted)] leading-relaxed max-w-2xl mb-10">{t(projects.intro, lang)}</p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <NeonCard variant={i % 2 === 0 ? "cyan" : "lime"} className="h-full flex flex-col !p-5 sm:!p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{t(item.name, lang)}</h3>
                {item.isPrivate && (
                  <span className="shrink-0 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider text-[var(--color-warn)] border border-[var(--color-warn)]/30 px-2 py-0.5 rounded">
                    {t(projects.privateLabel, lang)}
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed mb-4 flex-1">{t(item.description, lang)}</p>
              <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-[var(--cyber-cyan)] mb-2">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-2 border-t border-[rgba(34,211,238,0.12)]">
                {item.githubUrl && (
                  <a href={item.githubUrl} target="_blank" rel="noreferrer" className="text-sm text-[var(--cyber-cyan-bright)] hover:underline">
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
