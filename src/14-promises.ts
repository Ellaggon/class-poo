import axios from "axios";

(async ()=> {

    function delay(time: number) {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, time);
        })
        return promise
    }
    console.log("start delay")
    console.log(await delay(3000))
    console.log("finish delay")



    function getProducts() {
        const promise = axios.get("https://api.escuelajs.co/api/v1/products")
        return promise
    }
    const products = await getProducts()
    // console.log(products.data)



    async function getPrductsAsync() {
        const { data } = await axios.get("https://api.escuelajs.co/api/v1/products")
        return data
    }
    const productsAsync = await getPrductsAsync()
    console.log(productsAsync)

})()