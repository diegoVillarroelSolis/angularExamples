import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../product/product.model'
  
@Injectable()
export class ProductListService {
    products : Product[] = [
      {
        id:1,
        name: "Coca Cola 1",
        price: 6,
        imageUrl: ""
      },
      {
        id:2,
        name: "Fanta 2",
        price: 6,
        imageUrl: ""
      },
      {
        id:3,
        name: "Sprite 3",
        price: 6,
        imageUrl: ""
      },
      {
        id:4,
        name: "Simba 4",
        price: 6,
        imageUrl: ""
      }
    ];
 
    constructor() {}
 
    getProducts() : Observable<Product[]>{
       return of(this.products);
    }

    removeProduct(product : Product) : void {
      this.products.splice(this.products.indexOf(product),1);
    }
    
    addProduct(product : Product): void {
      this.products.push(product);
    }
}