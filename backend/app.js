const express = require('express');
const app = express();
const restaurantRoutes = require('./routes/restaurantRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
// Middlewares
app.use(express.json()); 
app.use('/api', restaurantRoutes);
app.use('/api/payments', paymentRoutes)
// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to Foodie Delight!');
});

module.exports = app;
