import { techIconSlug } from "@/lib/tech-icons";

const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons";

export default function TechIcon({
  name,
  size = 16,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const slug = techIconSlug(name);
  if (!slug) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-sm bg-[var(--theme-accent)]/15 font-[family-name:var(--font-mono)] text-[8px] font-bold uppercase text-[var(--theme-accent)] ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${CDN}/${slug}.svg`}
      alt=""
      width={size}
      height={size}
      className={`tech-icon shrink-0 ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
