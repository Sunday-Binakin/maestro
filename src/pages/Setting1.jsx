import React, { useState, useEffect } from 'react';
import { updateUserProfile, getUserProfile, updateFavoriteDestinations } from '../services/user';

const Setting1 = () => {
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    profileImage: '',
    favoriteDestinations: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    setIsLoading(true);
    try {
      const data = await getUserProfile();
      setUserData(data);
    } catch (err) {
      setError('Failed to fetch user profile');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateProfile = async (updatedData) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await updateUserProfile(updatedData);
      setUserData(data);
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddLocation = async (newLocation) => {
    if (!newLocation) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const updatedDestinations = [...userData.favoriteDestinations, newLocation];
      const data = await updateFavoriteDestinations(updatedDestinations);
      setUserData(prev => ({
        ...prev,
        favoriteDestinations: data.favoriteDestinations
      }));
    } catch (err) {
      setError('Failed to add location');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !userData.name) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-4">
      <h1 className="bg-black text-white text-lg text-center font-bold mb-4 px-4 py-3">Settings</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
          {error}
        </div>
      )}

      {/* Account Section */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Account</h2>
        <div className="bg-white shadow-md p-4 flex items-center">
          <img
            src={userData.profileImage || "/default-profile.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-yellow-500 object-cover mr-4"
          />
          <div className="flex-1">
            <p className="text-base font-medium">{userData.name}</p>
            <p className="text-sm text-gray-500">{userData.phoneNumber}</p>
          </div>
          <span className="text-gray-400 text-lg">&gt;</span>
        </div>
      </div>

      {/* Favourite Destinations Section */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 mb-2">Favourite Destinations</h2>
        <div className="bg-white shadow-md p-4">
          <button 
            className="text-blue-500 text-sm font-medium mb-4"
            onClick={() => {
              const newLocation = window.prompt('Enter new location:');
              if (newLocation) {
                handleAddLocation(newLocation);
              }
            }}
            disabled={isLoading}
          >
            + Add location
          </button>
          {userData.favoriteDestinations.map((location, index) => (
            <div key={index} className="flex items-center">
              <span className="text-black text-lg mr-2">■</span>
              <p className="text-base">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setting1;