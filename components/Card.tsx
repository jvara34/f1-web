export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl p-5 ${className}`}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 3px rgba(14,21,35,0.06), 0 4px 12px rgba(14,21,35,0.04)",
      }}
    >
      {children}
    </div>
  );
}
