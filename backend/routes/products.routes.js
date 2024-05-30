import express from 'express';
import axios from 'axios';
import { addProduct, getAllProducts } from '../controller/products.js';
import { upload } from '../util/multer.js';

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

router.post('/', upload.single('thumbnail'), async (req, res) => {
    try {
        const thumbnail = req.file
        req.body.thumbnail = `${req.protocol}://${req.get('host')}/${thumbnail.path}`;
        const product = addProduct(req.body)
        console.log(getAllProducts())
        res.json({message: 'Producto agregado'});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar un producto');
    }
})

export default router;
