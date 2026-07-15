"use client";

import { projects } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";
import TechTag from "@/components/ui/TechTag";

export default function PortfolioProjects() {
  const { lang } = useLang();

  return (
    <Section id="projects">
      <Reveal>
        <Eyebrow>{t(projects.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(projects.title, lang)}</SectionTitle>
        <p className="text-[var(--theme-text-muted)] leading-relaxed max-w-2xl mb-10">{t(projects.intro, lang)}</p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <article className="h-full glass-card p-6 flex flex-col project-card">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{t(item.name, lang)}</h3>
                {item.isPrivate && (
                  <span className="shrink-0 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider text-[var(--color-warn)] border border-[var(--color-warn)]/30 px-2 py-0.5 rounded">
                    {t(projects.privateLabel, lang)}
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed mb-4 flex-1">{t(item.description, lang)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex gap-3">
                {item.githubUrl && (
                  <a href={item.githubUrl} target="_blank" rel="noreferrer" className="text-sm text-[var(--theme-accent)] hover:underline">
                    GitHub ↗
                  </a>
                )}
                {item.id === "wells-os" && (
                  <a
                    href="https://wells-os.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)]"
                  >
                    {lang === "pt" ? "Conhecer o WELLS_OS" : "Explore WELLS_OS"} ↗
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
