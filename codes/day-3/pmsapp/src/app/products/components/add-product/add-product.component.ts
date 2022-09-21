import { Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/models/apiresponse.model';
import { IAppService } from 'src/models/appservice.contract';
import { Product } from 'src/models/product.model';
import { PRODUCTS_SERVICE } from 'src/utils/appconstants';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnDestroy {

  // product: Product = {
  //   productId: 0,
  //   productName: '',
  //   productCode: '',
  //   price: 0,
  //   description: '',
  //   imageUrl: '',
  //   starRating: 0,
  //   releaseDate: ''
  // }
  private addSubscription?: Subscription;
  constructor(@Inject(PRODUCTS_SERVICE) private ps: IAppService<Product>, private router: Router) {

  }
  ngOnDestroy(): void {
    this.addSubscription?.unsubscribe()
  }

  submit(frm: any) {
    if (frm.value) {
      if (confirm('sure to add?')) {
        console.log(frm.value)
        this.addSubscription = this.ps.add(frm.value)
          ?.subscribe({
            next: (resp: ApiResponse<Product[]>) => {
              if (resp.data) {
                alert('added record successfully')
              }
            },
            error: (err) => {
              alert(err.message)
            },
            complete: () => {
              this.router.navigate(['/products'])
            }
          })
      }
    }
  }
}
