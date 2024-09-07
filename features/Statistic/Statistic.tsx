"use client";
import {
  DownloadFile,
  Location,
  StatusDrone,
  History,
  OutletCo,
  InputCo,
  Keterangan,
} from "@/features/Statistic";
import dynamic from "next/dynamic";

const GraphCO = dynamic<React.ComponentType>(
  () => import("./graphic/GraphCO"),
  {
    ssr: false,
  },
) as React.ComponentType;

export const Statistic = () => {
  return (
    <main className="flex flex-col gap-10 p-10">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Location />
          <StatusDrone />
        </div>
        <DownloadFile />
      </div>
      <section className="flex gap-8">
        <section className="flex flex-col gap-10">
          <section className="flex w-full items-center gap-10 rounded-xl bg-white px-10 py-12 shadow-custom">
            <InputCo />
            <OutletCo />
            <Keterangan />
          </section>
          <section className="flex w-full items-center rounded-xl bg-white px-10 py-12 shadow-custom">
            <GraphCO />
          </section>
        </section>
        <History />
      </section>
    </main>
  );
};
