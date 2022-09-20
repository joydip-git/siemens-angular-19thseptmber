import { Component } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  //productsData: Product[] = []
  productsData: Product[] = products
  constructor() { }

}
