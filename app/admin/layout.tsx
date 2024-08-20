import { SideBar } from "@/components/adminSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <SideBar />
      <section className="">{children}</section>
    </main>
  );
}
