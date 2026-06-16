import { PageHeader } from "@/components/PageHeader";
import { RaceResults } from "@/components/RaceResults";
import { SeasonCalendar } from "@/components/SeasonCalendar";
import { Card } from "@/components/Card";

export default function RacesPage() {
  return (
    <div>
      <PageHeader
        title="Race Results"
        subtitle="2026 season results and upcoming schedule"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5">
        <Card><RaceResults /></Card>
        <Card><SeasonCalendar /></Card>
      </div>
    </div>
  );
}
