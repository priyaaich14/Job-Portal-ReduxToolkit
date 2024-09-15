// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../features/auth/authSlice';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   const onLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <nav className="bg-blue-500 p-4 text-white">
//       <ul className="flex space-x-4">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {user ? (
//           <>
//             <li>
//               <Link to="/profile">Profile</Link>
//             </li>
//             {user.role === 'recruiter' && (
//               <li>
//                 <Link to="/recruiter-dashboard">Dashboard</Link>
//               </li>
//             )}
//             {user.role === 'candidate' && (
//               <li>
//                 <Link to="/candidate-dashboard">Dashboard</Link>
//               </li>
//             )}
//             <li>
//               <button onClick={onLogout}>Logout</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../features/auth/authSlice';
// import { toast } from 'react-toastify';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   const onLogout = () => {
//     dispatch(logout());
//     toast.success('Successfully logged out!');
//   };

//   return (
//     <nav className="bg-blue-500 p-4 text-white">
//       <ul className="flex space-x-4">
//         {/* <li>
//           <Link to="/">Home</Link>
//         </li> */}
//         {user ? (
//           <>
//             <li>
//               <Link to="/profile">Profile</Link>
//             </li>
//             {user.role === 'recruiter' && (
//               <li>
//                 <Link to="/recruiter-dashboard">Dashboard</Link>
//               </li>
//             )}
//             {user.role === 'candidate' && (
//               <li>
//                 <Link to="/candidate-dashboard">Dashboard</Link>
//               </li>
//             )}
//             <li>
//               <button onClick={onLogout}>Logout</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };
// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    toast.success('Successfully logged out!');
  };

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        {user ? (
          <>
            <li>Welcome, {user.name}</li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {user.role === 'recruiter' && (
              <li>
                <Link to="/recruiter-dashboard">Dashboard</Link>
              </li>
            )}
            {user.role === 'candidate' && (
              <li>
                <Link to="/candidate-dashboard">Dashboard</Link>
              </li>
            )}
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

