async function getProducts() {
    try {
        const response = await fetch('http://localhost:3000/products/');
        const responseJson = await response.json();
        const products = responseJson.products;
        console.log(products[0])
        console.log(products);
        return products;
    } catch (error) {
        console.error('Error:', error);
    }
}

function addProduct(productData) {
    async function addProductAsync(productData) {
        const request = new Request('http://localhost:3000/products', {
            method: 'POST',
            body: productData, 
        });
        const response = await fetch(request);
        if (response.ok) {
            console.log('Producto añadido con éxito');
        } else {
            console.log('Error al añadir producto');
        }
    }
    addProductAsync(productData);
}

export {
    getProducts,
    addProduct,
}