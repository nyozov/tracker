import React from "react";

function Result({ locationData }) {
  console.log("location", locationData);
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="w-11/12 h-[345px] mt-6 px-2 bg-white shadow rounded-2xl">
        <div className="flex p-6 justify-center items-center flex-col">
          <p className="text-xs font-medium text-gray-400">IP ADDRESS</p>
          <p className="text-2xl font-medium">{locationData.ip}</p>
          <p className="text-xs font-medium text-gray-400 mt-6">LOCATION</p>
          <p className="text-2xl font-medium">
            {locationData.location &&
              `${locationData.location.country}, ${locationData.location.region}`}
          </p>

          <p className="text-xs font-medium text-gray-400 mt-6">TIMEZONE</p>
          <p className="text-2xl font-medium">
            {locationData.location && locationData.location.timezone}
          </p>
          <p className="text-xs font-medium text-gray-400 mt-6">ISP</p>
          <p className="text-2xl font-medium text-center">{locationData.isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Result;
