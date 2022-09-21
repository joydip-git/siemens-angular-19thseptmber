import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";

const productRoutes: Routes = [
    {
        path: 'products',
        component: ProductsListComponent
    },
    {
        path: 'products/add',
        component: AddProductComponent
    },
    {
        path: 'products/update/:id',
        component: UpdateProductComponent
    }
]


@NgModule({
    imports: [RouterModule.forRoot(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {

}