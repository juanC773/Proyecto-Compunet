import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
});

export default router;
