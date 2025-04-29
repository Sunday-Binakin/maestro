import React from 'react';

const Setting3 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      <h2 className="text-sm font-medium text-gray-500 mb-4">Add favourite locations</h2>

      {/* Input Section */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter location"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
        />
      </div>

      {/* Locations List */}
      <div className="w-full max-w-md space-y-4">
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">Olebu Ablekuma Kingdom hall</p>
              <p className="text-sm text-gray-500">Ablekuma, Accra</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">Frankies</p>
              <p className="text-sm text-gray-500">Osu, Accra</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">New Jericho, Ebenezer School</p>
              <p className="text-sm text-gray-500">Ashaiman, Accra</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">New Jericho, Ebenezer School</p>
              <p className="text-sm text-gray-500">Ashaiman, Accra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting3;