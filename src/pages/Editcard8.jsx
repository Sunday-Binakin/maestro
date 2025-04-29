import React from 'react';

const Editcard8 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white">
        <h2 className="text-lg font-semibold">Payment</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4 px-4">
        <button className="px-14 py-2 bg-black text-white font-semibold">
          Edit details
        </button>
        <button className="px-14 py-2 border border-gray-300 font-semibold">
          History
        </button>
      </div>

      {/* Edit Account Section */}
      <div className="px-4 mt-6 flex-grow">
        <p className="text-gray-700 text-sm mb-4">Edit your account</p>

        {/* Account Details */}
        <div className="bg-gray-100 p-4">
          <input
            type="text"
            placeholder="Account name"
            className="w-full p-3 border border-gray-300 mb-4"
          />
          <input
            type="text"
            placeholder="Enter number"
            className="w-full p-3 border border-gray-300 mb-4"
          />
          <label className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-700 text-sm">Set this as default payment account</span>
          </label>
        </div>

        {/* Delete Button */}
        <button className="text-red-500 font-semibold mt-4">Delete</button>
      </div>

      {/* Save Button */}
      <div className="px-4 py-4">
        <button className="w-full bg-black text-white font-semibold py-3">
          Save
        </button>
      </div>
    </div>
  );
};

export default Editcard8;