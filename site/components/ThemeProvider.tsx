"use client";

import { useEffect, type ReactNode } from "react";
import { applyThemeToDocument } from "@/lib/design-system/apply-theme";
import CircuitBackground from "@/components/ui/CircuitBackground";

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyThemeToDocument();
    try {
      localStorage.setItem("wells_theme_mode", "terminal");
      document.cookie = "wells_theme_mode=terminal;path=/;max-age=31536000;SameSite=Lax";
    } catch {
      /* ignorar */
    }
  }, []);

  return (
    <div className="theme-shell min-h-screen relative" data-phase="terminal">
      <CircuitBackground />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export function useThemePhase() {
  return "terminal" as const;
}

export function useTheme() {
  return {
    mode: "terminal" as const,
    phase: "terminal" as const,
    setMode: () => {},
  };
}
