import type { ReactNode } from "react";

type Variant = "neutral" | "cyan" | "lime" | "magenta";

export default function Badge({
  children,
  variant = "neutral",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const variantClass =
    variant === "neutral" ? "" : `badge--${variant}`;
  return <span className={`badge ${variantClass} ${className}`.trim()}>{children}</span>;
}
