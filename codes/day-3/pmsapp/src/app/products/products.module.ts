import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products.service';
import { PRODUCTS_API_URL, PRODUCTS_SERVICE } from 'src/utils/appconstants';
import { HttpClientModule } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { ProductFilterPipe } from './pipes/product-filter.pipe';


@NgModule({
  declarations: [
    ProductsListComponent, ProductFilterPipe
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
    },
    {
      provide: PRODUCTS_API_URL,
      useValue: environment.productsApiUrl
    }
  ]
})
export class ProductsModule {
  constructor() {
    console.log('[Products] module created')
  }
}
