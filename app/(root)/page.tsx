// test
import { ClientNavbar } from "@/components/ClientNavbar/ClientNavbar";
import { Footer } from "@/components/footer/Footer";
import { LandingPage } from "@/features/landinpage/LandingPage";

export default async function Home() {
  return (
    <main className="bg-primary-dark blue flex h-full flex-col gap-10">
      <ClientNavbar />
      <LandingPage />
      <Footer />
    </main>
  );
}
