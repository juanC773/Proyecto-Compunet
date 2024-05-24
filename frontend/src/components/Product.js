function Product(product) {
    const container = document.createElement('div');
    container.classList.add('product-container');

    const thumbnail = document.createElement('img');
    thumbnail.src = product.thumbnail;
    thumbnail.alt = product.title;
    container.appendChild(thumbnail);

    const info = document.createElement('div');
    info.classList.add('product-info');
    
    const title = document.createElement('h2');
    title.textContent = product.title;
    info.appendChild(title);

    const brand = document.createElement('p');
    brand.textContent = `Brand: ${product.brand}`;
    info.appendChild(brand);

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

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${product.rating}`;
    info.appendChild(rating);

    const stock = document.createElement('p');
    stock.textContent = `Stock: ${product.stock}`;
    info.appendChild(stock);

    const discount = document.createElement('p');
    discount.classList.add('discount');
    discount.textContent = `Discount: ${product.discountPercentage}%`;
    info.appendChild(discount);

    container.appendChild(info);

    return container;
}

export default Product;