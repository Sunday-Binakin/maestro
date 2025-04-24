import React from 'react';

const Onboarding7 = () => {
  return (
    <div className="font-sans bg-white min-h-screen w-[50%] flex flex-col items-center px-6 py-8">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/100x50"
          alt="Maestro Logo"
          className="w-24 mx-auto"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-center mb-6">log in to your Account</h2>

      {/* Social Sign-In Buttons */}
      <div className="flex space-x-4 mb-6">
        <button className="flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md w-32">
          <span className="mr-2">F</span> Sign in
        </button>
        <button className="flex items-center justify-center bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md w-32">
          <span className="mr-2">G+</span> Sign in
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full max-w-md mb-6 ">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-sm text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md space-y-4 mb-6">
        <div className='bg-gray-100'>
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        <div className='bg-gray-100'>
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        
      </div>

      {/* Remember Password and Forgot Password */}
      <div className="flex items-center justify-between w-full max-w-md mb-6">
        <label className="flex items-center text-sm text-gray-600">
          <input type="checkbox" className="mr-2" />
          Remember password
        </label>
        <button className="text-blue-500 text-sm font-medium">Forgotten password?</button>
      </div>

      {/* Login Button */}
      <button className="w-full max-w-md bg-black text-white text-sm font-medium py-3 mb-6">
        Login
      </button>

      {/* Sign Up Link */}
      <p className="text-sm text-gray-600">
        Don't have an account?{' '}
        <button className="text-blue-500 font-medium">Sign up</button>
      </p>
    </div>
  );
};

export default Onboarding7;