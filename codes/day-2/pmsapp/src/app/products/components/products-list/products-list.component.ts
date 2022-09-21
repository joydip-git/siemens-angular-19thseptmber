import { Component, OnDestroy } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnDestroy {

  //productsData: Product[] = []
  productsData: Product[] = products
  constructor() {
    console.log('[ProductsList] component created')
  }
  ngOnDestroy(): void {
    console.log('[ProductsList] component destroyed')
  }
}
