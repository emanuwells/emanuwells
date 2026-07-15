export type PulseStatus = "live" | "stale" | "unavailable";

export interface PulseWeather {
  status: PulseStatus;
  source: "ipma";
  updatedAt: string | null;
  tMin?: number;
  tMax?: number;
  precipitaProb?: number;
  windClass?: number;
  windDir?: string;
}

export interface PulseTrafficSummary {
  cars: number;
  motorcycles: number;
  bicycles: number;
  buses: number;
  trucks: number;
  totalFeatures: number;
}

export interface PulseTraffic {
  status: PulseStatus;
  source: "traffic_flow";
  updatedAt: string | null;
  summary?: PulseTrafficSummary;
  illustrative?: boolean;
}

export interface PulseResponse {
  generatedAt: string;
  weather: PulseWeather;
  traffic: PulseTraffic;
}

const ILLUSTRATIVE_TRAFFIC: PulseTrafficSummary = {
  cars: 1240,
  motorcycles: 380,
  bicycles: 95,
  buses: 210,
  trucks: 145,
  totalFeatures: 48,
};

export function getIllustrativeTraffic(): PulseTraffic {
  return {
    status: "unavailable",
    source: "traffic_flow",
    updatedAt: null,
    summary: ILLUSTRATIVE_TRAFFIC,
    illustrative: true,
  };
}
