import { Router } from 'express';
import { getUserByUsername } from '../controller/users.js';

const router = Router()

router.get('/:username', async (req, res) => {
    const username = req.params.username;
    const user = getUserByUsername(username);
    console.log(user)
    console.log(user.cart.toJSON())
    res.json({cart: user.cart.toJSON()});
});

export default router;