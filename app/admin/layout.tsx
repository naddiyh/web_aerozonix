import { SideBar } from "@/components/adminSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <SideBar />
      <section className="w-full bg-primary-bluewhite">{children}</section>
    </main>
  );
}
