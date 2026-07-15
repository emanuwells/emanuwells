export type TimePhase = "dawn" | "morning" | "afternoon" | "sunset" | "night";

export function getTimePhase(hour: number): TimePhase {
  if (hour >= 23 || hour < 6) return "dawn";
  if (hour >= 8 && hour < 13) return "morning";
  if (hour >= 13 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 19) return "sunset";
  return "night";
}

export function getLisbonHour(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Lisbon",
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  return Number(parts.find((p) => p.type === "hour")?.value ?? 12);
}

export function getCurrentPhase(): TimePhase {
  return getTimePhase(getLisbonHour());
}

export const PHASE_LABELS: Record<TimePhase, { pt: string; en: string }> = {
  dawn: { pt: "Madrugada", en: "Dawn" },
  morning: { pt: "Manhã", en: "Morning" },
  afternoon: { pt: "Tarde", en: "Afternoon" },
  sunset: { pt: "Pôr do sol", en: "Sunset" },
  night: { pt: "Noite", en: "Night" },
};
