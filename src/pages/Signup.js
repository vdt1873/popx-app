import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForms.css';

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className="auth-content">
        <h1 className="auth-title">
          Create your<br />PopX account
        </h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label required" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="form-input"
              placeholder="Marry Doe"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label required" htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-input"
              placeholder="Marry Doe"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label required" htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Marry Doe"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label required" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              placeholder="Marry Doe"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="companyName">Company name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="form-input"
              placeholder="Marry Doe"
              value={form.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label required">Are you an Agency?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-form">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
