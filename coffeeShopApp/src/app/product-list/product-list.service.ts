import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../product/product.model'
  
@Injectable()
export class ProductListService {
    products : Product[] = [
      {
        name: "Coca Cola",
        price: 6,
        imageUrl: ""
      },
      {
        name: "Fanta",
        price: 6,
        imageUrl: ""
      },
      {
        name: "Sprite",
        price: 6,
        imageUrl: ""
      },
      {
        name: "Simba",
        price: 6,
        imageUrl: ""
      }
    ];
 
    constructor() {}
 
    getProducts() : Observable<Product[]>{
       return of(this.products);
    }
}