import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductsListComponent]
})
export class ProductsModule { }
