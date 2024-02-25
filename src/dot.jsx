import React, { useState } from 'react';
import Select from 'react-select';
import 'flag-icon-css/css/flag-icon.css';
import './id.css';

const countries = [
  { label: 'Nigeria (+234)', value: '+234', code: 'NG' },
  { label: 'United States (+1)', value: '+1', code: 'US' },
  { label: 'United Kingdom (+44)', value: '+44', code: 'GB' },
  { label: 'Ghana (+233)', value: '+233', code: 'GH' },
];

const areasOfExpertiseOptions = [
  { label: 'Lecturer', value: 'Lecturer' },
  { label: 'Student', value: 'Student' },
  { label: 'Content Creators', value: 'Content Creators' },
];

function Id() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    selectedCountry: null,
    areaOfExpertise: null,
    affiliateInstitution: '',
    password: '',
    confirmPassword: '',
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (selectedCountry) => {
    handleChange('selectedCountry', selectedCountry);
  };

  const handleAreaOfExpertiseChange = (areaOfExpertise) => {
    handleChange('areaOfExpertise', areaOfExpertise);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        {isLogin ? (
          <label>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter your email address"
            />
          </label>
        ) : (
          <>
            <label>
              Full Name:
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="Enter your full name"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Enter your email address"
              />
            </label>
            <div className="phone-input">
              <Select
                options={countries}
                value={formData.selectedCountry}
                onChange={handleCountryChange}
                placeholder=" Country Code"
                components={{ Option: countryOptionRenderer }}
              />
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                placeholder="Phone Number"
              />
            </div>
            <Select
              options={areasOfExpertiseOptions}
              value={formData.areaOfExpertise}
              onChange={handleAreaOfExpertiseChange}
              placeholder="Area Of Expertise"
              className="AreaOfExpertise"
            />
            <label>
              Affiliate Institution:
              <input
                type="text"
                value={formData.affiliateInstitution}
                onChange={(e) => handleChange('affiliateInstitution', e.target.value)}
                placeholder="Affiliate Institution"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="Password"
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                placeholder="Confirm Password"
              />
            </label>
          </>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <div className="toggle-login-signup">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <span onClick={() => setIsLogin(false)} className="link">
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setIsLogin(true)} className="link">
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Id;
