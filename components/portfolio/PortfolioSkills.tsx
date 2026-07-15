"use client";

import { skills } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow, SectionTitle } from "@/components/Section";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/ui/TechIcon";

export default function PortfolioSkills() {
  const { lang } = useLang();

  return (
    <Section id="skills">
      <Reveal>
        <Eyebrow>{t(skills.eyebrow, lang)}</Eyebrow>
        <SectionTitle>{t(skills.title, lang)}</SectionTitle>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {skills.groups.map((group, i) => (
          <Reveal key={group.category.pt} delay={i * 0.06}>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
                {t(group.category, lang)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] px-2.5 py-1.5 bg-[var(--color-surface-2)] rounded border border-[var(--color-border-soft)]"
                  >
                    <TechIcon name={item} size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
