import React from 'react'
import Map from "../assets/images/map.png";
import { BsDot } from "react-icons/bs";
import { GoSquareFill } from "react-icons/go"; // Ensure the import is correct
import { BsGeoAltFill } from "react-icons/bs";

const Pickup2 = () => {
  return (
    <div
      className="h-screen w-[50%] bg-cover relative"
      style={{ backgroundImage: `url(${Map})` }}> {/* Main background image */}
      
      {/* Positioned BsGeoAltFill on the main background */}
      <BsGeoAltFill className="absolute bottom-44 right-64 text-blue-500 text-[40px]" />

      <div className='bg-white h-[20%] w-[70%] mx-2 mt-8 p-4 relative'> {/* Centered content */}
      
        <div className='flex flex-row items-center mt-2 gap-4'>{/* Adjusted gap for alignment */}
          <p className='text-amber-400 text-[15px]'><BsDot /></p>
          <div className='bg-gray-200 px-2 py-2  w-[70%]'>
            <p className='text-blue-500'>Enter pickup location</p>
          </div>
        </div>
        <div className='flex flex-row items-center gap-4 mt-2'> {/* Adjusted gap for alignment */}
          <GoSquareFill />
          <div className='bg-gray-200 px-2 py-2  w-[70%]'>
            <p className='text-gray-700'>Enter drop off location here</p>
          </div>
        </div>

        <div className='flex flex-row items-center gap-4 mt-80 mx-2 p-6'> {/* Adjusted gap for alignment */}
          <div className='bg-amber-400 px-2 py-2  w-[80%]'>
            <p className='text-gray-700 text-center'>Done</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pickup2