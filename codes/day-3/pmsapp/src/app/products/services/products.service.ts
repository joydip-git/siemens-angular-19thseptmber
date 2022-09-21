import { Injectable } from "@angular/core";
import { products } from "src/data/products";
import { IAppService } from "src/models/appservice.contract";
import { Product } from "src/models/product.model";

// @Injectable({
//     //register at the root level
//     providedIn: 'root'
// })
export class ProductsService implements IAppService<Product>{

    constructor() {
        console.log('products service created')

    }
    fethAll(): Product[] | undefined | null {
        return [...products]
    }
    fetchById(id: number): Product | undefined | null {
        return null;
    }
    add(obj: Product): boolean {
        return false
    }
    update(obj: Product): boolean {
        return false
    }
    delete(id: number): boolean {
        return false
    }

}