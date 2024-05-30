import User from "../model/User.js"

const users = []

const addUser = (userData) => {
    const user = new User(userData)
    users.push(user)
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