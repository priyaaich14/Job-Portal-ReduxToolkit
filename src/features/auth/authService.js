// import axios from 'axios';

// const API_URL = '/api/auth/';

// const register = async (userData) => {
//   const response = await axios.post(API_URL + 'register', userData);
//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }
//   return response.data;
// };

// const login = async (userData) => {
//   const response = await axios.post(API_URL + 'login', userData);
//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }
//   return response.data;
// };

// const logout = () => {
//   localStorage.removeItem('user');
// };

// const authService = {
//   register,
//   login,
//   logout,
// };

// export default authService;


// import axios from 'axios';

// //const API_URL = process.env.REACT_APP_API_URL + '/api/auth/';

// const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/auth/';

// const register = async (userData) => {
//   const response = await axios.post(API_URL + 'register', userData);
//   return response.data;
// };

// const login = async (userData) => {
//   const response = await axios.post(API_URL + 'login', userData);
//   return response.data;
// };

// const authService = {
//   register,
//   login,
// };

// export default authService;


import axios from 'axios';

const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/auth/';

const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
