export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h1
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontSize: "1.8rem",
          fontWeight: 900,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "var(--foreground)",
          lineHeight: 1,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--muted-foreground)",
            marginTop: "4px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
