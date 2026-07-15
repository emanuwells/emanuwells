import { TERMINAL_PALETTE } from "./palettes";

const VARS: (keyof typeof TERMINAL_PALETTE)[] = [
  "bg",
  "bgGradient",
  "glass",
  "glassBorder",
  "glassHighlight",
  "text",
  "textMuted",
  "accent",
  "accentLight",
  "accentGlow",
  "secondary",
  "card",
  "cardHover",
  "shadow",
  "bentoMeteo",
  "bentoCuriosities",
  "bentoPublic",
  "bentoTurism",
  "bentoEvents",
  "bentoTransport",
  "bentoMotivation",
];

export function applyThemeToDocument() {
  if (typeof document === "undefined") return;
  const palette = TERMINAL_PALETTE;
  const root = document.documentElement;
  root.setAttribute("data-theme", "terminal");

  for (const key of VARS) {
    const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    root.style.setProperty(`--theme-${cssKey}`, palette[key]);
  }

  root.style.setProperty("--color-bg", palette.bg);
  root.style.setProperty("--color-text", palette.text);
  root.style.setProperty("--color-text-muted", palette.textMuted);
  root.style.setProperty("--color-accent", palette.accent);
  root.style.setProperty("--color-accent-2", palette.accentLight);
  root.style.setProperty("--color-surface", palette.card);
  root.style.setProperty("--color-border", palette.glassBorder);
}
