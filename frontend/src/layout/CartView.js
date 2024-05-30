import { getCart } from "../services/CartServices.js";
import Cart from "../components/Cart.js";

export default async function CartView() {
    let cart = await getCart("u0")
    let cartContainer = document.createElement('div');
    cartContainer.classList.add("cart");

    cartContainer.appendChild(Cart(cart))

    return cartContainer;
}