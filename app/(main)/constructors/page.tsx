import { PageHeader } from "@/components/PageHeader";
import { ConstructorStandings } from "@/components/ConstructorStandings";
import { Card } from "@/components/Card";

export default function ConstructorsPage() {
  return (
    <div>
      <PageHeader
        title="Constructor Standings"
        subtitle="2026 Formula 1 World Constructors' Championship"
      />
      <Card>
        <ConstructorStandings variant="full" />
      </Card>
    </div>
  );
}
