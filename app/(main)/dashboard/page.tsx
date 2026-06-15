import { PageHeader } from "@/components/PageHeader";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Formula 1 Performance Intelligence"
        subtitle="Explore race results, driver trends, constructor performance, and historical comparisons."
      />

      {/* Widgets will be built here in Phase 2 */}
      <div
        className="rounded-xl p-8 flex items-center justify-center"
        style={{
          background: "var(--card)",
          border: "1px dashed var(--border)",
          boxShadow: "0 1px 3px rgba(14,21,35,0.06)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
          }}
        >
          Dashboard widgets coming soon
        </p>
      </div>
    </div>
  );
}
