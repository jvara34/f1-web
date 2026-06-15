"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users2,
  Building2,
  Flag,
  Trophy,
  BarChart3,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/drivers", label: "Drivers", icon: Users2 },
  { href: "/constructors", label: "Constructors", icon: Building2 },
  { href: "/races", label: "Races", icon: Flag },
  { href: "/records", label: "Records", icon: Trophy },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col w-56 shrink-0 h-full"
      style={{ background: "var(--sidebar)", borderRight: "1px solid var(--sidebar-border)" }}
    >
      {/* Brand */}
      <div className="px-5 pt-6 pb-5" style={{ borderBottom: "1px solid var(--sidebar-border)" }}>
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "1.1rem",
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          F1 Statistics
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6rem",
            color: "var(--sidebar-foreground)",
            opacity: 0.4,
            marginTop: "2px",
          }}
        >
          2025 SEASON
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors"
              style={{
                background: active ? "var(--sidebar-accent)" : "transparent",
                color: active ? "#ffffff" : "var(--sidebar-foreground)",
                opacity: active ? 1 : 0.7,
              }}
            >
              <Icon size={15} strokeWidth={active ? 2.5 : 1.8} />
              <span
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontSize: "0.8rem",
                  fontWeight: active ? 700 : 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </span>
              {active && (
                <span
                  className="ml-auto w-1 h-1 rounded-full"
                  style={{ background: "var(--sidebar-primary)" }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        className="px-5 py-4"
        style={{ borderTop: "1px solid var(--sidebar-border)" }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.58rem",
            color: "var(--sidebar-foreground)",
            opacity: 0.4,
            lineHeight: 1.6,
          }}
        >
          DATA · ERGAST API
          <br />
          BUILT WITH NEXT.JS
        </div>
      </div>
    </aside>
  );
}
