import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Payments4 = () => {
  return (
    <div className="h-screen w-[50%] bg-gray-800 bg-opacity-50 flex items-center justify-center">
      {/* Modal */}
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Sorry!</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Message */}
        <div className="text-gray-700 text-sm mb-6">
          <p>whao!, something went wrong.</p>
          <p>Kindly try again</p>
        </div>

        {/* Error Icon */}
        <div className="flex items-center justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-4xl" />
        </div>

        {/* Try Again Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 shadow-md mb-4">
          Please Try again
        </button>

        {/* Dimmed Pay Button */}
        <button className="w-full bg-gray-400 text-gray-700 font-semibold py-3 shadow-md cursor-not-allowed">
          Pay GHS 4,500
        </button>
      </div>
    </div>
  );
};

export default Payments4;