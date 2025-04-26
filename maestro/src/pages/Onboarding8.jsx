import React from 'react';

const Onboarding8 = () => {
  return (
    <div className="font-sans bg-white min-h-screen w-full flex flex-col items-center px-6 py-8">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/100x50"
          alt="Maestro Logo"
          className="w-24 mx-auto"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-center mb-6">Create your Account</h2>

      {/* Social Sign-Up Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 w-full max-w-md">
        <button className="flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-32 mb-4 sm:mb-0">
          <span className="mr-2">F</span> Sign up
        </button>
        <button className="flex items-center justify-center bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-32">
          <span className="mr-2">G+</span> Sign up
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full max-w-md mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-sm text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md space-y-4 mb-6">
        <div className="bg-gray-100">
          <input
            type="text"
            placeholder="Edward Yeboah"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-gray-100">
          <input
            type="text"
            placeholder="0202024965"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative bg-gray-100">
          <input
            type="password"
            placeholder="********************"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute inset-y-0 right-4 text-gray-500">👁</button>
        </div>
        <div className="relative bg-gray-100">
          <input
            type="password"
            placeholder="********************"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute inset-y-0 right-4 text-gray-500">👁</button>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center w-full max-w-md mb-6">
        <input type="checkbox" className="mr-2" />
        <p className="text-sm text-gray-600">
          I agree to the{' '}
          <span className="text-blue-500">Terms of Conditions</span> and{' '}
          <span className="text-blue-500">Privacy Policy</span>
        </p>
      </div>

      {/* Sign Up Button */}
      <button className="w-full max-w-md bg-black text-white text-sm font-medium py-3 mb-6">
        Sign up
      </button>

      {/* Sign In Link */}
      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <button className="text-blue-500 font-medium">Sign in</button>
      </p>
    </div>
  );
};

export default Onboarding8;