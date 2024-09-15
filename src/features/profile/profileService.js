import axios from 'axios';

const API_URL = '/api/profile/';

const getProfile = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const updateProfile = async (profileData) => {
  const response = await axios.put(API_URL, profileData);
  return response.data;
};

const profileService = {
  getProfile,
  updateProfile,
};

export default profileService;
