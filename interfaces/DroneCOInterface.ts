import { ICOPoint } from "./COPointInterface";

export type xyCoor = {
  lat: number;
  lon: number;
};

export type IDataDrone = {
  maxFlightTime: number;
  timeCleaning: number;
  radius: number;
  chargeStation: xyCoor;
  coPoints: ICOPoint[];
};
