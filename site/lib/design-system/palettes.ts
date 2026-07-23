export type Palette = {
  bg: string;
  bgGradient: string;
  glass: string;
  glassBorder: string;
  glassHighlight: string;
  text: string;
  textMuted: string;
  accent: string;
  accentLight: string;
  accentGlow: string;
  secondary: string;
  card: string;
  cardHover: string;
  shadow: string;
  bentoMeteo: string;
  bentoCuriosities: string;
  bentoPublic: string;
  bentoTurism: string;
  bentoEvents: string;
  bentoTransport: string;
  bentoMotivation: string;
};

export const TERMINAL_PALETTE: Palette = {
  bg: "#0a0e17",
  bgGradient:
    "radial-gradient(ellipse 120% 80% at 50% -30%, rgba(77, 216, 232, 0.08), transparent 55%), linear-gradient(180deg, #0a0e17 0%, #0d1220 100%)",
  glass: "rgba(16, 21, 31, 0.88)",
  glassBorder: "rgba(77, 216, 232, 0.35)",
  glassHighlight: "rgba(126, 232, 244, 0.08)",
  text: "#e8ecf1",
  textMuted: "#8b95a5",
  accent: "#4dd8e8",
  accentLight: "#7ee8f4",
  accentGlow: "rgba(77, 216, 232, 0.45)",
  secondary: "#c8f04a",
  card: "rgba(16, 21, 31, 0.75)",
  cardHover: "rgba(20, 28, 42, 0.9)",
  shadow: "rgba(0, 0, 0, 0.5)",
  bentoMeteo: "#4dd8e8",
  bentoCuriosities: "#c8f04a",
  bentoPublic: "#818cf8",
  bentoTurism: "#4ade80",
  bentoEvents: "#d946ef",
  bentoTransport: "#fb923c",
  bentoMotivation: "#d946ef",
};

export const MAIA_PALETTE: Palette = {
  ...TERMINAL_PALETTE,
  bg: "#140a1f",
  bgGradient:
    "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(217, 70, 239, 0.12), transparent 55%), linear-gradient(180deg, #140a1f 0%, #1a0e2e 100%)",
  glass: "rgba(26, 14, 46, 0.75)",
  glassBorder: "rgba(217, 70, 239, 0.35)",
  secondary: "#d946ef",
  card: "rgba(26, 14, 46, 0.75)",
  cardHover: "rgba(36, 20, 58, 0.9)",
  bentoEvents: "#d946ef",
  bentoMotivation: "#d946ef",
};

export type ResolvedPhase = "terminal" | "maia";

export const RESOLVED_PALETTES: Record<ResolvedPhase, Palette> = {
  terminal: TERMINAL_PALETTE,
  maia: MAIA_PALETTE,
};
