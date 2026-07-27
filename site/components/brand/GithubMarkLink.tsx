"use client";

import { Github } from "lucide-react";

/** Compact GitHub mark next to emanuwells in the header. */
export default function GithubMarkLink({
  href = "https://github.com/emanuwells",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--theme-glass-border)] text-[var(--theme-text-muted)] transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] ${className}`}
      aria-label="GitHub · emanuwells"
      title="GitHub"
    >
      <Github size={16} aria-hidden />
    </a>
  );
}
