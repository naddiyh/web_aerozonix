"use client";

// import dynamic from "next/dynamic";
import { History } from "../Statistic/components/History";
import { TotalLocation } from "./atom/TotalLocation";
import { TotalProduct } from "./atom/TotalProduct";
import { CurrentPollutant } from "./CurrentPollutant";
import { PredictionCO } from "./PredictionCO";
import { GraphCO } from "../Statistic";

// const GraphCO = dynamic(
//   () => import("@/features/Statistic").then((mod) => mod.GraphCO),
//   {
//     ssr: false,
//   },
// );
export const DashboardPage = () => {
  return (
    <main className="grid grid-cols-1 gap-10 p-10">
      <div className="flex gap-10">
        <TotalProduct />

        <TotalLocation />
      </div>
      <section className="grid grid-cols-1 gap-6">
        <section className="flex gap-4">
          <div className="w-3/4 rounded-md border px-6 py-4">
            <GraphCO />
          </div>
          <div className="grid grid-cols-1 justify-center gap-4">
            <CurrentPollutant />
            <PredictionCO />
          </div>
        </section>

        <section className="flex gap-4">
          <div className="w-3/4">{/* <Map /> */}</div>
          <History />
        </section>
      </section>
    </main>
  );
};
