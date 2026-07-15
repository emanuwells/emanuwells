import type { ReactNode } from "react";

type Variant = "cyan" | "lime" | "gradient";

export default function NeonCard({
  children,
  variant = "cyan",
  bracket = false,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  bracket?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`neon-card neon-card--${variant} ${bracket ? "neon-card--bracket" : ""} p-4 sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}
