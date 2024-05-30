import { removeProductFromCart } from "../services/CartServices.js";

export default function Cart(cart) {
    let cartElement = document.createElement('div');
    cartElement.classList.add("cart");

    let cartTitle = document.createElement('h2');
    cartTitle.innerText = "Carrito de Compras";
    cartElement.appendChild(cartTitle);

    let cartList = document.createElement('ul');
    cartList.classList.add("cart-list");
    cartElement.appendChild(cartList);

    cart.products.forEach(product => {
        let productElement = document.createElement('li');
        productElement.classList.add("cart-product");
        productElement.innerText = product.title + " - " + product.price + " - " + product.quantity;
        cartList.appendChild(productElement);
        const removeButton = document.createElement('button');
        removeButton.textContent = "-";
        removeButton.onclick = () => removeProductFromCart("u0", product.id);
        productElement.appendChild(removeButton);
    });

    return cartElement;
}