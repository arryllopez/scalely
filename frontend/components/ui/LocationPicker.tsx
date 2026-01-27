"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface LocationPickerProps {
  onLocationSelect: (lat: number, lng: number) => void;
}

function MapClickHandler({
  onLocationSelect,
  setPosition,
}: {
  onLocationSelect: (lat: number, lng: number) => void;
  setPosition: (pos: [number, number] | null) => void;
}) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onLocationSelect(lat, lng);
    },
  });
  return null;
}

export function LocationPicker({ onLocationSelect }: LocationPickerProps) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  return (
    <div className="space-y-2">
      <div className="w-full h-[300px] rounded-xl overflow-hidden border border-[#ccdbfd]/50">
        <MapContainer
          center={[43.6532, -79.3832]} // Default to Toronto
          zoom={2}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler
            onLocationSelect={onLocationSelect}
            setPosition={setPosition}
          />
          {position && <Marker position={position} icon={defaultIcon} />}
        </MapContainer>
      </div>

      {position ? (
        <p className="text-xs text-gray-500 text-center font-(family-name:--font-caudex)">
          Location selected
        </p>
      ) : (
        <p className="text-xs text-gray-500 text-center font-(family-name:--font-caudex)">
          Click on the map to drop a pin
        </p>
      )}
    </div>
  );
}

export default LocationPicker;
