"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "lime" | "cyan" | "ghost";

export default function Button({
  children,
  variant = "lime",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyber-cyan)]";
  const styles: Record<Variant, string> = {
    lime: "bg-[var(--cyber-lime)] text-[#0a0f0a] hover:bg-[var(--cyber-lime-bright)] shadow-[var(--cyber-glow-lime)] font-semibold",
    cyan: "border border-[var(--cyber-cyan)] text-[var(--cyber-cyan-bright)] bg-transparent hover:bg-[rgba(34,211,238,0.08)] shadow-[var(--cyber-glow-cyan)]",
    ghost:
      "border border-[rgba(148,163,184,0.35)] text-[var(--cyber-text-muted)] bg-transparent hover:text-[var(--cyber-text)] hover:border-[var(--cyber-text-muted)]",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
