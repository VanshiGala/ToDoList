// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import TodoApp from './Components/TodoApp';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication handler
  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <Router>
      <Routes>
        {/* Welcome Page Route */}
        <Route path="/welcome" element={<Welcome />} />

        {/* Login Page Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Todo Page Route (Protected) */}
        <Route
          path="/todo"
          element={isAuthenticated ? <TodoApp /> : <Navigate to="/login" />}
        />

        {/* Redirect to Welcome Page if not found */}
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </Router>
  );
}

export default App;


