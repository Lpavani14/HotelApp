import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const { hotelId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rooms: 1,
    checkin: '',
    checkout: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, hotelId }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Booking successful!');
      }else{        
      setMessage(data.message || 'Booking failed.');
      }
    } catch (err) {
      setMessage('Error submitting booking.');
    }
  };

  return (
    <div className="booking-page">
      <h2>Book Hotel</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input name="rooms" type="number" min="1" value={formData.rooms} onChange={handleChange} required />
        <input name="checkin" type="date" value={formData.checkin} onChange={handleChange} required />
        <input name="checkout" type="date" value={formData.checkout} onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingPage;
