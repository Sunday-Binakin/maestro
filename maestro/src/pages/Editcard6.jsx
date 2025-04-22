import React from 'react';

const Editcard6 = () => {
  return (
    <div className="h-screen w-[50%] bg-white">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white">
        <h2 className="text-lg font-semibold">Payment</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4">
        <button className="px-30 py-2 bg-black text-white font-semibold rounded-l-md">
          Edit details
        </button>
        <button className="px-30 py-2 border border-gray-300 font-semibold rounded-r-md">
          History
        </button>
      </div>

      {/* Add Payment Method */}
      <div className="px-4 mt-6">
        <p className="text-gray-700 text-sm mb-4">Add payment method</p>

        {/* Payment Options */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" />
            <span className="text-gray-700 text-sm">Card Payment</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" defaultChecked />
            <span className="text-gray-700 text-sm">Mobile money</span>
          </label>
        </div>

        {/* Mobile Money Details */}
        <div className="bg-gray-100 p-4 rounded-md">
          <select className="w-full p-3 border border-gray-300  mb-4 text-gray-700">
            <option>Select Mobile money network</option>
            <option>MTN</option>
            <option>Vodafone</option>
            <option>AirtelTigo</option>
          </select>
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
      </div>

      {/* Save Button */}
      <div className="absolute bottom-8 left-4 right-4">
        <button className="w-[50%] bg-black text-white font-semibold py-3">
          Save
        </button>
      </div>
    </div>
  );
};

export default Editcard6;