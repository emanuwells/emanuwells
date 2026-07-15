"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { PulseTrafficSummary } from "@/lib/maia/pulse-types";

const TRAFFIC_COLORS = ["#38bdf8", "#f97316", "#4ade80", "#a78bfa", "#fb7185"];

export default function TrafficChart({ data }: { data: PulseTrafficSummary }) {
  const rows = [
    { name: "Cars", value: data.cars },
    { name: "Moto", value: data.motorcycles },
    { name: "Bike", value: data.bicycles },
    { name: "Bus", value: data.buses },
    { name: "Truck", value: data.trucks },
  ];

  return (
    <div className="chart-frame">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--theme-text-muted)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "var(--theme-text-muted)" }} axisLine={false} tickLine={false} width={32} />
          <Tooltip
            contentStyle={{
              background: "var(--theme-glass)",
              border: "1px solid var(--theme-glass-border)",
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {rows.map((_, i) => (
              <Cell key={i} fill={TRAFFIC_COLORS[i % TRAFFIC_COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
