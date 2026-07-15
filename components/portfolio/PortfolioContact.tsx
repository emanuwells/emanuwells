"use client";

import { contact, footer } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function PortfolioContact() {
  const { lang } = useLang();

  return (
    <Section id="contact" bare className="pb-16">
      <Reveal>
        <Eyebrow>{t(contact.eyebrow, lang)}</Eyebrow>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-balance mb-4 leading-tight">
          {t(contact.title, lang)}
        </h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-xl mb-10">{t(contact.subtitle, lang)}</p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm hover:border-[var(--color-accent)] transition-colors"
          >
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-text-dim)]">
              {t(contact.githubLabel, lang)}
            </span>
            <span>github.com/emanuwells ↗</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm hover:border-[var(--color-accent)] transition-colors"
          >
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-text-dim)]">
              {t(contact.linkedinLabel, lang)}
            </span>
            <span>LinkedIn ↗</span>
          </a>
        </div>
      </Reveal>

      <div className="pt-8 border-t border-[var(--color-border-soft)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">{t(footer.text, lang)}</p>
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">© {new Date().getFullYear()}</p>
      </div>
    </Section>
  );
}
