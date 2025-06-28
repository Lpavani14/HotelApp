import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">BookMyStay</div>
      <ul className="navbar-links">
  <li><Link to="/home">Home</Link></li>
  <li><a href="#about">About Us</a></li>         {/* 👈 anchor link */}
  <li><a href="#help">Help Center</a></li>       {/* 👈 anchor link */}
  <li><Link to="/add-hotel">Add Hotel</Link></li>
</ul>


      {user && (
        <div className="navbar-profile">
          <span onClick={toggleProfile} className="profile-toggle">
            My Profile ▾
          </span>
          {showProfile && (
            <div className="profile-dropdown">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
              <p><strong>Phone:</strong> {user.phoneNumber || 'Not Provided'}</p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
