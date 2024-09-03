import { xyCoor } from "./DataDroneInterface";

export interface IDrone {
  id?: string;
  code: string;
  city?: string | null;
  chargeStation: xyCoor; // titik charge station
  maxFlightTime: number; // FlightTime, lama terbang berdasarkan charger
  coCleaningRate: number; // CO Cleaning Rate, kecepetan membersihkan
  status: "Active" | "Not Active";
  maxSpeed?: number | null;
  currentLocation?: xyCoor | null;
  lastMaintenance?: Date | null;
}

// interface Drone {
//   id?: string;
//   name: string;
//   model: string;
//   batteryLevel: number;
//   status: string;
//   lastMaintenance: Date;
//   currentLocation: {
//     latitude: number;
//     longitude: number;
//   };
//   totalFlightHours: number;
//   maxAltitude: number;
//   maxSpeed: number;
//   payloadCapacity: number;
//   sensors: Array<{
//     type: string;
//     status: string;
//   }>;
//   lastUpdated: Date;
// }
