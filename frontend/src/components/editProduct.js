import { editProduct } from "../services/ProductServices.js";

function Product(product) {
    const container = document.createElement('div');
    container.classList.add('product-container');
    
    // Crear el título y añadirlo al contenedor
    const title = document.createElement('h2');
    title.textContent = product.title;
    title.classList.add('product-title'); // Añadir una clase para estilos
    container.appendChild(title);

    const thumbnail = document.createElement('img');
    thumbnail.src = product.thumbnail;
    thumbnail.alt = product.title;
    container.appendChild(thumbnail);

    const info = document.createElement('div');
    info.classList.add('product-info');
    
    const createInfoElement = (label, value) => {
        const element = document.createElement('p');
        element.innerHTML = `<span class="info-label">${label}:</span> ${value}`;
        return element;
    };

    const category = createInfoElement('Category', product.category);
    info.appendChild(category);

    const description = createInfoElement('Description', product.description);
    info.appendChild(description);

    const price = createInfoElement('Price', `$${product.price}`);
    price.classList.add('price');
    info.appendChild(price);

    const stock = createInfoElement('Stock', product.stock);
    info.appendChild(stock);

    container.appendChild(info);

    // Crear campo de entrada para editar el stock
    const input_stock = document.createElement("input");
    input_stock.setAttribute("type", "number");
    input_stock.setAttribute("id", "input_stock" + product.id);
    input_stock.setAttribute("placeholder", "Type stock");
    input_stock.classList.add('stock-input'); // Agregar clase para estilos
    info.appendChild(input_stock);

    // Crear botón de edición de stock
    const button = document.createElement('button');
    button.textContent = 'Edit Stock';
    button.classList.add('edit-stock-btn'); // Agregar clase para estilos
    button.onclick = () => editProduct(JSON.stringify({id: product.id, stock: document.querySelector("#input_stock" + product.id).value}));
    info.appendChild(button);

    return container;
}

export default Product;
