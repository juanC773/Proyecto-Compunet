import ProductsView from "./layout/ProductsView.js";
import CartView from "./layout/CartView.js";
import AddProductView from "./layout/AddProductView.js";

async function displayView(view) {
    let res = await view();
    const $root = document.querySelector('#root');
    $root.appendChild(res);
}

displayView(ProductsView)
displayView(CartView)
displayView(AddProductView)