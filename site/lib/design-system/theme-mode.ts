export const THEME_COOKIE = "wells_theme_mode";
export const THEME_STORAGE_KEY = "wells_theme_mode";

export type ThemeMode = "terminal";
export type ResolvedPhase = "terminal";

export const THEME_MODE_OPTIONS: ThemeMode[] = ["terminal"];

export const THEME_MODE_LABELS: Record<ThemeMode, { pt: string; en: string }> = {
  terminal: { pt: "Terminal", en: "Terminal" },
};

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === "terminal";
}

export function resolvePhase(): ResolvedPhase {
  return "terminal";
}

export function readThemeModeFromCookie(): ThemeMode {
  return "terminal";
}
