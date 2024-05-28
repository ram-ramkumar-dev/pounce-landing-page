import axios from 'axios';

const API_URL = 'http://localhost:1337'; // Update with your Strapi API URL

export const fetchAPI = async (path) => {
  try {
    const response = await axios.get(`${API_URL}/${path}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};
