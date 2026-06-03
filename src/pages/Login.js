import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForms.css';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to profile on login
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className="auth-content">
        <h1 className="auth-title">
          Signin to your<br />PopX account
        </h1>
        <p className="auth-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-form">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
