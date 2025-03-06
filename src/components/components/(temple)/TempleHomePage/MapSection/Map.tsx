// MapSection.jsx
"use client";
import Typography from "@/components/ui/typography";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const MapSection1 = () => {
  const [location, setLocation] = useState({ lat: 10.8505, lng: 76.2711 });

  const mapContainerStyle = {
    width: "100%",
    // height: "575px",
    borderRadius: "20px",
  };

  // Coordinates for Kuthiranmala Sree Dharmasastha Temple
  const center = {
    lat: 10.576514589472438, // Latitude
    lng: 76.37975756955753, // Longitude
  };

  const address =
    "Kuthiranmala Sree Dharamasastha Temple, Vaniyampara (PO), Thrissur, Kerala - 680652";

  useEffect(() => {
    const fetchCoordinates = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data?.results.length > 0) {
          const { lat, lng } = data?.results[0].geometry.location;
          setLocation({ lat, lng });
        } else {
          console.error("Address not found");
        }
      } catch (error) {
        console.error("Geocoding error:", error);
      }
    };

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  return (
    <div className="lg:p-10 p-2">
      <Typography className="font-karma md:hidden flex font-bold text-[24px] mb-2 w-full justify-center">
        How to Reach
      </Typography>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
          mapContainerClassName="h-[148px] sm:h-[250px] md:h-[575px]"
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapSection1;
