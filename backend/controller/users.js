import fs from 'fs';
import User from "../model/User.js"
import Admin from "../model/Admin.js";
import { json } from 'express';

const usersFilePath = './data/users.txt';

const users = loadUsers();

function loadUsers(){
    try{
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err){
        console.error("Error loading users: ", err)
        return [];
    }
}

function saveUsers(){
    try{
        fs.writeFileSync(usersFilePath, JSON.stringify(users), 'utf8');
    } catch (err){
        console.error("Error saving users: ",err)
    }
}

if (users.length === 0){
    const adminData = {
        username: "admin",
        password: "admin",
        name: "Administrator",
    }
    const admin = new Admin(adminData);
    users.push(admin)
    saveUsers();
}

const addUser = (userData) => {
    if(getUserByUsername(userData.username)){
        throw new Error ("The user name is registered yet.");
    }
    const newUser = new User(userData);
    users.push(newUser);
    saveUsers;
}

const getUserByUsername = (username) => {
    return users.find(user => user.username === username)
}

const deleteUser = (username) => {
    users.filter(user => user.username !== username)
}

const editUser = (username, userData) => {
    const user = users.find(user => user.username === username)
    user.editUser(userData)
}

const getAllUsers = () => {
    return users
}

export {
    addUser,
    getUserByUsername,
    deleteUser,
    editUser,
    getAllUsers
}