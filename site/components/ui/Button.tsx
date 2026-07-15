"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles: Record<Variant, string> = {
    primary:
      "bg-[var(--theme-accent)] text-white hover:opacity-90 shadow-[0_0_20px_var(--theme-accent-glow)]",
    secondary:
      "glass-card text-[var(--theme-text)] hover:bg-[var(--theme-card-hover)] border border-[var(--theme-glass-border)]",
    ghost: "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)]",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
