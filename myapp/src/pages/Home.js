import React from 'react';
import Navbar from '../components/Navbar';
import SearchPanel from '../components/SearchPanel';
import FilterSidebar from '../components/FilterSidebar';
import HotelCard from '../components/HotelCard';
import './Home.css';
import { useSelector } from 'react-redux';
import { selectFilteredHotels } from '../features/hotelSlice';

const Home = () => {
  const hotels = useSelector(selectFilteredHotels);

  return (
    <div>
      <Navbar />
      <SearchPanel />
      <div className="home-container">
        {hotels.length > 0 ? (
          <div className="hotel-list">
            {hotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="no-results">No hotels found</div>
        )}
        <FilterSidebar />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section" id="about">
          <h3>About Us</h3>
          <p>
            BookMyStay helps you find the perfect hotel, resort, or homestay across India with ease.
            We offer reliable listings, user reviews, and secure bookings.
          </p>
        </div>
        <div className="footer-section" id="help">
          <h3>Help Center</h3>
          <p>
            Need assistance? Reach out to us 24/7 at <strong>support@bookmystay.com</strong> or call <strong>1800-000-000</strong>.
          </p>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} BookMyStay. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
