import { PageHeader } from "@/components/PageHeader";
import { RecordsGrid } from "@/components/RecordsGrid";

export default function RecordsPage() {
  return (
    <div>
      <PageHeader
        title="Season Records"
        subtitle="Most wins, pole positions, and laps led — 2026 season"
      />
      <RecordsGrid />
    </div>
  );
}
