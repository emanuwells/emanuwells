import type { ReactNode } from "react";

export function SceneLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--theme-accent)] mb-3">
      {children}
    </p>
  );
}

export function SceneTitle({ children, as: Tag = "h2" }: { children: ReactNode; as?: "h1" | "h2" | "h3" }) {
  return (
    <Tag className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-balance leading-tight text-[var(--theme-text)]">
      {children}
    </Tag>
  );
}

export function HeroTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-balance text-[var(--theme-text)]">
      {children}
    </h1>
  );
}
