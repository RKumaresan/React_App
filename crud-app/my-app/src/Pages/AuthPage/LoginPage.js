// LoginPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Form from '../../common/Form';

const fields = [
  { name: 'email', label: 'Email address', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

const validationRules = {
  email: 'Please enter email..',
  password: 'Please enter password..',
};

export default function LoginPage() {
  const [loginError, setLoginError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (values, errors) => {
    let userData = JSON.parse(localStorage.getItem('users'));
    let users = userData.find((i) => i.email === values.email);
    if (users) {
      if (users.pwd === values.password) {
        localStorage.setItem('token', true);
        localStorage.setItem('currentUser', JSON.stringify(users));
        navigate('/');
      } else {
        setLoginError((prev) => ({ ...prev, password: 'Incorrect password' }));
      }
    } else {
      setLoginError((prev) => ({ ...prev, email: 'Email not registered, please register first' }));
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card col-12 col-md-6 offset-md-3 shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <Form
            fields={fields}
            validationRules={validationRules}
            onSubmit={handleSubmit}
            login
            loginError={loginError}
            setLoginError={setLoginError}
          />
          <div className="row mb-3">
            <div className="col-12 text-center">
              <p className="text-muted">
                If you don't have an account, please{' '}
                <Link to="/register" className="fw-bold">
                  register
                </Link>{' '}
                first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
