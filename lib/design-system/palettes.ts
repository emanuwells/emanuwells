import type { ResolvedPhase } from "./theme-mode";
import type { TimePhase } from "./time";

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

export const PALETTES: Record<TimePhase, Palette> = {
  morning: {
    bg: "#E8F4F6",
    bgGradient: "linear-gradient(145deg, #99CDD8 0%, #DAEBE3 35%, #FDE8D3 70%, #F3C3B2 100%)",
    glass: "rgba(235, 248, 242, 0.82)",
    glassBorder: "rgba(255, 255, 255, 0.60)",
    glassHighlight: "rgba(255, 255, 255, 0.75)",
    text: "#0f2028",
    textMuted: "#3a5560",
    accent: "#066057",
    accentLight: "#318067",
    accentGlow: "rgba(6, 96, 87, 0.4)",
    secondary: "#DAEBE3",
    card: "rgba(255, 255, 255, 0.52)",
    cardHover: "rgba(255, 255, 255, 0.68)",
    shadow: "rgba(0, 0, 0, 0.06)",
    bentoMeteo: "#7dd3fc",
    bentoCuriosities: "#fde047",
    bentoPublic: "#a5b4fc",
    bentoTurism: "#6ee7b7",
    bentoEvents: "#fda4af",
    bentoTransport: "#fdba74",
    bentoMotivation: "#c4b5fd",
  },
  afternoon: {
    bg: "#E5F5F0",
    bgGradient: "linear-gradient(145deg, #066057 0%, #4BC1A0 30%, #C9D1A5 60%, #E1814C 100%)",
    glass: "rgba(220, 240, 228, 0.80)",
    glassBorder: "rgba(255, 255, 255, 0.55)",
    glassHighlight: "rgba(255, 255, 255, 0.68)",
    text: "#082420",
    textMuted: "#1e4038",
    accent: "#066057",
    accentLight: "#4BC1A0",
    accentGlow: "rgba(75, 193, 160, 0.4)",
    secondary: "#C9D1A5",
    card: "rgba(255, 255, 255, 0.48)",
    cardHover: "rgba(255, 255, 255, 0.64)",
    shadow: "rgba(0, 0, 0, 0.07)",
    bentoMeteo: "#7dd3fc",
    bentoCuriosities: "#fde047",
    bentoPublic: "#a5b4fc",
    bentoTurism: "#6ee7b7",
    bentoEvents: "#fda4af",
    bentoTransport: "#fb923c",
    bentoMotivation: "#c4b5fd",
  },
  sunset: {
    bg: "#2a1525",
    bgGradient: "linear-gradient(145deg, #200432 0%, #7A0C31 25%, #CD1A30 50%, #FE8932 75%, #FEE7B5 100%)",
    glass: "rgba(50, 18, 38, 0.78)",
    glassBorder: "rgba(254, 220, 170, 0.20)",
    glassHighlight: "rgba(254, 200, 140, 0.14)",
    text: "#FEF3E2",
    textMuted: "#f0d4a8",
    accent: "#FE8932",
    accentLight: "#FEE7B5",
    accentGlow: "rgba(254, 137, 50, 0.5)",
    secondary: "#CD1A30",
    card: "rgba(80, 35, 55, 0.42)",
    cardHover: "rgba(100, 45, 65, 0.55)",
    shadow: "rgba(0, 0, 0, 0.28)",
    bentoMeteo: "#fde68a",
    bentoCuriosities: "#fef9c3",
    bentoPublic: "#ddd6fe",
    bentoTurism: "#bbf7d0",
    bentoEvents: "#fecdd3",
    bentoTransport: "#fed7aa",
    bentoMotivation: "#ede9fe",
  },
  night: {
    bg: "#021024",
    bgGradient: "linear-gradient(145deg, #021024 0%, #052659 35%, #5483B3 70%, #7DA0CA 100%)",
    glass: "rgba(8, 18, 42, 0.82)",
    glassBorder: "rgba(140, 190, 230, 0.18)",
    glassHighlight: "rgba(140, 190, 230, 0.10)",
    text: "#E8F4FF",
    textMuted: "#b0cfea",
    accent: "#7DA0CA",
    accentLight: "#C1E8FF",
    accentGlow: "rgba(125, 160, 202, 0.4)",
    secondary: "#052659",
    card: "rgba(30, 55, 95, 0.45)",
    cardHover: "rgba(40, 70, 115, 0.58)",
    shadow: "rgba(0, 0, 0, 0.35)",
    bentoMeteo: "#bae6fd",
    bentoCuriosities: "#fef9c3",
    bentoPublic: "#c7d2fe",
    bentoTurism: "#bbf7d0",
    bentoEvents: "#fecdd3",
    bentoTransport: "#fed7aa",
    bentoMotivation: "#ddd6fe",
  },
  dawn: {
    bg: "#1a1832",
    bgGradient: "linear-gradient(145deg, #3E3862 0%, #746488 30%, #5E618C 60%, #E6C4E7 100%)",
    glass: "rgba(22, 18, 48, 0.80)",
    glassBorder: "rgba(200, 170, 210, 0.16)",
    glassHighlight: "rgba(200, 170, 210, 0.10)",
    text: "#F0E0F2",
    textMuted: "#c8b5d4",
    accent: "#b490e0",
    accentLight: "#E6C4E7",
    accentGlow: "rgba(159, 122, 234, 0.4)",
    secondary: "#3C425C",
    card: "rgba(45, 35, 70, 0.45)",
    cardHover: "rgba(60, 48, 90, 0.58)",
    shadow: "rgba(0, 0, 0, 0.32)",
    bentoMeteo: "#c7d2fe",
    bentoCuriosities: "#fef9c3",
    bentoPublic: "#ddd6fe",
    bentoTurism: "#bbf7d0",
    bentoEvents: "#fecdd3",
    bentoTransport: "#fed7aa",
    bentoMotivation: "#ede9fe",
  },
};

export const DARK_PALETTE: Palette = {
  bg: "#0a0a0c",
  bgGradient: "linear-gradient(160deg, #0a0a0c 0%, #121218 40%, #1a1a22 100%)",
  glass: "rgba(18, 18, 24, 0.88)",
  glassBorder: "rgba(255, 255, 255, 0.08)",
  glassHighlight: "rgba(255, 255, 255, 0.04)",
  text: "#f4f4f5",
  textMuted: "#a1a1aa",
  accent: "#4ade80",
  accentLight: "#86efac",
  accentGlow: "rgba(74, 222, 128, 0.35)",
  secondary: "#18181b",
  card: "rgba(24, 24, 27, 0.72)",
  cardHover: "rgba(39, 39, 42, 0.85)",
  shadow: "rgba(0, 0, 0, 0.45)",
  bentoMeteo: "#38bdf8",
  bentoCuriosities: "#facc15",
  bentoPublic: "#818cf8",
  bentoTurism: "#4ade80",
  bentoEvents: "#fb7185",
  bentoTransport: "#fb923c",
  bentoMotivation: "#a78bfa",
};

export const RESOLVED_PALETTES: Record<ResolvedPhase, Palette> = {
  ...PALETTES,
  dark: DARK_PALETTE,
};
