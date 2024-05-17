import ProductsView from "./layout/ProductsView.js";

async function displayProducts() {
    let res = await ProductsView();
    const $root = document.querySelector('#root');
    $root.appendChild(res);
}

displayProducts()