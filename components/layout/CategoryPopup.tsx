"use client";

import { useLang } from "@/lib/i18n";
import { projects } from "@/lib/content/portfolio";
import { maiaNavItems } from "@/lib/content/maia";

export default function CategoryPopup({
  categoryId,
  onClose,
  onNavigate,
}: {
  categoryId: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}) {
  const { lang } = useLang();

  const title =
    categoryId === "projects"
      ? lang === "pt"
        ? "Projetos"
        : "Projects"
      : categoryId === "maia"
        ? "Maia"
        : categoryId;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      role="dialog"
      aria-modal
      aria-label={title}
      onClick={onClose}
    >
      <div className="glass-panel max-w-md w-full p-6 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">{title}</h2>
          <button type="button" onClick={onClose} className="text-sm text-[var(--theme-text-muted)]">
            {lang === "pt" ? "Fechar" : "Close"}
          </button>
        </div>
        <ul className="space-y-2">
          {categoryId === "projects" &&
            projects.items.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className="w-full text-left glass-card p-3 hover:bg-[var(--theme-card-hover)]"
                  onClick={() => onNavigate("projects")}
                >
                  <strong className="block text-sm">{lang === "pt" ? p.name.pt : p.name.en}</strong>
                  <span className="text-xs text-[var(--theme-text-muted)]">
                    {lang === "pt" ? p.description.pt : p.description.en}
                  </span>
                </button>
              </li>
            ))}
          {categoryId === "maia" &&
            maiaNavItems.map((ch) => (
              <li key={ch.id}>
                <a
                  href={`/maia#${ch.id}`}
                  className="block glass-card p-3 hover:bg-[var(--theme-card-hover)] text-sm"
                >
                  {lang === "pt" ? ch.label.pt : ch.label.en}
                </a>
              </li>
            ))}
          {(categoryId === "skills" || categoryId === "contact") && (
            <li>
              <button
                type="button"
                className="w-full text-left glass-card p-3 text-sm"
                onClick={() => onNavigate(categoryId)}
              >
                {lang === "pt" ? "Ir para secção" : "Go to section"}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
