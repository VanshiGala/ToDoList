// Login.js
// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();
     onLogin(username, password);
     navigate('/todo');  // Navigate to /todo after login
  };

  return (
    <div className='login'>
      <h1 className='loginheader'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='username'>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='pass'>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
