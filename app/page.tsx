import { ClientNavbar } from "@/components/ClientNavbar/ClientNavbar";
import { LandingPage } from "@/features/landinpage/LandingPage";

export default function Home() {
  return (
    <main className="bg-primary-dark blue flex h-full flex-col">
      <ClientNavbar />
      <LandingPage />
    </main>
  );
}
