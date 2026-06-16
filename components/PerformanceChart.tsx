"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { pointsProgression, TEAM_COLORS, driverStandings } from "@/lib/standings";

const CHART_DRIVERS = [
  { key: "NOR", name: "Norris",     team: "McLaren"  },
  { key: "VER", name: "Verstappen", team: "Red Bull" },
  { key: "LEC", name: "Leclerc",    team: "Ferrari"  },
  { key: "HAM", name: "Hamilton",   team: "Ferrari"  },
  { key: "PIA", name: "Piastri",    team: "McLaren"  },
];

// Ferrari has 2 drivers — give Hamilton a slightly lighter shade
const DRIVER_COLORS: Record<string, string> = {
  NOR: TEAM_COLORS["McLaren"],
  VER: TEAM_COLORS["Red Bull"],
  LEC: TEAM_COLORS["Ferrari"],
  HAM: "#ff4d6e",   // lighter Ferrari red for Hamilton
  PIA: "#ffb347",   // lighter McLaren orange for Piastri
};

export function PerformanceChart() {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 3px rgba(14,21,35,0.06), 0 4px 12px rgba(14,21,35,0.04)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <div
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
            }}
          >
            Points Progression
          </div>
          <div
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "0.75rem",
              color: "var(--muted-foreground)",
              marginTop: "2px",
            }}
          >
            Top 5 drivers · 2026 season (Rounds 1–7)
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={pointsProgression} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(14,21,35,0.06)"
            vertical={false}
          />
          <XAxis
            dataKey="round"
            tick={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: 10,
              fill: "#9ca3af",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: 10,
              fill: "#9ca3af",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "#0a0e1a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.65rem",
              color: "#e2e8f4",
            }}
            labelStyle={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#9ca3af",
              letterSpacing: "0.1em",
            }}
          />
          <Legend
            wrapperStyle={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "0.7rem",
              paddingTop: "8px",
            }}
          />
          {CHART_DRIVERS.map((d) => (
            <Line
              key={d.key}
              type="monotone"
              dataKey={d.key}
              name={d.name}
              stroke={DRIVER_COLORS[d.key]}
              strokeWidth={2}
              dot={{ r: 3, fill: DRIVER_COLORS[d.key], strokeWidth: 0 }}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
