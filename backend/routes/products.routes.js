import express from 'express';
import axios from 'axios';
import { getAllProducts } from '../controller/products.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = getAllProducts();
        console.log(products[0].toJSON())
        const productsJSON = products.map(product => product.toJSON());
        res.json({products: productsJSON});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
});

export default router;
