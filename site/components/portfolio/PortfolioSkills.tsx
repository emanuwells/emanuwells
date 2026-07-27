"use client";

import { skills, skillBadges } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import TechTag from "@/components/ui/TechTag";

export default function PortfolioSkills() {
  const { lang } = useLang();

  return (
    <Section id="skills">
      <Reveal>
        <Eyebrow>{t(skills.eyebrow, lang)}</Eyebrow>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-balance mb-8">
          {t(skills.title, lang)}
        </h2>
      </Reveal>
      <Reveal delay={0.04}>
        <div className="flex flex-wrap gap-2.5 mt-2 mb-4">
          {skillBadges.map((badge) => (
            <TechTag
              key={badge}
              label={badge}
              className="!text-[11px] !px-3 !py-1.5 bg-[var(--color-surface-2)]"
            />
          ))}
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {skills.groups.map((group, i) => (
          <Reveal key={group.category.pt} delay={i * 0.06}>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--theme-text)] mb-4">
                {t(group.category, lang)}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2.5 text-sm text-[var(--color-text-muted)] px-3 py-2 bg-[var(--color-surface-2)] rounded-lg border border-[var(--color-border-soft)]"
                  >
                    <TechIcon name={item} size={18} />
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
