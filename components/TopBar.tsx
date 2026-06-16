"use client";

import { usePathname } from "next/navigation";

const pageLabels: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/drivers": "Drivers",
  "/constructors": "Constructors",
  "/races": "Races",
  "/records": "Records",
  "/analytics": "Analytics",
};

export function TopBar() {
  const pathname = usePathname();
  const pageLabel = pageLabels[pathname] ?? "F1 Statistics";

  return (
    <div
      className="sticky top-0 z-10 flex items-center justify-between px-6 h-11 shrink-0"
      style={{
        background: "var(--card)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 3px rgba(14,21,35,0.04)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted-foreground)",
        }}
      >
        {pageLabel}
        <span className="mx-2" style={{ color: "var(--border)", opacity: 3 }}>/</span>
        <span style={{ color: "var(--foreground)" }}>2026 Season</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6rem",
            color: "var(--muted-foreground)",
          }}
        >
          Round 11 of 24
        </span>
      </div>
    </div>
  );
}
