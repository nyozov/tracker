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
    <div className='h-[300px]'>
      <Loading />
     

      </div>
      }
      {locationData.status === 'success' && !loading && (
        <MapContainer
          zoom={16}
          zoomControl={false}
       
          center={[locationData.lat, locationData.lon]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
          title='marker'
            position={[locationData.lat, locationData.lon]}
          
          />
          <ZoomControl position="bottomleft" />
          <SetViewOnClick
        coords={[
          locationData.lat, locationData.lon
        ]}
/>
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
