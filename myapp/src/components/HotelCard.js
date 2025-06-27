import React from 'react';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
      </div>
      <div className="hotel-info">
        <h4>{hotel.name}</h4>
        <p>{hotel.address}</p>
        <p>{hotel.beds} Beds  {hotel.baths} Baths</p>
        <p className="price">₹{hotel.price}/night</p>
      </div>
    </div>
  );
};

export default HotelCard;
