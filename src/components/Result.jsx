import React from 'react'

function Result({locationData}) {
  console.log('location', locationData)
  return (
    <div className='w-screen h-full flex justify-center items-center'>
      <div className='border w-3/4 h-52 mt-20 bg-white shadow rounded-xl'>
        <div className='flex p-2 justify-center items-center flex-col'>
          <p>IP ADDRESS</p>
          <p>{locationData.ip}</p>
          <p>LOCATION</p>
          <p>{locationData.location && `${locationData.location.country} ${locationData.location.region}`}</p>
        
          <p>TIMEZONE</p>
          <p>{locationData.location && locationData.location.timezone}</p>
          <p>ISP</p>
          <p>{locationData.isp}</p>
          
          
          
          </div> 


          
      

      </div>


    </div>
  )
}

export default Result