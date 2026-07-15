import type { ReactNode } from "react";

export default function GlassPanel({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  return <Tag className={`glass-panel ${className}`}>{children}</Tag>;
}
