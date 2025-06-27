import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../features/hotelSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AddHotel.css';

const AddHotel = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    beds: '',
    baths: '',
    price: '',
    image: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel(form));
    navigate('/hotels');
  };

  return (
    <div>
      <Navbar />
      <div className="add-hotel-container">
        <h2>Add New Hotel</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Hotel Name" onChange={handleChange} required />
          <input name="address" placeholder="Address" onChange={handleChange} required />
          <input name="beds" type="number" placeholder="Beds" onChange={handleChange} required />
          <input name="baths" type="number" placeholder="Baths" onChange={handleChange} required />
          <input name="price" type="number" placeholder="Price per night" onChange={handleChange} required />
          <input name="image" placeholder="Image URL" onChange={handleChange} required />
          <button type="submit">Add Hotel</button>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
