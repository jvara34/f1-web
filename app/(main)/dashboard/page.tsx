import { PageHeader } from "@/components/PageHeader";
import { HeroSection } from "@/components/HeroSection";
import { StatCards } from "@/components/StatCards";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DriverStandings } from "@/components/DriverStandings";
import { ConstructorStandings } from "@/components/ConstructorStandings";
import { RaceResults } from "@/components/RaceResults";
import { SeasonCalendar } from "@/components/SeasonCalendar";
import { Card } from "@/components/Card";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Formula 1 Performance Intelligence"
        subtitle="Explore race results, driver trends, constructor performance, and historical comparisons."
      />

      {/* Next race hero with countdown */}
      <HeroSection />

      {/* 4 quick-stat cards */}
      <StatCards />

      {/* Points progression chart */}
      <PerformanceChart />

      {/* Driver + Constructor standings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card><DriverStandings /></Card>
        <Card><ConstructorStandings /></Card>
      </div>

      {/* Race results + season calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5">
        <Card><RaceResults /></Card>
        <Card><SeasonCalendar /></Card>
      </div>
    </div>
  );
}
