import React from 'react';

const DeletePaymentModal = () => {
  return (
    <div className="bg-white w-[60%] max-w-md rounded-lg shadow-lg p-6 text-center mt-48">
      <h3 className="text-lg font-semibold mb-4">Delete Payment Method</h3>
      <p className="text-gray-700 text-sm mb-">
        Are you sure you want to 
      </p>
      <p className='text-gray-700 text-sm mb-4'>delete Payment account?</p>
      <button className="w-full bg-yellow-400 text-black font-semibold py-3 mb-4">
        Yes, Delete
      </button>
      <button className="w-full text-gray-700 font-semibold py-3">
        Cancel
      </button>
    </div>
  );
};

export default DeletePaymentModal;