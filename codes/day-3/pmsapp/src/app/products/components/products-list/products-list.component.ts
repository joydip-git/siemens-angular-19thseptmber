import { Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiResponse } from 'src/models/apiresponse.model';
import { IAppService } from 'src/models/appservice.contract';
import { Product } from 'src/models/product.model';
import { PRODUCTS_SERVICE } from 'src/utils/appconstants';
//import { ProductsService } from '../../services/products.service';

@Component({
  // selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  //providers: [ProductsService]
})
export class ProductsListComponent implements OnDestroy, OnInit {

  searchText = ''
  productsData: Product[] | undefined | null;
  loading = true
  errorMessage = ''
  private productsSubscription?: Subscription;
  // constructor(private ps: ProductsService) {
  //   console.log('[ProductsList] component created')
  // }
  constructor(@Inject(PRODUCTS_SERVICE) private ps: IAppService<Product>) {
    console.log('[ProductsList] component created')
  }

  updateSearchText(updated: string) {
    this.searchText = updated
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //  this.productsData = this.ps.fethAll()
    // }, 2000);

    // setTimeout(
    //   () => {
    const productsObs = this.ps.fethAll()
    this.productsSubscription = productsObs?.subscribe({
      next: (resp: ApiResponse<Product[]>) => {
        this.productsData = resp.data
        this.loading = false
        this.errorMessage = ''
      },
      error: (err) => {
        this.productsData = undefined
        this.loading = false
        this.errorMessage = err.message
      },
      // complete: () => {

      // }
    })
    //   }, 2000
    // )

  }
  ngOnDestroy(): void {
    console.log('[ProductsList] component destroyed')
    this.productsSubscription?.unsubscribe()
  }
}
