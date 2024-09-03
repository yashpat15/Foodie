const express = require('express');
const connectDatabase = require('./config/database'); 

const app = express();

// Connect to the database
connectDatabase();

app.use(express.json());

// Define routes
// app.use('/api/restaurants', restaurantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
