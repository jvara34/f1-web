import { api } from "@/lib/api";
import { PageHeader } from "@/components/PageHeader";
import { ConstructorStandings } from "@/components/ConstructorStandings";
import { Card } from "@/components/Card";

export default async function ConstructorsPage() {
  const standings = await api.getConstructorStandings();

  return (
    <div>
      <PageHeader
        title="Constructor Standings"
        subtitle="2026 Formula 1 World Constructors' Championship"
      />
      <Card>
        <ConstructorStandings standings={standings} variant="full" />
      </Card>
    </div>
  );
}
