import { apiClient } from "./config"; 

export const apiSignUp = async(payload) => {
    return await apiClient.post('', payload)
};

export const apiSignIn = async(payload) => {
    return await apiClient.post('', payload)
};

export const apiProfile = async(payload) => {
    return await apiClient.get('', payload)
};