import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      toast.success('Login successful!');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
};

export default Login;
