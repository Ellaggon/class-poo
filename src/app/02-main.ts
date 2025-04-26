import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService()

productService.create({
    title: "Product 1",
    price: 100,
    description: "Descripcion del primer producto",
    categoryId: 1,
    images: [],
    slug: "product-1"
})

const products = productService.getAll()
const productId = products[0].id
console.log(products)

productService.update(productId, {
    title: "Product 1 updated"
})

const product = productService.findOne(productId)
console.log(product) 
