import { api } from "@/lib/api";
import { PageHeader } from "@/components/PageHeader";
import { DriverStandings } from "@/components/DriverStandings";
import { Card } from "@/components/Card";

export default async function DriversPage() {
  const standings = await api.getDriverStandings();

  return (
    <div>
      <PageHeader
        title="Driver Standings"
        subtitle="2026 Formula 1 World Drivers' Championship"
      />
      <Card>
        <DriverStandings standings={standings} variant="full" />
      </Card>
    </div>
  );
}
