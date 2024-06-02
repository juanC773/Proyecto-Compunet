import { removeProductFromCart, addPaymentHistory } from "../services/CartServices.js";

export default function Cart(cart) {
    let cartElement = document.createElement('div');
    cartElement.classList.add("cart-container"); // Agregar clase específica al contenedor principal
    cartElement.setAttribute("id", "cartElement");

    let cartTitle = document.createElement('h2');
    cartTitle.innerText = "Carrito de Compras";
    cartTitle.classList.add("cart-title"); // Agregar clase específica al título
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
        removeButton.classList.add("remove-button"); // Agregar clase específica al botón de eliminar
        removeButton.onclick = () => removeProductFromCart("u0", product.id);
        productElement.appendChild(removeButton);
    });

    // Comprar e historial
    let send_button = document.createElement("button");
    send_button.textContent = "Comprar ahora";
    send_button.classList.add("buy-button"); // Agregar clase específica al botón de compra

    send_button.addEventListener("click", async () => {
        let divRecibo = document.createElement('div');
        divRecibo.setAttribute("class", "divRecibo");
        divRecibo.setAttribute("id", "divRecibo");

        divRecibo.innerText += "Factura: ";

        let paymentList = document.createElement('ul');
        let res = await addPaymentHistory("u0");

        let factura = res[res.length - 1].payment_history;

        let total = 0;
        factura.forEach(product => {
            let productElement = document.createElement('li');
            productElement.classList.add("cart-product");
            productElement.innerText = "Producto: " + product.title + " - " + "Precio: $" + product.price + " - " + "Cantidad: " + product.quantity;
            total += product.price;
            paymentList.appendChild(productElement);
        });

        divRecibo.appendChild(paymentList);
        let spanTotal = document.createElement('span');
        spanTotal.innerText = "Total: $" + total;
        divRecibo.appendChild(spanTotal);

        let buttonFinish = document.createElement('button');
        buttonFinish.innerText = "Aceptar";
        buttonFinish.classList.add("accept-button"); // Agregar clase específica al botón de aceptar
        buttonFinish.style.display = "block";
        buttonFinish.onclick = () => {
            document.querySelector("#divRecibo").style.display = "none";
        };

        divRecibo.appendChild(buttonFinish);
        document.querySelector("#cartElement").appendChild(divRecibo);
    });

    cartElement.appendChild(send_button);

    return cartElement;
}
