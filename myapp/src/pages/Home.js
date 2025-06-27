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
        
        {hotels.length>0 ?(
        <div className="hotel-list">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div> 
        ) :( <div className="no-results">No hotels found</div>
          )}
          <FilterSidebar />

      </div>
    </div>
  );
};

export default Home;
