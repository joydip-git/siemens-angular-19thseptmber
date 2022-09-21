import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from "./components/products-list/products-list.component";

const productRoutes: Routes = [
    {
        path: 'products',
        component: ProductsListComponent
    }]


@NgModule({
    imports: [RouterModule.forRoot(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {

}