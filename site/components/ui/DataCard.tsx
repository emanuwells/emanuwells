import type { ReactNode } from "react";

export default function DataCard({
  title,
  children,
  accent,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  accent?: string;
  className?: string;
}) {
  return (
    <article
      className={`glass-card p-5 h-full ${className}`}
      style={accent ? { borderTopColor: accent, borderTopWidth: 3 } : undefined}
    >
      {title && <h3 className="font-medium mb-2 text-[var(--theme-text)]">{title}</h3>}
      {children}
    </article>
  );
}
