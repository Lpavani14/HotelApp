import React from 'react';
import { Link } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import './HomePage.css'; // You can style it separately
import { useSelector } from 'react-redux';

const HomePage = () => {
  const hotels = useSelector((state) => state.hotels.list);

  return (
    <div>
      {/* Simple Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">BookMyStay</div>
        <ul className="navbar-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#help">Help Center</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Hotel List (not filtered) */}
      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section" id="about">
          <h3>About Us</h3>
          <p>
            BookMyStay helps you find the perfect hotel, resort, or homestay across India.
            Reliable listings, user reviews, and secure bookings.
          </p>
        </div>
        <div className="footer-section" id="help">
          <h3>Help Center</h3>
          <p>
            Need assistance? Email us at <strong>support@bookmystay.com</strong> or call <strong>1800-000-000</strong>.
          </p>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} BookMyStay. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
