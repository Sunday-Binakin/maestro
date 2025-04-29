import React from 'react';

const Editcard13 = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center py-4 border-b border-gray-300 bg-black text-white">
          <h2 className="text-lg font-semibold">Transaction details</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-between mt-4 space-x-2">
          <button className="flex-1 py-2 border border-black  text-sm font-medium">
            Edit details
          </button>
          <button className="flex-1 py-2 border border-black  text-sm font-medium bg-black text-white">
            History
          </button>
        </div>

        {/* Transaction Amount */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">GHS 145.00</h2>
        </div>

        {/* Transaction Details */}
        <div className="mb-6">
          <div className="flex justify-between py-2">
            <span className="font-medium">Shipment</span>
            <span className="text-gray-600">Container of Ironrods</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Amount</span>
            <span className="text-gray-600">GHS 145.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Date</span>
            <span className="text-gray-600">21st Sep 2020</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Status</span>
            <span className="text-green-600 font-medium">Success</span>
          </div>
        </div>

        {/* Sent To Section */}
        <div className="mb-6 border-t pt-4">
          <h3 className="text-base text-gray-400 mb-2">Sent to</h3>
          <div className="flex justify-between py-2">
            <span className="font-medium">Account Name</span>
            <span className="text-gray-600">Yaw Ofosu</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Number</span>
            <span className="text-gray-600">0244567897</span>
          </div>
          <div className="py-2">
            <span className="font-medium">MTN Mobile Money</span>
          </div>
        </div>

        {/* Sent From Section */}
        <div className="border-t pt-4">
          <h3 className="text-base text-gray-400 mb-2">Sent from</h3>
          <div className="flex justify-between py-2">
            <span className="font-medium">MasterCard</span>
            <span className="text-gray-600">**** **** **** 6545</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcard13;