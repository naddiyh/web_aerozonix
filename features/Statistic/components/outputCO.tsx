"use client";

import { useState } from "react";

export const OutletCo = () => {
  const [value, setValue] = useState(5);
  const maxValue = 300;
  const gaugeWidth = 150;
  const gaugeColor = "#639bff";

  const calculatePercent = () => {
    return (value / maxValue) * 100;
  };

  const calculateStrokeDashArray = () => {
    const radius = gaugeWidth / 2 - 5;
    const circumference = Math.PI * radius * 1.2;
    return `${circumference} ${circumference}`;
  };

  const calculateStrokeDashOffset = () => {
    const radius = gaugeWidth / 2 - 5;
    const circumference = Math.PI * radius * 1.2;
    const percent = calculatePercent();
    const dashOffset = ((100 - percent) / 100) * circumference;
    return dashOffset;
  };

  return (
    <div className="flex-col items-center justify-center gap-4 md:flex">
      <h2 className="text-text-l font-semibold">Outlet</h2>
      <div className="relative flex">
        <svg
          viewBox={`0 0 ${gaugeWidth} ${gaugeWidth / 2}`}
          className="relative h-[160px] w-[200px]"
        >
          <path
            d={`M 5, ${gaugeWidth / 1.8} 
                a ${gaugeWidth / 2 - 5},${gaugeWidth / 1.4 - 10} 0 0,1 ${gaugeWidth - 10},0`}
            stroke="#72B6FF"
            strokeWidth="10"
            fill="transparent"
            className="opacity-50"
            strokeLinecap="round"
          />

          <path
            d={`M 5, ${gaugeWidth / 1.8} 
                a ${gaugeWidth / 2 - 5},${gaugeWidth / 1.4 - 10} 0 0,1 ${gaugeWidth - 10},0`}
            stroke={gaugeColor}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={calculateStrokeDashArray()}
            strokeDashoffset={calculateStrokeDashOffset()}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex h-full w-full flex-col items-center justify-center">
          <span className="text-heading-l font-bold text-[#639bff]">
            {value}
          </span>
          <span className="text-text-s text-gray-600">ppm</span>
        </div>

        <div className="absolute -bottom-2 left-2 text-sm text-gray-600">0</div>
        <div className="absolute -bottom-2 right-2 text-sm text-gray-600">
          {maxValue}
        </div>
      </div>
    </div>
  );
};
