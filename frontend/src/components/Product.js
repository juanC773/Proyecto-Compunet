function Product(product) {
    const container = document.createElement('div');
    container.classList.add('product-container');

    const thumbnail = document.createElement('img');
    thumbnail.src = product.thumbnail;
    thumbnail.alt = product.title;
    container.appendChild(thumbnail);

    const title = document.createElement('h2');
    title.textContent = product.title;
    container.appendChild(title);

    const brand = document.createElement('p');
    brand.textContent = `Brand: ${product.brand}`;
    container.appendChild(brand);

    const category = document.createElement('p');
    category.textContent = `Category: ${product.category}`;
    container.appendChild(category);

    const description = document.createElement('p');
    description.textContent = `Description: ${product.description}`;
    container.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `Price: $${product.price}`;
    container.appendChild(price);

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${product.rating}`;
    container.appendChild(rating);

    const stock = document.createElement('p');
    stock.textContent = `Stock: ${product.stock}`;
    container.appendChild(stock);

    const discount = document.createElement('p');
    discount.classList.add('discount');
    discount.textContent = `Discount: ${product.discountPercentage}%`;
    container.appendChild(discount);

    return container;
}

export default Product;
