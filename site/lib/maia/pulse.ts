import type { PulseResponse, PulseStatus, PulseTrafficSummary } from "./pulse-types";
import { getIllustrativeTraffic } from "./pulse-types";

const IPMA_URL =
  "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1131200.json";
const TRAFFIC_URL = process.env.MAIA_TRAFFIC_FLOW_URL?.trim() ?? "";

const IPMA_CACHE_MS = 30 * 60 * 1000;
const TRAFFIC_CACHE_MS = 10 * 60 * 1000;

interface CacheEntry<T> {
  data: T;
  fetchedAt: number;
}

let ipmaCache: CacheEntry<Awaited<ReturnType<typeof fetchIpma>>> | null = null;
let trafficCache: CacheEntry<Awaited<ReturnType<typeof fetchTraffic>>> | null = null;

function lisbonDateStr(date = new Date()) {
  return date.toLocaleDateString("en-CA", { timeZone: "Europe/Lisbon" });
}

function withDateRange(url: string, dateStr: string) {
  const u = new URL(url);
  u.searchParams.set("start", dateStr);
  u.searchParams.set("end", dateStr);
  return u.toString();
}

function extractJsonFromText(text: string): unknown | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed);
  } catch {
    const firstObj = trimmed.indexOf("{");
    const firstArr = trimmed.indexOf("[");
    const candidates = [firstObj, firstArr].filter((i) => i >= 0);
    if (!candidates.length) return null;
    const start = Math.min(...candidates);
    const open = trimmed[start];
    const close = open === "{" ? "}" : "]";
    const lastClose = trimmed.lastIndexOf(close);
    if (lastClose <= start) return null;
    try {
      return JSON.parse(trimmed.slice(start, lastClose + 1));
    } catch {
      return null;
    }
  }
}

function toNumber(value: unknown) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function aggregateTrafficCategories(featureCollection: {
  features?: Array<{ properties?: Record<string, unknown> }>;
}): PulseTrafficSummary {
  const features = Array.isArray(featureCollection?.features) ? featureCollection.features : [];
  const totals = { car: 0, motorcycle: 0, bicycle: 0, bus: 0, heavy: 0 };

  for (const feature of features) {
    const p = feature?.properties ?? {};
    const keys = Object.fromEntries(Object.entries(p).map(([k, v]) => [k.toLowerCase(), v]));
    totals.car += toNumber(keys.car);
    totals.motorcycle += toNumber(keys.motorcycle);
    totals.bicycle += toNumber(keys.bicycle);
    totals.bus += toNumber(keys.bus);
    totals.heavy += toNumber(keys.heavy);
  }

  const normalize = (v: number) => Math.round(v / 4);
  return {
    cars: normalize(totals.car),
    motorcycles: normalize(totals.motorcycle),
    bicycles: normalize(totals.bicycle),
    buses: normalize(totals.bus),
    trucks: normalize(totals.heavy),
    totalFeatures: features.length,
  };
}

async function fetchWithTimeout(url: string, timeoutMs: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal, next: { revalidate: 0 } });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchIpma() {
  const res = await fetchWithTimeout(IPMA_URL, 8000);
  if (!res.ok) throw new Error(`IPMA HTTP ${res.status}`);
  const json = (await res.json()) as { data?: Array<Record<string, string>> };
  const forecasts = json.data ?? [];
  if (!forecasts.length) throw new Error("IPMA empty");
  const today = lisbonDateStr();
  const todayForecast = forecasts.find((f) => f.forecastDate === today) ?? forecasts[0];
  return {
    updatedAt: new Date().toISOString(),
    tMin: toNumber(todayForecast.tMin),
    tMax: toNumber(todayForecast.tMax),
    precipitaProb: toNumber(todayForecast.precipitaProb),
    windClass: toNumber(todayForecast.classWindSpeed),
    windDir: String(todayForecast.predWindDir ?? ""),
  };
}

async function fetchTrafficPayload(url: string) {
  const res = await fetchWithTimeout(url, 4000);
  if (!res.ok) throw new Error(`Traffic HTTP ${res.status}`);
  const text = await res.text();
  const payload = extractJsonFromText(text) as Record<string, unknown> | null;
  if (!payload) throw new Error("Traffic non-JSON");
  if (payload.erro || payload.error || payload.status === "error") {
    throw new Error(String(payload.erro ?? payload.error ?? payload.message ?? "Traffic error"));
  }
  return payload;
}

