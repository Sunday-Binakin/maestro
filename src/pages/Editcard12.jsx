import React from 'react';

const Editcard12 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white">
        <h2 className="text-lg font-semibold">Transaction details</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4 px-4">
        <button className="px-14 py-2 border border-gray-300 font-semibold">
          Edit details
        </button>
        <button className="px-14 py-2 bg-black text-white font-semibold">
          History
        </button>
      </div>

      {/* Transaction Details */}
      <div className="px-4 mt-6 flex-grow">
        <h1 className="text-center text-2xl font-semibold mb-6">GHS 145.00</h1>

        <div className="flex justify-between mb-4">
          <p className="text-black font-semibold">Amount</p>
          <p className="text-gray-700">GHS 145.00</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-black font-semibold">Date</p>
          <p className="text-gray-700">21st Sep 2020</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-black font-semibold">Status</p>
          <p className="text-green-500">Success</p>
        </div>

        <hr className="my-4" />

        {/* Sent To Section */}
        <p className="text-gray-500 text-sm mb-4">Sent to</p>
        <div className="flex justify-between mb-4">
          <p className="text-black font-semibold">Account Name</p>
          <p className="text-gray-700">Yaw Ofosu</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <p className="text-black font-semibold">Account Number</p>
          <div>
            <p className="text-gray-700">2345 5674 5678 345</p>
            <p className="text-gray-500 text-sm">Barclays Bank</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mb-4">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
            BA
          </div>
        </div>

        <hr className="my-4" />

        {/* Sent From Section */}
        <p className="text-gray-500 text-sm mb-4">Sent from</p>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" // Replace with Mastercard logo
            alt="Mastercard"
            className="w-10 h-10 mb-4 md:mb-0"
          />
          <p className="text-gray-700">**** **** **** 6545</p>
        </div>
      </div>
    </div>
  );
};

export default Editcard12;