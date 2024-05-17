import Product from "../components/Product.js";
import { getProducts } from "../services/ProductServices.js";
export default async function ProductsView() {
    let products = await getProducts();
    let productsContainer = document.createElement('div');
    let title = productsContainer.appendChild(document.createElement('h1'));
    title.textContent = 'Products';
    productsContainer.appendChild(title);
    for (let product of products) {
        let productElement = Product(product);
        productsContainer.appendChild(productElement);
    }
    return productsContainer;
}  