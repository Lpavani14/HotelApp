import React from 'react';
import { useSelector } from 'react-redux';
import HotelCard from './HotelCard';

const HotelList = () => {
  const hotels = useSelector((state) => state.hotels.list);

  return (
    <div>
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
