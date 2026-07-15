import { cookies } from "next/headers";
import { COOKIE_NAME, type Lang } from "./i18n-constants";

export async function getServerLang(): Promise<Lang> {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  return value === "en" ? "en" : "pt";
}
