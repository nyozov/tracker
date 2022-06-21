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
    <div className=''>
    {loading && 
    <div className='h-[255px]'>
      <Loading />
     

      </div>
      }
      {locationData.latitude && !loading && (
        <MapContainer
          zoom={14}
          zoomControl={false}
       
          center={[locationData.latitude, locationData.longitude]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
          title='marker'
            position={[locationData.latitude, locationData.longitude]}
          
          />
          <ZoomControl position="bottomleft" />
          <SetViewOnClick
        coords={[
          locationData.latitude, locationData.longitude
        ]}
/>
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
