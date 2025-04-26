import axios from "axios";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService{
    private apiUrl = "https://api.escuelajs.co/api/v1/products"

    async getAll(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>(this.apiUrl)
        return data
    }
    async create(dto: CreateProductDto) {
        const{ data } = await axios.post(this.apiUrl, dto)
        return data
    }
    async update(id: Product["id"], changes: UpdateProductDto) {
        const { data } = await axios.put(`${this.apiUrl}/${id}`, changes)
        return data
    }
    async findOne(id: Product["id"]): Promise<Product | undefined> {
        const { data } = await axios.get<Product>(`${this.apiUrl}/${id}`)
        return data
    }
}