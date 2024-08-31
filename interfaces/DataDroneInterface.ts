export type xyCoor = {
  lat: number;
  lon: number;
};

export type coPoint = {
  co: number;
  coor: xyCoor;
};

export type IDataDrone = {
  maxFlightTime: number;
  timeCleaning: number;
  radius: number;
  chargeStation: xyCoor;
  coPoints: coPoint[];
};
