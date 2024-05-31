import { getProductById } from "../controller/products.js";
import { generateId } from "../util/util.js";

class Pays{
    constructor(history){
        this.id = generateId();
        this.payment_history = history;
        this.total;
    }

}

export default Pays;