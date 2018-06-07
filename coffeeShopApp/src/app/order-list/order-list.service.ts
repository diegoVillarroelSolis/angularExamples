import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../product/product.model'
import { HttpClient  } from '@angular/common/http';
import { Order } from '../order/order.model';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
  
@Injectable()
export class OrderListService {
    //products : Product[] = [];
    order: Order = new Order();

    addProduct(product : Product) : void {
      //this.products.push(product);      
      this.order.addProduct(product);
    }

    removeProduct(product : Product) : void {
      //this.products.splice(this.products.indexOf(product),1);
      this.order.removeProduct(product);
    }
 
    constructor(private http: HttpClient) {}
 
    getProducts() : Observable<Product[]>{
       return of(this.order.getProducts());
    }

    calculateTotalAmount(): number {
      // let total = 0;  
      // this.products.forEach(p => {
      //   total += p.price;
      // });
      // return total;
      let total = 0;  
      this.order.getProducts().forEach(p => {
        total += p.price;
      });
      return total;
    }

    submitOrder(): void{
      if(this.order.getProducts().length>0){
        this.http.post<Order>("http://localhost:57798/api/orders", this.order, httpOptions);
      }
    }
}