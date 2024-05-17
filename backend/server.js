import express from 'express';
import indexRoutes from './routes/index.routes.js';
import productsRoutes from './routes/products.routes.js';
import cors from 'cors'

// Initialize server
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', indexRoutes);
app.use('/products', productsRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});