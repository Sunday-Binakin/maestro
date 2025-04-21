import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';

const Payments1 = () => {
  return (
    <div className="h-screen w-[50%] bg-white">
      {/* Title */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold text-black">Pay for cargo pickup</h2>
      </div>

      {/* Select Account */}
      <div className="mt-8 px-4">
        <label className="block text-gray-700 text-sm mb-2">Select account to pay with</label>

        {/* First Payment Option */}
        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-md px-4 py-3 mb-4">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Mtn-logo.jpg" // Replace with actual MTN logo
              alt="MTN"
              className="w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-semibold">MTN - 0244567896</span>
          </div>
          <FaChevronDown className="text-gray-500" />
        </div>

        {/* Second Payment Option */}
        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-md px-4 py-3 mb-4">
          <div className="flex items-center">
            <FaCcMastercard className="text-black text-2xl mr-3" />
            <span className="text-gray-700 font-semibold">Ecobank - **** 2354</span>
          </div>
        </div>

        {/* Add New Payment Method */}
        <div className="text-blue-500 text-sm">
          <a href="#">+ Add new payment method</a>
        </div>
      </div>

      {/* Pay Button */}
      <div className="absolute bottom-8 left-4 right-4">
        <button className="w-[50%] bg-yellow-400 text-black font-semibold py-3 rounded-md shadow-md">
          Pay GHS 4,500
        </button>
      </div>
    </div>
  );
};

export default Payments1;