import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products.service';
import { PRODUCTS_SERVICE } from 'src/utils/appconstants';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
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
