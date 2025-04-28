import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiSignUp } from '../Services/auth';

const Onboarding8 = () => {
  const [loading, setLoading] = useState(false); // Fixed initial state
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true); // Set loading to true
      const formData = new FormData(event.target);

      // Extracting form data
      const name = formData.get('name');
      const phone = formData.get('phone');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');

      // Validating form data
      if (!name || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        setLoading(false);
        return;
      }

      // Creating payload
      const payload = { name, phone, password };

      console.log('Payload:', payload); // Debugging: Log payload to ensure it's correct

      // API call
      const response = await apiSignUp(payload);

      console.log('API Response:', response); // Debugging: Log API response

      if (response?.status === 200) {
        alert('Sign up successful!');
        navigate('/dashboard'); // Redirect to dashboard or desired page
      } else {
        alert(response?.message || 'Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error); // Debugging: Log error details
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

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

      {/* Input Fields */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-6">
        <div className="bg-gray-100">
          <input
            type="text"
            name="name"
            placeholder="Edward Yeboah"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-gray-100">
          <input
            type="text"
            name="phone"
            placeholder="0202024965"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative bg-gray-100">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative bg-gray-100">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-medium py-3"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default Onboarding8;