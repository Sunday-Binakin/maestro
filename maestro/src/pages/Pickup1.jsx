import React from 'react'
import { BsDot } from "react-icons/bs";
import { GoSquareFill } from "react-icons/go";
import { BsGeoAltFill } from "react-icons/bs";
import Map from "../assets/images/map.png"; // Ensure the import is correct

const Pickup1 = () => {
  return (
    <div
      className="h-screen w-[50%] bg-cover"
      style={{ backgroundImage: `url(${Map})` }} // Set the Map image as the background
    >
      <div className='bg-white h-[70%] w-[70%] mx-2 mt-8 p-4'> {/* Centered content */}
        <div>
          <div className='flex flex-row items-center mt-2 gap-4'> {/* Adjusted gap for alignment */}
            <p className='text-amber-400 text-[15px]'><BsDot /></p>
            <div className='bg-gray-200 px-4 py-2 rounded-md w-full'>
              <p className='text-blue-500'>Enter pickup location</p>
            </div>
          </div>
          <div className='flex flex-row items-center gap-4 mt-2'> {/* Adjusted gap for alignment */}
            <GoSquareFill />
            <div className='bg-gray-200 px-4 py-2 rounded-md w-full'>
              <p className='text-gray-700'>Enter drop off location here</p>
            </div>
          </div>
        </div>
        {/* Adjusted Drop Location Pin */}
        <div className='flex flex-row items-center text-blue-500 mt-4 gap-4'>
          <BsGeoAltFill />
          <p>Drop Location pin</p>
        </div>
        <hr className='my-4 border-gray-300' />
        <div className='flex flex-row items-center my-4 gap-4'>
          <GoSquareFill />
          <p>Frankies</p>
          <p>Osu, Accra</p>
        </div>
        <div className='flex flex-row items-center mt-2 gap-4'> {/* Changed to flex-row */}
            <GoSquareFill />
        <div className='flex flex-col'> {/* Stacked text vertically */}
            <p>New Jericho, Ebenezer School</p>
            <p className='text-gray-600'>Ashaiman, Accra</p>
        </div>
        </div>
        <hr className='my-4 border-gray-300' />
        <div className='flex flex-row items-center mt-2 gap-4'> {/* Changed to flex-row */}
        <GoSquareFill />
        <div className='flex flex-col'> {/* Stacked text vertically */}
        <p>New Jericho, Ebenezer School</p>
        <p className='text-gray-600'>Ashaiman, Accra</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Pickup1