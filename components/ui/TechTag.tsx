import TechIcon from "@/components/ui/TechIcon";

export default function TechTag({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[var(--theme-glass-border)] text-[var(--theme-text-muted)] rounded ${className}`}
    >
      <TechIcon name={label} size={14} />
      {label}
    </span>
  );
}
