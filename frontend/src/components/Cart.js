import { removeProductFromCart, addPaymentHistory } from "../services/CartServices.js";
export default function Cart(cart) {
    let cartElement = document.createElement('div');
    cartElement.classList.add("cart-container"); // Agregar clase específica al contenedor principal
    cartElement.setAttribute("id", "cartElement");

    let cartTitle = document.createElement('h2');
    cartTitle.innerText = "Carrito de Compras";
    cartTitle.classList.add("cart-title"); // Agregar clase específica al título
    cartElement.appendChild(cartTitle);

    let cartList = document.createElement('div'); // Cambiar de ul a div para contenedor principal de productos
    cartList.classList.add("cart-list");
    cartElement.appendChild(cartList);

    cart.products.forEach(product => {
        let productContainer = document.createElement('div'); // Contenedor para cada producto
        productContainer.classList.add("product-container2");

        let productElement = document.createElement('div');
        productElement.classList.add("cart-product");
        productContainer.appendChild(productElement);


        let productInfo = document.createElement('div');
        productInfo.classList.add("product-info2"); 
        productElement.appendChild(productInfo);

        let productName = document.createElement('h3');
        productName.innerText = product.title;
        productInfo.appendChild(productName);

        let productPrice = document.createElement('p');
        productPrice.innerText = "Precio: $" + product.price;
        productInfo.appendChild(productPrice);

        let productQuantity = document.createElement('p');
        productQuantity.innerText = "Cantidad: " + product.quantity;
        productInfo.appendChild(productQuantity);

        const removeButton = document.createElement('button');
        removeButton.textContent = "-";
        removeButton.classList.add("remove-button"); // Agregar clase específica al botón de eliminar
        removeButton.onclick = () => removeProductFromCart("u0", product.id);
        productElement.appendChild(removeButton);

        cartList.appendChild(productContainer);
    });

    // Comprar e historial
    let send_button = document.createElement("button");
    send_button.textContent = "Comprar ahora";
    send_button.classList.add("buy-button"); // Agregar clase específica al botón de compra

    send_button.addEventListener("click", async () => {
        let divRecibo = document.createElement('div');
        divRecibo.setAttribute("class", "divRecibo");
        divRecibo.setAttribute("id", "divRecibo");


        let invoiceTitle = document.createElement('h2');
        invoiceTitle.innerText = "Factura:";
        invoiceTitle.classList.add("invoice-title"); // Agregar clase específica al título de la factura
        divRecibo.appendChild(invoiceTitle);

        let paymentList = document.createElement('ul');
        let res = await addPaymentHistory("u0");

        let factura = res[res.length - 1].payment_history;

        let total = 0;
        factura.forEach(product => {
            let productElement = document.createElement('p');
            productElement.classList.add("cart-product");

            let productName = document.createElement('span');
            productName.innerText = "Producto: " + product.title;
            productElement.appendChild(productName);

            let productPrice = document.createElement('span');
            productPrice.innerText = "Precio: $" + product.price;
            productElement.appendChild(productPrice);

            let productQuantity = document.createElement('span');
            productQuantity.innerText = "Cantidad: " + product.quantity;
            productElement.appendChild(productQuantity);

            paymentList.appendChild(productElement);

            total += product.price * product.quantity;
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
