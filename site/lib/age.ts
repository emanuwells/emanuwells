/** Age in full years for a birth date, using a calendar day in `timeZone`. */
export function ageFromBirthdate(
  birthIso: string,
  timeZone = "Europe/Lisbon",
  now = new Date()
): number {
  const birth = new Date(`${birthIso}T12:00:00Z`);
  if (Number.isNaN(birth.getTime())) return 0;

  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);

  const by = birth.getUTCFullYear();
  const bm = birth.getUTCMonth() + 1;
  const bd = birth.getUTCDate();

  let age = year - by;
  if (month < bm || (month === bm && day < bd)) age -= 1;
  return Math.max(0, age);
}

export const EMANUEL_BIRTHDATE = "1991-10-07";
