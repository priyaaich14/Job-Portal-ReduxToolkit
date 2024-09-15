// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../features/auth/authSlice';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'candidate', // default role is candidate
//   });
//   const dispatch = useDispatch();

//   const { name, email, password, role } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(registerUser({ name, email, password, role })).unwrap();
//       toast.success('Registration successful!');
//     } catch (error) {
//       toast.error(error);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={name}
//         onChange={onChange}
//         placeholder="Name"
//         className="input"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={email}
//         onChange={onChange}
//         placeholder="Email"
//         className="input"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={onChange}
//         placeholder="Password"
//         className="input"
//         required
//       />
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="candidate"
//             checked={role === 'candidate'}
//             onChange={onChange}
//           />
//           Candidate
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="role"
//             value="recruiter"
//             checked={role === 'recruiter'}
//             onChange={onChange}
//           />
//           Recruiter
//         </label>
//       </div>
//       <button type="submit" className="btn">
//         Register
//       </button>
//     </form>
//   );
// };
// export default Register;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'candidate', // default role is candidate
    profile: {
      experience: '', // Default fields for candidates
      education: '',
      skills: [],
    }
  });
  const dispatch = useDispatch();

  const { name, email, password, role, profile } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeProfile = (e) => {
    setFormData({ ...formData, profile: { ...profile, [e.target.name]: e.target.value } });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser({ name, email, password, role, profile })).unwrap();
      toast.success('Registration successful!');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        className="input"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        className="input"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        className="input"
        required
      />
      <div>
        <label>
          <input
            type="radio"
            name="role"
            value="candidate"
            checked={role === 'candidate'}
            onChange={onChange}
          />
          Candidate
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="recruiter"
            checked={role === 'recruiter'}
            onChange={onChange}
          />
          Recruiter
        </label>
      </div>
      {role === 'candidate' && (
        <div>
          <input
            type="text"
            name="experience"
            value={profile.experience}
            onChange={onChangeProfile}
            placeholder="Experience"
            className="input"
            required
          />
          <input
            type="text"
            name="education"
            value={profile.education}
            onChange={onChangeProfile}
            placeholder="Education"
            className="input"
            required
          />
          <input
            type="text"
            name="skills"
            value={profile.skills}
            onChange={onChangeProfile}
            placeholder="Skills (comma-separated)"
            className="input"
            required
          />
        </div>
      )}
      {role === 'recruiter' && (
        <div>
          <input
            type="text"
            name="companyName"
            value={profile.companyName}
            onChange={onChangeProfile}
            placeholder="Company Name"
            className="input"
            required
          />
          <input
            type="text"
            name="website"
            value={profile.website}
            onChange={onChangeProfile}
            placeholder="Website"
            className="input"
          />
          <input
            type="text"
            name="companyDescription"
            value={profile.companyDescription}
            onChange={onChangeProfile}
            placeholder="Company Description"
            className="input"
          />
        </div>
      )}
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

export default Register;

