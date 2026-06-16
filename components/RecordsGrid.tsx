import { Trophy, Flag, TrendingUp } from "lucide-react";
import { getSeasonLeader, TEAM_COLORS } from "@/lib/standings";
import { Card } from "@/components/Card";

const records = [
  { label: "Most Wins",          stat: "wins" as const,     unit: "wins",     icon: Trophy },
  { label: "Most Pole Positions", stat: "poles" as const,    unit: "poles",    icon: Flag },
  { label: "Most Laps Led",      stat: "lapsLed" as const,  unit: "laps led", icon: TrendingUp },
];

export function RecordsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {records.map(({ label, stat, unit, icon: Icon }) => {
        const driver = getSeasonLeader(stat);
        const teamColor = TEAM_COLORS[driver.team] ?? "#9ca3af";

        return (
          <Card key={stat} className="flex flex-col items-center text-center gap-3 py-8">
            <Icon size={20} color={teamColor} strokeWidth={2} />

            <span
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted-foreground)",
              }}
            >
              {label}
            </span>

            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "2.4rem",
                fontWeight: 700,
                color: "var(--foreground)",
                lineHeight: 1,
              }}
            >
              {driver[stat]}
            </span>
            <span
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "0.65rem",
                color: "var(--muted-foreground)",
                marginTop: "-8px",
              }}
            >
              {unit}
            </span>

            <div className="flex items-center gap-2 mt-2">
              <div className="w-1 h-4 rounded-full" style={{ background: teamColor }} />
              <div className="text-left">
                <div
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                  }}
                >
                  {driver.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.65rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {driver.team}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