async function fetchTraffic() {
  if (!TRAFFIC_URL) throw new Error("Traffic source not configured");
  const date = lisbonDateStr();
  const withRange = withDateRange(TRAFFIC_URL, date);
  let payload: { features?: Array<{ properties?: Record<string, unknown> }> };
  try {
    payload = (await fetchTrafficPayload(withRange)) as typeof payload;
  } catch {
    payload = (await fetchTrafficPayload(TRAFFIC_URL)) as typeof payload;
  }
  return {
    updatedAt: new Date().toISOString(),
    summary: aggregateTrafficCategories(payload),
  };
}

function staleStatus(fetchedAt: number, maxAgeMs: number): PulseStatus {
  return Date.now() - fetchedAt > maxAgeMs ? "stale" : "live";
}

async function getIpmaWeather() {
  try {
    if (ipmaCache && Date.now() - ipmaCache.fetchedAt < IPMA_CACHE_MS) {
      const status = staleStatus(ipmaCache.fetchedAt, IPMA_CACHE_MS);
      return {
        status,
        source: "ipma" as const,
        updatedAt: ipmaCache.data.updatedAt,
        tMin: ipmaCache.data.tMin,
        tMax: ipmaCache.data.tMax,
        precipitaProb: ipmaCache.data.precipitaProb,
        windClass: ipmaCache.data.windClass,
        windDir: ipmaCache.data.windDir,
      };
    }
    const data = await fetchIpma();
    ipmaCache = { data, fetchedAt: Date.now() };
    return {
      status: "live" as PulseStatus,
      source: "ipma" as const,
      updatedAt: data.updatedAt,
      tMin: data.tMin,
      tMax: data.tMax,
      precipitaProb: data.precipitaProb,
      windClass: data.windClass,
      windDir: data.windDir,
    };
  } catch {
    if (ipmaCache) {
      return {
        status: "stale" as PulseStatus,
        source: "ipma" as const,
        updatedAt: ipmaCache.data.updatedAt,
        tMin: ipmaCache.data.tMin,
        tMax: ipmaCache.data.tMax,
        precipitaProb: ipmaCache.data.precipitaProb,
        windClass: ipmaCache.data.windClass,
        windDir: ipmaCache.data.windDir,
      };
    }
    return { status: "unavailable" as PulseStatus, source: "ipma" as const, updatedAt: null };
  }
}

async function getTrafficPulse() {
  try {
    if (trafficCache && Date.now() - trafficCache.fetchedAt < TRAFFIC_CACHE_MS) {
      const status = staleStatus(trafficCache.fetchedAt, TRAFFIC_CACHE_MS);
      return {
        status,
        source: "traffic_flow" as const,
        updatedAt: trafficCache.data.updatedAt,
        summary: trafficCache.data.summary,
        illustrative: false,
      };
    }
    const data = await fetchTraffic();
    trafficCache = { data, fetchedAt: Date.now() };
    return {
      status: "live" as PulseStatus,
      source: "traffic_flow" as const,
      updatedAt: data.updatedAt,
      summary: data.summary,
      illustrative: false,
    };
  } catch {
    if (trafficCache) {
      return {
        status: "stale" as PulseStatus,
        source: "traffic_flow" as const,
        updatedAt: trafficCache.data.updatedAt,
        summary: trafficCache.data.summary,
        illustrative: false,
      };
    }
    return getIllustrativeTraffic();
  }
}

export async function buildPulseResponse(): Promise<PulseResponse> {
  const [weatherResult, trafficResult] = await Promise.allSettled([
    getIpmaWeather(),
    getTrafficPulse(),
  ]);

  return {
    generatedAt: new Date().toISOString(),
    weather:
      weatherResult.status === "fulfilled"
        ? weatherResult.value
        : { status: "unavailable", source: "ipma", updatedAt: null },
    traffic:
      trafficResult.status === "fulfilled"
        ? trafficResult.value
        : getIllustrativeTraffic(),
  };
}
