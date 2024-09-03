const db = require('../config/dbConfig');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    if (results.length > 0) {
      const validPassword = await bcrypt.compare(password, results[0].password);
      if (validPassword) {
        const token = jwt.sign({ userId: results[0].id, username: results[0].username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Logged in successfully', token });
      } else {
        res.status(400).json({ error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
};

module.exports = {
  register,
  login
};
