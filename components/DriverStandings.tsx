import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { DriverStanding } from "@/lib/types";

const columnLabelStyle = {
  fontFamily: "var(--font-barlow-condensed)",
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "var(--muted-foreground)",
};

interface Props {
  standings: DriverStanding[];
  variant?: "compact" | "full";
}

export function DriverStandings({ standings, variant = "compact" }: Props) {
  const visible = variant === "full" ? standings : standings.slice(0, 5);
  const leader = standings[0];

  return (
    <div>
      <div
        className="mb-3"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted-foreground)",
        }}
      >
        Driver Standings
      </div>

      {variant === "full" && (
        <div className="flex items-center gap-3 px-2 pb-2">
          <span style={{ width: "16px", flexShrink: 0 }} />
          <span className="w-0.5 flex-shrink-0" />
          <span className="flex-1" style={columnLabelStyle}>Driver</span>
          <span style={{ ...columnLabelStyle, width: "36px", textAlign: "right", flexShrink: 0 }}>Gap</span>
          <span style={{ ...columnLabelStyle, width: "14px", textAlign: "right", flexShrink: 0 }}>W</span>
          <span style={{ ...columnLabelStyle, width: "24px", textAlign: "right", flexShrink: 0 }}>Pod</span>
          <span style={{ ...columnLabelStyle, width: "32px", textAlign: "right", flexShrink: 0 }}>Pts</span>
          <span className="w-4 flex-shrink-0" />
        </div>
      )}

      <div className="flex flex-col gap-0.5">
        {visible.map((driver) => {
          const teamColor = driver.constructor_color ?? "#9ca3af";
          const gap = (leader?.points ?? 0) - driver.points;

          return (
            <div
              key={driver.code}
              className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[var(--secondary)] transition-colors"
            >
              {/* Position */}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: driver.position <= 3 ? "var(--foreground)" : "var(--muted-foreground)",
                  width: "16px",
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {driver.position}
              </span>

              {/* Team color bar */}
              <div
                className="w-0.5 h-5 rounded-full flex-shrink-0"
                style={{ background: teamColor }}
              />

              {/* Name + team */}
              <div className="flex-1 min-w-0">
                <div
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    lineHeight: 1.1,
                  }}
                >
                  {driver.first_name} {driver.last_name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {driver.constructor_name}
                </div>
              </div>

              {/* Gap */}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.6rem",
                  color: "var(--muted-foreground)",
                  width: "36px",
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {gap === 0 ? "—" : `-${gap}`}
              </span>

              {/* Wins */}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.6rem",
                  color: driver.wins > 0 ? "var(--foreground)" : "var(--muted-foreground)",
                  width: "14px",
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {driver.wins}W
              </span>

              {/* Podiums (full variant only) */}
              {variant === "full" && (
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.6rem",
                    color: driver.podiums > 0 ? "var(--foreground)" : "var(--muted-foreground)",
                    width: "24px",
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {driver.podiums}P
                </span>
              )}

              {/* Points */}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  width: "32px",
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {driver.points}
              </span>

              {/* Trend placeholder — Phase 5 will compute from race-by-race deltas */}
              <div className="w-4 flex-shrink-0">
                <Minus size={12} color="var(--muted-foreground)" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
