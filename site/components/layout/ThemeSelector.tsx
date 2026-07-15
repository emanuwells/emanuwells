"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Sunrise, Sunset, CloudSun, Sparkles, Palette } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/components/ThemeProvider";
import {
  THEME_MODE_LABELS,
  THEME_MODE_OPTIONS,
  type ThemeMode,
} from "@/lib/design-system/theme-mode";
import type { ResolvedPhase } from "@/lib/design-system/theme-mode";

const PHASE_ICONS: Record<ResolvedPhase, typeof Sun> = {
  dawn: Moon,
  morning: Sunrise,
  afternoon: Sun,
  sunset: Sunset,
  night: CloudSun,
  dark: Moon,
};

const MODE_ICONS: Partial<Record<ThemeMode, typeof Sun>> = {
  varied: Sparkles,
  dark: Moon,
};

export default function ThemeSelector() {
  const { lang } = useLang();
  const { mode, phase, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const CurrentIcon = mode === "varied" ? Sparkles : MODE_ICONS[mode] ?? PHASE_ICONS[phase];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  return (
    <div className="theme-selector" ref={ref}>
      <button
        type="button"
        className="theme-selector-btn"
        aria-label={lang === "pt" ? "Escolher tema" : "Choose theme"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <CurrentIcon size={16} />
      </button>
      {open && (
        <div className="theme-selector-popover" role="listbox" aria-label={lang === "pt" ? "Temas" : "Themes"}>
          {THEME_MODE_OPTIONS.map((option) => {
            const Icon = MODE_ICONS[option] ?? PHASE_ICONS[option as ResolvedPhase] ?? Palette;
            const selected = mode === option;
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected}
                className={`theme-selector-option${selected ? " is-selected" : ""}`}
                onClick={() => {
                  setMode(option);
                  setOpen(false);
                }}
              >
                <Icon size={14} />
                <span>{THEME_MODE_LABELS[option][lang]}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
