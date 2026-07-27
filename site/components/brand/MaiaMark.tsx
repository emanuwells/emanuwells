"use client";

/** Official Maia wordmark «M» (white) → open data portal. */
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
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--theme-glass-border)] bg-[#0a0e17] transition hover:border-[var(--theme-accent)] ${className}`}
      aria-label="Dados abertos · Município da Maia"
      title="dados.cm-maia.pt"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/maia-m.svg" alt="" width={18} height={16} className="block" />
    </a>
  );
}
