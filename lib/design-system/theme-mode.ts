import { getCurrentPhase, type TimePhase } from "./time";

export const THEME_COOKIE = "wells_theme_mode";
export const THEME_STORAGE_KEY = "wells_theme_mode";

export type ThemeMode = "varied" | TimePhase | "dark";
export type ResolvedPhase = TimePhase | "dark";

export const THEME_MODE_OPTIONS: ThemeMode[] = [
  "varied",
  "dawn",
  "morning",
  "afternoon",
  "sunset",
  "night",
  "dark",
];

export const THEME_MODE_LABELS: Record<ThemeMode, { pt: string; en: string }> = {
  varied: { pt: "Automático", en: "Auto" },
  dawn: { pt: "Madrugada", en: "Dawn" },
  morning: { pt: "Manhã", en: "Morning" },
  afternoon: { pt: "Tarde", en: "Afternoon" },
  sunset: { pt: "Pôr do sol", en: "Sunset" },
  night: { pt: "Noite", en: "Night" },
  dark: { pt: "Escuro", en: "Dark" },
};

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value != null && THEME_MODE_OPTIONS.includes(value as ThemeMode);
}

export function resolvePhase(mode: ThemeMode): ResolvedPhase {
  if (mode === "varied") return getCurrentPhase();
  return mode;
}

export function readThemeModeFromCookie(cookieHeader: string | null | undefined): ThemeMode {
  if (!cookieHeader) return "varied";
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${THEME_COOKIE}=([^;]+)`));
  const value = match?.[1] ? decodeURIComponent(match[1]) : null;
  return isThemeMode(value) ? value : "varied";
}
