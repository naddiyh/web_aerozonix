import { AerozonixWorks } from "./AerozonixWorks";
import { Hero } from "./Hero";
import { Innovation } from "./Innovation";

export const LandingPage = () => {
  return (
    <section className="flex flex-col gap-20">
      <Hero />
      <Innovation />
      <AerozonixWorks />
    </section>
  );
};
