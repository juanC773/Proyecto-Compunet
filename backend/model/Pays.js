import { getProductById } from "../controller/products.js";
import { generateId } from "../util/util.js";

class Pays{
    constructor(){
        this.id = generateId();
        this.payment_history = [];
        this.total;
    }

    addPaymentHistory(cart){
        this.payment_history[this.payment_history.length] = cart
    }


}