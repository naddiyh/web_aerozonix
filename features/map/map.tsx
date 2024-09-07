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
  // const center = TempDataDroneA.chargeStation;
  const center = {};
  const coPoints = TempDataDroneA.coPoints;
  // const radius = TempDataDroneA.radius;

  const [droneID, setIDDrone] = useState<string | undefined>();
  const [drone, setDrone] = useState<IDrone>();
  // const [radius, setRadius] = useState<number>(0);
  const [droneData, setDroneData] = useState<IDrone[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Tambahkan state loading

  const fetchDrones = async () => {
    try {
      console.log("Fetching drones...");
      setIsLoading(true);
      const data = await getAllDrones();
      setDroneData(data);
      if (data.length > 0) {
        const dataDrone = data[0];
        setDrone(dataDrone);
        setIDDrone(dataDrone.id);
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

  useEffect(() => {
    if (droneID && droneData.length > 0) {
      const selectedDrone = droneData.find((d) => d.id === droneID);
      setDrone(selectedDrone);
    }
  }, [droneID, droneData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (droneData.length === 0) {
    return <div>No drones available</div>;
  }

  const path = drone?.chargeStation
    ? findOptimalPath(
        TempDataDroneA.timeCleaning,
        drone.chargeStation,
        TempDataDroneA.maxFlightTime,
        TempDataDroneA.coPoints,
      )
    : [];
  // setDrone(droneData[0]);

  // const path = findOptimalPath(
  //   drone?.chargeStation!,
  //   TempDataDroneA.maxFlightTime,
  //   coPoints,
  // );

  return (
    <div className="px-12 py-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Select
            value={drone?.id}
            onValueChange={(value) => setIDDrone(value)}
            defaultValue={droneData[0].id}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a drone" />
            </SelectTrigger>
            <SelectContent>
              {droneData.map((drone) => (
                <SelectItem key={drone.id} value={drone.id!}>
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
          center={drone?.chargeStation!}
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
        <ComponentTableOfCO idDrone={droneID || ""} />
      </div>
    </div>
  );
};
