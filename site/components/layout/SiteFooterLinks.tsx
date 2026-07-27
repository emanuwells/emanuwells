"use client";

import { Github, Linkedin } from "lucide-react";
import { contact, footer } from "@/lib/content";
import { useLang, t } from "@/lib/i18n";

/** Shared GH + LI + © strip (portfolio contact + Maia page). */
export default function SiteFooterLinks({ className = "" }: { className?: string }) {
  const { lang } = useLang();

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-6">
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
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-2 border-t border-[var(--border-subtle)] pt-8">
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
          {t(footer.text, lang)}
        </p>
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
