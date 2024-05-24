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
    

  

    const category = document.createElement('p');
    category.textContent = `Category: ${product.category}`;
    info.appendChild(category);

    const description = document.createElement('p');
    description.textContent = `Description: ${product.description}`;
    info.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `Price: $${product.price}`;
    info.appendChild(price);


    const stock = document.createElement('p');
    stock.textContent = `Stock: ${product.stock}`;
    info.appendChild(stock);


    container.appendChild(info);

    return container;
}

export default Product;
