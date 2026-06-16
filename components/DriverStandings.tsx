import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { driverStandings, TEAM_COLORS } from "@/lib/standings";

export function DriverStandings() {
  const leader = driverStandings[0];

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

      <div className="flex flex-col gap-0.5">
        {driverStandings.map((driver) => {
          const teamColor = TEAM_COLORS[driver.team] ?? "#9ca3af";
          const gap = leader.points - driver.points;

          return (
            <div
              key={driver.shortName}
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
                  {driver.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {driver.team}
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

              {/* Trend */}
              <div className="w-4 flex-shrink-0">
                {driver.trend === "up" && <TrendingUp size={12} color="#16a34a" />}
                {driver.trend === "down" && <TrendingDown size={12} color="#e8002d" />}
                {driver.trend === "same" && <Minus size={12} color="var(--muted-foreground)" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
