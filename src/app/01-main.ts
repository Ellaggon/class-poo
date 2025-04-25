import axios from "axios";
import { Product } from "./models/product.model";

(async ()=> {

    async function getPrducts() {
        const { data } = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products")
        const res = data.map(el => `${el.id} - ${el.title}`)
        return res
    }
    const products = await getPrducts()
    console.log(products)

})()