import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/models/product.model";

@Pipe({
    name: 'filterproduct'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        /*
        if (value && value.length > 0 && args && args[0] && args[0] !== '') {
            const criteria = args[0].toLocaleLowerCase()
            const result: Product[] = []
            value.forEach(
                (p: Product) => {
                    const pName = p.productName.toLocaleLowerCase()
                    if (pName.indexOf(criteria) !== -1) {
                        result.push(p)
                    }
                }
            )
            return result
        } else
            return value
            */
        return (value && value.length > 0 && args && args[0] && args[0] !== '') ? value.filter((p: Product) => p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1) : value
    }
}