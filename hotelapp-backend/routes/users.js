const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
