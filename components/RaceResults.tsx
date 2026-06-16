"use client";

import { useState } from "react";
import { recentRaces, TEAM_COLORS } from "@/lib/standings";

export function RaceResults() {
  const [activeIdx, setActiveIdx] = useState(0);
  const race = recentRaces[activeIdx];

  const podium = race.results.slice(0, 3);
  const rest   = race.results.slice(3);

  return (
    <div>
      {/* Header + race selector tabs */}
      <div className="flex items-center justify-between mb-4">
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
          Race Results
        </div>
        <div className="flex gap-1">
          {recentRaces.map((r, i) => (
            <button
              key={r.round}
              onClick={() => setActiveIdx(i)}
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: "6px",
                border: "1px solid",
                borderColor: activeIdx === i ? "var(--primary)" : "var(--border)",
                background: activeIdx === i ? "rgba(59,111,255,0.08)" : "transparent",
                color: activeIdx === i ? "var(--primary)" : "var(--muted-foreground)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              R{r.round}
            </button>
          ))}
        </div>
      </div>

      {/* Race info */}
      <div className="mb-4">
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "0.95rem",
            fontWeight: 800,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "var(--foreground)",
          }}
        >
          {race.raceName}
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6rem",
            color: "var(--muted-foreground)",
            marginTop: "2px",
          }}
        >
          {race.circuit} · {race.date}
        </div>
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-2 mb-5">
        {/* 2nd */}
        <PodiumSlot result={podium[1]} place={2} height={72} />
        {/* 1st */}
        <PodiumSlot result={podium[0]} place={1} height={92} />
        {/* 3rd */}
        <PodiumSlot result={podium[2]} place={3} height={56} />
      </div>

      {/* Remaining results */}
      <div className="flex flex-col gap-0.5">
        {rest.map((r) => {
          const teamColor = TEAM_COLORS[r.team] ?? "#9ca3af";
          return (
            <div key={r.position} className="flex items-center gap-3 px-2 py-1.5">
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.62rem",
                  color: "var(--muted-foreground)",
                  width: "16px",
                  textAlign: "right",
                }}
              >
                {r.position}
              </span>
              <div className="w-0.5 h-4 rounded-full" style={{ background: teamColor }} />
              <span
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  flex: 1,
                }}
              >
                {r.driver}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.6rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {r.time}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  width: "28px",
                  textAlign: "right",
                }}
              >
                {r.points}pt
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PodiumSlot({
  result,
  place,
  height,
}: {
  result: (typeof recentRaces)[0]["results"][0];
  place: number;
  height: number;
}) {
  const teamColor = TEAM_COLORS[result.team] ?? "#9ca3af";
  const placeColors: Record<number, string> = {
    1: "#f59e0b",
    2: "#94a3b8",
    3: "#b45309",
  };

  return (
    <div className="flex flex-col items-center gap-1 flex-1">
      <span
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "0.72rem",
          fontWeight: 700,
          color: teamColor,
        }}
      >
        {result.shortName}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.55rem",
          color: "var(--muted-foreground)",
        }}
      >
        {result.time}
      </span>
      <div
        className="w-full rounded-t-lg flex items-start justify-center pt-2"
        style={{
          height: `${height}px`,
          background: `${teamColor}18`,
          border: `1px solid ${teamColor}30`,
          borderBottom: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "1.4rem",
            fontWeight: 900,
            color: placeColors[place],
          }}
        >
          {place}
        </span>
      </div>
    </div>
  );
}
