// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/auth/authSlice';
// import jobReducer from './features/jobs/jobSlice';
// import profileReducer from './features/profile/profileSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     jobs: jobReducer,
//     profile: profileReducer,
//   },
// });
// export default store;


import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import jobReducer from './features/jobs/jobSlice';
import profileReducer from './features/profile/profileSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    profile: profileReducer,
  },
});

export default store;
