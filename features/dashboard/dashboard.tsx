import { InputCo, OutletCo, Statistic, History } from "../Statistic";
import { Keterangan } from "../Statistic/components/atom/LegendaCO";
import { GraphCO } from "../Statistic/graphic/GraphCO";
import { TotalLocation } from "./atom/TotalLocation";
import { TotalProduct } from "./atom/TotalProduct";
import { CurrentPollutant } from "./CurrentPollutant";
import { PredictionCO } from "./PredictionCO";

export const DashboardPage = () => {
  return (
    <main className="flex flex-col gap-10 p-10">
      <div className="flex gap-10">
        <TotalProduct />
        <TotalLocation />
      </div>
      <section className="flex gap-8">
        <section className="flex w-3/4 flex-col">
          <div className="rounded-md border px-8 py-6">
            <GraphCO />
          </div>
          {/* isi  map dibawah ini  */}
        </section>

        <section className="flex flex-col gap-6">
          <CurrentPollutant />
          <PredictionCO />
          <History />
        </section>
      </section>
    </main>
  );
};
