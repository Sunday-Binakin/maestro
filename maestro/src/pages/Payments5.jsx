import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Payments5 = () => {
  return (
    <div className="h-screen w-[50%] bg-gray-800 bg-opacity-50 flex items-center justify-center">
      {/* Modal */}
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Sorry!</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Message */}
        <div className="text-gray-700 text-sm mb-6">
          <p>Please make payment to complete</p>
          <p>this booking</p>
        </div>

        {/* Error Icon */}
        <div className="flex items-center justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-4xl" />
        </div>

        {/* Complete Payment Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md shadow-md">
          Complete payment
        </button>
      </div>
    </div>
  );
};

export default Payments5;