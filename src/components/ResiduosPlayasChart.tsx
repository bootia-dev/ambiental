"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface ResiduosPlayasDataPoint {
  month: string;
  kg: number;
}

interface ResiduosPlayasChartProps {
  data: ResiduosPlayasDataPoint[];
}

const BAR_COLOR = "#0d9488";
const BAR_COLOR_DARK = "#2dd4bf";
const GRID_COLOR = "rgba(148, 163, 184, 0.2)";
const GRID_COLOR_DARK = "rgba(148, 163, 184, 0.15)";
const TEXT_COLOR = "#475569";
const TEXT_COLOR_DARK = "#94a3b8";

export default function ResiduosPlayasChart({ data }: ResiduosPlayasChartProps) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  if (!data?.length) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center text-slate-500 dark:text-slate-400">
        No hay datos para mostrar.
      </div>
    );
  }

  const maxKg = Math.max(...data.map((d) => d.kg), 1);

  return (
    <div className="h-full w-full p-6 pb-2">
      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <BarChart
          data={data}
          margin={{ top: 16, right: 16, left: 0, bottom: 0 }}
          barCategoryGap="28%"
          barGap={4}
        >
          <CartesianGrid
            strokeDasharray="2 4"
            stroke={isDark ? GRID_COLOR_DARK : GRID_COLOR}
            vertical={false}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={BAR_COLOR} stopOpacity={0.85} />
              <stop offset="100%" stopColor={BAR_COLOR} stopOpacity={1} />
            </linearGradient>
            <linearGradient id="barGradientDark" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={BAR_COLOR_DARK} stopOpacity={0.8} />
              <stop offset="100%" stopColor={BAR_COLOR_DARK} stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 11,
              fill: isDark ? TEXT_COLOR_DARK : TEXT_COLOR,
              fontWeight: 500,
            }}
            dy={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 11,
              fill: isDark ? TEXT_COLOR_DARK : TEXT_COLOR,
            }}
            tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v))}
            width={36}
            domain={[0, Math.ceil((maxKg * 1.05) / 50000) * 50000]}
          />
          <Tooltip
            cursor={{ fill: isDark ? "rgba(51, 65, 85, 0.4)" : "rgba(0,0,0,0.04)" }}
            contentStyle={{
              borderRadius: 10,
              border: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
              padding: "12px 16px",
              backgroundColor: isDark ? "#1e293b" : "#fff",
            }}
            labelStyle={{
              fontSize: 12,
              fontWeight: 600,
              color: isDark ? "#e2e8f0" : "#0f172a",
              marginBottom: 4,
            }}
            formatter={(value) => [
              value != null ? `${Number(value).toLocaleString("es-UY")} kg` : "",
              "Residuos",
            ]}
          />
          <Bar
            dataKey="kg"
            radius={[6, 6, 0, 0]}
            maxBarSize={48}
          >
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={isDark ? "url(#barGradientDark)" : "url(#barGradient)"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
