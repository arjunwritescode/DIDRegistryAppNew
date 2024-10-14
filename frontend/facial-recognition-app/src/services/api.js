// src/services/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // Replace with your backend URL

export const verifyUser = async (did, file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('did', did);

    try {
        const response = await axios.post(`${API_URL}/verify`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data; // Return the server response
    } catch (error) {
        console.error('Error verifying user:', error);
        throw error; // Rethrow the error for handling in the component
    }
};
