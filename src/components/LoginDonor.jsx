// components/LoginDonor.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginDonor } from '../actions/donorActions';
import "./LoginDonor.css";

const LoginDonor = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginDonor(formData)); // Dispatch the loginDonor action
  };

  return (
    <div className="login-form">
      <h2>Login as a Donor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginDonor;
