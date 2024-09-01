"use client";

import { AerozonixMapWatermark, InfoCOMap } from "@/components/map";
import ComponentTableOfCO from "@/components/map/ComponentTableOfCO";
import { DropdownMenuCheckboxes } from "@/components/map/dropdown";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TempDataDroneA } from "@/lib/data/dataDrone";
import findOptimalPath from "@/lib/utils/findOptimalPath";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

// Dynamically import the SimpleMap component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/map/MapComponent"), {
  ssr: false,
});

export const Map = () => {
  const center = TempDataDroneA.chargeStation;
  const coPoints = TempDataDroneA.coPoints;
  const radius = TempDataDroneA.radius;

  const [drone, setDrone] = useState("");
  const listDrone: string[] = ["Drone-A01", "Drone-X01"];

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
          <Select
            defaultValue={listDrone[0]}
            onValueChange={(value) => setDrone(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              {listDrone.map((drone) => (
                <SelectItem value={drone}>{drone}</SelectItem>
              ))}
            </SelectContent>
          </Select>
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
      <div>
        <ComponentTableOfCO />
      </div>
    </div>
  );
};
