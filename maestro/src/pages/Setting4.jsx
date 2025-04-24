import React from 'react';

const Setting4 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-[50%] p-6 flex flex-col">
      {/* <h1 className="text-lg font-bold mb-6">Settings</h1> */}
      <h2 className="text-sm font-medium text-gray-500 mb-4">Add favourite locations</h2>

      {/* Input Section */}
      <div className="mb-6">
        <input
          type="text"
          value="Olebu Ablekuma Kingdom hall"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
          readOnly
        />
      </div>

      {/* Add Location Button */}
      <button className="text-blue-500 text-sm font-medium mb-4">+ Add location</button>

      {/* Selected Location */}
      <div className="flex items-center mb-6">
        <span className="text-black text-lg mr-2">■</span>
        <p className="text-base">Olebu Ablekuma Kingdom hall</p>
      </div>

      {/* Save Button */}
      <button className="bg-black text-white text-base font-medium py-3 mt-auto">
        Save
      </button>
    </div>
  );
};

export default Setting4;