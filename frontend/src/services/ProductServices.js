async function getProducts() {
    try {
        const response = await fetch('http://localhost:3000/products/');
        const responseJson = await response.json();
        const products = responseJson.products;
        return products;
    } catch (error) {
        console.error('Error:', error);
    }
}

export {
    getProducts,
}