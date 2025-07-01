const express = require('express');
const router = express.Router();
const pool = require('../db');


router.post('/', (req, res) => {
  const bookingData = req.body;
  console.log('Received booking:', bookingData);
  res.status(200).json({ message: 'Booking successful!' });
});



// POST /api/bookings
router.post('/', async (req, res) => {
  const { name, email, phone, rooms, checkin, checkout, hotel_id } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO bookings (name, email, phone, rooms, checkin, checkout, hotel_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, email, phone, rooms, checkin, checkout, hotel_id]
    );

    res.status(201).json({
      message: 'Booking successful!',
      booking: result.rows[0],
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});
// GET /api/bookings/:hotel_id
router.get('/:hotel_id', async (req, res) => {
  const { hotel_id } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM bookings WHERE hotel_id = $1 ORDER BY created_at DESC',
      [hotel_id]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ message: 'Failed to fetch bookings', error: err.message });
  }
});


module.exports = router; 


