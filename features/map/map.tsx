import { AerozonixMapWatermark, InfoCOMap } from "@/components/map";
import { TempDataDroneA } from "@/lib/data/dataDrone";
import findOptimalPath from "@/lib/utils/findOptimalPath";
import dynamic from "next/dynamic";
import { FaChevronDown } from "react-icons/fa6";

// Dynamically import the SimpleMap component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/map/MapComponent"), {
  ssr: false,
});

export const Map = () => {
  const center = TempDataDroneA.chargeStation;
  const coPoints = TempDataDroneA.coPoints;
  const radius = TempDataDroneA.radius;

  const path = findOptimalPath(
    TempDataDroneA.timeCleaning,
    center,
    TempDataDroneA.maxFlightTime,
    coPoints,
  );

  return (
    <div className="px-12 py-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <button className="group relative z-50 flex w-max items-center gap-2 overflow-hidden rounded-lg border border-zinc-200 bg-white px-2 py-1 text-sm font-semibold transition-all duration-200 focus:overflow-visible">
            <span>Drone-A01</span>
            <FaChevronDown className="-rotate-90 group-focus:rotate-0" />
            <div className="absolute -bottom-12 left-0 flex h-max w-full flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-1 shadow-lg">
              <span className="flex flex-row items-center gap-2 rounded-lg p-2 hover:bg-zinc-100">
                <p>Drone-A02</p>
              </span>
            </div>
          </button>
          <div className="h-fit rounded-md bg-emerald-400/25 px-2 py-1 text-sm font-medium">
            Active
          </div>
        </div>
      </div>
      <div className="my-4">
        <MapComponent
          center={center}
          coPoints={coPoints}
          radius={radius}
          path={path}
        />
      </div>
    </div>
  );
};
