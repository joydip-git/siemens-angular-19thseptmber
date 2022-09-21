import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiResponse } from 'src/models/apiresponse.model';
import { IAppService } from 'src/models/appservice.contract';
import { Product } from 'src/models/product.model';
import { PRODUCTS_SERVICE } from 'src/utils/appconstants';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit, OnDestroy {

  loading = true
  errorMessage = ''
  product?: Product;

  // username: FormControl;
  updateFrm?: FormGroup;

  private getSubscription?: Subscription;
  constructor(private route: ActivatedRoute, @Inject(PRODUCTS_SERVICE) private ps: IAppService<Product>) {
    //this.username = new FormControl('enter username here');

  }

  ngOnDestroy(): void {
    this.getSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    //console.log(snapshot.params);
    const id = Number(snapshot.params['id'])
    this.getSubscription = this.ps.fetchById(id)?.subscribe({
      next: (resp: ApiResponse<Product | null>) => {
        if (resp.data !== null) {
          this.product = resp.data
          this.loading = false
          this.errorMessage = ''
        }
      },
      error: (err) => {
        this.product = undefined
        this.loading = false
        this.errorMessage = err.message
      },
      complete: () => {
        this.populateFom()
      }
    })
  }
  populateFom() {
    this.updateFrm = new FormGroup({
      productId: new FormControl(this.product?.productId),
      productName: new FormControl(this.product?.productName),
      productCode: new FormControl(this.product?.productCode),
      description: new FormControl(this.product?.description),
      imageUrl: new FormControl(this.product?.imageUrl),
      releaseDate: new FormControl(this.product?.releaseDate),
      price: new FormControl(this.product?.price),
      starRating: new FormControl(this.product?.starRating),
    })
  }
  submit() {
    if (this.updateFrm?.value) {
      this.ps.update(this.updateFrm?.value)?.subscribe({
        next: (resp: ApiResponse<Product[]>) => {
          if (resp.data) {
            alert('updated')
          }
        },
        error: (err) => {
          alert(err.message)
        },
        complete: () => {

        }
      })
    }
  }
}
