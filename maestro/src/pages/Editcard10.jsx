import React from 'react';

const EditCard10 = () => {
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
            <input type="radio" name="paymentMethod" className="mr-2" defaultChecked />
            <span className="text-gray-700 text-sm">Card Payment</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" />
            <span className="text-gray-700 text-sm">Mobile money</span>
          </label>
        </div>

        {/* Card Details */}
        <div className="bg-gray-100 p-4">
          <p className="text-gray-700 text-sm font-semibold mb-2">Enter your card details</p>
          <input
            type="text"
            placeholder="Edward Yeboah"
            className="w-full p-3 border border-gray-300 mb-4"
            value="Edward Yeboah"
            readOnly
          />
          <div className="relative">
            <input
              type="text"
              placeholder="5467 4657 3747 2354"
              className="w-full p-3 border border-gray-300 mb-4"
              value="5467 4657 3747 2354"
              readOnly
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" // Replace with Mastercard logo
              alt="Mastercard"
              className="absolute right-4 top-3 w-8 h-8"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="08"
              className="w-1/2 p-3 border border-gray-300"
              value="08"
              readOnly
            />
            <input
              type="text"
              placeholder="20"
              className="w-1/2 p-3 border border-gray-300"
              value="20"
              readOnly
            />
          </div>
          <label className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" checked readOnly />
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

export default EditCard10;