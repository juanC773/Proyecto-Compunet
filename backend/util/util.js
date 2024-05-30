import bcrypt from 'bcrypt';

const generateId = () => {
    return Math.floor(Math.random() * 1000000000).toString();
}

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

export {
    generateId,
    encryptPassword,
}