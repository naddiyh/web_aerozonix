import { xyCoor } from "./DataDroneInterface";

export interface ICOPoint {
  co: number;
  coor: xyCoor;
}

// interface COPoint {
//   id?: string;
//   timestamp: Date;
//   location: {
//     latitude: number;
//     longitude: number;
//     altitude: number;
//   };
//   coLevel: number;
//   temperature: number;
//   humidity: number;
//   pressure: number;
//   windSpeed: number;
//   windDirection: number;
//   droneId: string;
//   status: string;
// }
