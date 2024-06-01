import { getProductById } from "../controller/products.js";
import { generateId } from "../util/util.js";

class Pays{
    constructor(id = generateId(), payment_history = []){
        this.id = id;
        this.payment_history = payment_history;
        this.total;
    }

    toJSON() {
        return {
            id: this.id,
            payment_history: this.payment_history,
            total: this.total
        }
    }
}

export default Pays;