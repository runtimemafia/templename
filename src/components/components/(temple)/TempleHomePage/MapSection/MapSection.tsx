"use client";
import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style, Text, Fill, Stroke } from "ol/style";
import Typography from "@/components/ui/typography";
import Link from "next/link";

const MapSection = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const coordinates = fromLonLat([76.379803167109, 10.57653040931217]);

    // Marker Feature
    const iconFeature = new Feature({
      geometry: new Point(coordinates),
      name: "Kuthiranmala Sree Dharmasastha Temple",
    });

    // Marker Icon Style
    const iconStyle = new Style({
      image: new Icon({
        src: "https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790776/location_w945yk.webp", // Path to custom marker icon
        scale: 0.1,
      }),
      text: new Text({
        text: "Kuthiranmala Sree Dharmasastha Temple\nVaniyampara (PO), Thrissur, Kerala - 680652",
        offsetY: -25, // Adjust position of text above marker
        font: "bold 12px Arial",
        fill: new Fill({ color: "#000" }), // Text color
        stroke: new Stroke({ color: "#fff", width: 2 }), // Outline for visibility
      }),
    });

    iconFeature.setStyle(iconStyle);

    // Vector Source & Layer for Marker
    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Map Initialization
    const map = new Map({
      target: mapRef.current!,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center: coordinates,
        zoom: 14,
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div className="lg:p-10 p-2">
      <Typography className="font-karma md:hidden flex font-bold text-[24px] mb-2 w-full justify-center">
        How to Reach
      </Typography>
      <Link href="https://maps.app.goo.gl/stxzbg9LsHjJA4KC6" target="_blank">
        <div
          className="wrapper"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          <div
            className="h-[148px] sm:h-[250px] md:h-[575px] lg:p-10 p-2"
            ref={mapRef}
            style={{ width: "100%" }}
          />
        </div>
      </Link>
    </div>
  );
};

export default MapSection;
