// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// //import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import RecruiterDashboard from './pages/RecruiterDashboard';
// import CandidateDashboard from './pages/CandidateDashBoard';
// import Profile from './features/profile/Profile';
// import PrivateRoute from './components/PrivateRoute';
// import NotAuthorized from './components/NotAuthorized';

// function AppRouter() {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<Home />} /> */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route
//         path="/recruiter-dashboard"
//         element={
//           <PrivateRoute roles={['recruiter']}>
//             <RecruiterDashboard />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/candidate-dashboard"
//         element={
//           <PrivateRoute roles={['candidate']}>
//             <CandidateDashboard />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/profile"
//         element={
//           <PrivateRoute roles={['candidate', 'recruiter']}>
//             <Profile />
//           </PrivateRoute>
//         }
//       />
//       <Route path="/not-authorized" element={<NotAuthorized />} />
//     </Routes>
//   );
// }
// export default AppRouter;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RecruiterDashboard from './pages/RecruiterDashboard';
import CandidateDashboard from './pages/CandidateDashBoard';
import Profile from './features/profile/Profile';
import PrivateRoute from './components/PrivateRoute';
import NotAuthorized from './components/NotAuthorized';

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/recruiter-dashboard"
        element={
          <PrivateRoute roles={['recruiter']}>
            <RecruiterDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/candidate-dashboard"
        element={
          <PrivateRoute roles={['candidate']}>
            <CandidateDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute roles={['candidate', 'recruiter']}>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/not-authorized" element={<NotAuthorized />} />
    </Routes>
  );
}

export default AppRouter;

