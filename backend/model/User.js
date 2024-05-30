import { encryptPassword } from "../util/util.js";
import Cart from "./Cart.js";

class User {
    constructor({username, password, name}) {
        this.name = name;
        this.username = username;
        this.password = encryptPassword(password);
        this.cart = new Cart();
    }

    editUser({username = null, password = null, name = null}) {
        if(username) this.username = username;
        if(password) this.password = encryptPassword(password);
        if(name) this.name = name;
    }

    addToCart(product) {
        this.cart.addProduct(product);
    }

    removeFromCart(product) {
        this.cart.removeProduct(product);
    
    }

    toJSON() {
        return {
            username: this.username,
            name: this.name,
            cart: this.cart.toJSON(),
        }
    }
}

export default User;