import express from 'express';
import indexRoutes from './routes/index.routes.js';
import productsRoutes from './routes/products.routes.js';
import cartRoutes from './routes/cart.routes.js';
import cors from 'cors'
import generateData from './util/generateData.js';
import { getAllUsers } from './controller/users.js';

// Initialize server
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Generate sample data
generateData();
console.log(getAllUsers())

// Routes
app.use('/', indexRoutes);
app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});