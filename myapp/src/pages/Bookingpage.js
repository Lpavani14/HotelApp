import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const { hotel_id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rooms: 1,
    checkin: '',
    checkout: '',
  });
  const [message, setMessage] = useState('');
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${hotel_id}`);
      const data = await res.json();
      console.log('Fetched bookings:', data)
      setBookings(data.bookings);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [hotel_id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, hotel_id }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Booking successful!');
        fetchBookings(); // Refresh bookings list
      } else {
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
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} required />
        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required />
        <label>Rooms</label>
        <input name="rooms" type="number" min="1" value={formData.rooms} onChange={handleChange} required />
        <label>Check-in</label>
        <input name="checkin" type="date" value={formData.checkin} onChange={handleChange} required />
        <label>Check-out</label>
        <input name="checkout" type="date" value={formData.checkout} onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>

      {message && <p>{message}</p>}

      <h3>Previous Bookings</h3>
      <ul>
        {bookings.map((b, i) => (
          <li key={i}>
            {b.name} - {b.email} - {b.checkin} to {b.checkout}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingPage;
