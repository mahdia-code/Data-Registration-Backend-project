const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes/user.route'); // Import routes

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userData')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






