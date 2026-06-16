import { BarChart3, Users, Trophy } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";

const dashboards = [
  {
    icon: BarChart3,
    title: "Season Standings Overview",
    description: "Points progression, gaps, and championship momentum across the full grid.",
  },
  {
    icon: Users,
    title: "Driver Performance Deep-Dive",
    description: "Qualifying vs. race pace, tire strategy, and head-to-head teammate comparisons.",
  },
  {
    icon: Trophy,
    title: "Constructor Comparison",
    description: "Team points, reliability, and development trajectory race over race.",
  },
];

export default function AnalyticsPage() {
  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Interactive Tableau dashboards — season overview, driver deep-dives, constructor comparisons."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {dashboards.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="flex flex-col gap-4 py-8">
            <div className="flex items-center justify-between">
              <Icon size={20} color="var(--primary)" strokeWidth={2} />
              <span
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted-foreground)",
                  background: "var(--secondary)",
                  borderRadius: "4px",
                  padding: "2px 6px",
                }}
              >
                Coming in Phase 6
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--foreground)",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.78rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
