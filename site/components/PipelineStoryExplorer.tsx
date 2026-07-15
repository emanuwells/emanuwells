"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type KeyboardEvent } from "react";
import { pipelines } from "@/lib/content/maia-system";
import { PIPELINE_ICONS } from "@/lib/tech-icons";
import { t, useLang } from "@/lib/i18n";
import TechIcon from "@/components/ui/TechIcon";
import TechTag from "@/components/ui/TechTag";

const transition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const };

function FlowArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 12" className="hidden h-3 w-7 shrink-0 text-[var(--color-accent)] sm:block">
      <path d="M1 6h24M20 1l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PipelineIcon({ id }: { id: string }) {
  const slug = PIPELINE_ICONS[id];
  const label = slug === "mysql" ? "MySQL" : slug === "python" ? "Python" : slug === "php" ? "PHP" : slug === "fiware" ? "NGSI-LD" : "Python";
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.08]">
      <TechIcon name={label} size={20} />
    </span>
  );
}

export default function PipelineStoryExplorer() {
  const { lang } = useLang();
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(pipelines.items[0].id);
  const active = pipelines.items.find((item) => item.id === activeId) ?? pipelines.items[0];

  const moveTabFocus = (nextIndex: number) => {
    const next = pipelines.items[nextIndex];
    setActiveId(next.id);
    window.requestAnimationFrame(() => document.getElementById(`pipeline-tab-${next.id}`)?.focus());
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = pipelines.items.length - 1;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;

    if (nextIndex !== null) {
      event.preventDefault();
      moveTabFocus(nextIndex);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
      <div
        role="tablist"
        aria-label={lang === "pt" ? "Casos dos pipelines municipais" : "Municipal pipeline cases"}
        aria-orientation="vertical"
        className="flex gap-2 overflow-x-auto pb-2 no-scrollbar lg:sticky lg:top-10 lg:block lg:self-start lg:overflow-visible lg:pb-0"
      >
        {pipelines.items.map((item, index) => {
          const selected = item.id === active.id;
          return (
            <button
              key={item.id}
              id={`pipeline-tab-${item.id}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`pipeline-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={`group relative min-w-[13rem] border px-4 py-4 text-left transition-colors lg:mb-2 lg:block lg:w-full lg:min-w-0 ${
                selected
                  ? "border-[var(--color-accent)]/60 bg-[var(--color-accent)]/[0.07]"
                  : "border-[var(--color-border-soft)] bg-[var(--color-surface)]/30 hover:border-[var(--color-border)]"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="pipeline-marker"
                  className="absolute inset-y-0 left-0 w-0.5 bg-[var(--color-accent)]"
                  transition={reduceMotion ? { duration: 0 } : transition}
                />
              )}
              <span className="mb-2 flex items-center justify-between gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-dim)]">
                <span className="flex items-center gap-2">
                  <PipelineIcon id={item.id} />
                  <span>0{index + 1}</span>
                </span>
                <span className={selected ? "text-[var(--color-accent)]" : ""}>{t(item.status, lang)}</span>
              </span>
              <span className="block font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text)]">
                {item.name}
              </span>
              <span className="mt-1 block text-xs text-[var(--color-text-muted)]">{t(item.role, lang)}</span>
            </button>
          );
        })}
      </div>

      <div className="min-w-0" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={active.id}
            id={`pipeline-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`pipeline-tab-${active.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={reduceMotion ? { duration: 0 } : transition}
          >
            <header className="mb-8 border-b border-[var(--color-border-soft)] pb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <PipelineIcon id={active.id} />
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {t(active.role, lang)}
                </p>
                {"schedule" in active && active.schedule && (
                  <span className="rounded border border-[var(--color-border-soft)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-dim)]">
                    {t(active.schedule, lang)}
                  </span>
                )}
                {"apiEndpoint" in active && active.apiEndpoint && (
                  <span
                    className="inline-flex items-center gap-1.5 rounded border border-[var(--color-accent)]/40 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                  >
                    <TechIcon name="PHP" size={12} />
                    WELLS_API /{active.apiEndpoint}
                  </span>
                )}
              </div>
              <h3 className="mb-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                {active.name}
              </h3>
              <p className="max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                {t(active.problem, lang)}
              </p>
              {"highlights" in active && Array.isArray(active.highlights) && active.highlights.length > 0 && (
                <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  {active.highlights.map((h) => (
                    <li
                      key={h.pt}
                      className="inline-flex items-center gap-2 rounded border border-[var(--color-border-soft)] bg-[var(--color-surface)]/50 px-3 py-1.5 text-xs text-[var(--color-text-muted)]"
                    >
                      <span className="text-[var(--color-ok)]" aria-hidden>
                        ✓
                      </span>
                      {t(h, lang)}
                    </li>
                  ))}
                </ul>
              )}
            </header>

            <div className="mb-10 grid gap-px overflow-hidden border border-[var(--color-border-soft)] bg-[var(--color-border-soft)] md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[var(--color-surface)] p-5 sm:p-7">
                <p className="mb-5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  {t(active.example.label, lang)}
                </p>
                <div className="space-y-3 font-[family-name:var(--font-mono)] text-sm">
                  <div className="flex items-start gap-3 text-[var(--color-text-dim)]">
                    <span aria-hidden="true">−</span>
                    <span>{active.example.before}</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-[var(--color-accent)]/60 to-transparent" />
                  <div className="flex items-start gap-3 text-[var(--color-accent)]">
                    <span aria-hidden="true">+</span>
                    <span>{active.example.after}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-[var(--color-surface-2)] p-5 sm:p-7">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{t(active.example.note, lang)}</p>
              </div>
            </div>

            <div className="mb-10">
              <p className="mb-5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                {lang === "pt" ? "O percurso do dado" : "The data journey"}
              </p>
              <ol className="grid gap-3 sm:flex sm:items-stretch sm:gap-2">
                {active.steps.map((step, index) => (
                  <li key={step.pt} className="contents">
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { ...transition, delay: index * 0.07 }}
                      className="relative flex-1 border border-[var(--color-border-soft)] bg-[var(--color-surface)]/40 p-4"
                    >
                      <span className="mb-6 block font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-accent)]">
                        0{index + 1}
                      </span>
                      <span className="block text-xs leading-relaxed text-[var(--color-text-muted)]">{t(step, lang)}</span>
                    </motion.div>
                    {index < active.steps.length - 1 && <FlowArrow />}
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative overflow-hidden border-l-2 border-[var(--color-ok)] bg-[var(--color-ok)]/[0.05] px-5 py-5 sm:px-7">
              {!reduceMotion && <span aria-hidden="true" className="story-scan absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[var(--color-ok)]/10 to-transparent" />}
              <p className="relative mb-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-ok)]">
                {lang === "pt" ? "O que muda" : "What changes"}
              </p>
              <p className="relative max-w-3xl text-sm leading-relaxed text-[var(--color-text)]">{t(active.outcome, lang)}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
