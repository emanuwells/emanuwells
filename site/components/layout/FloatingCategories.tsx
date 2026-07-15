"use client";

import { useEffect, useState } from "react";
import { Briefcase, MapPin, Sparkles, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";
import CategoryPopup from "./CategoryPopup";

const CATEGORIES = [
  { id: "projects", icon: Briefcase, label: { pt: "Projetos", en: "Projects" } },
  { id: "maia", icon: MapPin, label: { pt: "Maia", en: "Maia" } },
  { id: "skills", icon: Sparkles, label: { pt: "Competências", en: "Skills" } },
  { id: "contact", icon: Mail, label: { pt: "Contacto", en: "Contact" } },
] as const;

export default function FloatingCategories() {
  const { lang } = useLang();
  const [active, setActive] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    setActive(null);
    if (id === "maia") {
      window.location.href = "/maia";
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="floating-cats" aria-label={lang === "pt" ? "Categorias rápidas" : "Quick categories"}>
        {CATEGORIES.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              type="button"
              className="floating-cat-btn"
              style={{ "--float-delay": `${index * 0.35}s` } as React.CSSProperties}
              title={cat.label[lang]}
              aria-label={cat.label[lang]}
              onClick={() => setActive(cat.id)}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
      {active && <CategoryPopup categoryId={active} onClose={() => setActive(null)} onNavigate={scrollTo} />}
    </>
  );
}

export function HeaderClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("pt-PT", {
          timeZone: "Europe/Lisbon",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--theme-text-muted)]">{time}</span>
  );
}

