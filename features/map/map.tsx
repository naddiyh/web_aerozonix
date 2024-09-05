"use client";

import ComponentTableOfCO from "@/components/map/ComponentTableOfCO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDrone } from "@/interfaces";
import { TempDataDroneA } from "@/lib/data/dataDrone";
import findOptimalPath from "@/lib/utils/findOptimalPath";
import { getAllDrones } from "@/service/drone";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the SimpleMap component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/map/MapComponent"), {
  ssr: false,
});

export const Map = () => {
  const center = TempDataDroneA.chargeStation;
  const coPoints = TempDataDroneA.coPoints;
  // const radius = TempDataDroneA.radius;

  const [drone, setDrone] = useState<IDrone>();
  // const [radius, setRadius] = useState<number>(0);
  const [droneData, setDroneData] = useState<IDrone[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Tambahkan state loading

  const fetchDrones = async () => {
    try {
      console.log("Fetching drones...");
      const data = await getAllDrones();
      setDroneData(data);
      if (data.length > 0) {
        const dataDrone = data[0];
        setDrone(dataDrone);
        console.log({ dataDrone });
      }
      console.log(data.length);
    } catch (error) {
      console.error("Failed to fetch drones:", error);
    } finally {
      console.log({ drone });
      setIsLoading(false); // Set loading menjadi false setelah data berhasil diambil
    }
  };

  useEffect(() => {
    fetchDrones();
  }, []);

  useEffect(() => {}, [isLoading, drone]);

  const path = findOptimalPath(
    TempDataDroneA.timeCleaning,
    center,
    TempDataDroneA.maxFlightTime,
    coPoints,
  );

  if (isLoading) {
    // Render indikator loading selama data sedang diambil
    return <div>Loading...</div>;
  }

  return (
    <div className="px-12 py-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Select
            value={drone?.code || ""}
            onValueChange={(value) => setDrone(drone)}
            defaultValue={droneData[0]?.code || ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a drone" />
            </SelectTrigger>
            <SelectContent>
              {droneData.map((drone) => (
                <SelectItem key={drone.code} value={drone.code}>
                  {drone.code}
                </SelectItem>
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
          radius={
            drone == undefined
              ? 0
              : ((drone?.coCleaningRate ?? 0) * drone?.maxFlightTime) / 2
          }
          path={path}
        />
      </div>
      <div>
        <ComponentTableOfCO idDrone={drone!.id || ""} />
      </div>
    </div>
  );
};
