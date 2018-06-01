import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../product/product.model'
  
@Injectable()
export class OrderListService {
    products : Product[];

    addProduct(product : Product) : void {
      this.products.push(product);
    }

    removeProduct(product : Product) : void {
      this.products.splice(this.products.indexOf(product),1);
    }
 
    constructor() {}
 
    getProducts() : Observable<Product[]>{
       return of(this.products);
    }
}