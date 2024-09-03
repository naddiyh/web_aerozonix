"use client";
import { Daily } from "../Statistic/components/atom/DailyButton";
import { Data } from "./tes";
export const PredictionCO = () => {
  return (
    <section className="flex max-w-[357px] flex-col gap-2 rounded-md border p-5">
      <div className="flex justify-between">
        <h2 className="font-semibold">Prediction CO</h2>
        <Daily />
      </div>
      <div className="grid-cols-4">
        {Data.slice(0, 4).map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <p className="font-medium">{item.time}</p>
            <p>{item.ppm} ppm</p>
            <p className="w-10 border-t-4 border-secondary-darkteal"></p>
            <p className="font-medium text-secondary-darkteal">{item.ket}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
