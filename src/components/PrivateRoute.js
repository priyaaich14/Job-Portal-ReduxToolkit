// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children, roles }) => {
//   const { user } = useSelector((state) => state.auth);

//   if (!user) {
//     // Not logged in, redirect to login
//     return <Navigate to="/login" />;
//   }

//   if (roles && roles.indexOf(user.role) === -1) {
//     // Logged in but not authorized, redirect to not authorized page
//     return <Navigate to="/not-authorized" />;
//   }

//   // Authorized, render the component
//   return children;
// };

// export default PrivateRoute;
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default PrivateRoute;
