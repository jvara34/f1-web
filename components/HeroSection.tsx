"use client";

import { useEffect, useState } from "react";
import { getNextRace } from "@/lib/calendar";

// Austrian GP race start: Sun Jun 28 2026 13:00 UTC (15:00 CEST)
const NEXT_RACE_START = new Date("2026-06-28T13:00:00Z");

const CIRCUIT_DETAILS = {
  laps: 71,
  length: "4.318 km",
  distance: "306.452 km",
  corners: 10,
};

const SESSIONS = [
  { label: "FP1",         day: "Fri", time: "13:30 UTC" },
  { label: "FP2",         day: "Fri", time: "17:00 UTC" },
  { label: "FP3",         day: "Sat", time: "12:30 UTC" },
  { label: "Qualifying",  day: "Sat", time: "16:00 UTC" },
  { label: "Race",        day: "Sun", time: "13:00 UTC" },
];

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(() => target.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };

  const totalSecs = Math.floor(diff / 1000);
  return {
    days:  Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    mins:  Math.floor((totalSecs % 3600) / 60),
    secs:  totalSecs % 60,
  };
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "2rem",
          fontWeight: 700,
          lineHeight: 1,
          color: "#ffffff",
          minWidth: "3ch",
          textAlign: "center",
        }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "0.55rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(226,232,244,0.5)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const today = new Date();
  const nextRace = getNextRace(today);
  const { days, hours, mins, secs } = useCountdown(NEXT_RACE_START);

  if (!nextRace) return null;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--sidebar)" }}
    >
      <div className="p-5 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">

        {/* Left — race info + countdown */}
        <div className="flex flex-col gap-4">
          <div>
            <div
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "6px",
              }}
            >
              Round {nextRace.round} · Next Race
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "2rem",
                fontWeight: 900,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              {nextRace.flag} {nextRace.name}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "rgba(226,232,244,0.55)",
                marginTop: "4px",
              }}
            >
              {nextRace.circuit} · {nextRace.city}, {nextRace.country}
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-end gap-4">
            <CountUnit value={days}  label="Days"  />
            <span style={{ color: "rgba(226,232,244,0.3)", fontSize: "1.4rem", fontFamily: "var(--font-jetbrains-mono)", paddingBottom: "14px" }}>:</span>
            <CountUnit value={hours} label="Hours" />
            <span style={{ color: "rgba(226,232,244,0.3)", fontSize: "1.4rem", fontFamily: "var(--font-jetbrains-mono)", paddingBottom: "14px" }}>:</span>
            <CountUnit value={mins}  label="Mins"  />
            <span style={{ color: "rgba(226,232,244,0.3)", fontSize: "1.4rem", fontFamily: "var(--font-jetbrains-mono)", paddingBottom: "14px" }}>:</span>
            <CountUnit value={secs}  label="Secs"  />
          </div>

          {/* Circuit stats */}
          <div className="flex gap-5 flex-wrap">
            {[
              { label: "Laps",     value: String(CIRCUIT_DETAILS.laps) },
              { label: "Length",   value: CIRCUIT_DETAILS.length },
              { label: "Distance", value: CIRCUIT_DETAILS.distance },
              { label: "Corners",  value: String(CIRCUIT_DETAILS.corners) },
            ].map(({ label, value }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,244,0.4)",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "rgba(226,232,244,0.85)",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — session schedule */}
        <div
          className="rounded-lg p-4 flex flex-col gap-2 self-start"
          style={{ background: "rgba(255,255,255,0.04)", minWidth: "200px" }}
        >
          <div
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(226,232,244,0.4)",
              marginBottom: "4px",
            }}
          >
            Weekend Schedule
          </div>
          {SESSIONS.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.58rem",
                    color: "rgba(226,232,244,0.35)",
                    width: "24px",
                  }}
                >
                  {s.day}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.78rem",
                    fontWeight: s.label === "Race" ? 700 : 500,
                    color: s.label === "Race" ? "#ffffff" : "rgba(226,232,244,0.7)",
                  }}
                >
                  {s.label}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.65rem",
                  color: "rgba(226,232,244,0.45)",
                }}
              >
                {s.time}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
