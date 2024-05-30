async function getCart(username) {
    try {
        const username = "u0"
        const response = await fetch(`http://localhost:3000/cart/${username}`);
        const responseJson = await response.json();
        return responseJson.cart;
    } catch (error) {
        console.error('Error:', error);
    }
}

function addProductToCart(username, productId) {
    async function addProductToCartAsync(username, productId) {
        try {
            const response = await fetch(`http://localhost:3000/cart/${username}/products/${productId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: productId }),
            });
            const responseJson = await response.json();
            console.log(responseJson)
            return responseJson.cart;
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return addProductToCartAsync(username, productId);
}

function removeProductFromCart(username, productId) {
    async function removeProductFromCartAsync(username, productId) {
        try {
            const response = await fetch(`http://localhost:3000/cart/${username}/products/${productId}`, {
                method: 'DELETE',
            });
            const responseJson = await response.json();
            return responseJson.cart;
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return removeProductFromCartAsync(username, productId);
}

export {
    getCart,
    addProductToCart,
    removeProductFromCart
}