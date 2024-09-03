const db = require('../config/database');

// Get all restaurants
const getAllRestaurants = (req, res) => {
  db.query('SELECT * FROM restaurants', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};

// Get restaurant by ID
const getRestaurantById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM restaurants WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

// Create new restaurant
const createRestaurant = (req, res) => {
  const { name, address, cuisine } = req.body;
  db.query('INSERT INTO restaurants (name, address, cuisine) VALUES (?, ?, ?)', [name, address, cuisine], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(201).json({ message: 'Restaurant added successfully!', restaurantId: results.insertId });
    }
  });
};

// Update restaurant
const updateRestaurant = (req, res) => {
  const id = req.params.id;
  const { name, address, cuisine } = req.body;
  db.query('UPDATE restaurants SET name = ?, address = ?, cuisine = ? WHERE id = ?', [name, address, cuisine, id], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: 'Restaurant updated successfully' });
    }
  });
};

// Delete restaurant
const deleteRestaurant = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM restaurants WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: 'Restaurant deleted successfully' });
    }
  });
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
};

