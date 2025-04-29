import React from 'react';

const Editcard4 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white">
        <h2 className="text-lg font-semibold">Payment</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4 px-4">
        <button className="px-6 py-2 bg-black text-white font-semibold">
          Edit details
        </button>
        <button className="px-6 py-2 border border-gray-300 font-semibold">
          History
        </button>
      </div>

      {/* Add Payment Method */}
      <div className="px-4 mt-6 flex-grow">
        <p className="text-gray-700 text-sm mb-4">Add payment method</p>

        {/* Payment Options */}
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 mb-4">
          <label className="flex items-center mb-2 md:mb-0">
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
          <div className='mb-4'>
          <input
            type="text"
            placeholder="Card name"
            className="w-full p-3 border border-gray-300 mb-4"
          />
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Card number"
              className="w-full p-3 border border-gray-300 mb-4"
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
              placeholder="MM"
              className="w-1/2 p-3 border border-gray-300"
            />
            <input
              type="text"
              placeholder="YY"
              className="w-1/2 p-3 border border-gray-300"
            />
          </div>
          <label className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-700 text-sm">Set this as default payment account</span>
          </label>
        </div>
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

export default Editcard4;