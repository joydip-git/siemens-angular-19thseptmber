import { products } from "src/data/products";
import { Product } from "src/models/product.model";

export class ProductsService {
    fetchProducts(): Product[] {
        return [...products]
    }
}