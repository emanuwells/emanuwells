type Color = "cyan" | "lime" | "magenta";

export default function ProgressBar({
  value,
  color = "cyan",
  className = "",
  label,
}: {
  value: number;
  color?: Color;
  className?: string;
  label?: string;
}) {
  const clamped = Math.min(100, Math.max(0, value));
  const fillClass =
    color === "lime" ? "progress-bar-fill--lime" : color === "magenta" ? "progress-bar-fill--magenta" : "";

  return (
    <div className={className}>
      {label && (
        <p className="sr-only" id={`progress-${label}`}>
          {label}: {clamped}%
        </p>
      )}
      <div
        className="progress-bar-track"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className={`progress-bar-fill ${fillClass}`} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
