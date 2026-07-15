"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n";

/** Sincroniza `document.documentElement.lang` quando o idioma muda no cliente. */
export default function LangHtml() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
