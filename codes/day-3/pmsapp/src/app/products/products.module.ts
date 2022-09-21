import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products.service';
import { PRODUCTS_SERVICE } from 'src/utils/appconstants';


@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [ProductsListComponent],
  //providers: [ProductsService]
  providers: [
    {
      provide: PRODUCTS_SERVICE,
      useClass: ProductsService
    }
  ]
})
export class ProductsModule {
  constructor() {
    console.log('[Products] module created')
  }
}
