import React from 'react'
import { TbTruckDelivery } from "react-icons/tb"
import Passport from '../assets/images/passport.png'
import { HiOutlineCog8Tooth } from "react-icons/hi2"
import { FaRegQuestionCircle } from "react-icons/fa"
import { BsCardText } from "react-icons/bs"
import { FaClockRotateLeft } from "react-icons/fa6"
import { IoCaretUpCircleOutline } from "react-icons/io5"

const sidebar = () => {
  return (
    <div className='bg-black text-white h-screen w-[50%]'>
      <div className='flex flex-row gap-4 text-[40px] items-center pl-6'>
        <img src={Passport} alt="" className='h-32 w-32 object-cover border-4 border-white rounded-4xl' />
        <div className='flex flex-col'> {/* Added flex-col to stack text */}
          <p className='mb--1'>Belinda</p>
          <p className='mb-0'>Armoo</p>
        </div>
      </div>
      <div className='pl-6 mt-8'> {/* Added padding-left here */}
        <ul>
          <li className='flex flex-row gap-3 mb-3'>
            <p className='text-[40px] text-amber-500'><TbTruckDelivery /></p>
            <a className='text-[20px]'>Pending Request</a>
          </li>
        </ul>
        <ul>
          <li className='flex flex-row gap-3 mb-3'>
            <p className='text-[40px] text-amber-500'><IoCaretUpCircleOutline /></p>
            <a className='text-[20px]'>Track Cargo</a>
          </li>
        </ul>
        <ul>
          <li className='flex flex-row gap-3 mb-3'>
            <p className='text-[40px] text-amber-500'><BsCardText /></p>
            <a className='text-[20px]'>Payments</a>
          </li>
        </ul>
        <ul>
          <li className='flex flex-row gap-3 mb-3'>
            <p className='text-[40px] text-amber-500'><FaClockRotateLeft /></p>
            <a className='text-[20px]'>Trips</a>
          </li>
        </ul>
        <div className='mt-30'>
          <p className='border-[1px] my-4'></p>
          <ul>
            <li className='flex flex-row gap-3 mb-3'>
              <p className='text-[40px] text-amber-500'><HiOutlineCog8Tooth /></p>
              <a className='text-[20px]'>Settings</a>
            </li>
          </ul>
          <ul>
            <li className='flex flex-row gap-3 mb-3'>
              <p className='text-[40px] text-amber-500'><FaRegQuestionCircle /></p>
              <a className='text-[20px]'>Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default sidebar