export type xyCoor = {
  lat: number;
  lon: number;
};

export type coPoint = {
  co: number;
  coor: xyCoor;
};

export type IDataDrone = {
  radius: number;
  chargeStation: xyCoor;
  coPoints: coPoint[];
};
