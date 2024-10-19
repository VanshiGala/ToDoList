// Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome to the App</h1>
      <header>
        <Link to="/login">
        <div>
  <Button
    color="primary"
  >
    Click Me
  </Button>
</div>
        </Link>
      </header>
    </div>
  );
};

export default Welcome;
