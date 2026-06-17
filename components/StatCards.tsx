import { getNextRace, getSeasonProgress } from "@/lib/calendar";
import type { DriverStanding } from "@/lib/types";

interface Props {
  standings: DriverStanding[];
}

function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: string;
}) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-1"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 3px rgba(14,21,35,0.06)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "0.58rem",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--muted-foreground)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "1.6rem",
          fontWeight: 900,
          lineHeight: 1,
          color: accent ?? "var(--foreground)",
        }}
      >
        {value}
      </div>
      {sub && (
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "var(--muted-foreground)",
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

export function StatCards({ standings }: Props) {
  const today = new Date();
  const { completed, total } = getSeasonProgress(today);
  const nextRace = getNextRace(today);

  const leader = standings[0];
  const second = standings[1];
  const gap = leader && second ? leader.points - second.points : 0;

  const daysToNext = nextRace
    ? Math.ceil(
        (new Date(nextRace.dateStart).getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <StatCard
        label="Rounds Done"
        value={`${completed} / ${total}`}
        sub="2026 season progress"
      />
      <StatCard
        label="Season Leader"
        value={leader?.code ?? "—"}
        sub={leader && second ? `+${gap} pts over ${second.code}` : ""}
        accent="var(--primary)"
      />
      <StatCard
        label="Next Race In"
        value={daysToNext !== null ? `${daysToNext}d` : "—"}
        sub={nextRace ? `${nextRace.shortName}` : "Season complete"}
        accent={daysToNext !== null && daysToNext <= 7 ? "#e8002d" : undefined}
      />
      <StatCard
        label="Wins Leader"
        value={`${leader?.wins ?? 0}`}
        sub={leader ? `${leader.first_name} ${leader.last_name} · ${leader.constructor_name}` : ""}
      />
    </div>
  );
}
