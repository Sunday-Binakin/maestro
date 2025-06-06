import React from 'react';
import { FaCamera } from 'react-icons/fa';

const Describe3 = () => {
  return (
    <div className="h-auto w-full max-w-3xl bg-white p-6">
      {/* Step Header */}
      <div className="text-gray-500 text-sm mb-4">Step 1 of 2</div>
      <div className="text-black text-lg font-semibold mb-6">Describe your cargo</div>

      {/* Cargo Type Input */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2"></label>
        <input
          type="text"
          placeholder="Cargo Type eg; iron rods"
          className="w-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-700"
        />
      </div>

      {/* Hazardous Substance Toggle */}
      <div className="flex items-center justify-between mb-6">
        <label className="text-gray-700 text-sm">Cargo possess hazardous substance?</label>
        <input type="checkbox" className="toggle-checkbox" />
      </div>

      {/* Hazardous Substance Type Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2"></label>
        <select className="w-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-700">
          <option>Select hazardous substance type</option>
        </select>
      </div>

      {/* Weight and Other Section */}
      {/* Weight and Other Section */}
<div className="mb-6">
  {/* Weight Section */}
  <div className="w-full mb-4">
    <label className="block text-gray-500 text-sm mb-2"></label>
    <div className="flex items-center bg-gray-100 border border-gray-300">
      <input
        type="text"
        placeholder="Weight"
        className="w-full bg-transparent px-4 py-2 text-gray-700"
      />
      <select className="bg-transparent border-l border-gray-300 px-2 py-2 text-gray-700">
        <option>Kg</option>
      </select>
    </div>
  </div>

  {/* Other Section */}
  <div className="w-full">
    <label className="block text-gray-500 text-sm mb-2"></label>
    <div className="flex items-center bg-gray-100 border border-gray-300 ">
      <select className=" bg-transparent px-2 py-2 text-gray-700">
        <option>Other</option>
      </select>
      <button className="flex items-center gap-2 text-blue-500 px-2 py-2 border border-blue-500 ml-auto">
        <FaCamera />
        Take picture
      </button>
    </div>
  </div>
</div>

      {/* Upload Cargo Documents */}
      <div className="mb-6">
        <a href="#" className="text-blue-500 text-sm flex items-center">
          <span className="mr-2">↥</span> Upload cargo documents
        </a>
      </div>

      {/* Continue Button */}
      <div>
        <button className="w-full bg-yellow-400 text-black font-semibold py-3  shadow-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Describe3;