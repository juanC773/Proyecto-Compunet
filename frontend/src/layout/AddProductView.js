import { addProduct } from "../services/ProductServices.js";

async function AddProductView() {
    // Create the form element
    let formContainer = document.createElement('div');
    formContainer.classList.add("add-product");
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'http://localhost:3000/products';
    form.enctype = 'multipart/form-data';

    // Create the title input field
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleLabel.appendChild(titleInput);
    
    // Create the category input field
    const categoryLabel = document.createElement('label');
    categoryLabel.textContent = 'Category:';
    const categoryInput = document.createElement('input');
    categoryInput.type = 'text';
    categoryInput.name = 'category';
    categoryLabel.appendChild(categoryInput);
    
    // Create the description input field
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = 'description';
    descriptionLabel.appendChild(descriptionInput);
    
    // Create the price input field
    const priceLabel = document.createElement('label');
    priceLabel.textContent = 'Price:';
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.name = 'price';
    priceLabel.appendChild(priceInput);
    
    // Create the thumbnail input field
    const thumbnailLabel = document.createElement('label');
    thumbnailLabel.textContent = 'Thumbnail:';
    const thumbnailInput = document.createElement('input');
    thumbnailInput.type = 'file';
    thumbnailInput.name = 'thumbnail';
    thumbnailLabel.appendChild(thumbnailInput);
    
    // Add all the input fields to the form
    form.appendChild(titleLabel);
    form.appendChild(categoryLabel);
    form.appendChild(descriptionLabel);
    form.appendChild(priceLabel);
    form.appendChild(thumbnailLabel);
    const button = document.createElement('button');
    button.textContent = 'Añadir producto';
    button.type = 'submit';
    form.appendChild(button);

    // Append the form to the document body
    formContainer.appendChild(form);
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        addProduct(new FormData(form));
    });
    return formContainer;
}

export default AddProductView;