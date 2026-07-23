import { type ReactNode } from "react";

export default function Section({
  id,
  children,
  className = "",
  bare = false,
  wide = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  bare?: boolean;
  /** Quando true, não aplica o max-w-4xl interno — a secção gere a própria largura. */
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-20 px-6 sm:px-10 py-24 sm:py-32 ${
        bare ? "" : "border-t border-[var(--color-border-soft)]"
      } ${className}`}
    >
      {wide ? children : <div className="max-w-4xl mx-auto">{children}</div>}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[var(--cyber-cyan)] mb-4">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-balance mb-6 leading-tight">
      {children}
    </h2>
  );
}
