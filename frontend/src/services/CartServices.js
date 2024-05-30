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

export {
    getCart,
}