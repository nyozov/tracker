import React from 'react'
import backgroundPattern from '../assets/pattern-bg.png'
function IpInput({ setIpInput, setLocation, fetchLocation}) {

  const handleInput = (e) => {
   
    setIpInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchLocation()
    

  }
  return (
    <div className='flex justify-center items-center w-screen flex-col '>
      <img className='-z-20 absolute top-0 left-0 w-screen h-[38vh] object-cover' src={backgroundPattern}/>
      <h2 className='text-white p-8 text-3xl font-semibold text-shadow'>Ip Address Tracker</h2>
      <form className='w-screen flex justify-center items-center' onSubmit={handleSubmit}>
        <div className='flex justify-center w-11/12 h-[65px] md:w-1/2 xl:w-4/12'>
      <input required fontSize={18} onChange={handleInput} placeholder="Search for any IP address or domain"className='focus:outline-none px-4 rounded-l-2xl w-full shadow' minlength="7" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"/>
      <button className='bg-black w-3/12 md:w-2/12 flex justify-center items-center hover:bg-gray-800 shadow text-white p-3 rounded-r-2xl'type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
        </button>

        </div>

      </form>



    </div>
  )
}

export default IpInput