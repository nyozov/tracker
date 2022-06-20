import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import { useState, useEffect } from "react";

function Map({ locationData }) {

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }

  return (
    <>
      {locationData.location && (
        <MapContainer
          zoom={14}
          scrollWheelZoom={false}
          center={[locationData.location.lat, locationData.location.lng]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[locationData.location.lat, locationData.location.lng]}
          />
          <SetViewOnClick
        coords={[
          locationData.location.lat, locationData.location.lng
        ]}
/>
        </MapContainer>
      )}
    </>
  );
}

export default Map;
