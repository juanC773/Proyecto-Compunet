import { getProductById } from "../controller/products.js";
import { generateId } from "../util/util.js";

class Cart {
    constructor() {
        this.id = generateId();
        this.products = {};
    }

    addProduct(product) {
        if(!this.products[product.id]) this.products[product.id] = 0;
        this.products[product.id]++;
    }

    removeProduct(product) {
        this.products[product.id]--;
        if(this.products[product.id] === 0) delete this.products[product.id];
    }

    toJSON() {
        const productList = [];
        for (const productId in this.products) {
            const product = getProductById(productId);
            if(!product) continue;
            const productJSON = product.toJSON();
            productJSON["quantity"] = this.products[productId];
            productList.push(productJSON);
        }
        return {
            id: this.id,
            products: productList
        };
    }
}

export default Cart;