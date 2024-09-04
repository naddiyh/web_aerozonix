"use client";

// components/SimpleMap.js
import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Overlay } from "ol";
import { fromLonLat, transform } from "ol/proj";
import {
  Circle as CircleStyle,
  Fill,
  Icon,
  Stroke,
  Style,
  Text,
} from "ol/style";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import Circle from "ol/geom/Circle";
import LineString from "ol/geom/LineString";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { ICOPoint, xyCoor } from "@/interfaces";
import { AerozonixMapWatermark } from "./AerozonixMapWatermark";
import { InfoCOMap } from "./InfoCOMap";

const SimpleMap = ({
  center,
  coPoints,
  radius,
  path,
}: {
  center: xyCoor;
  coPoints: ICOPoint[];
  radius: number;
  path: any; // define this, not best practice
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    import("ol/Map").then(({ default: Map }) => {
      import("ol/View").then(({ default: View }) => {
        import("ol/layer/Tile").then(({ default: TileLayer }) => {
          import("ol/source/XYZ").then(({ default: XYZ }) => {
            const olMap = new Map({
              target: mapRef.current!,
              layers: [
                new TileLayer({
                  source: new XYZ({
                    url: "https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=4e276aca4dd24e139d2bbc683f76689b",
                  }),
                }),
              ],
              view: new View({
                center: fromLonLat([center.lat, center.lon]),
                zoom: 16,
                minZoom: 14,
              }),
            });

            // Function to determine color based on CO level
            const getColorByCOLevel = (co: number) => {
              if (co <= 25) return "#60a5fa";
              if (co <= 40) return "#fb923c";
              if (co <= 60) return "#f87171";
              return "white";
            };

            const vectorSource = new VectorSource();

            const centerStationCoor = fromLonLat([center.lat, center.lon]);
            const centerFeature = new Feature({
              geometry: new Point(centerStationCoor),
            });
            centerFeature.setStyle(
              new Style({
                image: new CircleStyle({
                  radius: 8,
                  fill: new Fill({ color: "#3FAAE4" }),
                  stroke: new Stroke({ color: "#09173A", width: 3 }),
                }),
              }),
            );

            const iconStationFeature = new Feature({
              geometry: new Point(centerStationCoor),
            });
            iconStationFeature.setStyle(
              new Style({
                image: new Icon({
                  src: "/map/ChargeIcon.png",
                  scale: 0.2,
                  anchor: [0.5, 1.5],
                }),
              }),
            );

            const pillarDesign = new Feature({
              geometry: new LineString([
                centerStationCoor,
                fromLonLat([center.lat, center.lon + 0.0007]),
              ]),
            });
            pillarDesign.setStyle(
              new Style({
                stroke: new Stroke({ color: "#09173A", width: 2 }),
              }),
            );

            const radiusStationFeature = new Feature({
              geometry: new Circle(centerStationCoor, radius),
            });

            radiusStationFeature.setStyle(
              new Style({
                stroke: new Stroke({ color: "#3FAAE4", width: 2 }),
                fill: new Fill({ color: "#3FAAE430" }),
              }),
            );
            vectorSource.addFeatures([
              centerFeature,
              iconStationFeature,
              pillarDesign,
              radiusStationFeature,
            ]);

            const droneCoor = fromLonLat([
              center.lat - 0.0009,
              center.lon + 0.0005,
            ]);
            const droneFeature = new Feature({
              geometry: new Point(droneCoor),
              name: "Drone A01",
            });
            droneFeature.setStyle(
              new Style({
                image: new Icon({
                  src: "/map/DroneIcon.png",
                  scale: 0.2,
                }),
                zIndex: 1,
              }),
            );
            const droneFeatureRadius = new Feature({
              geometry: new Circle(droneCoor, 70),
            });
            droneFeatureRadius.setStyle(
              new Style({
                fill: new Fill({ color: "#02A5EC30" }),
              }),
            );
            vectorSource.addFeatures([droneFeature, droneFeatureRadius]);

            coPoints.forEach(({ co, coor }: ICOPoint) => {
              const coPointCoor = fromLonLat([coor.lat, coor.lon]);
              const coPointFeature = new Feature({
                geometry: new Point(coPointCoor),
              });

              coPointFeature.setStyle(
                new Style({
                  image: new CircleStyle({
                    radius: 12,

                    fill: new Fill({ color: getColorByCOLevel(co) + "80" }),
                    stroke: new Stroke({ color: getColorByCOLevel(co) }),
                    scale: 1.2,
                  }),
                  text: new Text({
                    text: co.toString(),
                    font: "bold 12px Poppins, sans-serif",
                    scale: 1.2,
                    fill: new Fill({ color: "#fff" }),
                  }),
                }),
              );
              vectorSource.addFeature(coPointFeature);
            });

            const pathStartLine = new Feature({
              geometry: new LineString([
                droneCoor,
                fromLonLat([path[0].coor.lat, path[0].coor.lon]),
              ]),
            });

            pathStartLine.setStyle(
              new Style({
                stroke: new Stroke({
                  width: 2,
                }),
              }),
            );
            vectorSource.addFeature(pathStartLine);

            // Convert the array of lat/lon to an array of OpenLayers coordinates
            const olCoordinates = path.map((item: any) =>
              fromLonLat([item.coor.lat, item.coor.lon]),
            );

            // Create a LineString geometry from the coordinates
            const lineString = new LineString(olCoordinates);

            // Create a feature with the LineString geometry
            const pathLine = new Feature({
              geometry: lineString,
            });

            // Style for the line
            pathLine.setStyle(
              new Style({
                stroke: new Stroke({
                  lineJoin: "round",
                  color: "#3FAAE4",
                  lineDash: [10],
                  width: 2,
                }),
              }),
            );

            vectorSource.addFeature(pathLine);

            // Add all features to a vector layer
            const vectorLayer = new VectorLayer({
              source: vectorSource,
            });

            olMap.addLayer(vectorLayer);

            // Add overlay for the popup
            const popupOverlay = new Overlay({
              element: popupRef.current!,
              positioning: "top-center",
              stopEvent: false,
              offset: [0, -50],
            });
            olMap.addOverlay(popupOverlay);

            // Event listener for hover effect
            olMap.on("pointermove", (event) => {
              const feature = olMap.forEachFeatureAtPixel(
                event.pixel,
                (feat) => feat,
              );
              if (feature === droneFeature) {
                const coordinates = event.coordinate;
                popupOverlay.setPosition(coordinates);
                popupRef.current!.innerHTML = `${feature.get("name")}`; // Customize popup content here
                popupRef.current!.style.display = "block";
              } else {
                popupRef.current!.style.display = "none";
              }
            });

            olMap.on("click", (event) => {
              console.log(event.pixel);
              // const feature = olMap.forEachFeatureAtPixel(event.pixel, (feat) => feat);
              // if (feature === droneFeature) {
              const coordinates = event.coordinate;

              popupOverlay.setPosition(coordinates);
              popupRef.current!.innerHTML = `${transform(event.coordinate, "EPSG:3857", "EPSG:4326")}`; // Customize popup content here
              //   popupRef.current!.innerHTML = `${feature.get("name")}`; // Customize popup content here
              //   popupRef.current!.style.display = "block";
              // } else {
              //   popupRef.current!.style.display = "none";
              // }
            });

            // Clean up on component unmount
            return () => olMap.setTarget(undefined);
          });
        });
      });
    });
  }, [center, radius, coPoints, path]);

  return (
    <div className="relative h-[75vh] w-full rounded-md bg-gradient-to-br from-white via-slate-50 to-white">
      <AerozonixMapWatermark />
      <InfoCOMap />
      <div className="h-full w-full overflow-clip rounded-md">
        <div ref={mapRef} className="h-full w-full bg-clip-content" />
        <div
          ref={popupRef}
          className="cursor-pointer rounded-md border border-white bg-white/50 px-4 py-2 text-sm font-semibold text-primary-darkblue backdrop-blur"
        />
      </div>
    </div>
  );
};

export default SimpleMap;
