import { Inject, Injectable, INJECTOR } from "@angular/core";
import { IAppService } from "src/models/appservice.contract";
import { Product } from "src/models/product.model";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "src/models/apiresponse.model";
import { catchError, map, Observable } from "rxjs";
import { PRODUCTS_API_URL } from "src/utils/appconstants";

// @Injectable({
//     //register at the root level
//     providedIn: 'root'
// })
@Injectable()
export class ProductsService implements IAppService<Product>{

    //private productsApiUrl = 'http://127.0.0.1:3003/products'
    constructor(private http: HttpClient, @Inject(PRODUCTS_API_URL) private productsApiUrl: string) {
        console.log('products service created')
    }
    add(obj: Product): Observable<ApiResponse<Product[]>> | null | undefined {
        return this.http.post<ApiResponse<Product[]>>(this.productsApiUrl, obj)
    }
    update(obj: Product): Observable<ApiResponse<Product[]>> | null | undefined {
        return this.http.put<ApiResponse<Product[]>>(this.productsApiUrl, obj)
    }
    delete(id: number): Observable<ApiResponse<Product[]>> | null | undefined {
        return this.http.delete<ApiResponse<Product[]>>(`${this.productsApiUrl}/${id}`)
    }
    fethAll(): Observable<ApiResponse<Product[]>> | undefined | null {
        //return [...products]
        return this.http.get<ApiResponse<Product[]>>(this.productsApiUrl)
        /*
        const obsResp: Observable<Object> = this.http.get(this.productsApiUrl)
        const obsProducts: Observable<ApiResponse<Product[]>> = obsResp.pipe(
            map(
                function (resp) {
                    return <ApiResponse<Product[]>>resp
                }
            ),
            catchError(
                function (e, resp) {
                    console.log(e)
                    return resp;
                }
            )
        )
        return obsProducts;
        */
    }
    fetchById(id: number): Observable<ApiResponse<Product | null>> | undefined | null {
        return this.http.get<ApiResponse<Product>>(`${this.productsApiUrl}/${id}`)
    }
}