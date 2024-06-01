import express from 'express';
import cors from 'cors'

import indexRoutes from './routes/index.routes.js';
import productsRoutes from './routes/products.routes.js';
import cartRoutes from './routes/cart.routes.js';
import authRoutes from './routes/auth.routes.js';

import generateData from './util/generateData.js';


// Initialize server
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Generate sample data
generateData();

// Routes
app.use('/', indexRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);
app.use('/auth', authRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});