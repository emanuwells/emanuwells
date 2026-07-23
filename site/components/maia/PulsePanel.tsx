"use client";

import { useCallback, useEffect, useState } from "react";
import { maiaPulse } from "@/lib/content";
import type { PulseResponse } from "@/lib/maia/pulse-types";
import { useLang, t } from "@/lib/i18n";
import { BentoGrid, BentoItem } from "@/components/maia/BentoGrid";
import GlassPanel from "@/components/ui/GlassPanel";
import { SceneLabel, SceneTitle } from "@/components/ui/Typography";
import StatusChip from "@/components/ui/StatusChip";
import TrafficChart from "@/components/maia/TrafficChart";

function statusLabel(status: string, lang: "pt" | "en") {
  if (status === "live") return t(maiaPulse.live, lang);
  if (status === "stale") return t(maiaPulse.stale, lang);
  return t(maiaPulse.unavailable, lang);
}

export default function PulsePanel() {
  const { lang } = useLang();
  const [data, setData] = useState<PulseResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/maia/pulse", { cache: "no-store" });
      if (!res.ok) throw new Error("pulse failed");
      setData(await res.json());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void load();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  return (
    <section id="pulse" className="maia-chapter px-4 sm:px-6 py-12 max-w-5xl mx-auto">
      <GlassPanel className="p-8">
        <SceneLabel>{t(maiaPulse.eyebrow, lang)}</SceneLabel>
        <div className="mb-8">
          <SceneTitle>{t(maiaPulse.title, lang)}</SceneTitle>
        </div>

      {loading && (
        <p className="text-sm text-[var(--theme-text-muted)]" aria-live="polite">
          {t(maiaPulse.loading, lang)}
        </p>
      )}

      {error && (
        <button type="button" onClick={load} className="text-sm text-[var(--theme-accent)] underline">
          {t(maiaPulse.retry, lang)}
        </button>
      )}

      {data && (
        <BentoGrid>
          <BentoItem accent="var(--theme-bento-meteo)" data-live={data.weather.status === "live"}>
            <header className="flex justify-between items-start mb-3">
              <h3 className="font-medium">{t(maiaPulse.weatherLabel, lang)}</h3>
              <StatusChip status={statusLabel(data.weather.status, lang)} />
            </header>
            {data.weather.tMin != null && data.weather.tMax != null ? (
              <p className="text-2xl font-[family-name:var(--font-mono)]">{data.weather.tMin}° – {data.weather.tMax}°</p>
            ) : (
              <p className="text-sm text-[var(--theme-text-muted)]">{statusLabel(data.weather.status, lang)}</p>
            )}
            <p className="text-xs text-[var(--theme-text-muted)] mt-2">{t(maiaPulse.sourceIpma, lang)}</p>
          </BentoItem>

          <BentoItem accent="var(--theme-bento-transport)" data-live={data.traffic.status === "live" && !data.traffic.illustrative}>
            <header className="flex justify-between items-start mb-3 gap-2">
              <h3 className="font-medium">{t(maiaPulse.trafficLabel, lang)}</h3>
              <StatusChip status={data.traffic.illustrative ? t(maiaPulse.illustrative, lang) : statusLabel(data.traffic.status, lang)} />
            </header>
            {data.traffic.summary ? (
              <dl className="grid grid-cols-2 gap-2 text-sm font-[family-name:var(--font-mono)]">
                <div><dt className="text-[var(--theme-text-muted)]">Cars</dt><dd>{data.traffic.summary.cars}</dd></div>
                <div><dt className="text-[var(--theme-text-muted)]">Moto</dt><dd>{data.traffic.summary.motorcycles}</dd></div>
                <div><dt className="text-[var(--theme-text-muted)]">Bike</dt><dd>{data.traffic.summary.bicycles}</dd></div>
                <div><dt className="text-[var(--theme-text-muted)]">Bus</dt><dd>{data.traffic.summary.buses}</dd></div>
              </dl>
            ) : (
              <p className="text-sm text-[var(--theme-text-muted)]">{statusLabel(data.traffic.status, lang)}</p>
            )}
            <p className="text-xs text-[var(--theme-text-muted)] mt-2">{t(maiaPulse.sourceTraffic, lang)}</p>
            {data.traffic.summary && <div className="mt-4"><TrafficChart data={data.traffic.summary} /></div>}
            {(data.traffic.illustrative || data.traffic.status === "unavailable") && (
              <button type="button" onClick={load} className="text-xs text-[var(--theme-accent)] underline mt-2">
                {t(maiaPulse.retry, lang)}
              </button>
            )}
          </BentoItem>
        </BentoGrid>
      )}
      </GlassPanel>
    </section>
  );
}
