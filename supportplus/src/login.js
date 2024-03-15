/*login.js */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Perform your login logic here
    // Assuming login is successful, navigate to the dashboard
    history.push('/dashboard');
  };

  return (
    <div className="login-container">  
    <h2 style={{ color: 'orange' }}>SupportPlus</h2>
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
