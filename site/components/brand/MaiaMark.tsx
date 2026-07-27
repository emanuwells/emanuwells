"use client";

export default function MaiaMark({
  href = "https://dados.cm-maia.pt",
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
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--theme-glass-border)] bg-[color-mix(in_oklab,#0d1117_70%,transparent)] text-[var(--theme-text)] transition hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] ${className}`}
      aria-label="Dados abertos · Município da Maia"
      title="dados.cm-maia.pt"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/maia-m.svg" alt="" width={16} height={20} className="opacity-95" />
    </a>
  );
}
