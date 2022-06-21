import Loading from "./Loading";

function Result({ locationData, loading }) {
  console.log("location", locationData);
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="w-11/12 h-[250px] lg:h-[155px] mt-2 lg:mt-8 bg-white shadow-lg rounded-2xl">
        <div className="flex p-4 lg:px-0 justify-center h-full items-center flex-col lg:flex-row lg:justify-evenly">
          {loading && <Loading />}
          {locationData.continent && !loading && (
            <>
              <div className='lg:w-48'>
                <p className="text-xs font-medium text-gray-400 mt-2 text-center lg:text-left">IP ADDRESS</p>
                <p className="text-lg lg:text-xl font-medium">{locationData.ip_address}</p>
              </div> 
              <div className='hidden lg:block h-3/4 border border-gray-200 rounded-full'/>
              <div className='lg:w-48'>
                <p className="text-xs font-medium text-gray-400 mt-2 text-center lg:text-left">
                  LOCATION
                </p>
                <p className="text-lg lg:text-xl font-medium text-center lg:text-left">
                  {locationData&&
                    `${locationData.city || ''}${locationData.city ? `,` : ``} ${locationData.region_iso_code || ''} ${locationData.region_iso_code ? `,` : ``} ${locationData.country}`}
                </p>
              </div>
              <div className='hidden lg:block h-3/4 border border-gray-200 rounded-full'/>
              <div className='lg:w-48'>
                <p className="text-xs font-medium text-gray-400 mt-2 text-center lg:text-left">
                  TIMEZONE
                </p>
                <p className="text-lg lg:text-xl font-medium">
                  {locationData.timezone &&
                    `GMT ${locationData.timezone.gmt_offset}:00`}
                </p>
              </div>
              <div className='hidden lg:block h-3/4 border border-gray-200 rounded-full'/>
              <div className='lg:w-48'>
                <p className="text-xs font-medium text-gray-400 mt-2 text-center lg:text-left">ISP</p>
                <p className="text-lg lg:text-xl font-medium text-center lg:text-left">
                  {locationData.connection && locationData.connection.isp_name}
                </p>
              </div>
            </>
          )}
          {locationData.continent === null && !loading && (
            <div className="flex w-full h-[215px] justify-center items-center flex-col">
              <p className="text-xs font-medium text-red-400">Reserved Range</p>
              <p className="text-xs font-medium text-gray-400">
                Please try a different ip
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;
