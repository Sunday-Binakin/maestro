import React from 'react';

const Track3 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-[50%] flex flex-col items-center justify-center">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
        {/* Title */}
        <h2 className="text-lg font-bold text-center mb-4">Rate Yaw Ofosu</h2>
        <hr className="mb-4" />

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Driver"
            className="w-20 h-20 rounded-full border-2 border-yellow-500 object-cover mb-2"
          />
        </div>

        {/* Star Rating */}
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-gray-400 text-2xl">★</span>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Write something about Yaw Ofosu"
          className="w-full bg-gray-200 text-sm p-3 rounded-md focus:outline-none mb-4"
          rows="3"
        ></textarea>

        {/* Submit Button */}
        <button className="w-full bg-yellow-500 text-black text-sm font-medium py-3 rounded-md mb-4">
          Submit
        </button>

        {/* Report Button */}
        <button className="w-full text-red-500 text-sm font-medium">
          Report
        </button>
      </div>
    </div>
  );
};

export default Track3;