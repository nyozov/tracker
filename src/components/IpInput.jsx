import React from 'react'
import backgroundPattern from '../assets/pattern-bg.png'
function IpInput({ setIpInput, setLocation, fetchLocation}) {

  const handleInput = (e) => {
    console.log(e.target.value)
    setIpInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchLocation()
    

  }
  return (
    <div className='flex justify-center items-center flex-col '>
      <img className='-z-20 absolute top-0 left-0 w-screen h-[35vh] object-cover' src={backgroundPattern}/>
      <h2 className='text-white p-5 text-2xl font-bold text-shadow'>Ip Address Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center'>
      <input fontSize={18} onChange={handleInput} className='p-2 rounded-l-xl w-full shadow' type='text'/>
      <button className='bg-black hover:bg-gray-800 shadow text-white p-3 rounded-r-xl'type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
        </button>

        </div>

      </form>



    </div>
  )
}

export default IpInput