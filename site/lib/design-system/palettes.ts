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
  bg: "#050a0f",
  bgGradient:
    "radial-gradient(ellipse 120% 80% at 50% -30%, rgba(34, 211, 238, 0.08), transparent 55%), linear-gradient(180deg, #050a0f 0%, #07111f 100%)",
  glass: "rgba(7, 17, 31, 0.88)",
  glassBorder: "rgba(34, 211, 238, 0.35)",
  glassHighlight: "rgba(103, 232, 249, 0.08)",
  text: "#f8fafc",
  textMuted: "#94a3b8",
  accent: "#22d3ee",
  accentLight: "#67e8f9",
  accentGlow: "rgba(34, 211, 238, 0.4)",
  secondary: "#84cc16",
  card: "rgba(7, 17, 31, 0.75)",
  cardHover: "rgba(12, 28, 48, 0.9)",
  shadow: "rgba(0, 0, 0, 0.5)",
  bentoMeteo: "#22d3ee",
  bentoCuriosities: "#a3e635",
  bentoPublic: "#818cf8",
  bentoTurism: "#4ade80",
  bentoEvents: "#f472b6",
  bentoTransport: "#fb923c",
  bentoMotivation: "#a855f7",
};

export type ResolvedPhase = "terminal";

export const RESOLVED_PALETTES: Record<ResolvedPhase, Palette> = {
  terminal: TERMINAL_PALETTE,
};
