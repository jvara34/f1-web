import type { ConstructorStanding } from "@/lib/types";

const columnLabelStyle = {
  fontFamily: "var(--font-barlow-condensed)",
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "var(--muted-foreground)",
};

interface Props {
  standings: ConstructorStanding[];
  variant?: "compact" | "full";
}

export function ConstructorStandings({ standings, variant = "compact" }: Props) {
  const maxPoints = standings[0]?.points ?? 1;
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
        Constructor Standings
      </div>

      {variant === "full" && (
        <div className="flex items-center gap-2 pb-2">
          <span style={{ width: "14px", flexShrink: 0 }} />
          <span className="w-1 flex-shrink-0" />
          <span className="flex-1" style={columnLabelStyle}>Team</span>
          <span style={{ ...columnLabelStyle, width: "36px", textAlign: "right", flexShrink: 0 }}>Gap</span>
          <span style={{ ...columnLabelStyle, width: "20px", textAlign: "right", flexShrink: 0 }}>W</span>
          <span style={{ ...columnLabelStyle, width: "28px", textAlign: "right", flexShrink: 0 }}>Pod</span>
          <span style={{ ...columnLabelStyle, width: "32px", textAlign: "right", flexShrink: 0 }}>Pts</span>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {standings.map((c) => {
          const barWidth = (c.points / maxPoints) * 100;
          const gap = (leader?.points ?? 0) - c.points;
          const driverLabel =
            variant === "full"
              ? c.drivers.join(" · ")
              : `${c.drivers[0] ?? ""} · ${c.drivers[1] ?? ""}`;

          return (
            <div key={c.name}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.58rem",
                      color: "var(--muted-foreground)",
                      width: "14px",
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    {c.position}
                  </span>
                  <div
                    className="w-1 h-3 rounded-full flex-shrink-0"
                    style={{ background: c.color }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      flexShrink: 0,
                    }}
                  >
                    {c.name}
                  </span>
                  <span
                    className="truncate"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "0.62rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {driverLabel}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {variant === "full" && (
                    <>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "0.6rem",
                          color: "var(--muted-foreground)",
                          width: "36px",
                          textAlign: "right",
                        }}
                      >
                        {gap === 0 ? "—" : `-${gap}`}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "0.6rem",
                          color: c.wins > 0 ? "var(--foreground)" : "var(--muted-foreground)",
                          width: "20px",
                          textAlign: "right",
                        }}
                      >
                        {c.wins}W
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "0.6rem",
                          color: c.podiums > 0 ? "var(--foreground)" : "var(--muted-foreground)",
                          width: "28px",
                          textAlign: "right",
                        }}
                      >
                        {c.podiums}P
                      </span>
                    </>
                  )}
                  {variant === "compact" && c.wins > 0 && (
                    <span
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: c.color,
                      }}
                    >
                      {c.wins}W
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      width: variant === "full" ? "32px" : undefined,
                      textAlign: variant === "full" ? "right" : undefined,
                    }}
                  >
                    {c.points}
                  </span>
                </div>
              </div>

              {/* Points bar */}
              <div
                className="h-0.5 rounded-full ml-5 overflow-hidden"
                style={{ background: "var(--secondary)" }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${barWidth}%`, background: c.color, opacity: 0.7 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
