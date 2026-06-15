import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6" style={{ background: "var(--background)" }}>
          <div className="max-w-[1200px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
