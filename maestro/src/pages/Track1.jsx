import React from 'react';

const Track1 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-[50%] flex flex-col">
      {/* Header */}
      {/* <div className="bg-black text-white p-4 flex items-center justify-between">
        <button className="text-white text-lg">&lt;</button>
        <h1 className="text-lg font-bold">Track Cargo</h1>
        <button className="text-yellow-500 text-lg">🔔</button>
      </div> */}
      {/* ETA and Actions */}
      <div className="bg-white p-2 shadow-md  ">
        <p className="text-gray-700 text-sm mb-20">ETA to dropoff 1hr, 45mins</p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white text-sm font-medium px-8 py-2 rounded-full mb-8">
            Call
          </button>
          <button className="bg-black text-white text-sm font-medium px-8 py-2 rounded-full mb-8">
            Send message
          </button>
        </div>
      </div>
      {/* Map Section */}
      <div className="relative flex-1">
        <img
          src="c:/Users/Bella/OneDrive/Desktop/Maestro/track cargo/iOS- Maestro- Track cargo@3x.png"
          alt="Map"
          className="w-full h-full object-cover"
        />

        {/* Dropoff Info */}
        <div className="absolute top-10 left-10 bg-white shadow-md rounded-md p-2">
          <p className="text-blue-500 text-sm font-medium">Drop off</p>
          <p className="text-gray-700 text-sm">Olebu Ablekuma, kingd...</p>
        </div>

        {/* Driver Info */}
        <div className="absolute top-32 left-20 bg-white shadow-md rounded-md p-2 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Driver"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-blue-500 text-sm font-medium">3mins away</p>
            <p className="text-gray-700 text-sm">Yaw Ofosu</p>
          </div>
        </div>

        {/* Pickup Info */}
        <div className="absolute bottom-20 left-10 bg-white shadow-md rounded-md p-2 flex items-center">
          <img
            src="https://via.placeholder.com/20"
            alt="Pickup Icon"
            className="w-6 h-6 mr-2"
          />
          <div>
            <p className="text-yellow-500 text-sm font-medium">Pickup</p>
            <p className="text-gray-700 text-sm">Industrial Area</p>
          </div>
        </div>
      </div>

      

      {/* Request for Pickup Button */}
      <button className="bg-yellow-500 text-black text-lg font-medium py-4">
        Request for Pickup
      </button>
    </div>
  );
};

export default Track1;