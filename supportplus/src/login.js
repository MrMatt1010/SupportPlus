// Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Perform your login logic here, such as API calls or authentication
    // For this example, let's assume login is successful and navigate to the dashboard
    history.push('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 style={{ color: 'orange' }}>Login</h2>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
