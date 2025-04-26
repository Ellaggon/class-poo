import { ProductHttpService } from "./services/product-http.service"

(async () => {
    const productService = new ProductHttpService()

    console.log("getAll")
    const products = await productService.getAll()
    // console.log(products)
    console.log("---".repeat(10))
    
    console.log("product[0]")
    const product = await productService.findOne(products[0].id)
    console.log(product)
    
    console.log("---".repeat(10))
    const productId = products[0].id
    await productService.update(productId, {
        title: "New title in the product 2",
        slug: "new-title-in-the-product",
        description: "Updated description",
        price: 20000,
        categoryId: 1,
        images: ["https://i.imgur.com/BZrIEmb.jpeg"]
    })
    console.log("product[0] updated")

    console.log("---".repeat(10))
    console.log("product[0]")
    console.log(product)
})()