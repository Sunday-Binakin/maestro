import { apiClient } from "./config";

export const updateUserProfile = async (userData) => {
    try {
        const response = await apiClient.put('/users/update', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserProfile = async () => {
    try {
        const response = await apiClient.get('/users/profile');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateFavoriteDestinations = async (destinations) => {
    try {
        const response = await apiClient.put('/users/favorites', { favoriteDestinations: destinations });
        return response.data;
    } catch (error) {
        throw error;
    }
}; 