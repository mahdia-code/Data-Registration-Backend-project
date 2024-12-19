const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server is running on port 5000');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





