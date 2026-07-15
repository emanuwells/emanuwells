"use client";

import { useThemePhase } from "@/components/ThemeProvider";

/** Wrapper Maia que reflecte a fase do ThemeProvider global. */
export default function MaiaThemeShell({ children }: { children: React.ReactNode }) {
  const phase = useThemePhase();
  return (
    <div className={`maia-page maia-theme-${phase} min-h-screen`} data-maia-phase={phase}>
      {children}
    </div>
  );
}
