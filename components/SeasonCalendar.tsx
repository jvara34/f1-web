import { CheckCircle2, Circle, Flag } from "lucide-react";
import {
  races2026,
  getRaceStatus,
  getSeasonProgress,
  formatRaceDate,
} from "@/lib/calendar";

export function SeasonCalendar() {
  const today = new Date();
  const { completed, total } = getSeasonProgress(today);
  const progressPct = Math.round((completed / total) * 100);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
          }}
        >
          2026 Season Calendar
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.62rem",
            color: "var(--muted-foreground)",
          }}
        >
          {completed}/{total} rounds
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="h-1 rounded-full mb-4 overflow-hidden"
        style={{ background: "var(--secondary)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${progressPct}%`, background: "var(--primary)" }}
        />
      </div>

      {/* Race list */}
      <div className="flex flex-col gap-0.5 max-h-[480px] overflow-y-auto pr-1">
        {races2026.map((race) => {
          const status = getRaceStatus(race, today);
          const isNext = status === "next";
          const isDone = status === "completed";

          return (
            <div
              key={race.round}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
              style={{
                background: isNext
                  ? "rgba(59,111,255,0.06)"
                  : "transparent",
                border: isNext
                  ? "1px solid rgba(59,111,255,0.18)"
                  : "1px solid transparent",
              }}
            >
              {/* Status icon */}
              <div className="shrink-0 w-4 flex items-center justify-center">
                {isDone ? (
                  <CheckCircle2 size={14} color="#16a34a" strokeWidth={2} />
                ) : isNext ? (
                  <Flag size={14} color="var(--primary)" strokeWidth={2} />
                ) : (
                  <Circle size={14} color="var(--muted-foreground)" strokeWidth={1.5} />
                )}
              </div>

              {/* Round number */}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.58rem",
                  color: isDone
                    ? "#16a34a"
                    : isNext
                    ? "var(--primary)"
                    : "var(--muted-foreground)",
                  width: "20px",
                  flexShrink: 0,
                }}
              >
                R{race.round}
              </span>

              {/* Flag + name */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span style={{ fontSize: "0.75rem", lineHeight: 1 }}>{race.flag}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "0.82rem",
                      fontWeight: isNext ? 700 : isDone ? 500 : 600,
                      color: isDone
                        ? "var(--muted-foreground)"
                        : "var(--foreground)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {race.shortName}
                  </span>
                  {race.isSprint && (
                    <span
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "0.52rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.1)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        borderRadius: "3px",
                        padding: "1px 4px",
                      }}
                    >
                      S
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.58rem",
                    color: "var(--muted-foreground)",
                    marginTop: "1px",
                  }}
                >
                  {race.city} · {formatRaceDate(race.dateStart, race.dateEnd)}
                </div>
              </div>

              {/* Winner or countdown indicator */}
              {race.winner && (
                <span
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--muted-foreground)",
                    flexShrink: 0,
                  }}
                >
                  {race.winner}
                </span>
              )}
              {isNext && (
                <span
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                  }}
                >
                  Next
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
