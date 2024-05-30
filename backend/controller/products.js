
import Product from '../model/Product.js'

const products = []

const getAllProducts = () => {
    return products
}

const getProductById = (id) => {
    return products.find(product => product.id === id)
}

const deleteProduct = (id) => { 
    products = products.filter(product => product.id !== id)
    return true
}

const addProduct = (productData) => {
    const newProduct = new Product(productData)
    products.push(newProduct)
    return newProduct
}

const editProduct = (id, productData) => {
    const product = products.find(product => product.id === id)
    product.editProduct(productData)
    return product
}

export {
    getAllProducts,
    getProductById,
    deleteProduct,
    addProduct,
    editProduct
}