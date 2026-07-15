"use client";

import { Github, Linkedin, Mail } from "lucide-react";
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
      </Reveal>

      <Reveal delay={0.06}>
        <div className="pt-8 border-t border-[rgba(34,211,238,0.2)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--cyber-cyan-bright)] hover:underline"
            >
              <Mail size={16} aria-hidden />
              LinkedIn / {t(contact.linkedinLabel, lang)}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--cyber-text-muted)] hover:text-[var(--cyber-cyan)]"
            >
              <Github size={16} aria-hidden />
              github.com/emanuwells
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--cyber-cyan)] hover:text-[var(--cyber-cyan-bright)]">
              <Github size={22} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--cyber-cyan)] hover:text-[var(--cyber-cyan-bright)]">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">{t(footer.text, lang)}</p>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">© {new Date().getFullYear()}</p>
        </div>
      </Reveal>
    </Section>
  );
}
