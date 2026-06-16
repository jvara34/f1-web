import { PageHeader } from "@/components/PageHeader";
import { DriverStandings } from "@/components/DriverStandings";
import { Card } from "@/components/Card";

export default function DriversPage() {
  return (
    <div>
      <PageHeader
        title="Driver Standings"
        subtitle="2026 Formula 1 World Drivers' Championship"
      />
      <Card>
        <DriverStandings variant="full" />
      </Card>
    </div>
  );
}
