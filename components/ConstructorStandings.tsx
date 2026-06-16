import { constructorStandings } from "@/lib/standings";

export function ConstructorStandings() {
  const maxPoints = constructorStandings[0].points;

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

      <div className="flex flex-col gap-3">
        {constructorStandings.map((c) => {
          const barWidth = (c.points / maxPoints) * 100;

          return (
            <div key={c.name}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.58rem",
                      color: "var(--muted-foreground)",
                      width: "14px",
                      textAlign: "right",
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
                    }}
                  >
                    {c.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "0.62rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {c.drivers[0]} · {c.drivers[1]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {c.wins > 0 && (
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
