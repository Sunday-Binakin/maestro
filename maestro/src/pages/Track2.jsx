import React from 'react';

const Track2 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-[50%] p-6">
      {/* Header */}
      {/* <div className="bg-black text-white p-4 flex items-center justify-between">
        <button className="text-white text-lg">&lt;</button>
        <h1 className="text-lg font-bold">Track Cargo</h1>
        <button className="text-yellow-500 text-lg">🔔</button>
      </div> */}

      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="mb-4">
        <div className="flex items-center mb-2">
        <span className="text-yellow-500 text-lg mr-2">●</span>
        <p className="text-sm">
            From: <strong>Industrial Area</strong>
        </p>
        </div>
        <div className="flex items-center">
        <span className="text-black text-lg mr-2">■</span>
        <p className="text-sm">
            To: <strong>Olebu Ablekuma Kingdom hall</strong>
        </p>
        </div>
    </div>
    <div className="mb-4 ">
        <p className="text-sm mt-20 mb-4">
        <strong>Cargo Type:</strong> Iron rods
        </p>
        <p className="text-sm">12th August 2020</p>
    </div>
        <div className='mb-20 text-right'>
        <p className="text-sm mb-4">
        <strong className=''>Weight:</strong> 567 lbs
        </p>
        <p className="text-sm">
      <strong>Driver:</strong> Yaw Ofosu
        </p>
        </div>
        
    <button className="w-full bg-black text-white text-sm font-medium py-2 mb-4">
        View Cargo
    </button>
    <button className="w-full border border-blue-500 text-blue-500 text-sm font-medium py-2">
        Track Cargo
    </button>
</div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg mr-2">●</span>
            <p className="text-sm">
              From: <strong>Industrial Area</strong>
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <p className="text-sm">
              To: <strong>Olebu Ablekuma Kingdom hall</strong>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm">
            Cargo Type: <strong>Iron rods</strong>
          </p>
          <p className="text-sm">
            Weight: <strong>567 lbs</strong>
          </p>
          <p className="text-sm">
            Driver: <strong>Yaw Ofosu</strong>
          </p>
          <p className="text-sm">12th August 2020</p>
        </div>
        <button className="w-full bg-gray-400 text-white text-sm font-medium py-2">
          Awaiting Pickup
        </button>
      </div>
    </div>
  );
};

export default Track2;