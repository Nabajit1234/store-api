// Importing Modules
const express = require('express');
const dotenv = require('dotenv').config();
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

// Declaring and Assigning values
const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json()); // used to parse req.body
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Connect to MongoDB
connectDB();

//Route
app.get('/', (req, res) => {
    res.send('This is the homepage');
});

// Creating Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});