"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COOKIE_NAME, type Lang } from "@/lib/i18n-constants";

export type { Lang };

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

function persistLang(lang: Lang) {
  document.documentElement.lang = lang;
  document.cookie = `${COOKIE_NAME}=${lang};path=/;max-age=31536000;samesite=lax`;
}

export function LangProvider({
  children,
  initialLang = "pt",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    persistLang(lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const value = useMemo(
    () => ({
      lang,
      toggle: () => setLangState((l) => (l === "pt" ? "en" : "pt")),
      setLang,
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang deve ser usado dentro de LangProvider");
  return ctx;
}

export function t<T extends { pt: string; en: string }>(field: T, lang: Lang): string {
  return field[lang];
}
