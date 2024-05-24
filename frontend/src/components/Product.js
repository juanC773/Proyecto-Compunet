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

    return container;
}

export default Product;
