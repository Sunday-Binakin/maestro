import React from 'react';

const Setting5 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-[50%] p-6">
      {/* <h1 className="text-lg font-bold mb-6">Settings</h1> */}
      <h2 className="text-sm font-medium text-gray-700 mb-4">Add favourite locations</h2>

      {/* Input Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter location"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Setting5;