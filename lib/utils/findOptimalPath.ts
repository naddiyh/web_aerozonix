import { coPoint, xyCoor } from "@/interfaces";

function calculateDistance(pointA: xyCoor, pointB: xyCoor): number {
  return Math.sqrt(
    Math.pow(pointB.lat - pointA.lat, 2) + Math.pow(pointB.lon - pointA.lon, 2),
  );
}

function optimalPath(
  vDroneClean: number,
  remainingTime: number,
  currentPosition: xyCoor,
  stationPosition: xyCoor,
  CO_points: coPoint[],
  visitedPoints: coPoint[] = [],
  totalReward = 0,
) {
  let coorStation = { coor: stationPosition };
  if (remainingTime <= calculateDistance(currentPosition, stationPosition)) {
    return { totalReward, path: [...visitedPoints, coorStation] };
  }

  let bestReward = totalReward;
  let bestPath = [...visitedPoints, coorStation];

  for (const point of CO_points) {
    if (
      !visitedPoints.some(
        (p) => p.coor.lat === point.coor.lat && p.coor.lon === point.coor.lon,
      )
    ) {
      const distanceToPoint = calculateDistance(currentPosition, point.coor);
      const timeAfterReachingPoint = remainingTime - distanceToPoint;

      if (timeAfterReachingPoint > 0) {
        const cleaningTime = Math.min(
          point.co / vDroneClean,
          timeAfterReachingPoint,
        );
        const rewardAtPoint =
          (cleaningTime / (point.co / vDroneClean)) * point.co;

        const result = optimalPath(
          vDroneClean,
          timeAfterReachingPoint - cleaningTime,
          point.coor,
          stationPosition,
          CO_points,
          [...visitedPoints, point],
          totalReward + rewardAtPoint,
        );

        if (result.totalReward > bestReward) {
          bestReward = result.totalReward;
          bestPath = result.path;
        }
      }
    }
  }

  return { totalReward: bestReward, path: bestPath };
}

export default function findOptimalPath(
  vDroneClean: number,
  stationPosition: xyCoor,
  droneMaxFlightTime: number,
  CO_points: coPoint[],
) {
  const result = optimalPath(
    vDroneClean,
    droneMaxFlightTime,
    stationPosition,
    stationPosition,
    CO_points,
  );
  return result.path;
}
