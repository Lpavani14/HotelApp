const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { name, email, phone, rooms, checkin, checkout, hotelId } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO bookings (name, email, phone, rooms, checkin, checkout, hotel_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, email, phone, rooms, checkin, checkout, hotelId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ message: 'Database error' });
  }
});

module.exports = router;
