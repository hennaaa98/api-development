import { Component } from '@angular/core'
import { ProductService } from './product.service';

@Component({
    selector: 'products',
    template:`
        <h2>Products</h2>
        <div *ngFor="let product of products">
            <product [data]="product"></product>
        </div>
    `,
    providers: [ProductService]
    /* <ul>  
            <li *ngFor="let product of products">
            {{product}}
            </li>
        </ul> */
})
export class ProductsComponent{
    /* products=["Learning Angular 2","Pro TypeScript","ASP.NET"]; */

    products;

    constructor(productService:ProductService){
        this.products=productService.getProducts();
    }
}

