export type MaiaTimeTheme = "dawn" | "morning" | "afternoon" | "sunset" | "night";

export function getMaiaTimeTheme(date = new Date()): MaiaTimeTheme {
  const hour = Number(
    date.toLocaleString("en-GB", { timeZone: "Europe/Lisbon", hour: "numeric", hour12: false })
  );
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  if (hour >= 18 && hour < 21) return "sunset";
  return "night";
}
