import { SideBar } from "@/components/adminSidebar";
import { NavbarAdmin } from "@/components/NavbarAdmin";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <SideBar />
      <section className="flex w-screen flex-col">
        <NavbarAdmin />
        {children}
      </section>
    </main>
  );
}
