import React from 'react';

const Editcard3 = () => {
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
        <div className="flex align-middle mb-4 space-x-80">
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" />
            <span className="text-gray-700 text-sm">Card Payment</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" />
            <span className="text-gray-700 text-sm">Mobile money</span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      {/* <div className="absolute bottom-8 left-4 right-4">
        <button className="w-[50%] bg-black text-white font-semibold py-3 rounded-md">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default Editcard3;