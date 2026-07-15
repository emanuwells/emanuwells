export default function StatusChip({ status }: { status: string }) {
  const n = status.toLowerCase();
  const tone =
    n.includes("ok") || n.includes("live") || n.includes("enabled") || n.includes("success")
      ? "bg-[var(--color-ok)]/20 text-[var(--color-ok)]"
      : n.includes("warn") || n.includes("stale") || n.includes("paused")
        ? "bg-[var(--color-warn)]/20 text-[var(--color-warn)]"
        : n.includes("crit") || n.includes("error") || n.includes("fail")
          ? "bg-[var(--color-crit)]/20 text-[var(--color-crit)]"
          : "bg-[var(--theme-glass)] text-[var(--theme-text-muted)]";
  return (
    <span className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${tone}`}>
      {status}
    </span>
  );
}
