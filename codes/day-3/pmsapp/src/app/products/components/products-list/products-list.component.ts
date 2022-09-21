import { Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IAppService } from 'src/models/appservice.contract';
import { Product } from 'src/models/product.model';
import { PRODUCTS_SERVICE } from 'src/utils/appconstants';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  //providers: [ProductsService]
})
export class ProductsListComponent implements OnDestroy, OnInit {

  productsData: Product[] | undefined | null;

  // constructor(private ps: ProductsService) {
  //   console.log('[ProductsList] component created')
  // }
  constructor(@Inject(PRODUCTS_SERVICE) private ps: IAppService<Product>) {
    console.log('[ProductsList] component created')
  }
  ngOnInit(): void {
    // setTimeout(() => {
    this.productsData = this.ps.fethAll()
    // }, 2000);
  }
  ngOnDestroy(): void {
    console.log('[ProductsList] component destroyed')
  }
}
