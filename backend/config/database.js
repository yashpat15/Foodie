const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect('mongodb://localhost/foodie_delight_db')
  .then(() => {
    console.log('MongoDB connected successfully.');
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
  });

  mongoose.connection.on('error', err => {
    console.error('MongoDB error:', err.message);
  });
};

module.exports = connectDatabase;
