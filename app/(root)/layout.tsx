// test
import { ClientNavbar } from "@/components/ClientNavbar/ClientNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <ClientNavbar />
      {children}
    </main>
  );
}
