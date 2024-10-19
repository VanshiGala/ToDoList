// Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome to the App</h1>
      <header>
        <Link to="/login">
          <button className='btn1'>Login</button>
        </Link>
      </header>
    </div>
  );
};

export default Welcome;
