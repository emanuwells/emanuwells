"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { applyThemeToDocument } from "@/lib/design-system/apply-theme";
import {
  THEME_COOKIE,
  THEME_STORAGE_KEY,
  isThemeMode,
  resolvePhase,
  type ResolvedPhase,
  type ThemeMode,
} from "@/lib/design-system/theme-mode";
import { getCurrentPhase } from "@/lib/design-system/time";

type ThemeContextValue = {
  mode: ThemeMode;
  phase: ResolvedPhase;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  mode: "varied",
  phase: "morning",
  setMode: () => {},
});

let modeStore: ThemeMode = "varied";
const listeners = new Set<() => void>();

function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "varied";
  try {
    const fromStorage = localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeMode(fromStorage)) return fromStorage;
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${THEME_COOKIE}=([^;]+)`));
    const fromCookie = match?.[1] ? decodeURIComponent(match[1]) : null;
    if (isThemeMode(fromCookie)) return fromCookie;
  } catch {
    /* localStorage indisponível */
  }
  return "varied";
}

function persistMode(mode: ThemeMode) {
  modeStore = mode;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
    document.cookie = `${THEME_COOKIE}=${encodeURIComponent(mode)};path=/;max-age=31536000;SameSite=Lax`;
  } catch {
    /* ignorar */
  }
  applyThemeToDocument(resolvePhase(mode));
  listeners.forEach((l) => l());
}

function subscribeMode(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getModeSnapshot(): ThemeMode {
  return modeStore;
}

function subscribePhase(onStoreChange: () => void) {
  const tick = () => onStoreChange();
  const id = window.setInterval(tick, modeStore === "varied" ? 60_000 : 900_000);
  window.addEventListener("storage", tick);
  return () => {
    window.clearInterval(id);
    window.removeEventListener("storage", tick);
  };
}

function getPhaseSnapshot(): ResolvedPhase {
  return resolvePhase(modeStore);
}

export function ThemeProvider({ children, initialMode = "varied" }: { children: ReactNode; initialMode?: ThemeMode }) {
  useEffect(() => {
    modeStore = readStoredMode();
    applyThemeToDocument(resolvePhase(modeStore));
    listeners.forEach((l) => l());
  }, []);

  const mode = useSyncExternalStore(subscribeMode, getModeSnapshot, () => initialMode);
  const phase = useSyncExternalStore(subscribePhase, getPhaseSnapshot, getCurrentPhase);

  useEffect(() => {
    applyThemeToDocument(phase);
  }, [phase]);

  const setMode = useCallback((next: ThemeMode) => {
    persistMode(next);
  }, []);

  const value = useMemo(() => ({ mode, phase, setMode }), [mode, phase, setMode]);

  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-shell min-h-screen" data-phase={phase}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useThemePhase() {
  return useContext(ThemeContext).phase;
}

export function useTheme() {
  return useContext(ThemeContext);
}
