import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelCard.css';

const HotelCard = ({ hotel, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${hotel.id}`);
  };

  return (
    <div className="hotel-card" onClick={handleClick}>
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
      </div>
      <div className="hotel-info">
        <h4>{hotel.name}</h4>
        <p>{hotel.address}</p>
        <p>{hotel.rooms} Room(s) • {hotel.beds} Bed(s) • {hotel.baths} Bath(s)</p>
        <p>Type: {hotel.type}</p>
        <p className="price">₹{hotel.price}/night</p>
      </div>
    </div>
  );
};

export default HotelCard;
