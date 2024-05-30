import ProductsView from "./layout/ProductsView.js";
import CartView from "./layout/CartView.js";
import AddProductView from "./layout/AddProductView.js";
import MainView from "./layout/MainView.js";

async function displayView(view) {
    let res = await view();
    const $root = document.querySelector('#root');
    $root.innerHTML = '';
    $root.appendChild(res);
}

const setRoute = () => {
    console.log(window.location.hash)
    switch (window.location.hash) {
        case '#home':
            displayView(MainView);
            break;
        case '#products':
            displayView(ProductsView);
            break;
        case '#cart':
            displayView(CartView);
            break;
        case '#add-product':
            displayView(AddProductView);
            break;
        default:
            displayView(MainView);
    }
}

window.addEventListener('load', setRoute);
window.addEventListener('hashchange', setRoute);