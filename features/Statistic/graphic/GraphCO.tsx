"use client";
import { Line } from "react-chartjs-2";
import { Data } from "./Dta";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { Daily } from "../components/atom/DailyButton";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   zoomPlugin,
// );

const GraphCO: React.FC = () => {
  const actualDataLength = Math.floor(Data.length / 2);

  const ppmValues = Data.map((data) => data.ppm);
  const minPpm = Math.min(...ppmValues);
  const maxPpm = Math.max(...ppmValues);
  const margin = 50;

  const [data, setData] = useState({
    labels: Data.map((data) => data.time),
    datasets: [
      {
        label: "CO Levels",
        data: Data.map((data) => data.ppm),
        backgroundColor: "rgba(99, 155, 255, 0.2)",
        borderColor: "#639bff",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: (ctx: any) => {
          const ppm = Data[ctx.dataIndex].ppm;
          if (ppm <= 50) {
            return "#639bff";
          } else if (ppm <= 100) {
            return "#FDB633";
          } else if (ppm <= 150) {
            return "#FF0000";
          } else {
            return "#000000";
          }
        },
        pointBorderColor: (ctx: any) => {
          const ppm = Data[ctx.dataIndex].ppm;
          if (ppm <= 50) {
            return "#639bff";
          } else if (ppm <= 100) {
            return "#FDB633";
          } else if (ppm <= 150) {
            return "#FF0000";
          } else {
            return "#000000";
          }
        },
        segment: {
          borderColor: (ctx: any) => {
            const ppm = Data[ctx.p0DataIndex].ppm;
            if (ppm <= 50) {
              return "#639bff";
            } else if (ppm <= 100) {
              return "#FDB633";
            } else if (ppm <= 150) {
              return "#FF0000";
            } else {
              return "#000000";
            }
          },
          borderDash: (ctx: any) =>
            ctx.p0DataIndex >= actualDataLength ? [5, 5] : [],
        },
      },
    ],
  });

  return (
    <section className="flex w-full flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Forecast Data</h2>
          <Daily />
        </div>
        <div className="flex justify-between">
          <p className="text-text-s font-medium text-gray-600">CO Graph</p>
          <p className="text-text-xs text-gray-600">
            Carbon Monoxide Levels Over Time
          </p>
        </div>
      </div>

      <div className="flex h-[300px]">
        {/* <Line
          data={data}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  generateLabels: (chart) => {
                    const labels = [];
                    labels.push({
                      text: "Actual",
                      strokeStyle: "#639bff",
                      fillStyle: "#639bff",
                      lineDash: [],
                      datasetIndex: 0,
                    });
                    labels.push({
                      text: "Prediction",
                      strokeStyle: "#FDB633",
                      fillStyle: "#FDB633",
                      lineDash: [5, 5],
                      datasetIndex: 0,
                    });
                    return labels;
                  },
                },
              },
              zoom: {
                zoom: {
                  wheel: {
                    enabled: true,
                  },
                  pinch: {
                    enabled: false,
                  },
                  mode: "x",
                },
                pan: {
                  enabled: true,
                  mode: "x",

                  threshold: 2,
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Time",
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  maxRotation: 0,
                  minRotation: 0,
                  padding: 5,
                },
              },
              y: {
                title: {
                  display: true,
                  text: "CO Levels (ppm)",
                },
                min: minPpm - margin,
                max: maxPpm + margin,
              },
            },
          }}
        /> */}
      </div>
    </section>
  );
};

export default GraphCO;
