import express from 'express';
import { addUser, getUserByUsername } from '../controller/users.js';

const router = express.Router();

//Register users
router.post('/register',(req, res) =>{
    const userData = req.body;
    try {
        addUser(userData);
        res.status(201).send("User registered successfully")
    } catch (err){
        res.status(400).send(error.message);
    }
});

//clients Login
router.post('/login', (req, res) => {
    const { username, password } = req.body; 
    const user = getUserByUsername(username); 
    if (!user || user.password !== password) { 
        res.status(401).send("Incorrect credentials."); 
    } else {
        res.status(200).send("Successful login."); 
    }
});

//Admin login 
router.post('/admin/login', (req, res) => {
    const { username, password } = req.body; 
    const user = getUserByUsername(username); 
    if (!user || user.userType !== "admin" || user.password !== password) { 
        res.status(401).send("Incorrect credentials."); 
    } else {
        res.status(200).send("Successful login."); 
    }
});

export default router;
