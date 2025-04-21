import React from 'react';

const Location1 = () => {
  return (
    <div className="h-screen w-[50%] relative">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/768x1024" // Replace with the actual map image
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      {/* <div className="absolute top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="mr-2">
            <span className="text-yellow-500 font-bold text-lg">M</span>
          </div>
          <span className="font-semibold">maestro</span>
        </div>
        <div className="relative">
          <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
          <div className="text-yellow-500">🔔</div>
        </div>
      </div> */}

      {/* Location Input */}
      <div className="absolute top-16 left-4 right-4 bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-lg mr-2">●</span>
          <input
            type="text"
            placeholder="Enter pickup location"
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700"
          />
        </div>
        <div className="flex items-center">
          <span className="text-black text-lg mr-2">■</span>
          <input
            type="text"
            placeholder=""
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700"
          />
        </div>
      </div>

      {/* Pickup Marker */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 opacity-50 rounded-full animate-ping"></div>
          <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">⬤</span>
          </div>
        </div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-md px-4 py-2">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/24" // Replace with the actual cargo icon
              alt="Cargo"
              className="w-6 h-6 mr-2"
            />
            <div>
              <p className="text-blue-500 font-semibold text-sm">Pickup</p>
              <p className="text-gray-700 text-sm">Industrial Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location1;