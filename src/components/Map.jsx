import { MapContainer, TileLayer, useMap, Marker, ZoomControl } from "react-leaflet";
import { useState, useEffect } from "react";
import Loading from "./Loading";

function Map({ locationData, loading }) {

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
   
  
    return null;
  }

  return (
    <>
    {loading && <Loading/>}
      {locationData.location && !loading && (
        <MapContainer
          zoom={16}
          zoomControl={false}
       
          center={[locationData.location.lat, locationData.location.lng]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
          title='marker'
            position={[locationData.location.lat, locationData.location.lng]}
          
          />
          <ZoomControl position="bottomleft" />
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
