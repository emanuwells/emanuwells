import type { ReactNode } from "react";
import NeonCard from "@/components/ui/NeonCard";

type Glow = "cyan" | "lime" | "magenta" | "gradient";

export default function StatCard({
  value,
  label,
  glow = "cyan",
  icon,
  className = "",
}: {
  value: ReactNode;
  label: ReactNode;
  glow?: Glow;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <NeonCard
      variant={glow}
      bracket={glow !== "magenta"}
      className={`text-center flex flex-col items-center gap-2 ${glow === "magenta" ? "kpi-magenta-glow" : ""} ${className}`}
    >
      {icon && <div className="mb-1 text-[var(--cyber-cyan)]">{icon}</div>}
      <div className="kpi-value">{value}</div>
      <div className="text-sm text-[var(--cyber-text-muted)]">{label}</div>
    </NeonCard>
  );
}
