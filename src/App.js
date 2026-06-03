import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="phone-frame">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
