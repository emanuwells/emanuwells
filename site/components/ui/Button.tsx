"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

/** primary = lime fill, secondary = cyan outline, tertiary = subtle outline */
type Variant = "primary" | "secondary" | "tertiary" | "lime" | "cyan" | "ghost";

function resolveVariant(variant: Variant): "primary" | "secondary" | "tertiary" {
  if (variant === "lime") return "primary";
  if (variant === "cyan") return "secondary";
  if (variant === "ghost") return "tertiary";
  return variant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  const resolved = resolveVariant(variant);
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[999px] px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyber-cyan)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none";
  const styles: Record<"primary" | "secondary" | "tertiary", string> = {
    primary:
      "bg-[var(--cyber-lime)] text-[#0a0e17] border border-[var(--cyber-lime)] hover:shadow-[0_0_16px_var(--cyber-lime-glow)] hover:-translate-y-px",
    secondary:
      "border border-[var(--cyber-cyan)] text-[var(--cyber-cyan-bright)] bg-transparent hover:bg-[rgba(77,216,232,0.08)] hover:shadow-[0_0_16px_var(--cyber-cyan-glow)]",
    tertiary:
      "border border-[var(--border-subtle)] text-[var(--text-secondary)] bg-transparent hover:text-[var(--cyber-cyan)]",
  };
  return (
    <button className={`${base} ${styles[resolved]} ${className}`} {...props}>
      {children}
    </button>
  );
}
