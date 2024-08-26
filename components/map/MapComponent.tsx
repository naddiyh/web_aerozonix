"use client";

// components/SimpleMap.js
import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";
import { fromLonLat } from "ol/proj";
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
import { coPoint, xyCoor } from "@/interfaces";

const SimpleMap = ({
  center,
  coPoints,
  radius,
}: {
  center: xyCoor;
  coPoints: coPoint[];
  radius: number;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    coPoints.forEach(({ co, coor }: coPoint) => {
      console.log(co);
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

    // Add all features to a vector layer
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    olMap.addLayer(vectorLayer);

    // Clean up on component unmount
    return () => olMap.setTarget(undefined);
  }, [center, radius]);

  return <div ref={mapRef} className="h-full w-full bg-clip-content" />;
};

export default SimpleMap;
