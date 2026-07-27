"use client";

import { Github, Linkedin } from "lucide-react";
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
        <h2 className="font-[family-name:var(--font-mono)] text-3xl sm:text-4xl font-semibold text-balance mb-4 leading-tight">
          {t(contact.title, lang)}
        </h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-xl mb-10">
          {t(contact.subtitle, lang)}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-[var(--border-subtle)]">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t(contact.githubLabel, lang)}
            className="inline-flex items-center gap-2 text-sm text-[var(--cyber-cyan-bright)] hover:underline"
          >
            <Github size={20} aria-hidden />
            {t(contact.githubLabel, lang)}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={t(contact.linkedinLabel, lang)}
            className="inline-flex items-center gap-2 text-sm text-[var(--cyber-cyan-bright)] hover:underline"
          >
            <Linkedin size={20} aria-hidden />
            {t(contact.linkedinLabel, lang)}
          </a>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
            {t(footer.text, lang)}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
            © {new Date().getFullYear()}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
