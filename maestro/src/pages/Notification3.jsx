import React from 'react';

const Notification3 = () => {
  return (
    <div className="bg-gray-100 h-screen w-[50%] flex flex-col">
      {/* Notifications Section */}
      <div className="bg-white mx-4 mt-4 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button className="text-blue-500 text-sm">Mark all as read</button>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="/path-to-maestro-logo.png"
            alt="Notification Icon"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold">Payment failed</h3>
            <p className="text-gray-500 text-lg">Payment for your shipment request</p>
            <p className="text-gray-500 text-lg">was not successful</p>
            <p className="text-gray-400 text-xs mt-1">20 mins ago</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative flex-1 mt-4">
        <img
          src="/path-to-map-image.png"
          alt="Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-md flex items-center">
          <img
            src="/path-to-pickup-icon.png"
            alt="Pickup Icon"
            className="w-6 h-6 mr-2"
          />
          <div>
            <h4 className="font-semibold text-sm">Pickup</h4>
            <p className="text-gray-600 text-xs">Industrial Area</p>
          </div>
        </div>
      </div>

      {/* Request for Pickup Button */}
      <div className="bg-yellow-500 text-center py-3 text-black font-semibold text-lg cursor-pointer mx-4 mb-4">
        Request for Pickup
      </div>
    </div>
  );
};

export default Notification3;