import { api } from "@/lib/api";
import { PageHeader } from "@/components/PageHeader";
import { HeroSection } from "@/components/HeroSection";
import { StatCards } from "@/components/StatCards";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DriverStandings } from "@/components/DriverStandings";
import { ConstructorStandings } from "@/components/ConstructorStandings";
import { RaceResults } from "@/components/RaceResults";
import { SeasonCalendar } from "@/components/SeasonCalendar";
import { Card } from "@/components/Card";

export default async function DashboardPage() {
  const [driverStandings, constructorStandings, recentRaces] = await Promise.all([
    api.getDriverStandings(),
    api.getConstructorStandings(),
    api.getRecentRaces(),
  ]);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Formula 1 Performance Intelligence"
        subtitle="Explore race results, driver trends, constructor performance, and historical comparisons."
      />

      <HeroSection />

      <StatCards standings={driverStandings} />

      {/* PerformanceChart uses cumulative round-by-round data — wired up in Phase 5 */}
      <PerformanceChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card><DriverStandings standings={driverStandings} /></Card>
        <Card><ConstructorStandings standings={constructorStandings} /></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5">
        <Card><RaceResults races={recentRaces} /></Card>
        <Card><SeasonCalendar /></Card>
      </div>
    </div>
  );
}
