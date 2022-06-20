
import Loading from "./Loading";

function Result({ locationData, loading }) {
  console.log("location", locationData);
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="w-11/12 h-[310px] mt-2 px-2 bg-white shadow rounded-2xl">
        <div className="flex p-6 justify-center items-center flex-col">
        {loading && 
          <Loading />
        }
       {locationData.status === 'success' && !loading && 
          <>
            <p className="text-xs font-medium text-gray-400">IP ADDRESS</p>
            <p className="text-xl font-medium">{locationData.query}</p>
            <p className="text-xs font-medium text-gray-400 mt-4">LOCATION</p>
            <p className="text-xl font-medium text-center">
              {locationData.status ==='success' &&
                `${locationData.city}, ${locationData.region} , ${locationData.country}`}
            </p>

            <p className="text-xs font-medium text-gray-400 mt-4">TIMEZONE</p>
            <p className="text-xl font-medium">
              {locationData.status ==='success' && `${locationData.timezone}`}
            </p>
            <p className="text-xs font-medium text-gray-400 mt-4">ISP</p>
            <p className="text-xl font-medium text-center">
              {locationData.status ==='success' && locationData.isp}
            </p>
            </>
       }
       {locationData.status === 'fail' && !loading && 
       <div className='flex w-full h-[215px] justify-center items-center flex-col'>
         <p className="text-xs font-medium text-red-400">
           Reserved Range
           </p>
           <p className="text-xs font-medium text-gray-400">Please try again</p>
         </div>
       }
     
        </div>
      </div>
    </div>
  );
}

export default Result;
